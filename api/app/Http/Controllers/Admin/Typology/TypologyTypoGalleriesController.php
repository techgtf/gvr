<?php

namespace App\Http\Controllers\Admin\Typology;

use App\Http\Controllers\Controller;

use App\Models\Admin\Typology\SubTypology;
use App\Models\Admin\Typology\TypologyTypoGallery;
use App\Models\Website\TypologiesGallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class TypologyTypoGalleriesController extends Controller
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
                'typologies_id' => 'required|exists:typologies,id', 
            ],
            [
                'typologies_id.required' => 'This field is required.',
                'typologies_id.exists' => 'Invalid typology.',
            ]
        );

    if($validator->fails()){

        return response()->json([
            'status' => true,
            'statusCode' => 403,
            'message' => $validator->errors(),
        ]);

    }
    $typologies_id = $request->typologies_id;
    $perPage = $request->input('per_page', 10);
    $page = $request->input('page', 1); 
    $data = DB::table('typology_typo_galleries')
        ->join('typologies', 'typology_typo_galleries.typologies_id', '=', 'typologies.id')
        ->join('typologies_galleries', 'typology_typo_galleries.galleries_id', '=', 'typologies_galleries.id')
        ->select('typology_typo_galleries.id','typologies.typology','typologies_galleries.file as file','typologies_galleries.id as sub_galleries_id')
        ->where('typology_typo_galleries.typologies_id', $typologies_id)
        ->whereNull('typology_typo_galleries.deleted_at');
    
    if(!empty($request->search)){
        $data->where('sub_typologies.typology', 'like', '%' . $request->search . '%');
    }       
    
    $result = $data->paginate($perPage, ['*'], 'page', $page);
    return response()->json([
        'status' => true,
        'statusCode' => 200,
        'message' => "Success ",
        'data' => $result
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
            'galleries_id' => 'required|exists:typologies_galleries,id',
            'typologies_id' => [
                'required',
                Rule::unique('typology_typo_galleries')
                ->where(function ($query) use ($request) {
                    $query->where('typologies_id', $request->typologies_id)
                        ->where('galleries_id', $request->galleries_id)
                        ->WhereNull('deleted_at'); // Include soft-deleted records
                })
            ],
        ],
        [
            'galleries_id.required' => 'This field is required.',
            'galleries_id.exists' => 'The selected id does not exist.',

            'typologies_id.required' => 'This field is required.',
            'typologies_id.exists' => 'The selected typology does not exist.',
            'typologies_id.unique' => 'Record Already exists.'


        ]
    );

    if($validator->fails()){

        return response()->json([
            'status' => true,
            'statusCode' => 403,
            'message' => $validator->errors(),
        ]);

    }else{
       

        try{

            $record = TypologyTypoGallery::withTrashed()
            ->where('typologies_id', $request->typologies_id)
            ->where('galleries_id', $request->galleries_id)
            ->first();
 
            if (!$record) {
                $categorie = new TypologyTypoGallery();
                $categorie->typologies_id = $request->typologies_id;
                $categorie->galleries_id = $request->galleries_id;

                if($categorie->save()){           
                    return response()->json([
                        'status' => true,
                        'statusCode' => 200,
                        'message' => "Add  Sucessfully ",
                        'data' => $categorie,
                    ]);
    
                }else{
                    return response()->json([
                        'status' => false,
                        'statusCode' => 400,
                        'message' => "Failde to add  "
                    ]);
                }

            }else{
                if ($record->trashed()) {
                    $record->restore(); 

                    return response()->json([
                        'status' => true,
                        'statusCode' => 200,
                        'message' => "Add  Sucessfully ",
                        'data' => $record,
                    ]);
     
                }
            }
 
        }catch(\Exception $e){
            return response()->json([
                'status' => false,
                'statusCode' => 500,
                'message' => "Something went wrong",
                'error' => $e->getMessage()
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
    
        $data = TypologyTypoGallery::with('typologies','subtypology')->find($id);
       
      try {

        if($data){
            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"success",
                'data'=>$data
            ]);
        }
       
        return response()->json([
            'status' => true,
            'statusCode' => 400,
            'message' => "Not Found",
        ]);
      } catch (\Throwable $e) {
          return response()->json([
                'status' => false,
                'statusCode' => 500,
                'message' => "Something went wrong",
                'error' => $e
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
            'galleries_id' => 'required|exists:typologies_galleries,id',
            'typologies_id' => [
                'required',
                Rule::unique('typology_typo_galleries')->where(function ($query) use ($request) {
                    return $query->where('typologies_id', $request->typologies_id)
                    ->where('galleries_id', $request->galleries_id);
                })
            ],

        ],
        [
            'galleries_id.required' => 'This field is required.',
            'galleries_id.exists' => 'The selected id does not exist.',

            'typologies_id.required' => 'This field is required.',
            'typologies_id.exists' => 'The selected typology does not exist.',
            'typologies_id.unique' => 'Record Already exists.'


        ]
    );
        if($validator->fails()){
            return response()->json([
                'status'=>true,
                'statusCode'=>403,
                'message' => "success",
                'errors'=>$validator->errors()->toArray()
            ]);
        }
        $getrecord = TypologyTypoGallery::find($id);
       
        if(!$getrecord){
            return response()->json([
                'status'=>true,
                'statusCode'=>400,
               'message' =>"Not Found ",
            ]);
        }

      
        $getrecord->galleries_id=$request->galleries_id;
        $getrecord->typologies_id=$request->typologies_id;

        if($getrecord->save()){
            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Updated Sucessfully ",
                'data'=>$getrecord

            ]);
        }

        return response()->json([
            'status'=>false,
            'statusCode'=>500,
           'message' =>"Failded to Update records",
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

        $data = TypologyTypoGallery::find($id);

        if(!$data){
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
                'message' =>"Invalid Request / Not Found ",
            ]);
        }

      

         if($data->delete()){
            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Deleted Sucessfully ",
                'data'=>$data

            ]);
         }else{
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
               'message' =>"Failed to delete",
            ]);
            
         }
       

    }

    public function getAllgalleriesByTypology($id)
    {
      
        $data = DB::table('typology_typo_galleries')
        ->join('typologies', 'typology_typo_galleries.typologies_id', '=', 'typologies.id')
        ->join('typologies_galleries', 'typology_typo_galleries.galleries_id', '=', 'typologies_galleries.id')
        ->select('typology_typo_galleries.id','typologies.typology','typologies_galleries.file as file','typologies_galleries.id as galleries_id')
        ->where('typology_typo_galleries.typologies_id', $id)
        ->whereNull('typology_typo_galleries.deleted_at');

        
        $result = $data->get();
        return response()->json([
            'status' => true,
            'statusCode' => 200,
            'message' => "Success ",
            'data' => $result
        ]);
    
    }

    public function allindex(Request $request)
    {
        
        $validator = Validator::make($request->all(), 
        [
                'typologies_id' => 'required|exists:typologies,id', 
        ],
        [
            'typologies_id.required' => 'This field is required.',
            'typologies_id.exists' => 'Invalid typology.',
        ]);

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => $validator->errors(),
            ]);

        }

        $typologies_id = $request->typologies_id;
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1); 
        $data = DB::table('typology_sub_typologies')
            ->join('typologies', 'typology_sub_typologies.typologies_id', '=', 'typologies.id')
            ->join('sub_typologies', 'typology_sub_typologies.sub_typologies_id', '=', 'sub_typologies.id')
            ->select('typology_sub_typologies.id','typologies.typology','sub_typologies.typology as sub_typology','sub_typologies.id as sub_typologies_id')
            ->where('typology_sub_typologies.typologies_id', $typologies_id)
            ->whereNull('typology_sub_typologies.deleted_at');
        
        if(!empty($request->search)){
            $data->where('sub_typologies.typology', 'like', '%' . $request->search . '%');
        }       
    
        // Debugging
        // dd($data->toSql()); // This will print the SQL query
        
        $result = $data->get();
        return response()->json([
            'status' => true,
            'statusCode' => 200,
            'message' => "Success ",
            'data' => $result
        ]);
    
    }

    public function getSubTypologyDistinct(Request $request,$typology_id){
 
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1); 

        $search="";
        if(!empty($request->search)){
            $search = $request->search;
        }

        $subTypologiesNotInTypology = \App\Models\Admin\Typology\TypologiesGallery::whereDoesntHave('subGalleryOfTypology', function ($query) use ($typology_id) {
            $query->where('typologies_id'   ,$typology_id);
        })->paginate($perPage, ['*'], 'page', $page);

        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$subTypologiesNotInTypology
        ]);

    }

}
