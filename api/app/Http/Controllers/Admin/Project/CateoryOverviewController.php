<?php

namespace App\Http\Controllers\Admin\Project;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\CategoryOverview;
use Illuminate\Support\Facades\Validator;


class CateoryOverviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($categoryid, Request $request)
    {
        $search="";
        if(!empty($request->search)){
            $search = $request->search;
        }
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);
        $record = CategoryOverview::where('category_id',$categoryid)->paginate($perPage, ['*'], 'page', $page)->get();
             
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
            'heading' => 'This field is required',
            'description' => 'This field is required',
        ],
            [
                'heading.required' => 'This field is required',
                'description.required' => 'This field is required',
            ]
        );


        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'errors' => $validator->errors(),
                'message'=>"Please Fill Mandatory Fields"
            ]);

        }

      
        try {
            
            $categoryOverview = new CategoryOverview();
            $categoryOverview->heading = $request->heading;
            $categoryOverview->description = $request->description;
            
            if($categoryOverview->save()){
                return response()->json([
                    'status' => true,
                    'statusCode' => 200,
                    'message' =>"success" ,
                    'data'=>$categoryOverview,
                ]);
            } else {
                return response()->json([
                    'status' => true,
                    'statusCode' => 400,
                    'message' =>"Failed to add Category Overview" ,
                ]);
            }
            
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
        $getRecord = CategoryOverview::find($id);
        if($getRecord){
            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' =>"success" ,
                'data'=>$getRecord,
            ]);
        }

        return response()->json([
            'status' => true,
            'statusCode' => 400,
            'message' =>"not found" ,
        ]);
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
            'heading' => 'required',
            'description' => 'required',
        ],
            [
                'heading' => 'This field is required',
                'description' => 'This field is required',
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
            $getdata = CategoryOverview::find($id);
            if($getdata){
                  
                $getdata->heading = $request->heading;
                $getdata->description = $request->description;
                if($getdata->save()){
                    return response()->json([
                        'status' => true,
                        'statusCode' => 200,
                        'message' =>"Updated Successfully" ,
                        'data'=>$getdata,
                    ]);
                }
                return response()->json([
                    'status' => true,
                    'statusCode' => 403,
                    'message' =>"failed to Updated" ,
                ]);
               
            }

           
            return response()->json([
                'status' => true,
                'statusCode' => 400,
                'message' =>"Not Found" ,
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
        $result = CategoryOverview::find($id);
 
        if($result){
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
                'message' => "Record not found",
            ]);

        }
    }
}
