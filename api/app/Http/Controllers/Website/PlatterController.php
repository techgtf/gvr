<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use App\Models\Website\Platter;
use Illuminate\Http\Request;

class PlatterController extends Controller
{
    //

    public function  index(){
        $data=Platter::where('status',1)->get();
     
        $builder=[];
        $Properties=[];
        $Cities=[];
        $Recommended=[];
        $Typologies=[];




        foreach ($data as $key => $item) {
            # code...
            if($item->type==1){
                $builder[]=$item;
            }else if($item->type==2){
                $Properties[]=$item;
            }  else if($item->type==3){
                $Cities[]=$item;
            } 
            else if($item->type==4){
                $Typologies[]=$item;
            }   
            else if($item->type==5){
                $Recommended[]=$item;
            } 

        }
        $mainarray=[
            'Popular Builder '=>$builder,
            'Popular Properties'=>$Properties,
            'Popular Cities'=>$Cities,
            'Recommended Properties'=>$Recommended,
            'Property Type'=>$Typologies
        ];

        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"success",
            'data'=>$mainarray
            
        ]); 

    }

    public function platterDetail($slug){
        $data=Platter::where('slug',$slug)->first();
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"success",
            'data'=>$data
            
        ]); 

    }
}
