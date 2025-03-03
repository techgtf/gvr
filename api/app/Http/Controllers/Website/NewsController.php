<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use App\Models\Website\News;
use Illuminate\Http\Request;
 

class NewsController extends Controller
{
    public function index (Request $request, $type) {
        
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);
        try {
 
            $record = News::where('type', $type)->paginate($perPage, ['*'], 'page', $page);

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
