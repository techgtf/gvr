<?php

namespace App\Http\Controllers\Admin\Platters;

use App\Http\Controllers\Controller;
use App\Models\Admin\Platter\Platter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
class PlatterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $search="";
        if(!empty($request->search)){
            $search = $request->search; 
        }
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);
        $record = Platter::search($search)->with('category','typology','sub_typology','cities')->paginate($perPage, ['*'], 'page', $page);
             
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
            'category' => 'nullable|exists:categories,id',
            'typology' => 'nullable|exists:typologies,id',
            // 'developer' => 'nullable|exists:developers,id',
            'cities' => 'nullable|exists:cities,id',

            'name' => 'required|unique:platters',
          
        ],
            [
                'name.unique' => 'Platter Already Exists',
                'category.required' => 'This field is required.',
                'developer.required' => 'Developer is required.',
                'developer.exists' => 'The selected developer does not exist.',
                'category.exists' => 'The selected category does not exist.',
                'typology.required' => 'This field is required.',
                'typology.exists' => 'The selected typology does not exist.',
                'typology.unique' => 'Record Already exists.',
                'ivr_no.required' => 'Ivr no is required',
                'name.required' => 'Project name is required',
                'cities.required' => 'This field is required.',
                'cities.exists' => 'The selected cities does not exist.',

            ]
        );


        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'errors' => $validator->errors(),
                'message'=>"success"
            ]);

        }

      
        try {
            //code...
            $data=[
                'name'=>$request->name,
                'slug'=>$request->name,
            ];
            if($request->category){
                $data['category']=$request->category;
            }
            // if($request->developer){
            //     $data['developer']=$request->developer;
            // }
            if($request->typology){
                $data['typology']=$request->typology;
            }
            if($request->sub_typology){
                $data['sub_typology']=$request->sub_typology;
            }
            if($request->cities){
                $data['cities']=$request->cities;
            }
    
    
            if($request->type){
                $data['type']=$request->type;
            }
            if($request->meta_title){
                $data['meta_title']=$request->meta_title;
            }
            if($request->meta_keyword){
                $data['meta_keyword']=$request->meta_keyword;
            }
            if($request->meta_description){
                $data['meta_description']=$request->meta_description;
            }
    
            
    
    
            $saverecord=Platter::create($data);
            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' =>"success" ,
                'data'=>$saverecord,
            ]);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'statusCode' => 500,
                'message' =>"false" ,
                'error'=>$th->getMessage(),
            ]);
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
        $saverecord=Platter::find($id);
        if($saverecord){
            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' =>"success" ,
                'data'=>$saverecord,
            ]);
        }

        return response()->json([
            'status' => true,
            'statusCode' => 400,
            'message' =>"not found" ,
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
        //

        
        $validator = Validator::make($request->all(), 
        [
            'category' => 'nullable|exists:categories,id',
            'typology' => 'nullable|exists:typologies,id',
            // 'developer' => 'nullable|exists:developers,id',
            'cities' => 'nullable|exists:cities,id',

            'name' => 'required|unique:platters,name,'.$id, // Add $id here to ignore the current record

          
        ],
            [
                'category.required' => 'This field is required.',
                'developer.required' => 'Developer is required.',
                'developer.exists' => 'The selected developer does not exist.',
                'category.exists' => 'The selected category does not exist.',
                'typology.required' => 'This field is required.',
                'typology.exists' => 'The selected typology does not exist.',
                'typology.unique' => 'Record Already exists.',
                'ivr_no.required' => 'Ivr no is required',
                'name.required' => 'Project name is required',


                'cities.required' => 'This field is required.',
                'cities.exists' => 'The selected cities does not exist.',

            ]
        );



        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'errors' => $validator->errors(),
                'message'=>"success"
            ]);

        }

      
        try {
            $getdata=Platter::find($id);
            if($getdata){
                $getdata->name=$request->name;
                $getdata->slug=$request->name;
            }
            //code...
          
            $getdata->category=null;
            $getdata->cities=null;
            $getdata->typology=null;
            $getdata->sub_typology=null;





            if($request->category){
                $getdata->category=$request->category;
            }
            // if($request->developer){
            //     $getdata->developer=$request->developer;
            // }
            if($request->typology){
                $getdata->typology=$request->typology;
            }
            if($request->sub_typology){
                $getdata->sub_typology=$request->sub_typology;
            }
            if($request->cities){
                $getdata->cities=$request->cities;
            }
    
    
            if($request->type){
                $getdata->type=$request->type;
            }
            if($request->meta_title){
                $getdata->meta_title=$request->meta_title;
            }
            if($request->meta_keyword){
                $getdata->meta_keyword=$request->meta_keyword;
            }
            if($request->meta_description){
                $getdata->meta_description=$request->meta_description;
            }
    
            
    
            if($getdata->save()){
                return response()->json([
                    'status' => true,
                    'statusCode' => 200,
                    'message' =>"success" ,
                    'data'=>$getdata,
                ]);
            }
           
            return response()->json([
                'status' => true,
                'statusCode' => 400,
                'message' =>"failed" ,
            ]);
           

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'statusCode' => 500,
                'message' =>"false" ,
                'error'=>$th->getMessage(),
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
        //
    }

    public function status(Request $request, $id)
    {

        $validator = Validator::make($request->all(), 
        [
            'status' => 'required|in:0,1',
          
        ],
            [
                'status.required' => 'This field is required.',
                'status.in' => 'Only (0,1) is allowed',

            ]
        );


        if($validator->fails()){
            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'errors' => $validator->errors(),
                'message'=>"success"
            ]);
        }
        $table = [
            'tableName' => 'platters',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'status',
            'updatecolumnVal' => $request->status
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }

}
