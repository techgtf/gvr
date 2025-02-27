<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Admin\News;
use Illuminate\Validation\Rule;

class NewsController extends Controller
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


    public function index(Request $request)
    {

        $search="";
        if(!empty($request->search)){
            $search = $request->search; 
        }
        
        $perPage = $request->input('per_page', 10); // Number of products per page
        $page = $request->input('page', 1); // Current page number
 
        $media = News::search($search)->paginate($perPage, ['*'], 'page', $page);
             
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$media
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
        $validator = Validator::make($request->all(),[
            'file' => ['required',
                function ($attribute, $value, $fail) use ($request) {
                    if ($request->type === 'docs') {
                        if ($value->getClientOriginalExtension() !== "pdf") {
                            $fail('Only PDF files are allowed.');
                        }
                    } else {
                        if (!in_array($value->getClientOriginalExtension(), ['png', 'jpg', 'jpeg', 'webp'])) {
                            $fail('Invalid file type. Only allowed: png, jpg, jpeg, webp.');
                        }
                    }
                },
                'max:2048'],
           
            'type' => 'required|in:logo,docs,news',
            'heading' => 'required|unique:news,heading',
        ],
        [
            'file.required' => 'This field is required.',
            'file.mimes' => 'Invalid file type only aloowed (png,jpg,jpeg,webp)',
            'heading.required' => 'This heading field is required.',
            'heading.unique' => 'heading Already Exists.',
            'type.in' => 'Invalid type selected.'
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
                
                $name = now()->timestamp.".{$request->file->getClientOriginalName()}";
                $path = $request->file('file')->storeAs('news', $name, 'public');
                $mediadata = new News();
                $mediadata->file = $path;
                $mediadata->heading = $request->heading;
                $mediadata->alt_tag = $request->alt_tag;
                $mediadata->cdn = $request->cdn;
                $mediadata->type = $request->type;
                
                if($mediadata->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"news Added Sucessfully ",
                        'data'=>$mediadata
                ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failde to add news "
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
        $amities = News::find($id);
          return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"success",
            'data'=>$amities
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

        $validator = Validator::make($request->all(),[
            'file' => ['nullable|required',
                function ($attribute, $value, $fail) use ($request) {
                    if ($request->type === 'docs') {
                        if ($value->getClientOriginalExtension() !== "pdf") {
                            $fail('Only PDF files are allowed.');
                        }
                    } else {
                        if (!in_array($value->getClientOriginalExtension(), ['png', 'jpg', 'jpeg', 'webp'])) {
                            $fail('Invalid file type. Only allowed: png, jpg, jpeg, webp.');
                        }
                    }
                },
                'max:2048'],
           
            'type' => 'required|in:logo,docs,news',
            'heading' => 'required|unique:news,heading',
        ],
        [
            'file.required' => 'This field is required.',
            'file.mimes' => 'Invalid file type only aloowed (png,jpg,jpeg,webp)',
            'heading.required' => 'This heading field is required.',
            'heading.unique' => 'heading Already Exists.',
            'type.in' => 'Invalid type selected.'
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>true,
                'statusCode'=>403,
                'message' => "success",
                'errors'=>$validator->errors()->toArray()
            ]);
        }
        $getrecord = News::select('*')->where('id',$id)->first();
        
        if(!$getrecord){
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
               'message' =>"Invalid Request/ Not Found ",
            ]);
        }

      
        if($request->file('file')){
          
            $imagesurl=str_replace(env('ASSET_URL'), "",$getrecord->file);
            dltSingleImgFile($imagesurl);
            
            $name = now()->timestamp.".{$request->file->getClientOriginalName()}";
            $path = $request->file('file')->storeAs('news', $name, 'public');
            $getrecord->file=$path;
        }

        $getrecord->heading = $request->heading;
        $getrecord->alt_tag = $request->alt_tag;
        $getrecord->cdn = $request->cdn;
        $getrecord->type = $request->type;

        if($getrecord->save()){
            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' => "Updated Sucessfully ",
                'data' => $getrecord
            ]);
        }

        return response()->json([
            'status'=>false,
            'statusCode'=>500,
           'message' =>"Invalid Request/ Not Found ",
        ]);
        // return $getrecord;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       
        $getrecord = News::select('*')->where('id',$id)->first();
        
        if(!$getrecord){
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
               'message' =>"Invalid Request/ Not Found ",
            ]);
        }

         dltSingleImgFile($getrecord->image);

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
            'tableName' => 'news',
            'keyColumnName' => 'id',
            'keyColumnId' => $id,
            'updateColumnName' => 'status',
            'updatecolumnVal' => $request->status
        ];
        
        $result = updateSingleRecord($table);
        return $result;
    }


}
