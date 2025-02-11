<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\Career;
use Illuminate\Support\Facades\Validator;

class CareerController extends Controller
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
        $record = Career::search($search)->paginate($perPage, ['*'], 'page', $page);
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
            'destination' => 'required',
            'address' => 'required',
            'experience_id' => 'required',
            'job_timing' => 'required|integer',
            'short_description' => 'required',
            'description' => 'required'
            
        ],[
            'address.required' => 'This field is required',
            'destination.required' => 'This field is required',
            'experience_id.required' => 'This field is required',
            'job_timing.required' => 'This field is required',
            'short_description.required' => 'This field is required',
            'description.required' => 'This field is required'
        ]);

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => "Please fill all mandatory fields",
                'errors'=>$validator->errors()
            ]); 

        }else{
            try{
                
                $record = new Career();
                $record->experience_id = $request->experience_id;
                $record->job_timing = $request->job_timing;
                $record->destination = $request->destination;
                $record->address = $request->address;
                $record->short_description = $request->short_description;
                $record->description = $request->description;
                $record->slug = $request->destination;



                if($record->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Add Enquiry Sucessfully ",
                        'data'=>$record
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failde to add Blog"
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
        $result = Career::find($id);
        try {
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
                    'statusCode' => 404,
                    'message' => "Matching record not found",
                ]);
    
            }
        } catch (\Throwable $error) {
            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => "Something went wrong",
                'error' => $error->getMessage()
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
 
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
            'destination' => 'required',
            'experience_id' => 'required',
            'job_timing' => 'required|integer',
            'short_description' => 'required',
            'description' => 'required',
            'address' => 'required'
            
        ],[
            'destination.required' => 'This field is required',
            'experience_id.required' => 'This field is required',
            'job_timing.required' => 'This field is required',
            'short_description.required' => 'This field is required',
            'description.required' => 'This field is required',
            'address.required' => 'This field is required'
        ]);

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => "Please fill all mandatory fields",
                'errors'=>$validator->errors()
            ]); 

        }else{

            $getrecord = Career::find($id);
            
            if(!$getrecord){
                return response()->json([
                    'status'=>false,
                    'statusCode'=>500,
                    'message' =>"Invalid Request/ Not Found ",
                ]);
            }

            try{
                
                $getrecord->experience_id = $request->experience_id;
                $getrecord->job_timing = $request->job_timing;
                $getrecord->destination = $request->destination;
                $getrecord->address = $request->address;
                $getrecord->short_description = $request->short_description;
                $getrecord->description = $request->description;

                $getrecord->slug = $request->destination;




                if ($getrecord->save()) {              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Update Job Application Sucessfully ",
                        'data'=>$getrecord
                    ]);
                } else {
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failde to update job application"
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
        $result = Career::find($id);

        try {
            if(!empty($result)){
                if($result->delete()){
           
                    return response()->json([
                        'status' => true,
                        'statusCode' => 200,
                        'message' => "Record Deleted",
                        'data' => $result,
                    ]);     
                }
    
                return response()->json([
                    'status' => true,
                    'statusCode' => 500,
                    'message' => "faild to delete records",
                ]);
    
    
            } else{
                return response()->json([
                    'status' => true,
                    'statusCode' => 500,
                    'message' => "Matching record does not found",
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status' => true,
                'statusCode' => 404,
                'message' => "Matching record not found",
            ]);
        }
    }


    public function status (Request $request, $id)
    {
 
        $table = [
            'tableName' => 'job_applications',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'status',
            'updatecolumnVal' => $request->status
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }

}
