<?php

namespace App\Http\Controllers\Admin\Project;

use App\Http\Controllers\Controller;
use App\Models\Admin\Project\ProjectSpecificationList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProjectSpecificationListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $validator = Validator::make($request->all(),
        [
        
            'spec_id' => 'required|exists:projects,id',
        ],[
        
            'spec_id.required' => 'Project  is required',
            'spec_id.exists' => 'Project is not exist in record',
        ]);


        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => "success",
                'errors'=>$validator->errors()
            ]); 

        }

        $perPage = $request->input('per_page', 5); // Number of products per page
        $page = $request->input('page', 1); // Current page number
        $amenitis = ProjectSpecificationList::where('spec_id',$request->project_id)->paginate($perPage, ['*'], 'page', $page); 
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

        $validator = Validator::make($request->all(),
        [
            'spec_id' => 'required|exists:projects,id',  
            'title' => 'required',
            'value' => 'required',

        ],[
        
            'spec_id.required' => 'Project  is required',
            'spec_id.exists' => 'Project is not exist in record',
            'title' => 'This field is required',
            'value' => 'This field is required',

        ]);


        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => "Please Fill Mandatoryn Fields",
                'errors'=>$validator->errors()
            ]); 

        }else{
            try{
                $specificationlist = new ProjectSpecificationList();
                $specificationlist->spec_id = $request->spec_id;
                $specificationlist->title = $request->title;
                $specificationlist->value = $request->value;
                if($specificationlist->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Specification List Added Sucessfully ",
                        'data'=>$specificationlist
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failed to add Highlight"
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
        //
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $specificationlist = ProjectSpecificationList::find($id);
     
        if($specificationlist){
        
            return response()->json([
              'status'=>true,
              'statusCode'=>200,
              'message'=>"success",
              'data'=>$specificationlist
              ]);  
        }

        return response()->json([
            'status'=>true,
            'statusCode'=>404,
            'message'=>"success",
        ]); 
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
        
            'title' => 'required',  
            'value' => 'required',  

        ],[
            'title' => 'This field is required',
            'value' => 'This field is required',
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
                $Specificationlist = ProjectSpecificationList::find($id);
                if($Specificationlist){
                    $Specificationlist->title = $request->title;
                    $Specificationlist->value = $request->value;
                    if($Specificationlist->save()){              
                        return response()->json([
                            'status'=>true,
                            'statusCode'=>200,
                            'message'=>"Specification List Update Sucessfully",
                            'data'=>$Specificationlist
                        ]);
                    }else{
                        return response()->json([
                            'status'=>true,
                            'statusCode'=>400,
                            'message'=>"Failed to Update Specification List"
                        ]);
                    }
                }
                return response()->json([
                    'status'=>true,
                    'statusCode'=>404,
                    'message'=>"Not found"
                ]);
                
    
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
        $getrecord = ProjectSpecificationList::find($id);
        if($getrecord){
            if($getrecord->delete()){
                return response()->json([
                    'status'=>true,
                    'statusCode'=>200,
                    'message'=>"Record Deleted ",
                    'data'=>$getrecord
                ]);
            }
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
                'message'=>"Sometnign went wrong",
            ]);
    
        } return response()->json([
            'status'=>true,
            'statusCode'=>404,
            'message'=>"not found",
        ]);
      
    }


    public function keyhighlightupdate(Request $request, $id)
    {
        $table = [
            'tableName' => 'project_highlights',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'key_highlight',
            'updatecolumnVal' => $request->status
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }
}
