<?php

namespace App\Http\Controllers\Admin\Project;

use App\Http\Controllers\Controller;
use App\Models\Admin\Project\ProjectFloorPlan;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class FloorPlanController extends Controller
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
        
            'project_id' => 'required|exists:projects,id',  
        ],[
        
            'project_id.required' => 'Project  is required',
            'project_id.exists' => 'Project is not exist in record',
        ]);


        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => "Please Fill Mandatory fields",
                'errors'=>$validator->errors()
            ]); 

        }

        $perPage = $request->input('per_page', 5); // Number of products per page
        $page = $request->input('page', 1); // Current page number

        // Fetch products with pagination





        $amenitis = ProjectFloorPlan::with('subTypology')->where('project_id',$request->project_id)->paginate($perPage, ['*'], 'page', $page);
             
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
       
        $validator = Validator::make($request->all(), [
            'project_id' => 'required|exists:projects,id',
            'sub_typology' => 'nullable|exists:sub_typologies,id',
            'type' => 'required',
            'price' => 'numeric',  
            'size' => 'numeric',  
            'carpet_area' => 'numeric',  
            'balcony_area' => 'numeric',  
            'super_area' => 'numeric',  
            'size_type' => 'numeric',
            'build_up_area' => 'numeric',
        ], [
            'project_id.required' => 'Project is required',
            'project_id.exists' => 'Project does not exist in records',
        
            'type.required' => 'Type field is required',
        
            'sub_typology.required' => 'Sub Typology is required',
            'sub_typology.exists' => 'Sub Typology does not exist in records',
        
            'price.numeric' => 'Only numeric values are allowed',
            'size.numeric' => 'Only numeric values are allowed',
            'carpet_area.numeric' => 'Only numeric values are allowed',
            'balcony_area.numeric' => 'Only numeric values are allowed',
            'super_area.numeric' => 'Only numeric values are allowed',
            'size_type.numeric' => 'Only numeric values are allowed',
            'build_up_area.numeric' => 'Only numeric values are allowed',
        ]);
        


        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => "Please Fill Mandatory Fields",
                'errors'=>$validator->errors()
            ]);

        }else{
            try{
                $floorplans = new ProjectFloorPlan();
                if($request->hasFile('image')){
                    $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
                    $path = $request->file('image')->storeAs('project/floor-plans', $name, 'public');
                    $floorplans->image = $path;
                }
            
                
                $floorplans->project_id = $request->project_id;
                $floorplans->type = $request->type;
                $floorplans->sub_typology = $request->sub_typology;
                $floorplans->more_typology = $request->more_typology;
                $floorplans->price = $request->price;
                $floorplans->size  = $request->size;
                $floorplans->carpet_area = $request->carpet_area;
                $floorplans->balcony_area = $request->balcony_area;
                $floorplans->super_area = $request->super_area;
                $floorplans->sizes_type = $request->size_type;
                $floorplans->build_up_area = $request->build_up_area;
                
          
                if($floorplans->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Added Sucessfully ",
                        'data'=>$floorplans
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failed to Floor Plans"
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
        //

        $floorplan = DB::table('project_floor_plans')
                ->select('*')
                ->where('id', $id)
                ->first();
     
        if($floorplan){
        
            return response()->json([
              'status'=>true,
              'statusCode'=>200,
              'message'=>"success",
              'data'=>$floorplan
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
        $validator = Validator::make($request->all(), [
            'sub_typology' => 'nullable|exists:sub_typologies,id',
            'type' => 'required',
            'price' => 'numeric',  
            'size' => 'numeric',  
            'carpet_area' => 'numeric',  
            'balcony_area' => 'numeric',  
            'super_area' => 'numeric',  
            'size_type' => 'numeric',
            'build_up_area' => 'numeric',
        ], [
            'project_id.required' => 'Project is required',
            'project_id.exists' => 'Project does not exist in records',
        
            'type.required' => 'Type field is required',
        
            'sub_typology.required' => 'Sub Typology is required',
            'sub_typology.exists' => 'Sub Typology does not exist in records',
        
            'price.numeric' => 'Only numeric values are allowed',
            'size.numeric' => 'Only numeric values are allowed',
            'carpet_area.numeric' => 'Only numeric values are allowed',
            'balcony_area.numeric' => 'Only numeric values are allowed',
            'super_area.numeric' => 'Only numeric values are allowed',
            'size_type.numeric' => 'Only numeric values are allowed',
            'build_up_area.numeric' => 'Only numeric values are allowed',

        ]);
        
        


        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => "Please Fill Mandatory Fields",
                'errors'=>$validator->errors()
            ]); 

        } 
            
        try{
            $floorplans = ProjectFloorPlan::find($id);

            if($floorplans){
                if($request->hasFile('image')){
                    dltSingleImgFile($floorplans->image);
                    $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
                    $path = $request->file('image')->storeAs('project/floor-plans', $name, 'public');
                    $floorplans->image = $path;
                }
            
                    if($request->sub_typology){

                        $floorplans->sub_typology = $request->sub_typology;
                    }

                    if($request->size_type){

                        $floorplans->sizes_type = $request->size_type;
                        if(!empty($request->size)){                                    
                            $floorplans->size = $request->size;
                        }

                        if(!empty($request->carpet_area)){
                            $floorplans->carpet_area = $request->carpet_area;                               
                        }

                        if(!empty($request->balcony_area)){
                            $floorplans->balcony_area = $request->balcony_area; 
                        }

                        if(!empty($request->super_area)){
                            $floorplans->super_area = $request->super_area;
                        }

                    }

                    if($request->price){
                        $floorplans->price = $request->price;
                    }
                    
                    if($request->more_typology) {
                        $floorplans->more_typology = $request->more_typology;
                    }

                    if($request->type){
                        $floorplans->type = $request->type;
                    }

                    if($request->build_up_area){
                        $floorplans->build_up_area = $request->build_up_area;
                    }
                    
                if($floorplans->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Update Sucessfully ",
                        'data'=>$floorplans
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failed to Update Floor Plans"
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
                'error' => $e->getMessage(),
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
        $getrecord = ProjectFloorPlan::find($id);
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

    public function status(Request $request, $id)
    {


        $validator = Validator::make($request->all(),
        [
        
            'status' => 'required|integer',  
           
        ],[
            'status.required' => 'Status is  required',

        ]);

        if($validator->fails()){
            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => "Please Fill Mandatory Fields",
                'errors'=>$validator->errors()
            ]); 
        }
        $table = [
            'tableName' => 'project_floor_plans',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'status',
            'updatecolumnVal' => $request->status
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }

    public function MakeProtected(Request $request, $id)
    {


        $validator = Validator::make($request->all(),
        [
        
            'protected' => 'required|integer',  
           
        ],[
            'protected.required' => 'protected is  required',

        ]);

        if($validator->fails()){
            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => "Please Fill Mandatory Fields",
                'errors'=>$validator->errors()
            ]); 
        }
        $table = [
            'tableName' => 'project_floor_plans',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'protected',
            'updatecolumnVal' => $request->protected
        ];
    
        
        $result = updateSingleRecord($table);
        return $result;
    }


    // protected



}
