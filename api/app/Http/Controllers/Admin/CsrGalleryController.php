<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Admin\CsrGallery;

class CsrGalleryController extends Controller
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
        $record = CsrGallery::paginate($perPage, ['*'], 'page', $page);
             
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
        $validator = Validator::make($request->all(),
        [
            'image' => 'required|nullable|mimes:png,jpg,jpeg,webp|max:2048',
        ],[
            'image.required' => 'The Image field is required.',
            'image.mimes' => 'Invalid Image type only allowed (png, jpg, jpeg, webp)',
            'image.max' => 'The image may not be greater than 2048 kilobytes.',
        ]);

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => 'Fill Mandatory Fields',
                'errors' => $validator->errors(),
            ]); 

        }else{
            try{
                
                $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
                $path = $request->file('image')->storeAs('Gallery', $name, 'public');
                
                $gallery = new CsrGallery();
                $gallery->image = $path;
                $gallery->alt = $request->alt;


                if($gallery->save()){
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Add Gallery Sucessfully ",
                        'data'=>$gallery
                    ]);

                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failed to add CsrGallery"
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
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $result = CsrGallery::find($id);
        if(!empty($result)){
            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'messageg' => 'Get Single Record',                
                'data' => $result,
            ]);
        } else {
            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' => 'Matching Record not found',
            ]);
        }
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
        $validator = Validator::make($request->all(),
        [
            'image' => 'mimes:png,jpg,jpeg,webp|max:2048',
        ],[
            'image.mimes' => 'Invalid Image type only allowed (png, jpg, jpeg, webp)',
            'image.max' => 'The image may not be greater than 2048 kilobytes.',
        ]);

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => 'success',
                'errors' => $validator->errors(),
            ]); 

        }else{

            $getrecord = CsrGallery::find($id);
            
            if(!$getrecord){
                return response()->json([
                    'status'=>false,
                    'statusCode'=>500,
                    'message' =>"Invalid Request/ Not Found ",
                ]);
            }

            try{

                if($request->file('image')){
          
                    $imagesurl = $getrecord->image;
                    dltSingleImgFile($imagesurl);
                    
                    $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
                    $path = $request->file('image')->storeAs('Gallery', $name, 'public');
                    $getrecord->image = $path;
                }

                $getrecord->alt = $request->alt;

                if($getrecord->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Update CsrGallery Sucessfully ",
                        'data'=>$getrecord
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failed to update CsrGallery",
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
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = CsrGallery::find($id);

        if(!empty($result)){

            dltSingleImgFile($result->image);
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
            'tableName' => 'CsrGallery',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'status',
            'updatecolumnVal' => $request->status
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }


}
