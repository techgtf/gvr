<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\Admin\WorkGallery as WorkGalleryModel;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class WorkGallery extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 10); // Number of products per page
        $page = $request->input('page', 1); // Current page number
 
        $media = WorkGalleryModel::paginate($perPage, ['*'], 'page', $page);
             
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$media
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
        $validator = Validator::make($request->all(), [
            'image' => ['required', 'mimes:png,jpg,jpeg,webp', 'max:2048'],           
            'type' => ['required', 'in:image,video'],
        ], [
            'image.required' => 'This field is required.',
            'image.mimes' => 'Invalid Image type only allowed (png, jpg, jpeg, webp).',
            'image.max' => 'Image size must not exceed 2MB.',
            'type.required' => 'The type field is required.',
            'type.in' => 'Invalid type selected.'
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
                
                $name = now()->timestamp."-{$request->image->getClientOriginalName()}";
                $path = $request->file('image')->storeAs('work-gallery', $name, 'public');
                
                $workculture = new WorkGalleryModel();
                $workculture->image = $path;
                $workculture->alt_tag = $request->alt_tag;
                $workculture->cdn = $request->cdn;
                $workculture->type = $request->type;
                
                if($workculture->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Work Gallery Added Sucessfully ",
                        'data'=>$workculture
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failde to add Work Gallery "
                    ]);
                }
    
            }catch(\Exception $e){
                return response()->json([
                    'status'=>false,
                    'statusCode'=>500,
                    'message'=>"Something went wrong",
                    'error' => $e->getMessage(),
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
        $workculture = WorkGalleryModel::find($id);
        return response()->json([
            'status' => true,
            'statusCode' =>200,
            'message' => 'Get Single Record',
            'data' => $workculture,
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
            'image' => 'nullable|mimes:png,jpg,jpeg,webp|max:2048',
            'type' => 'required|in:image,video',

        ], [
            'image.mimes' => 'Invalid Image type only allowed (png, jpg, jpeg)',
            'image.max' => 'The image may not be greater than 2048 kilobytes.',
            'type.required' => 'This field is required',
            'type.in' => 'Invalid type selected.'
        ]);


        if($validator->fails()){
            return response()->json([
                'status'=>true,
                'statusCode'=>403,
                'message' => "success",
                'errors'=>$validator->errors()->toArray()
            ]);
        }

        try {

            $getrecord = WorkGalleryModel::select('*')->where('id',$id)->first();
            
            if(!$getrecord){
                return response()->json([
                    'status'=>false,
                    'statusCode'=>500,
                    'message' =>"Invalid Request/ Not Found ",
                ]);
            }

        
            if($request->file('image')){
            
                $imagesurl=str_replace(env('ASSET_URL'), "",$getrecord->image);
                dltSingleImgFile($imagesurl);
                
                $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
                $path = $request->file('image')->storeAs('work-gallery', $name, 'public');
                $getrecord->image=$path;
            }

            $getrecord->alt_tag = $request->alt_tag;
            $getrecord->cdn = $request->cdn;
            $getrecord->type = $request->type;

            if($getrecord->save()){
               
                return response()->json([
                    'status' => true,
                    'statusCode' => 200,
                    'message' => "Updated Sucessfully ",
                    'data' => $getrecord
                ]);

            } else  {
                return response()->json([
                    'status' => true,
                    'statusCode' => 200,
                    'message' => "Failed to update",
                ]); 
            }
            
      
        } catch (\Throwable $th) {
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
                'message' =>"Invalid Request/ Not Found ",
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

        $getrecord = WorkGalleryModel::select('*')->where('id',$id)->first();
        
        if(!$getrecord){
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
               'message' =>"Invalid Request/ Not Found ",
            ]);
        }

        dltSingleImgFile($getrecord->image);

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
}
