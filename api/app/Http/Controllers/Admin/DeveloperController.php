<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\Developer;
use Illuminate\Support\Facades\Validator;

class DeveloperController extends Controller
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
        $record = Developer::search($search)->select('developers.*','developer as name')->paginate($perPage, ['*'], 'page', $page);
             
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
            'developer' => 'required|unique:developers,developer',
            'image' => 'required|nullable|mimes:png,jpg,jpeg,webp|max:2048',
            'description' => 'required',
          
            
        ],[
            'developer.required' => 'The Name field is required.',
            'developer.unique' => 'Developer Name is Already Exists',
            'image.required' => 'The Image field is required.',
            'image.mimes' => 'Invalid Image type only allowed (png, jpg, jpeg,webp)',
            'image.max' => 'The image may not be greater than 2048 kilobytes.',
            'description.required' => 'This Field is required',

        ]);

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' =>"Sucess",
                'errors' => $validator->errors(),
            ]); 

        }else{
            try{
                
                $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
                $path = $request->file('image')->storeAs('developer', $name, 'public');
                
                $developer = new Developer();
                $developer->slug = $request->developer;
                $developer->developer = $request->developer;
                $developer->logo = $path;
                $developer->mobile = $request->mobile;
                $developer->address = $request->address;
                $developer->rera = $request->rera;
                $developer->description = $request->description;


                if($developer->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Add Developer Sucessfully ",
                        'data'=>$developer
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failed to add Developer"
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
        $result = Developer::find($id);
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
            'developer' => 'required',
            'description' => 'required',
            'image' => 'nullable|mimes:png,jpg,jpeg,webp|max:2048',

          
            
        ],[
            'developer.required' => 'The Name field is required.',
            'description.required' => 'This Field is required',
            'image.mimes' => 'Invalid Image type only allowed (png, jpg, jpeg,webp)',


        ]);
        
        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' =>"Success",
                'errors'=>$validator->errors()
            ]); 

        }else{

            $getrecord = Developer::find($id);
            
            if(!$getrecord){
                return response()->json([
                    'status'=>false,
                    'statusCode'=>500,
                    'message' =>"Invalid Request/ Not Found ",
                ]);
            }

            try{

                if($request->file('image')){
          
                    $imagesurl = $getrecord->logo;
                    dltSingleImgFile($imagesurl);
                    
                    $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
                    $path = $request->file('image')->storeAs('developer', $name, 'public');
                    $getrecord->logo = $path;
                }

                $getrecord->slug = $request->developer;
                $getrecord->developer = $request->developer;
                $getrecord->mobile = $request->mobile;
                $getrecord->address = $request->address;
                $getrecord->rera = $request->rera;
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
                    'error' => $e
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

        $result = Developer::find($id);

        if(!empty($result)){

            dltSingleImgFile($result->logo);

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

        $validator = Validator::make($request->all(),
        [
            'status' => 'required|integer',
           
          
            
        ],[
            'status.required' => 'The Status field is required.',

        ]);

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' =>"Sucess",
                'errors' => $validator->errors(),
            ]); 

        }
        $table = [
            'tableName' => 'developers',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'status',
            'updatecolumnVal' => $request->status
        ];
        $result = updateSingleRecord($table);
        return $result;
    }



    public function IsPopular(Request $request, $id)
    {

        $validator = Validator::make($request->all(),
        [
            'is_popular' => 'required|integer',
           
          
            
        ],[
            'is_popular.required' => 'The Is popular field is required.',

        ]);

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' =>"Sucess",
                'errors' => $validator->errors(),
            ]); 

        }
        $table = [
            'tableName' => 'developers',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'is_popular',
            'updatecolumnVal' => $request->is_popular
        ];
        $result = updateSingleRecord($table);
        return $result;
    }

}
