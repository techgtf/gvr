<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Admin\Amenities;
use App\Models\Admin\PageSection;
use App\Models\Admin\PageSectionList;
use Illuminate\Support\Facades\DB;
use App\Models\Admin\Page;
use Illuminate\Support\Facades\File;
use Illuminate\Validation\Rule;

class PageSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    
    public function __construct()
    {
        $this->middleware('admin.auth');
    }

    public function getSecionList($page_type_id)
    {
        $data = DB::table('page_sections')->where('page_type_id',$page_type_id)->orderBy('seq')->get();        
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$data
        ]);

               

    }
    public function index(Request $request)
    {

        $search="";
        if(!empty($request->search)){
            $search = $request->search; 
        }
        
        $perPage = $request->input('per_page', 10); // Number of products per page
        $page = $request->input('page', 1); // Current page number

        // Fetch products with pagination

        $data = PageSectionList::search($search)->paginate($perPage, ['*'], 'page', $page);
                if($data){
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Success ",
                        'data'=>$data
                    ]);
                }
            return response()->json([
                'status'=>false,
                'statusCode'=>400,
                'message'=>"notfound ",
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
            'page_id' => 'required|exists:pages,id', 
            'page_section' => 'required|exists:page_sections,name', 
            'image' => 'nullable|image|mimes:jpg,png,webp',

            'heading' => 'required',
            // 'description' => 'required',            
        ],
        [
            'page_id.required' => 'The page_id field is required.',
            'image.mimes' => 'Valid Image ',

            'page_id.exists' => 'The page_id field is invalid.',
            'page_section.required' => 'The page_section field is required.',
            'page_section.exists' => 'The page_section field is invalid.',
            'heading.required' => 'The heading field is required.',
            // 'description.required' => 'The description field is required.',
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>true,
                'statusCode'=>403,
                'message' => "success",
                'errors'=>$validator->errors()->toArray()
            ]);
        }else{
            try{
                
                $records = PageSectionList::where('page_id',$request->page_id)
                ->where('page_section',$request->page_section)->first();

                if(empty($records)){
                    $records=new PageSectionList();
                   
                }
                $records->page_id=$request->page_id;
                $records->page_section=$request->page_section;
                $records->heading=$request->heading;

                if($request->hasFile('image')){
                    $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
                    $path = $request->file('image')->storeAs('page/page-sections', $name, 'public');
                    if($records->image){
                        dltSingleImgFile($records->image);
                    }
                    $records->image = $path;
                }

                if(!empty($request->image_alt)) {
                    $records->image_alt = $request->image_alt;
                }

                if(!empty($request->description)){
                    $records->description=$request->description;
                }

                if(!empty($request->sub_heading)){
                    $records->sub_heading=$request->sub_heading;
                }


              


                if($records->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>$request->page_section." Updated Sucessfully ",
                        'data'=>$records
                ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failde "
                ]);
                }
    
            }catch(\Exception $e){
                return response()->json([
                    'status'=>false,
                    'statusCode'=>500,
                    'message'=>$e
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
    public function show($sectionType)
    {
        //
       
        $data=PageSectionList::Where('page_section',$sectionType)->first();
          if($data){
            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"success",
                'data'=>$data
                ]);
          }
          return response()->json([
            'status'=>false,
            'statusCode'=>404,
            'message'=>"false",
            ]);
    }


    public function statusUpdate(Request $request)
    {
        //

        $validator=Validator::make($request->all(),[
            'status' => 'required|integer',
            'project_id' => 'required|integer',
            

        ],
            [
                'status.required' => 'Status field is required.',
                'project_id.required' => 'The project field is required.',
            ]
        );

        if($validator->fails()){
            return response()->json([
                'status'=>true,
                'statusCode'=>403,
               'message' => $validator->errors()->toArray(),
            ]);
        }



        $amities=Amenities::find($request->project_id);
        if($amities){
            $amities->status=$request->status;
            if($amities->save()){
                return response()->json([
                    'status'=>true,
                    'statusCode'=>200,
                    'message'=>"success",
                    'data'=>$amities
                    ]);
            }
            return response()->json([
                'status'=>true,
                'statusCode'=>400,
                'message'=>"failed",
                ]);


        }
        return response()->json([
            'status'=>false,
            'statusCode'=>404,
            'message'=>"server error",
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
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       
        $getrecord=Amenities::select('*')->where('id',$id)->first();
        
        if(!$getrecord){
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
               'message' =>"Invalid Request/ Not Found ",
            ]);
        }

         dltSingleImgFile($getrecord->icons);

         if($getrecord->delete()){
            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Deleted Sucessfully ",
                'data'=>$getrecord

            ]);
         }
         return response()->json([
            'status'=>false,
            'statusCode'=>500,
           'message' =>"Invalid Request/ Not Found ",
        ]);
        
    }


    public function status(Request $request, $id)
    {
        $table = [
            'tableName' => 'amenities',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'status',
            'updatecolumnVal' => $request->status
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }


    public function  DistinctPages(){
        $data = Page::get();
        $platterArray = [];
        $otherRecords = [];

        foreach ($data as $record) {
            if (isset($record->type) && $record->type === 'platter') {
                $platterArray[] = $record;
            } else {
                $otherRecords[] = $record;
            }
        }
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data' => [
                'platter' => $platterArray,
                'data' => $otherRecords,
            ],
        ]);
    }

}
