<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\JobApplication;
use Illuminate\Http\Request;

class JobApplicationController extends Controller
{
    //

    public function index(Request $request){

     $search="";
     if(!empty($request->search)){
         $search = $request->search;
     }
     $perPage = $request->input('per_page', 10);
     $page = $request->input('page', 1);
     $record = JobApplication::search($search)->paginate($perPage, ['*'], 'page', $page);
          
     return response()->json([
         'status'=>true,
         'statusCode'=>200,
         'message'=>"Success ",
         'data'=>$record
     ]);


    }
}
