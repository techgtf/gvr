<?php

namespace App\Http\Controllers\Admin\Typology;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Admin\Typology\Typology;
use Illuminate\Validation\Rule;

class TypologiesController extends Controller
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
        $perPage = $request->input('per_page',10);
        $page = $request->input('page', 1);
        $record = Typology::search($search)->where('status',1)->paginate($perPage, ['*'], 'page', $page);
             
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
            'typology' => 'required|unique:typologies,typology',
            // 'image' => 'required|nullable|mimes:png,jpg,jpeg,svg,webp|max:2048',
        ],[
            'typology.required' => 'The Name field is required.',
            'typology.unique' => 'This Typology is Already Exists',
            'image.required' => 'Image is required',
            'image.mimes' => 'only allowed png,jpg,jpeg',


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
                
                
                
                $typology = new Typology();
                $typology->slug = $request->typology;
                $typology->typology = $request->typology;


                if($request->file('image')){
                    $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
                    $path = $request->file('image')->storeAs('typology', $name, 'public');
                    $typology->image = $path;
                }


                if($typology->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Add Typology Sucessfully ",
                        'data'=>$typology
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failde to add Blog"
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
        $result = Typology::find($id);
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
            'typology' => [
                'required',
                Rule::unique('typologies')->ignore($id),
            ],
        ],[
            'typology.required' => 'The Name field is required.',
            'typology.unique' => 'This Typology is Already Exists',
        ]);

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => "success",
                'errors'=>$validator->errors()
            ]); 

        }else{
            
            $getrecord = Typology::find($id);
            
            if(!$getrecord){
                return response()->json([
                    'status'=>false,
                    'statusCode'=>500,
                    'message' =>"Invalid Request/ Not Found ",
                ]);
            }

            try{
                 
                $getrecord->slug = $request->typology;
                $getrecord->typology = $request->typology;

                if($request->file('image')){
                    dltSingleImgFile($getrecord->image);
                    $name = now()->timestamp.".{$request->image->getClientOriginalName()}";
                    $path = $request->file('image')->storeAs('typology', $name, 'public');
                    $getrecord->image = $path;
                }


                if($getrecord->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Typology Update Sucessfully ",
                        'data'=>$getrecord
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failde to Update Typology"
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


    public function makeprimary($typology){
      

        $getrecord = Typology::find($typology);
        if($getrecord->primary==1){
            $getrecord->primary=0;
        }else{
            $getrecord->primary=1;

        }
        $checkcount = Typology::where('primary',1)->where('id','!=',$typology)->count();
        if($checkcount==3){
            return response()->json([
                'status'=>true,
                'statusCode'=>403,
                'message'=>"You can add Only 3 primary"
            ]);
    
        }else{
            if($getrecord->save()){
                return response()->json([
                    'status'=>true,
                    'statusCode'=>200,
                    'message'=>"Add Typology Sucessfully ",
                    'data'=>$getrecord
                ]);
            }
        }
       

        
       
        return response()->json([
            'status'=>true,
            'statusCode'=>400,
            'message'=>"Failde to Update"
        ]);


    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $getrecord = Typology::find($id);
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
