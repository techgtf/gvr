<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\ProjectSection;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class ProjectSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function sectionlist(){
        $recordsNotInPageTable = DB::table('project_sections_list')
        ->leftJoin('project_sections', 'project_sections_list.id', '=', 'project_sections.section_type')
        ->whereNull('project_sections.section_type')
        ->get();
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success",
            'data'=>$recordsNotInPageTable
        ]);


    }
    public function index(Request $request)
    {
        $search="";
        if(!empty($request->search)){
            $search = $request->search;
        }
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);
        $record = ProjectSection::search($search)->paginate($perPage, ['*'], 'page', $page);
             
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
            'heading' => 'required',
            'project_id' => 'required|exists:projects,id',  
           


            'section_type' => [
                'required','exists:project_sections_list,id',
                Rule::unique('project_sections')->where(function ($query) use ($request) {
                    return $query->where('project_id', $request->project_id)
                                 ->where('section_type', $request->section_type);
                })
            ],
        ],[
            'heading.required' => 'The Name field is required.',
            'description.required' => 'This Field is required',
            'project_id.required' => 'Project  is required',
            'project_id.exists' => 'Project is not exist in record',
            'section_type.required' => 'Section type  is required',
            'section_type.exists' => 'Section type is not exist in record',
            'section_type.unique' => 'Section type alredy exist',
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
                $projectSection = new ProjectSection();
                if($request->hasFile('image')){
                    $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
                    $path = $request->file('image')->storeAs('projectSections', $name, 'public');
                    $projectSection->image = $path;
                }
            
                
                $projectSection->project_id = $request->project_id;
                $projectSection->section_type = $request->section_type;
                $projectSection->heading = $request->heading;
                $projectSection->sub_heading = $request->sub_heading;
      
                $projectSection->image_alt = $request->image_alt;
                $projectSection->description = $request->description;
                
                if($request->seq){

                    $projectSection->seq = $request->seq;
                }
                


                


                if($projectSection->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Added Sucessfully ",
                        'data'=>$projectSection
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failed to add Project-Section"
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
        $result = ProjectSection::find($id);
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
                'statusCode' => 200,
                'message' => "Matching record not found",
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
            'heading' => 'required',
            'description' => 'required'
            
        ],[
            'heading.required' => 'The Name field is required.',
            'description.required' => 'This Field is required',

        ]);
        
        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => $validator->errors(),
            ]); 

        }else{
            $getrecord = ProjectSection::find($id);
            if(!$getrecord){
                return response()->json([
                    'status'=>false,
                    'statusCode'=>500,
                    'message' =>"Invalid Request/ Not Found ",
                ]);
            }
            try{

                if($request->file('image')){
          
                    $imagesurl = $getrecord->image;
                    dltSingleImgFile($imagesurl);
                    
                    $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
                    $path = $request->file('image')->storeAs('projectSections', $name, 'public');
                    $getrecord->image = $path;
                }

                $getrecord->heading = $request->heading;
                $getrecord->sub_heading = $request->sub_heading;
                $getrecord->image_alt = $request->image_alt;
                $getrecord->description = $request->description;
             

                if($request->seq){

                    $getrecord->seq = $request->seq;
                }
                


                if($getrecord->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Updated Project Section Sucessfully ",
                        'data'=>$getrecord
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failde to Update Project Section"
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
        //
    }


    public function showByProjectWithSectionType(Request $request)
    {

        
        $validator = Validator::make($request->all(), 
        [
            'section_type' => 'required|exists:project_sections_list,id', 
            'project_id' => 'required|exists:projects,id', 

        ],
        [
            'section_type.required' => 'This field is required.',
            'section_type.exists' => 'The  Section Type does not exist.',
            'project_id.required' => 'This field is required.',
            'project_id.exists' => 'The  Project  does not exist.',

        ]

        );

    if($validator->fails()){

        return response()->json([
            'status' => true,
            'statusCode' => 403,
            'message' => $validator->errors(),
        ]);

    }

        $result = ProjectSection::where('project_id',$request->project_id)->where('section_type',$request->section_type)->first();
      
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
                'statusCode' => 400,
                'message' => "Matching record not found",
            ]);

        }
    }

    public function ChangeSequence(Request $request){
            try {
                $validator = Validator::make($request->all(), 
                [
                    'section_id' => 'required|exists:project_sections,id', 
                    'seq' => 'required|integer', 
        
                ],
                [
                    'section_id.required' => 'This field is required.',
                    'section_id.exists' => 'The  Section  does not exist.',
                    'seq.required' => 'This field is required.',
                    'seq.integet' => 'Only Integer is allowed',
        
                ]
        
                );
        
                if($validator->fails()){
        
                    return response()->json([
                        'status' => true,
                        'statusCode' => 403,
                        'message' => $validator->errors(),
                    ]);
        
                }
        
                $result = ProjectSection::find($request->section_id);
                if(!$result){
                    return response()->json([
                        'status' => true,
                        'statusCode' => 400,
                        'message' => "Matching record not found",
                    ]);
        
                }
                $result->seq=$request->seq;
                if($result->save()){
                        
                    return response()->json([
                        'status' => true,
                        'statusCode' => 200,
                        'message' => "Sequence Update Successfully",
                        'data' => $result,
                    ]);
                }else{
                    return response()->json([
                        'status' => false,
                        'statusCode' => 500,
                        'message' => "Something went wrong",
                    ]);
                }
                
        
            } catch (\Throwable $th) {
                return response()->json([
                    'status' => false,
                    'statusCode' => 500,
                    'message' => $th->getMessage(),
                ]);
            }

    }

}
