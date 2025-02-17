<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\City;

class CitiesController extends Controller
{

    public function index()
    {
        $cities = City::get();

        try {
            if(!empty($cities)){
                return response()->json([
                    'status' => true,
                    'statuscode' => 200,
                    'message' => 'Success',
                    'data' => $cities
                ]);
            }
        } catch (\Exception $e) {
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
                'message'=>"Something went wrong"
            ]);
        }
    }

    public function topCities()
    {
        $cities = City::withCount('propertiesLocation')->where('is_popular', 1)->get();

        try {
            if(!empty($cities)){
                return response()->json([
                    'status' => true,
                    'statusCode' => 200,
                    'message' => 'Success',
                    'data' => $cities
                ]);
            }
        } catch (\Exception $e) {
            return response()->json([
                'status'=>false,
                'statusCode'=>500,
                'message'=>"Something went wrong"
            ]);
        }

    }

}   
