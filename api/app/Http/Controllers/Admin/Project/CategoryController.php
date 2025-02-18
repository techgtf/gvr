<?php

namespace App\Http\Controllers\Admin\Project;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Admin\Categories;

class CategoryController extends Controller
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
        $record = Categories::search($search)->paginate($perPage, ['*'], 'page', $page);
             
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
                'name' => 'required|unique:categories,name',
                'thumbnail' => 'required|nullable|mimes:png,jpg,jpeg,webp|max:2048',
                'feature_image' => 'required|nullable|mimes:png,jpg,jpeg,webp|max:2048',

            ],[
                'name.required' => 'The Name field is required.',
                'name.unique' => 'Category Already Exists.',
                'thumbnail.required' => 'The Image field is required.',
                'thumbnail.mimes' => 'Invalid Image type only allowed (png, jpg, jpeg, webp)',
                'thumbnail.max' => 'The image may not be greater than 2048 kilobytes.',
                'feature_image.required' => 'The Image field is required.',
                'feature_image.mimes' => 'Invalid Image type only allowed (png, jpg, jpeg, webp)',
                'feature_image.max' => 'The image may not be greater than 2048 kilobytes.',

            ]
        );

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => $validator->errors(),
            ]);

        }else{
            
            try{
                
                if($request->file('thumbnail')){
                    $name = now()->timestamp.".{$request->thumbnail->getClientOriginalName()}";
                    $thumbnail = $request->file('thumbnail')->storeAs('category', $name, 'public');    
                }

                if($request->file('feature_image')){
                    $name = now()->timestamp.".{$request->feature_image->getClientOriginalName()}";
                    $feature_image = $request->file('feature_image')->storeAs('category', $name, 'public');    
                }

                $categorie = new Categories();
                $categorie->slug = $request->name;
                $categorie->name = $request->name;
                $categorie->thumbnail = $thumbnail;
                $categorie->feature_image = $feature_image;

                if($categorie->save()){           
                       
                    return response()->json([
                        'status' => true,
                        'statusCode' => 200,
                        'message' => "Add Category Sucessfully ",
                        'data' => $categorie,
                    ]);

                }else{
                    return response()->json([
                        'status' => false,
                        'statusCode' => 400,
                        'message' => "Failde to add Category "
                    ]);
                }
    
            }catch(\Exception $e){
                return response()->json([
                    'status' => false,
                    'statusCode' => 500,
                    'message' => "Something went wrong",
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
        $result = Categories::find($id);
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

    public function getDataBySlug($slug)
    {
        $result = Categories::where('slug',$slug)->first();
        if(!empty($result)){

            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' => "Success",
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
                'thumbnail' => 'mimes:png,jpg,jpeg,webp|max:2048',
                'feature_image' => 'mimes:png,jpg,jpeg,webp|max:2048',
                'name' => 'required|unique:categories,name'
            ],[
                'thumbnail.mimes' => 'Invalid Image type only allowed (png, jpg, jpeg, webp)',
                'thumbnail.max' => 'The image may not be greater than 2048 kilobytes.',
                'feature_image.mimes' => 'Invalid Image type only allowed (png, jpg, jpeg, webp)',
                'feature_image.max' => 'The image may not be greater than 2048 kilobytes.',
                'name.required' => 'The Name field is required.',
                'name.unique' => 'Category Already Exists.',
            ]
        );

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => $validator->errors(),
            ]);

        }

        $getrecord = Categories::select('*')->where('id',$id)->first();
        
        if(!$getrecord){
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
               'message' =>"Invalid Request/ Not Found ",
            ]);
        }

        try {
            if($request->file('thumbnail')){
                
                $imagesurl = $getrecord->thumbnail;
                dltSingleImgFile($imagesurl);
                
                $name = now()->timestamp.".{$request->thumbnail->getClientOriginalName()}";
                $path = $request->file('thumbnail')->storeAs('category', $name, 'public');
                $getrecord->thumbnail = $path;
            }

            if($request->file('feature_image')){
                
                $imagesurl = $getrecord->feature_image;
                dltSingleImgFile($imagesurl);
                
                $name = now()->timestamp.".{$request->feature_image->getClientOriginalName()}";
                $path = $request->file('feature_image')->storeAs('category', $name, 'public');
                $getrecord->feature_image = $path;
            }
            
            $getrecord->slug = $request->slug;
            $getrecord->name = $request->name;
            
            if($getrecord->save()){
                return response()->json([
                    'status'=>true,
                    'statusCode'=>200,
                    'message'=>"Updated Sucessfully ",
                    'data'=>$getrecord

                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
                'message'=>"Something went wrong",
                'error' => $th->getMessage()
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
        $result = Categories::find($id);
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
            'tableName' => 'categories',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'status',
            'updatecolumnVal' => $request->status
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }

}
