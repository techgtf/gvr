<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Website\Timeline;
use App\Models\Website\TimelineImage;
use App\Models\Website\Team;
use App\Models\Website\Verticals;

class AboutController extends Controller
{
    public function Timeline (Request $request)
    {
        $record = Timeline::get();
        try {
            $search="";
            if(!empty($request->search)){
                $search = $request->search;
            }
            $perPage = $request->input('per_page', 10);
            $page = $request->input('page', 1);

            $distinctYears = Timeline::select('year')->distinct()->pluck('year');

            $groupedRecords = $distinctYears->map(function ($year) {
                return [
                    'year' => $year,
                    'image' => TimelineImage::where('year', $year)->value('image'), // Get first timeline image
                    'records' => Timeline::where('year', $year)->get(['id', 'title', 'year', 'location', 'status', 'created_at']),
                    'images' => TimelineImage::where('year', $year)->pluck('image')->toArray(),
                ];
            });

            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Success ",
                'data'=>$groupedRecords
            ]);
  
            
        } catch (\Throwable $th) {

            return response()->json([
                'status'=> false,
                'statusCode'=> 500,
                'message'=>"Failed ",
                'errors'=>$th->getMessage(),
            ]);

        }
    }


    public function Team (Request $request) {
        try {

            $record = Team::all();

            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Success ",
                'data'=>$record
            ]);

        } catch (\Throwable $th) {
            return response()->json([
               'status' => true, 
               'statusCode' => 500,
               'message' => 'Failed',
               'errors' => $th->getMessage(),
            ]);
        }
    }
    
    
    public function Verticals (Request $request) {
        try {

            $record = Verticals::all();

            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Success ",
                'data'=>$record
            ]);

        } catch (\Throwable $th) {
            return response()->json([
               'status' => true, 
               'statusCode' => 500,
               'message' => 'Failed',
               'errors' => $th->getMessage(),
            ]);
        }
    }
    
}
