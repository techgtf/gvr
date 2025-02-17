<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Admin\BlogCategory;
use Illuminate\Validation\Rule;

class BlogCategoryController extends Controller
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
            $search=$request->search;
        }
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);
        $record = BlogCategory::search($search)->paginate($perPage, ['*'], 'page', $page);
             
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$record
        ]);
 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $result = BlogCategory::find($id);
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

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), 
        [
            'name' => ['required',
                Rule::unique('blog_categories')
                    ->where(function ($query) use ($request) {
                    $query->where('name', $request->name)
                        ->WhereNull('deleted_at');
                })
            ]
            
        ],[
            'name.required' => 'The Name field is required.',
            'name.unique' => 'Category Already Exists.',
        ]);

        
        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => $validator->errors(),
            ]);

        }else{
            try{
                $record = BlogCategory::withTrashed()
                ->where('name', $request->name)
                ->first();
                if (!$record) {
                    $categorie = new BlogCategory();
                    $categorie->slug = $request->name;
                    $categorie->name = $request->name;
                    if($categorie->save()){ 
                        return response()->json([
                            'status' => true,
                            'statusCode' => 200,
                            'message' => "Add Blog Category Sucessfully ",
                            'data' => $categorie,
                        ]);

                    }else{
                        return response()->json([
                            'status' => false,
                            'statusCode' => 400,
                            'message' => "Failde to add Category "
                        ]);
                    }
                }else{
                    if ($record->trashed()) {
                        $record->restore(); 
    
                        return response()->json([
                            'status' => true,
                            'statusCode' => 200,
                            'message' => "Add Sucessfully ",
                            'data' => $record,
                        ]);
                    }
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
            'name' => 'required|unique:categories,name'
        ],[
            'name.required' => 'The Name field is required.',
            'name.unique' => 'Category Already Exists.',
        ]);

        
        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => $validator->errors(),
            ]);

        }

        $getrecord = BlogCategory::select('*')->where('id',$id)->first();
        
        if(!$getrecord){
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
               'message' =>"Invalid Request/ Not Found ",
            ]);
        }

      
        
        $getrecord->slug = $request->name;
        $getrecord->name = $request->name;
        
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
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    
    public function destroy($id)
    {
        $result = BlogCategory::find($id);
        if(!empty($result)){
            if($result->delete()){

       
            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' => "Record Deleted",
                'data' => $result,
            ]);     }

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
            'tableName' => 'blog_categories',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'status',
            'updatecolumnVal' => $request->status
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }

}
