<?php

namespace App\Http\Controllers\Admin\Project;

use App\Http\Controllers\Controller;
use App\Models\Admin\Project\ProjectPrice;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class PriceController extends Controller
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





        $amenitis = ProjectPrice::with('subTypology')->where('project_id',$request->project_id)->paginate($perPage, ['*'], 'page', $page);
             
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
        
            'project_id' => 'required|exists:projects,id',  
            'sub_typology' => 'required|exists:sub_typologies,id',  
            'price' => 'nullable|integer',  
            'size_type' => 'nullable|integer',  
            'size' => 'nullable|integer',  


        ],[
        
            'project_id.required' => 'Project  is required',
            'project_id.exists' => 'Project is not exist in record',

            
            'sub_typology.required' => 'Sub Tyology  is required',
            'sub_typology.exists' => 'Sub Tyology is not exist in record',
            
            'price.integer' => 'Only Integet is Allowed',
            'size_type.integer' => 'Only Integet is Allowed',
            'size.integer' => 'Only Integet is Allowed',
            
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
                $pricerecord = new ProjectPrice();
               
            
                
                $pricerecord->project_id = $request->project_id;
                $pricerecord->sub_typology = $request->sub_typology;
         

                if($request->size_type){
                    $pricerecord->size_type = $request->size_type;

                    if($request->size_type ==1){
                        $pricerecord->size = measurmentConvert($request->size,1,2);
                    }elseif($request->size_type ==3){
                        $pricerecord->size = measurmentConvert($request->size,3,2);
                    }else{
                        $pricerecord->size = $request->size;
                    }
               
                    
                    
                }
            

                if ($request->price) {
                    $pricerecord->price = $request->price;
                }

              


                if($pricerecord->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Added Sucessfully ",
                        'data'=>$pricerecord
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failed to Pricing"
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
        $floorplan = DB::table('project_prices')
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
        $validator = Validator::make($request->all(),
        [
        
            'sub_typology' => 'required|exists:sub_typologies,id',  
           
        ],[
        
            'sub_typology.required' => 'sub Typology  is required',
            'sub_typology.exists' => 'sub Typology is not exist in record',


            'price.integer' => 'Only Integet is Allowed',
            'size_type.integer' => 'Only Integet is Allowed',
            'size.integer' => 'Only Integet is Allowed',


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
                $pricerecord = ProjectPrice::find($id);

                
                if($pricerecord){
                    
                        if($request->sub_typology){

                            $pricerecord->sub_typology = $request->sub_typology;
                        }
                        if($request->size_type){

                            $pricerecord->size_type = $request->size_type;
                            if(!empty($request->size)){

                            if($request->size_type ==1){
                                $pricerecord->size = measurmentConvert($request->size,1,2);
                            }elseif($request->size_type ==3){
                                $pricerecord->size = measurmentConvert($request->size,3,2);
                            }else{
                                $pricerecord->size = $request->size;
                            }
                        }


                        }
                        if($request->price){

                            $pricerecord->price = $request->price;
    
                        }
                   
                   
    
    
                    if($pricerecord->save()){              
                        return response()->json([
                            'status'=>true,
                            'statusCode'=>200,
                            'message'=>"Update Sucessfully ",
                            'data'=>$pricerecord
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
        $getrecord = ProjectPrice::find($id);
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
            'tableName' => 'project_price',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'status',
            'updatecolumnVal' => $request->status
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }

   



}
