<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\Blog;

class BlogController extends Controller
{
    public function index (Request $request)
    {
        try {
            $search="";
            if(!empty($request->search)){
                $search = $request->search;
            }
            $perPage = $request->input('per_page', 10);
            $page = $request->input('page', 1);
            
            $record = Blog::search($search)->with('blogCategory')->paginate($perPage, ['*'], 'page', $page);

            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Success ",
                'data'=>$record
            ]);
      
        } catch (\Throwable $e) {
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
                'message'=>$e
            ]);
        }

    }

    public function topBlogs(Request $request)
    {
        $take = $request->input('limit', 5);

        $topblogs = Blog::with('blogCategory')->latest()->take($take)->get();
        
        try {
            return response()->json([
                'status' => true,
                'statuscode' => 200,
                'message' => 'Success',
                'data' => $topblogs
            ]);
      
        } catch (\Exception $e) {
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
                'message'=>$e
            ]);
        }
    }


    public function show ($id)
    {
        // $result = Blog::find($id);
        $result = Blog::with('blogCategory')->where('slug', '=', $id)->first();

        try {
            if(!empty($result)){

                return response()->json([
                    'status' => true,
                    'statusCode' => 200,
                    'message' => "Get Single Record",
                    'data' => $result,
                ]);
    
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' => "Matching record not found",
            ]);
        }

    }


}
