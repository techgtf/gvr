<?php

namespace App\Http\Controllers\Website\Enquiry;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Admin\Enquiry\ProjectEnquiry;
use App\Models\Website\Projects;
use GuzzleHttp\Client;


class ProjectEnquiryController extends Controller
{

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

    public function store (Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required|integer',
            'message' => 'required',
            'project_id' => 'required',
        ],[
            'name.required' => 'The Name field is required',
            'email.required' => 'The Email field is required',
            'email.email' => 'Invalid Email',

            'phone.required' => 'The Phone field is required',
            'phone.integer' => 'Only Integer is allowed',

            'message.required' => 'The Message field is required',

            'project_id' => 'This field is required'
        ]);

        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => "Please fill all mandatory fields",
                'errors'=>$validator->errors()
            ]); 

        }else{
            try{
                $getproject=Projects::find($request->project_id);
                
                $record = new ProjectEnquiry();
                $record->name = $request->name;
                $record->project_id = $request->project_id;
                $record->phone = $request->phone;
                $record->email = $request->email;
                $record->message = $request->message;


              
                $client = new Client();
                $response = $client->request('GET', 'https://api2.gtftech.com/AjaxHelper/AgentInstantQuerySetter.aspx?qAgentID='.env('AGENT_ID').'&qSenderName='.$request->name.'&qMobileNo='.$request->phone.'&qEmailID='.$request->email.'&qQueryMessage='.$request->message.'&qProjectName='.$getproject->name.'');

                $status = $response->getStatusCode();

                $body = $response->getBody()->getContents();
                $data = json_decode($body, true);

                if($record->save()){              
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'message'=>"Add Enquiry Sucessfully ",
                        'data'=>$record
                    ]);
                }else{
                    return response()->json([
                        'status'=>true,
                        'statusCode'=>400,
                        'message'=>"Failde to add Blog"
                    ]);
                }
    
            }catch(\Exception $e){
                return response()->json([
                    'status'=>false,
                    'statusCode'=>500,
                    'message'=>"Something went wrong",
                    'error' => $e
                ]);
            }
        }  

    }

    public function show($id)
    {
        $query = ProjectEnquiry::where('project_id', '=', $id)->get();

        if($query){
            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Success",
                'data' => $query
            ]);
        }

        return response()->json([
            'status'=>true,
            'statusCode'=>404,
            'message'=>"Something went wrong",
        ]);

    }
}   
