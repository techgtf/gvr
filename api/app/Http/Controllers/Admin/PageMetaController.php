<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Page;
use App\Models\Admin\PageMeta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PageMetaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search="";
        if(!empty($request->search)){
            $search = $request->search;
        }
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);
        $record = PageMeta::search($search)->with('PageName')->paginate($perPage, ['*'], 'page', $page);
             
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
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
            'meta_title' => 'required',
            'page' => 'required|unique:page_metas,page|exists:pages,id',   
        ],[
            'meta_title.required' => 'The Meta Title field is required.',
            'page.unique' => 'Page Alredy Exists',
            'page.exists' => 'Invalid Page ',


        ]);

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => 'success',
                'errors' => $validator->errors(),
            ]); 

        }else{
            try{
                $data =PageMeta::create([
                        'page'=>$request->page,
                        'meta_title'=>$request->meta_title,
                        'meta_keyword'=>$request->meta_keyword,
                        'meta_description'=>$request->meta_description,
                        'head_data'=>$request->head_data,
                        'footer_data'=>$request->footer_data,

                ]);
                return response()->json([
                    'status'=>true,
                    'statusCode'=>200,
                    'message'=>"Add Blog Sucessfully ",
                    'data'=>$data
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
       try {
        $data=PageMeta::find($id);
        if($data){
            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Add Meta Detail Sucessfully ",
                'data'=>$data
            ]);  
        }
        return response()->json([
            'status'=>true,
            'statusCode'=>400,
            'message'=>"Not Found ",
            
        ]); 
       } catch (\Throwable $th) {
        return response()->json([
            'status'=>false,
            'statusCode'=>500,
            'message'=>"Something went wrong",
            'error' => $th->getMessage()
        ]);
       }
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
            'meta_title' => 'required',
          
        ],[
            'meta_title.required' => 'The Meta Title field is required.',
        ]);

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => 'success',
                'errors' => $validator->errors(),
            ]); 

        }



        try {
            $data=PageMeta::find($id);
            if($data){
                $data->meta_title=$request->meta_title;
                $data->meta_keyword=$request->meta_keyword;
                $data->meta_description=$request->meta_description;
                $data->head_data=$request->head_data;
                $data->footer_data=$request->footer_data;
                if($data->save()){
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Meta Details Updated Successfully",
                        'data'=>$data
                    ]); 
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failed to Update Meta Details ",
                        
                    ]); 
                }
            }
            return response()->json([
                'status'=>true,
                'statusCode'=>400,
                'message'=>"Not Found ",
                
            ]); 
           } catch (\Throwable $th) {
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
                'message'=>"Something went wrong",
                'error' => $th->getMessage()
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
    try {
        $pageMeta = PageMeta::find($id);

        if (!$pageMeta) {
            return response()->json([
                'status' => false,
                'statusCode' => 404,
                'message' => "Page Meta not found.",
            ]);
        }

        if ($pageMeta->delete()) {
            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' => "Page Meta deleted successfully.",
                'data' => $pageMeta
            ]);
        }

        return response()->json([
            'status' => false,
            'statusCode' => 500,
            'message' => "Failed to delete Page Meta.",
        ]);
    } catch (\Throwable $th) {
        return response()->json([
            'status' => false,
            'statusCode' => 500,
            'message' => "Something went wrong.",
            'error' => $th->getMessage()
        ]);
    }
}

public function  DistinctPages(){
    $data = Page::doesntHave('meta')->get();
    return response()->json([
        'status'=>true,
        'statusCode'=>200,
        'message'=>"Success ",
        'data'=>$data,
    ]);
}


}
