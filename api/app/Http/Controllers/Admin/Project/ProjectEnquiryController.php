<?php

namespace App\Http\Controllers\Admin\Project;

use App\Http\Controllers\Controller;
use App\Models\Admin\Developer;
use App\Models\Admin\Enquiry\ProjectEnquiry;
use Illuminate\Http\Request;

class ProjectEnquiryController extends Controller
{
    //

    public function index(Request $request)
    {
        $search = '';
        if(!empty($request->search)){
            $search = $request->search;
        }
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);
        $record = ProjectEnquiry::search($search)->paginate($perPage, ['*'], 'page', $page);

        return response()->json([
            'status' => true,
            'statusCode' => 200,
            'message' => 'Success',
            'data' => $record
        ]);

    }

    public function getDeveloperWithCountProject(Request $request)
    {
        $search = '';
        if(!empty($request->search)){
            $search = $request->search;
        }
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);
        $record = Developer::search($search)->withCount('projects')
        ->paginate($perPage, ['*'], 'page', $page);
        return response()->json([
            'status' => true,
            'statusCode' => 200,
            'message' => 'Success',
            'data' => $record
        ]);

    }


}
