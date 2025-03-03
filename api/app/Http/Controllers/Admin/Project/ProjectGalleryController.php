<?php

namespace App\Http\Controllers\Admin\Project;

use App\Http\Controllers\Controller;
use App\Models\Admin\Project\ProjectFloorPlan;
use App\Models\Admin\Project\ProjectGallery;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class ProjectGalleryController extends Controller
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





        $result = ProjectGallery::where('project_id',$request->project_id)->orderBy('id','DESC')->paginate($perPage, ['*'], 'page', $page);
             
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
            'type' => 'required|in:image,url,video',  
            'image' => 'required|mimes:png,jpg,jpeg,webp,svg|max:2048',
        ],[
        
            'project_id.required' => 'Project  is required',
            'type.required' => 'type  is required',
            'type.in' => 'only allowed(image,url,video)',

            'project_id.exists' => 'Project is not exist in record',
            'image.max' => 'Maximum image size limit of 2 MB',            
            'image.required' => 'Image  is required',
           
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
                $floorplans = new ProjectGallery();
                if($request->hasFile('image')){
                    $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
                    $path = $request->file('image')->storeAs('project/gallery', $name, 'public');
                    $floorplans->image = $path;
                }
                $floorplans->project_id = $request->project_id;
                $floorplans->alt_text = $request->alt_text;
                $floorplans->type = $request->type;


                if($floorplans->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Gallery Added Sucessfully ",
                        'data'=>$floorplans
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failed to  Gallery"
                    ]);
                }
    
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

        $result =ProjectGallery::find($id);
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
            'image' => 'nullable|mimes:png,jpg,jpeg,webp,svg|max:2048',
            'type' => 'required|in:image,url,video',  
        ],[
            'image.required' => 'Image  is required',
            'type.required' => 'type  is required',
            'type.in' => 'only allowed(image,url,video)',

            'image.max' => 'Maximum image size limit of 2 MB',            
            'image.mimes' => 'Only Allowed  png,jpg,jpeg,webp,svg',           
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
                $result = ProjectGallery::find($id);
                if($result){
                    if($request->hasFile('image')){
                        dltSingleImgFile($result->image);
                        $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
                        $path = $request->file('image')->storeAs('project/gallery', $name, 'public');
                        $result->image = $path;
                    }
                    $result->alt_text = $request->alt_text;
                    $result->type = $request->type;

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
                            'message'=>"Failed to Update Gallery"
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
        $getrecord = ProjectGallery::find($id);
        if($getrecord){
            dltSingleImgFile($getrecord->image);
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
