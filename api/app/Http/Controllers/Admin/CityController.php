<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Locality;
use Illuminate\Http\Request;
use App\Models\Admin\City;
use Illuminate\Support\Facades\Validator;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     
    public function index(Request $request)
    {
        $search="";
        $state="";

        if(!empty($request->search)){
            $search=$request->search;
        }

        if(!empty($request->state)){
            $state=$request->state;
        }
        
        
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);
        $cities = City::search($search);

        $cities->when($state,function($q, $state){
            $q->where('state_id',$state);
        });

        $data = $cities->paginate($perPage, ['*'], 'page', $page);
       
             
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
            'city'=>'required|unique:cities,city',
            'state_id'=>'required',

        ],[
            'city.required'=>'City Name is Required',
            'state_id' => 'State Id is Required',
            'city.unique' => 'City name is already exists'
        ]);

        if($validator->fails()){
            
            return response()->json([
                'status'=>3,
                'statusCode'=>400,
                'message'=>$validator->errors()
            ]);

        }else{


            $record = new City();
           
                $record->city = $request->city;
                $record->slug = $request->city;
                $record->state_id = $request->state_id;

                if($record->save()){
                    return response()->json([
                        'status'=>1,
                        'statusCode'=>200,
                        'message'=>'City Created Sucessfully',
                        'data' => $record
                    ]);

                }else{

                    return response()->json([
                        'status'=>0,
                        'statusCode'=>400,
                        'message'=>'Failed to add City'
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
        $Record = City::find($id);
        
        if($Record){
            return response()->json([
                'status' => 1,
                'statusCode' => 200,
                'message' => 'Get Single City Record',
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
            'city'=>'required|unique:cities,city',
            'state_id'=>'required',

        ],[
            'city.required'=>'City Name is Required',
            'state_id' => 'State Id is Required',
            'city.unique' => 'City name is already exists'
        ]);

        if($validator->fails()){
            
            return response()->json([
                'status'=>3,
                'statusCode'=>400,
                'message'=>$validator->errors()
            ]);

        }else{


            $record = new City();
            $updateRecord = $record->find($id);
            if(!empty($updateRecord)){
                $updateRecord->city = $request->city;
                $updateRecord->slug = $request->slug;
                $updateRecord->state_id = $request->state_id;

                if($updateRecord->save()){
                    return response()->json([
                        'status'=>1,
                        'statusCode'=>200,
                        'message'=>'City Updated Sucessfully',
                        'data' => $updateRecord
                    ]);

                }else{

                    return response()->json([
                        'status'=>0,
                        'statusCode'=>400,
                        'message'=>'Failed to add City'
                    ]);
                }
            } else {
                return response()->json([
                    'status' => 0,
                    'statusCode' => 404,
                    'message' => 'City, Page Not Found'
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


    public  function getLocalityByCity($city){
        $locality=Locality::where('city_id',$city)->get();
        return response()->json([
            'status'=>1,
            'statusCode'=>200,
            'message'=>'Success',
            'data' => $locality,
        ]);
    }

    public function popular(Request $request, $id)
    {
        $table = [
            'tableName' => 'cities',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'is_popular',
            'updatecolumnVal' => $request->is_popular
        ];
       

        $record = City::find($id);
        if(!$record){
            return response()->json([
                'status' => 0,
                'statusCode' => 404,
                'message' => 'City Not Found'
            ]);
        }
        $result = updateSingleRecord($table);
        return $result;
    }

}
