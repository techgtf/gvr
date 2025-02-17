<?php

namespace App\Http\Controllers;

use App\Models\Admin\City;
use App\Models\Admin\PageMeta;
use App\Models\Admin\ProjectCategory;
use App\Models\Admin\Typology\Typology;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HelperController extends Controller
{
    //
    public function pricetype(){
        return pricetype();
    }
    public function sizetype(){
        return sizeType();
    }
    public function getCategory(){
        $data=ProjectCategory::get();
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$data,
        ]);

         
    }
    public function  getCategoryBySlug($slug){
        $data=ProjectCategory::where('slug',$slug)->first();
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$data,
        ]);
    }

    public function  geAllTypology(){
        $data=Typology::where('status',1)->get();
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$data,
        ]);
    }
    public function  getAllCity(){
        $data=City::where('status',1)
        ->orderBy('city', 'ASC')
        ->orderBy('is_popular','DESC')->get();
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$data,
        ]);
    }


    public function projectstatus(){
        
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>getprojectStatus(),
        ]);
    }

    public function jobType(){
        
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>getJobType(),
        ]);
    }

    public function jobYear(){
        
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>getJobYear(),
        ]);
    }


    public function locationType(){
        
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>locationType(),
        ]);
    }


    public function footerPlatter ()
    {
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>footerPlatter(),
        ]);
    }


    public function  getpageMeta($pageid){
        $data=PageMeta::where('page',$pageid)->first();
        if(!$data){
            return response()->json([
                'status'=>true,
                'statusCode'=>400,
                'message'=>"Not found ",
                'data'=>$data,
            ]);
        }
        
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$data,
        ]);
    }


    public function  getCategoryTypology($categories_slug){
        $data = DB::table('category_typologies')
        ->join('categories', 'category_typologies.categories_id', '=', 'categories.id')
        ->join('typologies', 'category_typologies.typologies_id', '=', 'typologies.id')
        ->select('category_typologies.id','categories.name as categoty','typologies.typology','typologies.id as typologies_id')
        ->where('categories.slug',$categories_slug)->get();
        if(!$data){
            return response()->json([
                'status'=>true,
                'statusCode'=>400,
                'message'=>"Not found ",
                'data'=>$data,
            ]);
        }
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$data,
        ]);
    }


    public function  getTypesLocationAdvantage(){

        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=> locationType(),
        ]);
        
    }
    


   
    


}
