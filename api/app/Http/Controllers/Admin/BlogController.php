<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Admin\Blog;
use Psr\Http\Message\ResponseInterface;

class BlogController extends Controller
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
        $record = Blog::search($search)->paginate($perPage, ['*'], 'page', $page);
             
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
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
            'heading' => 'required',
            'image' => 'required|nullable|mimes:png,jpg,jpeg,webp|max:2048',
            'thumbnail' => 'required|nullable|mimes:png,jpg,jpeg,webp|max:2048',
            'short_description' => 'required',
            'description' => 'required',
            
        ],[
            'heading.required' => 'The Name field is required.',
            'image.required' => 'The Image field is required.',
            'image.mimes' => 'Invalid Image type only allowed (png, jpg, jpeg, webp)',
            'image.max' => 'The image may not be greater than 2048 kilobytes.',
            'thumbnail.required' => 'The Image field is required.',
            'thumbnail.mimes' => 'Invalid Image type only allowed (png, jpg, jpeg, webp)',
            'thumbnail.max' => 'The image may not be greater than 2048 kilobytes.',
            'short_description.required' => "This Field is required",
            'description.required' => 'This Field is required',
        ]);

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => 'success',
                'errors' => $validator->errors(),
            ]); 

        }else{
            try{
                $blogdat = new Blog();
                
                if($request->file('image')){
                    $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
                    $path = $request->file('image')->storeAs('blog', $name, 'public');
                    $blogdat->image = $path;
                }
                
                if($request->file('thumbnail')){
                    $name = now()->timestamp.".{$request->thumbnail->getClientOriginalName()}";
                    $lispath = $request->file('thumbnail')->storeAs('blog', $name, 'public');
                    $blogdat->thumbnail = $lispath;
                }
                
       
                $blogdat->slug = $request->heading;
                $blogdat->heading = $request->heading;
                $blogdat->short_description = $request->short_description;
                $blogdat->description = $request->description;
                
                if($blogdat->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Add Blog Sucessfully ",
                        'data'=>$blogdat
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failde to add Blog"
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

        $result = Blog::find($id);
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
            
            'heading' => 'required',
            'image' => 'nullable|mimes:png,jpg,jpeg, webp|max:2048',
            'thumbnail' => 'nullable|mimes:png,jpg,jpeg, webp|max:2048',
            'short_description' => 'required',
            'description' => 'required',
            
        ],[
            'heading.required' => 'The Name field is required.',
            'image.mimes' => 'Invalid Image type only allowed (png, jpg, jpeg, webp)',
            'image.max' => 'The image may not be greater than 2048 kilobytes.',
            'thumbnail.mimes' => 'Invalid Image type only allowed (png, jpg, jpeg, webp)',
            'thumbnail.max' => 'The image may not be greater than 2048 kilobytes.',
            'short_description.required' => "This Field is required",
            'description.required' => 'This Field is required',
             
        ]);

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => 'success',
                'errors' => $validator->errors(),
            ]);

        }else{

            $getrecord = Blog::find($id);
            
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
                    $path = $request->file('image')->storeAs('blog', $name, 'public');
                    $getrecord->image = $path;
                }

                if($request->file('thumbnail')){
          
                    $imagesurl = $getrecord->thumbnail;
                    dltSingleImgFile($imagesurl);
                    
                    $name = now()->timestamp.".{$request->thumbnail->getClientOriginalName()}";
                    $path = $request->file('thumbnail')->storeAs('blog', $name, 'public');
                    $getrecord->thumbnail = $path;
                }

                $getrecord->slug = $request->heading;
                $getrecord->heading = $request->heading;
                $getrecord->short_description = $request->short_description;
                $getrecord->description = $request->description;
                
                if($getrecord->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Updated Blog Sucessfully ",
                        'data'=>$getrecord
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failde to Update Blog"
                    ]);
                }
    
            }catch(\Exception $e){
                return response()->json([
                    'status'=>false,
                    'statusCode'=>500,
                    'message'=>"Something went wrong",
                    // 'error' => $e
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
        $result = Blog::find($id);

        dltSingleImgFile($result->image);
        dltSingleImgFile($result->thumbnail);

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
            'tableName' => 'blogs',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'status',
            'updatecolumnVal' => $request->status
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }

}
