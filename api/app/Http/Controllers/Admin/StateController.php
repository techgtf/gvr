<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\City;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Admin\State;

class StateController extends Controller
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
        $countries = State::search($search)->paginate($perPage, ['*'], 'page', $page);
             
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$countries
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
         
        $validator=Validator::make($request->all(),[
            'state'=>'required|unique:states,state',
            'country_id'=>'required',

        ],[
            'state.required'=>'State Name is Required',
            'country_id.required' => 'Select Your Country.',
           
        ]);

        if($validator->fails()){
            
            return response()->json([
                'status'=>3,
                'statusCode'=>400,
                'message'=>$validator->errors()
            ]);

        }else{


            $staterecord = new State();
            $staterecord->state = $request->state;
            $staterecord->slug = $request->slug;
            $staterecord->country_id = $request->country_id;

            if($staterecord->save()){
                return response()->json([
                    'status'=>1,
                    'statusCode'=>200,
                    'message'=>'State Addedd Sucessfully'
                ]);

            }else{

                return response()->json([
                    'status'=>0,
                    'statusCode'=>400,
                    'message'=>'Failed to add states'
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
        $stateRecord = State::find($id);
        if($stateRecord){
            return response()->json([
                'status' => 1,
                'statusCode' => 200,
                'message' => 'Get Single Record',
                'data' => $stateRecord
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
            'state'=>'required|unique:states,state',
            'country_id'=>'required',

        ],[
            'state.required'=>'State Name is Required',
            'country_id' => 'Counntry Id is Required',
            'state.unique' => 'State name is already exists'
        ]);

        if($validator->fails()){
            
            return response()->json([
                'status'=>3,
                'statusCode'=>400,
                'message'=>$validator->errors()
            ]);

        }else{


            $staterecord = new State();
            $updateRecord = $staterecord->find($id);
            if(!empty($updateRecord)){
                $updateRecord->state = $request->state;
                $updateRecord->slug = $request->slug;
                $updateRecord->country_id = $request->country_id;

                if($updateRecord->save()){
                    return response()->json([
                        'status'=>1,
                        'statusCode'=>200,
                        'message'=>'State Updated Sucessfully',
                        'data' => $updateRecord,
                    ]);

                }else{

                    return response()->json([
                        'status'=>0,
                        'statusCode'=>400,
                        'message'=>'Failed to add state'
                    ]);
                }
            } else {
                return response()->json([
                    'status' => 0,
                    'statusCode' => 404,
                    'message' => 'State, Page Not Found'
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
    public function  getCityByState($id){
        $citydata=City::where('state_id',$id)->get();




        return response()->json([
            'status'=>1,
            'statusCode'=>200,
            'message'=>'Success',
            'data' => $citydata,
        ]);
    }
}
