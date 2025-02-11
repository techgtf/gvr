<?php

namespace App\Http\Controllers\Admin\Typology;

use App\Http\Controllers\Controller;

use App\Models\Admin\Typology\TypologySubTypology;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class TypologySubTypologyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //

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
            'sub_typologies_id' => 'required|exists:sub_typologies,id',
            'typologies_id' => [
                'required',
                Rule::unique('typology_sub_typologies')
                    ->where(function ($query) use ($request) {
                        $query->where('typologies_id', $request->typologies_id)
                            ->where('sub_typologies_id', $request->sub_typologies_id)
                            ->WhereNull('deleted_at'); // Include soft-deleted records
                    })
            ],
        ],
        [
            'sub_typologies_id.required' => 'This field is required.',
            'sub_typologies_id.exists' => 'The selected category does not exist.',

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

            $record = TypologySubTypology::withTrashed()
            ->where('typologies_id', $request->typologies_id)
            ->where('sub_typologies_id', $request->sub_typologies_id)
            ->first();


           


            if (!$record) {
                $categorie = new TypologySubTypology();
                $categorie->typologies_id = $request->typologies_id;
                $categorie->sub_typologies_id = $request->sub_typologies_id;
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
    
        $data=TypologySubTypology::with('typologies','subtypology')->find($id);
       
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
            'sub_typologies_id' => 'required|exists:sub_typologies,id',
            'typologies_id' => [
                'required',
                Rule::unique('typology_sub_typologies')->where(function ($query) use ($request) {
                    return $query->where('typologies_id', $request->typologies_id)
                                 ->where('sub_typologies_id', $request->sub_typologies_id);
                })
            ],

        ],
        [
            'sub_typologies_id.required' => 'This field is required.',
            'sub_typologies_id.exists' => 'The selected category does not exist.',

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
        $getrecord=TypologySubTypology::find($id);
       
        if(!$getrecord){
            return response()->json([
                'status'=>true,
                'statusCode'=>400,
               'message' =>"Not Found ",
            ]);
        }

      
        $getrecord->sub_typologies_id=$request->sub_typologies_id;
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
        //
       
    
        $data=TypologySubTypology::find($id);
     
        
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

    public function getAllSubtyplogyByTypology($id)
    {
        //

    

   

    $data = DB::table('typology_sub_typologies')
        ->join('typologies', 'typology_sub_typologies.typologies_id', '=', 'typologies.id')
        ->join('sub_typologies', 'typology_sub_typologies.sub_typologies_id', '=', 'sub_typologies.id')
        ->select('typology_sub_typologies.id','typologies.typology','sub_typologies.typology as sub_typology','sub_typologies.id as sub_typologies_id')
        ->where('typology_sub_typologies.typologies_id', $id)
        ->whereNull('typology_sub_typologies.deleted_at');
     
    
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

    public function allindex(Request $request)
    {
        //

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



}
