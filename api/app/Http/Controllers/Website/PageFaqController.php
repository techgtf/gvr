<?php

namespace App\Http\Controllers\website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\PagesFAQ;

class PageFaqController extends Controller
{
    public function FaqListing ($type){
        try {
            
            $record = PagesFAQ::where('type', $type)->get();

            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Success",
                'data'=>$record
            ]);

        } catch (\Throwable $e) {
            return response()->json([
                'status' => false,
                'statusCode' => 500,
                'message' => $e
            ]);
        }
    }
}
