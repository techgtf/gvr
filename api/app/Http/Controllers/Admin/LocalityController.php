<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\Locality;
use Illuminate\Support\Facades\Validator;

class LocalityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function __construct()
     {
        $this->middleware('admin.auth');
     }
     
    public function index(Request $request)
    {
        $search="";
        if(!empty($request->search)){
            $search=$request->search;
        }
        $city_id="";

        if(!empty($request->city_id)){
            $city_id=$request->city_id;
        }
        

        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);
        $localities = Locality::search($search);
        $localities->when($city_id,function($q,$city_id){
            $q->where('city_id',$city_id);
        });
            


        $data=  $localities->paginate($perPage, ['*'], 'page', $page);     
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$data
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
        $validator = Validator::make($request->all(),[
            'locality'=>'required|unique:localities,locality',
            'city_id'=>'required',

        ],[
            'locality.required'=>'City Name is Required',
            'city_id' => 'City Id is Required',
            'locality.unique' => 'City name is already exists'
        ]);

        if($validator->fails()){
            
            return response()->json([
                'status'=>3,
                'statusCode'=>400,
                'message'=>$validator->errors()
            ]);

        }else{


            $record = new Locality();
                $record->locality = $request->locality;
                $record->slug = $request->locality;
                $record->city_id = $request->city_id;

                if($record->save()){
                    return response()->json([
                        'status'=>1,
                        'statusCode'=>200,
                        'message'=>'Locality Added Sucessfully',
                        'data' => $record
                    ]);

                }else{

                    return response()->json([
                        'status'=>0,
                        'statusCode'=>400,
                        'message'=>'Failed to add Locality'
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
        $Record = Locality::find($id);
        if($Record){
            return response()->json([
                'status' => 1,
                'statusCode' => 200,
                'message' => 'Get Single Locality Record',
                'data' => $Record
            ]);
        } else {
            return response()->json([
                'status' => 0,
                'statusCode' => 404,
                'message' => 'Result Not Found'
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
        $validator = Validator::make($request->all(),[
            'locality'=>'required|unique:localities,locality',
            'city_id'=>'required',

        ],[
            'locality.required'=>'City Name is Required',
            'city_id' => 'City Id is Required',
            'locality.unique' => 'City name is already exists'
        ]);

        if($validator->fails()){
            
            return response()->json([
                'status'=>3,
                'statusCode'=>400,
                'message'=>$validator->errors()
            ]);

        }else{


            $record = new Locality();
            $updateRecord = $record->find($id);
            if(!empty($updateRecord)){
                $updateRecord->locality = $request->locality;
                $updateRecord->slug = $request->slug;
                $updateRecord->city_id = $request->city_id;

                if($updateRecord->save()){
                    return response()->json([
                        'status'=>1,
                        'statusCode'=>200,
                        'message'=>'Locality Updated Sucessfully',
                        'data' => $updateRecord
                    ]);

                }else{

                    return response()->json([
                        'status'=>0,
                        'statusCode'=>400,
                        'message'=>'Failed to add Locality'
                    ]);
                }
            } else {
                return response()->json([
                    'status' => 0,
                    'statusCode' => 404,
                    'message' => 'Locality, Page Not Found'
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
        //
    }

    public function status (Request $request, $id)
    {
        $table = [
            'tableName' => 'localities',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'status',
            'updatecolumnVal' => $request->status
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }

}
