<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Website\Communities;
use App\Models\Website\Education;
use App\Models\Website\Gallery;

class CsrController extends Controller
{
    public function Communities (Request $request){
        try {
            $record = Communities::all();

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


    public function education () {
        try {
            $record = Education::all();

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
