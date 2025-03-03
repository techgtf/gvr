<?php

namespace App\Http\Controllers\Admin\Project;

use App\Http\Controllers\Controller;
use App\Models\Admin\Project\ProjectLocationAdvantage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProjectLocationAdvantageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     private function calculateDistance($lat1, $lon1, $lat2, $lon2) {
        $earthRadius = 6371000; // meters
        $deltaLat = deg2rad($lat2 - $lat1);
        $deltaLon = deg2rad($lon2 - $lon1);
        $a = sin($deltaLat / 2) * sin($deltaLat / 2) +
             cos(deg2rad($lat1)) * cos(deg2rad($lat2)) *
             sin($deltaLon / 2) * sin($deltaLon / 2);
        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));
        $distance = $earthRadius * $c;
        return $distance;
    }

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

        $perPage = $request->input('per_page', 10); // Number of products per page
        $page = $request->input('page', 1); // Current page number
    


      

        $projectlcoationdata = ProjectLocationAdvantage::where('project_id',$request->project_id)->paginate($perPage, ['*'], 'page', $page);
        
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"success ",
            'data'=>$projectlcoationdata
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
       
        $validator = Validator::make($request->all(), [
            'project_id' => 'required|exists:projects,id',
            'type' => 'required',
            'name' => 'required',
            'icons' => 'required|mimes:png,jpg,jpeg,webp,svg|max:2048',

            // Check uniqueness based on both project_id and place_id
        ], [
            'project_id.required' => 'Project is required',
            'distance.required' => 'Distance is required',
            'type.required' => 'Type is required',
            'name.required' => 'name is required',
            'project_id.exists' => 'Project does not exist in the records',
            'icons.max' => 'Maximum icons size limit of 2 MB',
            'icons.required' => 'Icons  is required',
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
                $locationadvantage = new ProjectLocationAdvantage();

                if($request->hasFile('icons')){
                    $name = now()->timestamp.".{$request->icons->getClientOriginalName()}";
                    $path = $request->file('icons')->storeAs('project/location', $name, 'public');
                    $locationadvantage->icons = $path;
                }

                $locationadvantage->project_id = $request->project_id;
                $locationadvantage->type = $request->type;
                if(!empty($request->distance)){

                    $locationadvantage->distance = $request->distance;
                }
                $locationadvantage->name = $request->name;



                if($locationadvantage->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Added Sucessfully ",
                        'data'=>$locationadvantage
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failed to Location Advantage"
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
        //

        $locationdata = ProjectLocationAdvantage::find($id);
        if($locationdata){
            return response()->json([
              'status'=>true,
              'statusCode'=>200,
              'message'=>"success",
              'data'=>$locationdata
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
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $getrecord = ProjectLocationAdvantage::find($id);
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
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
           
            'type' => 'required',
            'name' => 'required',
            'icons' => 'nullable|mimes:png,jpg,jpeg,webp,svg|max:2048',
 
        ], [
            'distance.required' => 'Distance is required',
            'type.required' => 'Type is required',
            'name.required' => 'name is required',
            'project_id.exists' => 'Project does not exist in the records',
            'icons.max' => 'Maximum icons size limit of 2 MB',            
            'icons.mimes' => 'Only Allowed  png,jpg,jpeg,webp,svg',           
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
                $locationadvantage = ProjectLocationAdvantage::find($id);
                if($locationadvantage){
                    if($request->hasFile('icons')){
                        dltSingleImgFile($locationadvantage->icons);
                        $name = now()->timestamp.".{$request->icons->getClientOriginalName()}";
                        $path = $request->file('icons')->storeAs('project/specification', $name, 'public');
                        $locationadvantage->icons = $path;
                    }
                    $locationadvantage->type = $request->type;
                    if(!empty($request->distance)){

                        $locationadvantage->distance = $request->distance;
                    }
                    $locationadvantage->name = $request->name;
                    if($locationadvantage->save()){              
                        return response()->json([
                            'status'=>true,
                            'statusCode'=>200,
                            'message'=>"locationadvantage Update Sucessfully ",
                            'data'=>$locationadvantage
                        ]);
                    }else{
                        return response()->json([
                            'status'=>true,
                            'statusCode'=>400,
                            'message'=>"Failed to Update Highlight"
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
                    'error' => $e->getMessage(),
                ]);
            }
        }
    }
  
}
