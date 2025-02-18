<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Website\Timeline;
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
            $record = Timeline::search($search)->select('*')->paginate($perPage, ['*'], 'page', $page);
            
            $groupedRecords = $record->groupBy('year')->map(function ($items, $year) {
                return [
                    'year' => $year,
                    'image' => $items->first()->image,
                    'records' => $items->map(function ($item) {
                        return [
                            'id' => $item->id,
                            'title' => $item->title,
                            'location' => $item->location,
                            'status' => $item->status,
                            'created_at' => $item->created_at,
                        ];
                    })->values(),
                ];
            })->values();

            
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
