<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use App\Models\Admin\Developer;
use Illuminate\Http\Request;

class DeveloperController extends Controller
{
    public function index(Request $request)
    {
        $search="";
        if(!empty($request->search)){
            $search = $request->search;
        }

        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);
        $record = Developer::search($search)->select('*')->paginate($perPage, ['*'], 'page', $page);
            
        if(!$record->isEmpty()){
            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Success ",
                'data'=>$record
            ]);
        }

        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Failed ",
        ]);

    } 
}
