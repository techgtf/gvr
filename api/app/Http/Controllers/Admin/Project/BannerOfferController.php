<?php

namespace App\Http\Controllers\Admin\Project;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\Project\BannerOffer;
use Illuminate\Http\Resources\Json\ResourceResponse;
use Illuminate\Support\Facades\Validator;

class BannerOfferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search="";
        if(!empty($request->search)){
            $search = $request->search;
        }
        
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);
        $record = BannerOffer::paginate($perPage, ['*'], 'page', $page);
             
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
            'md_image' => 'required|max:2048',
            'sm_image' => 'required|max:2048',
        ],[
            'md_image.required' => 'This field is required.',
            'sm_image.required' => 'This field is required',
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

                $offer = new BannerOffer();

                if($request->file('md_image')){
                    $name = rand(0, 100).now()->timestamp."-{$request->md_image->getClientOriginalName()}";
                    $md_image = $request->file('md_image')->storeAs('offer', $name, 'public');
                    $offer->md_image = $md_image;

                }

                if($request->file('sm_image')){
                    $name = rand(0, 100).now()->timestamp."-{$request->sm_image->getClientOriginalName()}";
                    $sm_image = $request->file('sm_image')->storeAs('offer', $name, 'public');
                    $offer->sm_image = $sm_image;

                }

                $offer->alt = $request->alt;

                if($offer->save()){
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Add Offer Sucessfully ",
                        'data'=>$offer
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failde to add Offer"
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
        $result = BannerOffer::find($id);
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
        $getOffer = BannerOffer::find($id);

        if(empty($getOffer)){
            return response()->json([
                'status' => true,
                'statusCode' => 404,
                'message' => "Invalid Offer id",
            ]);
        }

        try{

            if($request->file('md_image')){
                dltSingleImgFile($getOffer->md_image);
                $name = rand(0, 100).now()->timestamp."-{$request->md_image->getClientOriginalName()}";
                $md_path = $request->file('md_image')->storeAs('offer', $name, 'public');
                $getOffer->md_image = $md_path;
            }

            if($request->file('sm_image')){
                dltSingleImgFile($getOffer->sm_image);
                $name = rand(0, 100).now()->timestamp."-{$request->sm_image->getClientOriginalName()}";
                $sm_path = $request->file('sm_image')->storeAs('offer', $name, 'public');
                $getOffer->sm_image = $sm_path;
            }

            $getOffer->alt = $request->alt;

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
        $result = BannerOffer::find($id);

        if($result->md_image){
            dltSingleImgFile($result->md_image);
        }

        if($result->sm_image){
            dltSingleImgFile($result->sm_image);
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
            'tableName' => 'banner_offers',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'status',
            'updatecolumnVal' => $request->status
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }

}
