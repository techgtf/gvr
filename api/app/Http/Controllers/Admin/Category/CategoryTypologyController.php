<?php

namespace App\Http\Controllers\Admin\Category;

use App\Http\Controllers\Controller;
use App\Models\Admin\CategoryTypology;
use App\Models\Admin\Typology\SubTypology;
use App\Models\Admin\Typology\Typology;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class CategoryTypologyController extends Controller
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
            'categories_id' => 'required|exists:categories,id', 
        ],
        [
            'categories_id.required' => 'This field is required.',
            'categories_id.exists' => 'The selected category does not exist.',
        ]
        );

    if($validator->fails()){

        return response()->json([
            'status' => true,
            'statusCode' => 403,
            'message' => $validator->errors(),
        ]);

    }


        $id=$request->categories_id;
        

        $perPage = $request->input('per_page', 5);
        $page = $request->input('page', 1); 
        $data = DB::table('category_typologies')
        ->join('categories', 'category_typologies.categories_id', '=', 'categories.id')
        ->join('typologies', 'category_typologies.typologies_id', '=', 'typologies.id')
        ->select('category_typologies.id','categories.name as categoty','typologies.typology','typologies.id as typologies_id')
        ->where('category_typologies.categories_id',$id)
        ->paginate($perPage, ['*'], 'page', $page);
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$data
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


  

    public function getTypologyDistinct($categoryid){



        $typology = Typology::whereDoesntHave('TypologyOfCategory', function ($query) use ($categoryid) {
            $query->where('categories_id'   ,$categoryid);
        })->get();


        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$typology
        ]);


    }


    public function getSubTypologyDistinct(Request $request,$typology_id){


        
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1); 


        $search="";
        if(!empty($request->search)){
            $search = $request->search;
        }





        $subTypologiesNotInTypology = SubTypology::search($search)->whereDoesntHave('subTypologyOfTypology', function ($query) use ($typology_id) {
            $query->where('typologies_id'   ,$typology_id);
        })->paginate($perPage, ['*'], 'page', $page);


        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$subTypologiesNotInTypology
        ]);


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
            'categories_id' => 'required|exists:categories,id',
            'typologies_id' => [
                'required',
                'exists:typologies,id',
                Rule::unique('category_typologies')->where(function ($query) use ($request) {
                    return $query->where('categories_id', $request->categories_id)
                                 ->where('typologies_id', $request->typologies_id);
                })
            ],
            
        ],
        [
            'categories_id.required' => 'This field is required.',
            'categories_id.exists' => 'The selected category does not exist.',

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
            $categorie = new CategoryTypology();
            $categorie->categories_id = $request->categories_id;
            $categorie->typologies_id = $request->typologies_id;

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
    
        $data=CategoryTypology::with('categories','typologies')->find($id);
       
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
           'categories_id' => 'required|exists:categories,id',
           'typologies_id' => 'required|exists:typologies,id'
       ],
       [
           'categories_id.required' => 'This field is required.',
           'categories_id.exists' => 'The selected category does not exist.',

           'typologies_id.required' => 'This field is required.',
           'typologies_id.exists' => 'The selected typology does not exist.'

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
        $getrecord=CategoryTypology::find($id);
       
        if(!$getrecord){
            return response()->json([
                'status'=>true,
                'statusCode'=>400,
               'message' =>"Not Found ",
            ]);
        }

      
        $getrecord->categories_id=$request->categories_id;
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
       
       
        $getrecord=CategoryTypology::select('*')->where('id',$id)->first();
        
        if(!$getrecord){
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
               'message' =>"Invalid Request / Not Found ",
            ]);
        }

      

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
}
