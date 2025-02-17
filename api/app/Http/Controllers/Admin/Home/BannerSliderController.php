<?php

namespace App\Http\Controllers\Admin\Home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\Home\BannerSlider;
use Illuminate\Support\Facades\Validator;

class BannerSliderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);
        $record = BannerSlider::paginate($perPage, ['*'], 'page', $page);
             
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$record
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'title' => 'required',
            'desktop_image' => 'required|max:2048',
            'mobile_image' => 'required|max:2048',
        ],[
            'desktop_image.required' => 'This field is required.',
            'mobile_image.required' => 'This field is required',
            'title.required' => 'This field is required',

            
        ]);

       


        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => "success",
                'errors'=>$validator->errors()
            ]); 

        }else{

            try{

                $offer = new BannerSlider();

                if($request->file('desktop_image')){
                    $name = rand(0, 100).now()->timestamp."-{$request->desktop_image->getClientOriginalName()}";
                    $md_image = $request->file('desktop_image')->storeAs('home-banners', $name, 'public');
                    $offer->desktop_image = $md_image;

                }

                if($request->file('mobile_image')){
                    $name = rand(0, 100).now()->timestamp."-{$request->mobile_image->getClientOriginalName()}";
                    $sm_image = $request->file('mobile_image')->storeAs('home-banners', $name, 'public');
                    $offer->mobile_image = $sm_image;

                }

                $offer->image_alt = $request->image_alt;
                $offer->title = $request->title;


                if($offer->save()){
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Add banner Sucessfully ",
                        'data'=>$offer
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failde to add banner"
                    ]);
                }
    
            }catch(\Exception $e){
                return response()->json([
                    'status'=>false,
                    'statusCode'=>500,
                    'message'=>"Something went wrong",
                    'error' => $e->getMessage()
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
        $result = BannerSlider::find($id);
        if(!empty($result)){

            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' => "Get Single Record",
                'data' => $result,
            ]);

        }else{

            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' => "Matching record not found",
            ]);

        }
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
        $getOffer = BannerSlider::find($id);

        if(empty($getOffer)){
            return response()->json([
                'status' => true,
                'statusCode' => 404,
                'message' => "Invalid Offer id",
            ]);
        }

        try{

            $validator = Validator::make($request->all(),
            [
                'title' => 'required',
            ],[
                'title.required' => 'This field is required',
            ]);
    
           
    
    
            if($validator->fails()){
    
                return response()->json([
                    'status' => true,
                    'statusCode' => 403,
                    'message' => "success",
                    'errors'=>$validator->errors()
                ]); 
    
            }
            

            if($request->file('desktop_image')){
                dltSingleImgFile($getOffer->desktop_image);
                $name = rand(0, 100).now()->timestamp."-{$request->desktop_image->getClientOriginalName()}";
                $md_path = $request->file('desktop_image')->storeAs('home-banners', $name, 'public');
                $getOffer->desktop_image = $md_path;
            }

            if($request->file('mobile_image')){
                dltSingleImgFile($getOffer->mobile_image);
                $name = rand(0, 100).now()->timestamp."-{$request->mobile_image->getClientOriginalName()}";
                $sm_path = $request->file('mobile_image')->storeAs('home-banners', $name, 'public');
                $getOffer->mobile_image = $sm_path;
            }

            $getOffer->image_alt = $request->image_alt;
            $getOffer->title = $request->title;


            if($getOffer->save()){
                return response()->json([
                    'status'=>true,
                    'statusCode'=>200,
                    'message'=>"Offer Updated Sucessfully ",
                    'data'=>$getOffer
                ]);
            }else{
                return response()->json([
                    'status'=>true,
                    'statusCode'=>400,
                    'message'=>"Failde to update Offer"
                ]);
            }

        }catch(\Exception $e){
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
                'message'=>"Something went wrong",
                'error' => $e
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = BannerSlider::find($id);

        if($result->desktop_image){
            dltSingleImgFile($result->desktop_image);
        }

        if($result->mobile_image){
            dltSingleImgFile($result->mobile_image);
        }

        if(!empty($result)){
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
                'message' => "Matching record not found",
            ]);

        }
    }
 

    public function status(Request $request, $id)
    {
        $table = [
            'tableName' => 'banner_sliders',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'status',
            'updatecolumnVal' => $request->status
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }

}
