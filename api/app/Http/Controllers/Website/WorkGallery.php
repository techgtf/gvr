<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Website\WorkGallery as WorkGalleryModel;

class WorkGallery extends Controller
{
    public function index (Request $request)
    {   
        $perPage = $request->input('per_page', 3);
        $page = $request->input('page', 1);
        $record = WorkGalleryModel::paginate($perPage, ['*'], 'page', $page);
    
        return response()->json([
            'status' => true,
            'statusCode' => 200,
            'message' => 'Get All Records',
            'data' => $record
        ]);
    }
}
