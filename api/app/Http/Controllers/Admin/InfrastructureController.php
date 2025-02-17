<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Admin\Infrastructure;
use Illuminate\Validation\Rule;

class InfrastructureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    
    public function __construct()
    {
        $this->middleware('admin.auth');
    }


    public function index(Request $request)
    {

        $search="";
        if(!empty($request->search)){
            $search = $request->search; 
        }
        
        $perPage = $request->input('per_page', 10); // Number of products per page
        $page = $request->input('page', 1); // Current page number

        // Fetch products with pagination

        $amenitis = Infrastructure::search($search)->paginate($perPage, ['*'], 'page', $page);
             
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$amenitis
        ]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator=Validator::make($request->all(),[
            'image' => 'required|mimes:png,jpg,jpeg,webp|max:2048',
            'title' => 'required|unique:infrastructures,title',
            'value' => 'required',

        ],
        [
            'image.required' => 'The image field is required.',
            'image.mimes' => 'Invalid Image type only aloowed (png,jpg,jpeg)',
            'title.required' => 'The title field is required.',
            'title.unique' => 'infrastructure Already Exists.',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>true,
                'statusCode'=>403,
                'message' => "success",
                'errors'=>$validator->errors()->toArray()
            ]);


        

        }else{
            try{
                
                $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
                $path = $request->file('image')->storeAs('infra-icon', $name, 'public');
                $amenitiesdata=new Infrastructure();
                $amenitiesdata->icons=$path;
                $amenitiesdata->title=$request->title;
                $amenitiesdata->value=$request->value;


                if($amenitiesdata->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Infrastructure Added Sucessfully ",
                        'data'=>$amenitiesdata
                ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failde to add Infrastructure "
                ]);
                }
    
            }catch(\Exception $e){
                return response()->json([
                    'status'=>false,
                    'statusCode'=>500,
                    'message'=>$e
                ]);
            }
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
        $amities=Infrastructure::find($id);
          return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"success",
            'data'=>$amities
            ]);
    }


    public function statusUpdate(Request $request)
    {
        //

        $validator=Validator::make($request->all(),[
            'status' => 'required|integer',
            'eid' => 'required|integer'

        ],
            [
                'status.required' => 'Status field is required.',
                'eid.required' => 'The project field is required.',
            ]
        );

        if($validator->fails()){
            return response()->json([
                'status'=>true,
                'statusCode'=>403,
               'message' => $validator->errors()->toArray(),
            ]);
        }



        $amities=Infrastructure::find($request->eid);
        if($amities){
            $amities->status=$request->status;
            if($amities->save()){
                return response()->json([
                    'status'=>true,
                    'statusCode'=>200,
                    'message'=>"success",
                    'data'=>$amities
                    ]);
            }
            return response()->json([
                'status'=>true,
                'statusCode'=>400,
                'message'=>"failed",
                ]);


        }
        return response()->json([
            'status'=>false,
            'statusCode'=>404,
            'message'=>"server error",
            ]);
         
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'image' => 'nullable|mimes:png,jpg,jpeg|max:2048',
            'title' => ['required',Rule::unique('infrastructures')->ignore($request->id)],
            'value' => ['required']

        ], [
            'image.mimes' => 'Invalid Image type only allowed (png, jpg, jpeg)',
            'image.max' => 'The image may not be greater than 2048 kilobytes.',
            'title.required' => 'The title field is required.',
            'title.unique' => 'infrastructures Already Exists.',
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>true,
                'statusCode'=>403,
                'message' => "success",
                'errors'=>$validator->errors()->toArray()
            ]);
        }
        $getrecord=Infrastructure::select('*')->where('id',$id)->first();
        
        if(!$getrecord){
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
               'message' =>"Invalid Request/ Not Found ",
            ]);
        }

      
        if($request->file('image')){
          
            $imagesurl=str_replace(env('ASSET_URL'), "",$getrecord->icons);
            dltSingleImgFile($imagesurl);
            
            $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
            $path = $request->file('image')->storeAs('Infrastructure-icon', $name, 'public');
            $getrecord->icons=$path;
        }
        $getrecord->title=$request->title;
        $getrecord->value=$request->value;

        if($getrecord->save()){
            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Updated Sucessfully ",
                'data'=>$getrecord

            ]);
        }

        return response()->json([
            'status'=>false,
            'statusCode'=>500,
           'message' =>"Invalid Request/ Not Found ",
        ]);
        // return $getrecord;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       
        $getrecord=Infrastructure::select('*')->where('id',$id)->first();
        
        if(!$getrecord){
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
               'message' =>"Invalid Request/ Not Found ",
            ]);
        }

         dltSingleImgFile($getrecord->icons);

         if($getrecord->delete()){
            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Deleted Sucessfully ",
                'data'=>$getrecord

            ]);
         }
         return response()->json([
            'status'=>false,
            'statusCode'=>500,
           'message' =>"Invalid Request/ Not Found ",
        ]);
        
    }


    public function status(Request $request, $id)
    {
        $table = [
            'tableName' => 'infrastructures',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'status',
            'updatecolumnVal' => $request->status
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }


}
