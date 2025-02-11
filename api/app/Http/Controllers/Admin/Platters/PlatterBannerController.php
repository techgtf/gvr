<?php

namespace App\Http\Controllers\Admin\Platters;

use App\Http\Controllers\Controller;
use App\Models\Admin\Platter\Platter;
use App\Models\Admin\Platter\PlatterBanner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
class PlatterBannerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($platterid)
    {
        $record = PlatterBanner::where('platter_id',$platterid)->get();
             
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success",
            'data'=>$record
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       
      
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,$platterid)
    {
        $validator = Validator::make($request->all(), 
        [
            'desktop_image' => 'required|file|mimes:jpeg,png,webp|max:2048', // Adjust the MIME types and maximum size as per your requirements
            'mobile_image' => 'required|file|mimes:jpeg,png,webp|max:2048', // Adjust the MIME types and maximum size as per your requirements
            'alt_text' => 'required',
        ],
            [
                'desktop_image.required' => 'Desktop Image is Required',
                'desktop_image.mimes' => 'Only Allowed (jpeg,png,webp)',
                'desktop_image.max' => 'Image size less than 1 Mb',
                'mobile_image.required' => 'Mobile  Image is Required',
                'mobile_image.mimes' => 'Only Allowed (jpeg,png,webp)',
                'mobile_image.max' => 'Image size less than 1 Mb',
                'alt_text.required' => 'This field is required',
            ]
        );


        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'errors' => $validator->errors(),
                'message'=>"Please Fill Mandatory Fields"
            ]);

        }

      
        try {
            //code...
            $desktop_image="";
            if($request->hasFile('desktop_image')){
                $name = now()->timestamp.".{$request->desktop_image->getClientOriginalName()}";
                $desktop_image = $request->file('desktop_image')->storeAs('platter/banners', $name, 'public');
            }
            $mobile_image="";
            if($request->hasFile('mobile_image')){
                $name = now()->timestamp.".{$request->mobile_image->getClientOriginalName()}";
                $mobile_image = $request->file('mobile_image')->storeAs('platter/banners', $name, 'public');
            }
            $data=[
                'desktop_image'=>$desktop_image,
                'mobile_image'=>$mobile_image,
                'platter_id'=>$platterid,

                'alt_text'=>$request->alt_text
            ];

            
    
    
            $saverecord=PlatterBanner::create($data);
            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' =>"success" ,
                'data'=>$saverecord,
            ]);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'statusCode' => 500,
                'message' =>"false" ,
                'error'=>$th->getMessage(),
            ]);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($platterid,$id)
    {
        //
        $saverecord=PlatterBanner::find($id);
        if($saverecord){
            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' =>"success" ,
                'data'=>$saverecord,
            ]);
        }

        return response()->json([
            'status' => true,
            'statusCode' => 400,
            'message' =>"not found" ,
        ]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $platterid,$id)
    {
        //

        $validator = Validator::make($request->all(), 
        [
            'desktop_image' => 'nullable|file|mimes:jpeg,png,webp|max:2048', // Adjust the MIME types and maximum size as per your requirements
            'mobile_image' => 'nullable|file|mimes:jpeg,png,webp|max:2048', // Adjust the MIME types and maximum size as per your requirements
            'alt_text' => 'required',
        ],
            [
                'desktop_image.mimes' => 'Only Allowed (jpeg,png,webp)',
                'desktop_image.max' => 'Image size less than 1 Mb',
                'mobile_image.mimes' => 'Only Allowed (jpeg,png,webp)',
                'mobile_image.max' => 'Image size less than 1 Mb',
                'alt_text.required' => 'This field is required',
            ]
        );

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'errors' => $validator->errors(),
                'message'=>"success"
            ]);

        }

      
        try {
            $getdata=PlatterBanner::find($id);
            if($getdata){
                if($request->hasFile('desktop_image')){
                    $name = now()->timestamp.".{$request->desktop_image->getClientOriginalName()}";
                    $desktop_image = $request->file('desktop_image')->storeAs('platter/banners', $name, 'public');
                     dltSingleImgFile($getdata->desktop_image);
    
                    $getdata->desktop_image=$desktop_image;
                }
                $mobile_image="";
                if($request->hasFile('mobile_image')){
                    $name = now()->timestamp.".{$request->mobile_image->getClientOriginalName()}";
                    $mobile_image = $request->file('mobile_image')->storeAs('platter/banners', $name, 'public');
                    dltSingleImgFile($getdata->mobile_image);
    
                    $getdata->mobile_image=$mobile_image;
    
                }
        
                
                $getdata->alt_text=$request->alt_text;   
                if($getdata->save()){
                    return response()->json([
                        'status' => true,
                        'statusCode' => 200,
                        'message' =>"Updated Successfully" ,
                        'data'=>$getdata,
                    ]);
                }
                return response()->json([
                    'status' => true,
                    'statusCode' => 403,
                    'message' =>"failed to Updated" ,
                ]);
               
            }

           
           
            return response()->json([
                'status' => true,
                'statusCode' => 400,
                'message' =>"Not Found" ,
            ]);
           

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'statusCode' => 500,
                'message' =>"false" ,
                'error'=>$th->getMessage(),
            ]);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($platterid,$id)
    {
        $result = PlatterBanner::find($id);

     


        if($result){
            dltSingleImgFile($result->desktop_image);
            dltSingleImgFile($result->mobile_image);
            if($result->delete()){
       
                return response()->json([
                    'status' => true,
                    'statusCode' => 200,
                    'message' => "Record Deleted",
                    'data' => $result,
                ]);     
            }

            return response()->json([
                'status' => true,
                'statusCode' => 500,
                'message' => "faild to delete records",
            ]);


        }else{

            return response()->json([
                'status' => true,
                'statusCode' => 404,
                'message' => "Record not found",
            ]);

        }
    }

 
    public function status(Request $request, $id)
    {

        $validator = Validator::make($request->all(), 
        [
            'status' => 'required|in:0,1',
          
        ],
            [
                'status.required' => 'This field is required.',
                'status.in' => 'Only (0,1) is allowed',

            ]
        );


        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'errors' => $validator->errors(),
                'message'=>"success"
            ]);

        }
   


        $table = [
            'tableName' => 'platters',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'status',
            'updatecolumnVal' => $request->status
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }   


    public function footerStatus (Request $request, $id)
    {
        $validator = Validator::make($request->all(), 
        [
            'type' => 'required',
          
        ],[
            'type.required' => 'This field is required.',
                
        ]);


        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'errors' => $validator->errors(),
                'message'=>"success"
            ]);

        }
   


        $table = [
            'tableName' => 'platters',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'type',
            'updatecolumnVal' => $request->type
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }


}
