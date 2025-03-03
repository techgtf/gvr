<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use App\Models\Website\Ethos;
use App\Models\Website\MediaLogo;
use Illuminate\Http\Request;
use App\Models\Website\Typology;
use App\Models\Website\Infrastructure;

class HomePageController extends Controller
{
    public function BannerIcons(){
        $totalitem=array();
        $primarytypology=Typology::where('primary',1)->get();
        foreach ($primarytypology as $key => $value) {
           $data= array(
                'id'=>$value->id,
                'value'=>$value->slug,
                'name'=>$value->typology,
                'image'=>$value->image,
                'type'=>'typology',


           );
           $totalitem[]=$data;
        }

        $statuslist=getprojectStatus();
        foreach ($statuslist as $key => $value) {
            $data= array(
                'id'=>$key,
                'value'=>$value['slug'],
                'name'=>$value['title'],
                'image'=>$value['icons'],
                'type'=>'project-status',
           );
           $totalitem[]=$data;
            # code...
        }
 



        return $totalitem;
    }


    public function Infrastructure (Request $request)
    {
        $record = Infrastructure::get();
        try {
            $search="";
        if(!empty($request->search)){
            $search = $request->search;
        }
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);
        $record = Infrastructure::search($search)->select('*')->paginate($perPage, ['*'], 'page', $page);
        
      
            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Success ",
                'data'=>$record
            ]);
  
      
        } catch (\Throwable $th) {
            return response()->json([
                'status'=> false,
                'statusCode'=> 500,
                'message'=>"Failed ",
                'errors'=>$th
            ]);
        }

        
    }


    public function Ethos(Request $request)
    {
        try {
            $search="";
            if(!empty($request->search)){
                $search = $request->search;
            }
            $perPage = $request->input('per_page', 10);
            $page = $request->input('page', 1);
            $record = Ethos::search($search)->select('*')->paginate($perPage, ['*'], 'page', $page);
            
      
            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Success ",
                'data'=>$record
            ]);
  
      
        } catch (\Throwable $th) {
            return response()->json([
                'status'=> false,
                'statusCode'=> 500,
                'message'=>"Failed ",
                'errors'=>$th->getMessage(),
            ]);
        }
    }
    

    public function MediaLogo ()
    {
        $record = MediaLogo::get();
        try {
            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Success",
                'data'=>$record
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status'=> false,
                'statusCode'=> 500,
                'message'=>"Failed",
                'errors'=>$th->getMessage(),
            ]);
        }
    }

}
