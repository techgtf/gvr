<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Website\Testimonials;

class TestimonialsController extends Controller
{
    public function index (Request $request)
    {
        try {
            $search="";
        if(!empty($request->search)){
            $search = $request->search;
        }
        $perPage = $request->input('per_page', 3);
        $page = $request->input('page', 1);
        $record = Testimonials::search($search)->select('*')->paginate($perPage, ['*'], 'page', $page);
        
      
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
}
