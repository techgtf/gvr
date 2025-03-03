<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Website\EsgDetailsSection;
 
use App\Models\Website\Gallery;

class EsgController extends Controller
{
    public function EsgDataList ($type){

        try {
            $record = EsgDetailsSection::where('type', $type)->get();

            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' => 'Success',
                'data' => $record,
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'statusCode' => 500,
                'message' => 'Failed',
                'errors' => $th->getMessage(),
            ]);
        }
    }
 

    public function gallery () {
        try {
            $record = Gallery::all();

            return response()->json([
                'staus' => true,
                'statusCode' => 200,
                'message' => 'Success',
                'data' => $record
            ]);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'statusCode' => 500,
                'message' => 'Failed',
                'errors' => $th->getMessage(),
            ]);
        }
    }
    
}
