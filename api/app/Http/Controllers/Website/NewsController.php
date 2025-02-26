<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use App\Models\Website\News;


class NewsController extends Controller
{
    public function index () {
        
        try {
            $record = News::all();

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
