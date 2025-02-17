<?php

namespace App\Http\Controllers\Admin\Project;

use App\Http\Controllers\Controller;
use App\Models\Admin\Project\ProjectBanner;
use App\Models\Admin\Project\ProjectFloorPlan;
use App\Models\Admin\Project\ProjectGallery;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class ProjectBannerController extends Controller
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

        $perPage = $request->input('per_page', 5); // Number of products per page
        $page = $request->input('page', 1); // Current page number

        // Fetch products with pagination





        $result = ProjectBanner::where('project_id',$request->project_id)->orderBy('id','DESC')->paginate($perPage, ['*'], 'page', $page);
             
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$result
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
            'desktop_image' => 'required|mimes:png,jpg,jpeg,webp,svg|max:2048',
            'mobile_image' => 'nullable|mimes:png,jpg,jpeg,webp,svg|max:2048',

        ],[
        
            'project_id.required' => 'Project  is required',
            'project_id.exists' => 'Project is not exist in record',
            'desktop_image.max' => 'Maximum image size limit of 2 MB',            
            'desktop_image.required' => 'Desktop Image  is required',
            'mobile_image.max' => 'Maximum image size limit of 2 MB',            
            'mobile_image.required' => 'Mobile Image  is required',
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
                $floorplans = new ProjectBanner();
                if($request->hasFile('desktop_image')){
                    $name = now()->timestamp.".{$request->desktop_image->getClientOriginalName()}";
                    $path = $request->file('desktop_image')->storeAs('project/banners', $name, 'public');
                    $floorplans->desktop_image = $path;
                }


                if($request->hasFile('mobile_image')){
                    $name = now()->timestamp.".{$request->mobile_image->getClientOriginalName()}";
                    $path = $request->file('mobile_image')->storeAs('project/banners', $name, 'public');
                    $floorplans->mobile_image = $path;
                }
                $floorplans->project_id = $request->project_id;
                $floorplans->alt_text = $request->alt_text;

                if($floorplans->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Banner Added Sucessfully ",
                        'data'=>$floorplans
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failed to Add  Banner"
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

        $result =ProjectBanner::find($id);
        if($result){
            return response()->json([
              'status'=>true,
              'statusCode'=>200,
              'message'=>"success",
              'data'=>$result
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
        
            'desktop_image' => 'nullable|mimes:png,jpg,jpeg,webp,svg|max:2048',
            'mobile_image' => 'nullable|mimes:png,jpg,jpeg,webp,svg|max:2048',

        ],[
        
            'desktop_image.max' => 'Maximum image size limit of 2 MB',            
            'desktop_image.required' => 'Desktop Image  is required',
            'mobile_image.max' => 'Maximum image size limit of 2 MB',            
            'mobile_image.required' => 'Mobile Image  is required',
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
                $result = ProjectBanner::find($id);
                if($result){
                    if($request->hasFile('desktop_image')){
                        dltSingleImgFile($result->desktop_image);
                        $name = now()->timestamp.".{$request->desktop_image->getClientOriginalName()}";
                        $path = $request->file('desktop_image')->storeAs('project/banner', $name, 'public');
                        $result->desktop_image = $path;
                    }

                    if($request->hasFile('mobile_image')){
                        dltSingleImgFile($result->mobile_image);
                        $name = now()->timestamp.".{$request->mobile_image->getClientOriginalName()}";
                        $path = $request->file('mobile_image')->storeAs('project/banner', $name, 'public');
                        $result->mobile_image = $path;
                    }

                    $result->alt_text = $request->alt_text;
                    if($result->save()){              
                        return response()->json([
                            'status'=>true,
                            'statusCode'=>200,
                            'message'=>"Update Sucessfully ",
                            'data'=>$result
                        ]);
                    }else{
                        return response()->json([
                            'status'=>true,
                            'statusCode'=>400,
                            'message'=>"Failed to Update Banner"
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
        $getrecord = ProjectBanner::find($id);
        if($getrecord){
            dltSingleImgFile($getrecord->desktop_image);
            dltSingleImgFile($getrecord->mobile_image);

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
