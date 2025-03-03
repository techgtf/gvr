<?php

namespace App\Http\Controllers\Admin\Typology;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Admin\Typology\SubTypology;
use Illuminate\Validation\Rule;

class SubTypologiesController extends Controller
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
        $perPage = $request->input('per_page',10);
        $page = $request->input('page', 1);
        $record = SubTypology::search($search)->where('status',1)->paginate($perPage, ['*'], 'page', $page);
             
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
            'typology' => ['required',
                Rule::unique(table: 'sub_typologies')
                    ->where(function ($query) use ($request) {
                    $query->where('typology', $request->name)
                        ->WhereNull('deleted_at');
                })
            ]
            
        ]



        ,[
            'typology.required' => 'The Name field is required.',
            'typology.unique' => 'This Typology is Already Exists',
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
                
                $record = SubTypology::withTrashed()
                ->where('typology', $request->typology)
                ->first();
                if (!$record) {
                    $typology = new SubTypology();
                        $typology->slug = $request->typology;
                        $typology->typology = $request->typology;

                        if($typology->save()){              
                            return response()->json([
                                'status'=>true,
                                'statusCode'=>200,
                                'message'=>"Add Typology Sucessfully ",
                                'data'=>$typology
                            ]);
                        }else{
                            return response()->json([
                                'status'=>true,
                                'statusCode'=>400,
                                'message'=>"Failde to add Blog"
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
        $result = SubTypology::find($id);
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
        $validator = Validator::make($request->all(),
        [
            'typology' => 'required|unique:sub_typologies,typology',
        ],[
            'typology.required' => 'The Name field is required.',
            'typology.unique' => 'This Typology is Already Exists',
        ]);

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => "success",
                'errors'=>$validator->errors()
            ]); 

        }else{
            
            $getrecord = SubTypology::find($id);
            
            if(!$getrecord){
                return response()->json([
                    'status'=>false,
                    'statusCode'=>500,
                    'message' =>"Invalid Request/ Not Found ",
                ]);
            }

            try{
                 
                $getrecord->slug = $request->typology;
                $getrecord->typology = $request->typology;

                if($getrecord->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Typology Updated Sucessfully ",
                        'data'=>$getrecord
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failde to Updated Typology"
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
        $getrecord = SubTypology::find($id);
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
}
