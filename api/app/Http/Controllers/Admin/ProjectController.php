<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Projects;
use File;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $search="";
        if(!empty($request->search)){
            $search = $request->search; 
        }
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);
        $record = Projects::search($search)->with('developer','category','typologie');

        $record->when($request->category, function($q, $category){
            $q->where('categorie_id', $category);
        });

        
        $result=$record->paginate($perPage, ['*'], 'page', $page);
             
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
    public function create(Request $request)
    {
     
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
                'categorie_id' => 'required|exists:categories,id',
                'typologie_id' => 'required|exists:typologies,id',
                'image' => 'required|mimes:png,jpg,jpeg,webp|max:2048',
                'thumbnail' => 'required|mimes:png,jpg,jpeg,webp|max:2048',
                'name' => [
                    'required',
                    Rule::unique('projects')
                    ->where(function ($query) use ($request) {
                        $query->where('categorie_id', $request->categorie_id)
                        ->WhereNull('deleted_at'); // Include soft-deleted records
                    })
                ],
                
                // 'developer_id' => 'required|exists:developers,id',
                // 'brochure' => 'nullable|mimes:pdf|max:4096',
                // 'ivr_no' => 'nullable|integer',
                // 'project_status' => 'required|integer',            


            ],
                [
                    'categorie_id.required' => 'This field is required.',
                    'image.required' => 'Feature Image is required',
                    'image.mimes' => 'only Allowed png,jpg,jpeg,webp',
                    'image.max' => 'Max 2 Mb is Allowed',
                    'thumbnail.required' => 'Thumbnail is required',
                    'thumbnail.mimes' => 'only Allowed png,jpg,jpeg,webp',
                    'thumbnail.max' => 'Max 2 Mb is Allowed',
                    'categorie_id.exists' => 'The selected category does not exist.',
                    'typologie_id.required' => 'This field is required.',
                    'typologie_id.exists' => 'The selected typology does not exist.',
                    'typologie_id.unique' => 'Record Already exists.',
                    'name.required' => 'Project name is required',
                    'name.unique' => 'Project name Alrady Exists',
                    

                    // 'developer_id.required' => 'Developer is required.',
                    // 'developer_id.exists' => 'The selected developer does not exist.',
                    // 'ivr_no.required' => 'Ivr no is required',
                    // 'project_status.required' => 'Project Status is required',
                    // 'brochure.mimes'=>'Only PDF is Aloowed',
                    // 'brochure.max'=>'PDF Should be Less than 4MB',
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

        $data=[
            'categorie_id'=>$request->categorie_id,
            'typologie_id'=>$request->typologie_id,
            // 'developer_id'=>$request->developer_id,
            'name'=>$request->name,
            'ivr_no'=>$request->ivr_no,
            'slug'=>$request->name,
        ];
        if(!empty($request->project_status)){
           $data['project_status']=$request->project_status;
        }
        if($request->sub_typologie_id){
            $data['sub_typologie_id']=$request->sub_typologie_id;
        }
        if($request->whatsapp_no){
            $data['whatsapp_no']=$request->whatsapp_no;
        }
        if($request->payment_plan){
            $data['payment_plan']=$request->payment_plan;
        }
        if($request->rera_no){
            $data['rera_no']=$request->rera_no;
        }
        if($request->short_description){
            $data['short_description']=$request->short_description;
        }


        if($request->hasFile('image')){
            $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
            $path = $request->file('image')->storeAs('project/feature-image', $name, 'public');
            $data['feature_image']=$path;
        }

        
        if($request->hasFile('thumbnail')){
            $name = now()->timestamp.".{$request->thumbnail->getClientOriginalName()}";
            $path = $request->file('thumbnail')->storeAs('project/feature-thumbnail', $name, 'public');
            $data['thumbnail'] = $path;
        }


        if($request->hasFile('logo')){
            $name = now()->timestamp.".{$request->logo->getClientOriginalName()}";
            $path = $request->file('logo')->storeAs('project-logo', $name, 'public');
            $data['logo']=$path;
        }
    

        if($request->hasFile('brochure')){
            $name = now()->timestamp.".{$request->brochure->getClientOriginalName()}";
            $path = $request->file('brochure')->storeAs('project-brochure', $name, 'public');
            $data['brochure']=$path;
        }
        

        $saverecord = Projects::create($data);
        return response()->json([
            'status' => true,
            'statusCode' => 200,
            'message' =>"success" ,
            'data'=>$saverecord,
        ]);

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
        $saverecord=Projects::find($id);
        if($saverecord){
            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' =>"success" ,
                'data'=>$saverecord,
            ]);
        }   
        return response()->json([
            'status' => true,
            'statusCode' => 400,
            'message' =>"not found" ,
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
            'categorie_id' => 'required|exists:categories,id',
            'typologie_id' => 'required|exists:typologies,id',
            // 'developer_id' => 'required|exists:developers,id',
            'sub_typologie_id'=>'nullable|exists:sub_typologies,id',     

            'name' => [
                'required',
                 Rule::unique('projects')
                    ->where(function ($query) use ($request,$id) {
                        $query->where('categorie_id', $request->categorie_id)
                        ->where('id', '<>',$id)

                            ->WhereNull('deleted_at'); // Include soft-deleted records
                    })
            ],

            // 'ivr_no' => 'required|integer',
            'project_status' => 'required|integer',            
        ],
            [
                'categorie_id.required' => 'This field is required.',
                'developer_id.required' => 'Developer is required.',
                'developer_id.exists' => 'The selected developer does not exist.',
                'categorie_id.exists' => 'The selected category does not exist.',
                'typologie_id.required' => 'This field is required.',
                'typologie_id.exists' => 'The selected typology does not exist.',
                'typologie_id.unique' => 'Record Already exists.',
                'sub_typologie_id.exists' => 'Typologie Not Exists',

            ]
        );

    if($validator->fails()){

        return response()->json([
            'status' => true,
            'statusCode' => 403,
            'message' => "Please Fill Madtory fields ",
            'errors'=>$validator->errors()
        ]);

    }

  


    $saverecord=Projects::find($id);
    if(!$saverecord){
        return response()->json([
            'status'=>true,
            'statusCode'=>400,
            'message'=>"Project Not found",
        ]);
    }

        $saverecord->categorie_id=$request->categorie_id;
        $saverecord->typologie_id=$request->typologie_id;
        // $saverecord->developer_id=$request->developer_id;
        $saverecord->name=$request->name;
        $saverecord->ivr_no=$request->ivr_no;
        $saverecord->slug=$request->name;
        $saverecord->project_status=$request->project_status;

        if($request->hasFile('image')){
            $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
            $path = $request->file('image')->storeAs('feature-image', $name, 'public');
            $saverecord->feature_image = $path;
        }

        if($request->hasFile('logo')){
            $name = now()->timestamp.".{$request->logo->getClientOriginalName()}";
            $path = $request->file('logo')->storeAs('project-logo', $name, 'public');
            dltSingleImgFile($saverecord->logo);
            $saverecord->logo=$path;

        }
    

        if($request->hasFile('brochure')){
            $name = now()->timestamp.".{$request->brochure->getClientOriginalName()}";
            $path = $request->file('brochure')->storeAs('brochure', $name, 'public');
            dltSingleImgFile($saverecord->brochure);
            $saverecord->brochure=$path;

        }



        
        if($request->meta_title){
            $saverecord->meta_title=$request->meta_title; 
            }
    
            if($request->meta_keyword){
                $saverecord->meta_keyword=$request->meta_keyword;
            }
        
    
            if($request->meta_description){
                $saverecord->meta_description=$request->meta_description;
            }
    
    
            if($request->head_data){
                $saverecord->head_data=$request->head_data;
                    
            }
    
            if($request->footer_data){
                $saverecord->footer_data=$request->footer_data;
            }
   
            

        



        $saverecord->short_description=$request->short_description;
        $saverecord->sub_typologie_id=$request->sub_typologie_id;
        $saverecord->whatsapp_no=$request->whatsapp_no;
        $saverecord->payment_plan=$request->payment_plan;
        $saverecord->rera_no=$request->rera_no;

        if($request->meta_title){
        $saverecord->meta_title=$request->meta_title; 
        }

        if($request->meta_keyword){
            $saverecord->meta_keyword=$request->meta_keyword;
        }
    

        if($request->meta_description){
            $saverecord->meta_description=$request->meta_description;
        }


        if($request->head_data){
            $saverecord->head_data=$request->head_data;
                
        }

        if($request->footer_data){
            $saverecord->footer_data=$request->footer_data;
        }
   

    if($saverecord->update()){
        return response()->json([
            'status' => true,
            'statusCode' => 200,
            'message' =>"updated successfully" ,
            'data'=>$saverecord,
        ]);
    
    }else{
        return response()->json([
            'status' => true,
            'statusCode' => 400,
            'message' =>"failed to update" ,
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
        $records=Projects::find($id);
        if($records){
            if($records->delete()){
                return response()->json([
                    'status' => true,
                    'statusCode' => 200,
                    'message' =>"deleted sucessfully" ,
                    'data'=>$records,
                ]);
            }
            return response()->json([
                'status' => true,
                'statusCode' => 400,
                'message' =>"failed to delete" ,
            ]);
        }
        return response()->json([
            'status' => true,
            'statusCode' => 400,
            'message' =>"not found" ,
        ]);
    }

    public function  statuslist(){
        return response()->json([
            'status' => true,
            'statusCode' => 200,
            'message' =>"Sucess",
            'data' =>getprojectStatus()
        ]); 

    }

    public function  projectsectionlist(){

        $sectionslist = DB::table('project_sections_list')->where('status',1)->orderBy('seq','ASC')->get();

        return response()->json([
            'status' => true,
            'statusCode' => 200,
            'message' =>"Sucess",
            'data' =>$sectionslist
        ]); 

    }


    public function projectIsFeature (Request $request, $id) 
    {
        $table = [
            'tableName' => 'projects',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'is_feature',
            'updatecolumnVal' => $request->is_feature
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }


    public function deleteProjectLogo ($id) 
    {
        $projectlogo = Projects::find($id);
        
        if($projectlogo) {
            $filePath = $projectlogo->logo;

            if (File::exists(public_path('storage/'.$filePath))) {
                File::delete(public_path('storage/'.$filePath));
                
                $projectlogo->update(['logo' => null]);

                return response() -> json ( [
                    'status' => true,
                    'statusCode' => 200,
                    'message' => 'success'
                ]);

            }  else {

                return response() -> json ([
                    'status' => true,
                    'statusCode' => 404,
                    'message' => 'File not exits'
                ]);
            }



        } 
        
        return response()->json([
            'status' => true,
            'statusCode' => 400,
            'message' =>"not found" ,
        ]);
        
    }


    public function deleteProjectBrochure ($id) 
    {
        $projectlogo = Projects::find($id);
        
        if($projectlogo) {
            $filePath = $projectlogo->brochure;

            if (File::exists(public_path('storage/'.$filePath))) {
                File::delete(public_path('storage/'.$filePath));
                
                $projectlogo->update(['brochure' => null]);

                return response() -> json ( [
                    'status' => true,
                    'statusCode' => 200,
                    'message' => 'success'
                ]);

            }  else {

                return response() -> json ([
                    'status' => true,
                    'statusCode' => 404,
                    'message' => 'File not exits'
                ]);
            }
        }
        
        return response()->json([
            'status' => true,
            'statusCode' => 400,
            'message' =>"not found" ,
        ]);
        
    }

}
