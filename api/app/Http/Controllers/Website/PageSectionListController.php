<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\Blog;
use App\Models\Admin\PageSectionList;

class PageSectionListController extends Controller
{
    public function index ($sectiontype)
    {
        try {
           
            $record = PageSectionList::where('page_section',$sectiontype)->first();

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


    public function pagesListingSection ($pageId) {
        try {
            
            $record = PageSectionList::where('page_id', $pageId)->get();

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
