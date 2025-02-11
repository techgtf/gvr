<?php

namespace App\Http\Controllers\Admin\Project;

use App\Http\Controllers\Controller;
use App\Models\Admin\Project\ProjectFaq;
use App\Models\Admin\Project\ProjectFloorPlan;
use App\Models\Admin\Project\ProjectLocation;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class ProjectLocationController extends Controller
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
            'address' => 'required|string',  
            'state' => 'required|exists:states,id',
            'city' => 'required|exists:cities,id',
            'locality' => 'required|exists:localities,id',
        ],[
            'project_id.required' => 'Project  is required',
            'project_id.exists' => 'Project is not exist in record',
            'address.required' => 'Project  is required',
            'state.required' => 'Project  is required',
            'state.exists' => 'Project is not exist in record',
            'city.required' => 'Project  is required',
            'city.exists' => 'Project is not exist in record',
            'locality.required' => 'Project  is required',
            'locality.exists' => 'Project is not exist in record',

        ]);


        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => "success",
                'errors'=>$validator->errors()
            ]); 

        }

        $perPage = $request->input('per_page', 5); // Number of products per page
        $page = $request->input('page', 1); // Current page number
        $amenitis = ProjectFaq::paginate($perPage, ['*'], 'page', $page); 
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
            'address' => 'required|string',  
            'state' => 'required|exists:states,id',
            'city' => 'required|exists:cities,id',
            'locality' => 'required|exists:localities,id',
        ],[
            'project_id.required' => 'Project  is required',
            'project_id.exists' => 'Project is not exist in record',
            'address.required' => 'address  is required',
            'state.required' => 'state  is required',
            'state.exists' => 'state is not exist in record',
            'city.required' => 'city  is required',
            'city.exists' => 'city is not exist in record',
            'locality.required' => 'locality  is required',
            'locality.exists' => 'locality is not exist in record',

        ]);
        if($validator->fails()){
            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => "Please Fill Mandatoryn Fields",
                'errors'=>$validator->errors()
            ]); 
        }else{
            try{
                $checkrecord=ProjectLocation::where('project_id',$request->project_id)->first();
                if(!$checkrecord){
                $faqdata = new ProjectLocation();
                $faqdata->project_id = $request->project_id;
                $faqdata->address = $request->address;
                $faqdata->latitude = $request->latitude;
                $faqdata->longtitude = $request->longtitude;
                $faqdata->state = $request->state;
                $faqdata->city = $request->city;
                $faqdata->locality = $request->locality;
                if($faqdata->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Location  Added Sucessfully ",
                        'data'=>$faqdata
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failed to add faq"
                    ]);
                }
            }
            return response()->json([
                'status'=>true,
                'statusCode'=>403,
                'message'=>"Already Exist"
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

        $faqdata =ProjectLocation::find($id);
        if($faqdata){
            return response()->json([
              'status'=>true,
              'statusCode'=>200,
              'message'=>"success",
              'data'=>$faqdata
              ]);  
        }
        return response()->json([
            'status'=>true,
            'statusCode'=>404,
            'message'=>"success",
        ]); 
    }
    public function getByProject($projectid){
        $projectdata =ProjectLocation::where('project_id',$projectid)->first();
        if($projectdata){
            return response()->json([
              'status'=>true,
              'statusCode'=>200,
              'message'=>"success",
              'data'=>$projectdata
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
            
            'address' => 'required|string',  
            'state' => 'required|exists:states,id',
            'city' => 'required|exists:cities,id',
            'locality' => 'required|exists:localities,id',
        ],[
            
            'address.required' => 'address  is required',
            'state.required' => 'state  is required',
            'state.exists' => 'state is not exist in record',
            'city.required' => 'city  is required',
            'city.exists' => 'city is not exist in record',
            'locality.required' => 'locality  is required',
            'locality.exists' => 'locality is not exist in record',

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
                $location = ProjectLocation::find($id);
                if($location){
                $location->address = $request->address;
                $location->latitude = $request->latitude;
                $location->longtitude = $request->longtitude;
                $location->state = $request->state;
                $location->city = $request->city;
                $location->locality = $request->locality;
                    if($location->save()){              
                        return response()->json([
                            'status'=>true,
                            'statusCode'=>200,
                            'message'=>"Location  Update Sucessfully ",
                            'data'=>$location
                        ]);
                    }else{
                        return response()->json([
                            'status'=>true,
                            'statusCode'=>400,
                            'message'=>"Failed to Update Location"
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
        $getrecord = ProjectFaq::find($id);
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
