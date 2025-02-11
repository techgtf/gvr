<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Admin\PagesFAQ;

class PagesFaqController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $type = "";
        if(!empty($request->type)){
            $type = $request->type;
        }

        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);

        $record = PagesFAQ::when($type, function ($query) use ($type) {
            return $query->where('type', $type);
        })->paginate($perPage, ['*'], 'page', $page);

        return response()->json([
            'status' => true,
            'statusCode' => 200,
            'messaeg' => 'Get Matching Record',
            'data' => $record
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
            'question' => 'required',
            'answer' => 'required',
            'type' => 'required',
        ],[
            'question.required' => 'The question field is required.',
            'answer.required' => 'The answer field is required.',
            'type.required' => 'This Field is required.',
          
        ]);

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => 'Fill Mandatory Fields',
                'errors' => $validator->errors(),
            ]); 

        }else{
            try{
                                 
                $team = new PagesFAQ();
                $team->question = $request->question;
                $team->answer = $request->answer;
                $team->type = $request->type;
            
                if($team->save()){
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Add $request->type Sucessfully ",
                        'data'=>$team
                    ]);

                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failed to add $request->type"
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
        $result = PagesFAQ::find($id);
        if(!empty($result)){
            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'messageg' => 'Get Single Record',                
                'data' => $result,
            ]);
        } else {
            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' => 'Matching Record not found',
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
            'question' => 'required',
            'answer' => 'required',
            'type' => 'required',
        
        ],[
            'question.required' => 'The question field is required.',
            'answer.required' => 'This Field is required',
            'type.required' => 'This Field is required.',
        ]);

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => 'success',
                'errors' => $validator->errors(),
            ]); 

        }else{

            $getrecord = PagesFAQ::find($id);
            
            if(!$getrecord){
                return response()->json([
                    'status'=>false,
                    'statusCode'=>500,
                    'message' =>"Invalid Request/ Not Found ",
                ]);
            }

            try{
 
                $getrecord->question = $request->question;
                $getrecord->answer = $request->answer;
                $getrecord->type = $request->type;
                
                if($getrecord->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Update $request->type Sucessfully ",
                        'data'=>$getrecord
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failed to update $request->type"
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
        $result = PagesFAQ::find($id);

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
        $table = [
            'tableName' => 'pages_faqs',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'status',
            'updatecolumnVal' => $request->status
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }
    
    public function typeupdate(Request $request, $id)
    {
        $table = [
            'tableName' => 'pages_faqs',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'type',
            'updatecolumnVal' => $request->type
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }
    
}
