<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Website\JobApplication;
use App\Models\Website\Career;

class CareerController extends Controller
{

    public function store (Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required|integer',
            'file' => 'required|mimes:pdf',
            'designation' => 'required',
            'experience' => 'required',
            'message' => 'required',
        ],[
            'name.required' => 'The Name field is required',
            'email.required' => 'The Email field is required',
            'email.email' => 'Invalid Email',

            'phone.required' => 'The Phone field is required',
            'phone.integer' => 'Only Integer is allowed',
            'file.required' => 'This field is required',
            'file.mimes' => "Allow only pdf file selected",
            'designation.required' => 'This field is required',
            'experience.required' => 'This field is required',
            'message.required' => 'This field is required',

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

                if($request->has('file')){
                    $name = now()->timestamp.".{$request->file->getClientOriginalName()}";
                    $path = $request->file('file')->storeAs('resume', $name, 'public');
                }

                $record = new JobApplication();
                $record->experience = $request->experience;
                $record->name = $request->name;
                $record->phone = $request->phone;
                $record->email = $request->email;
                $record->resume = $path;
                $record->designation = $request->designation;
                $record->message = $request->message;
               

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
                    'error' => $e->getMessage()
                ]);
            }
        }
    }


    public function list (Request $request)
    {
        $search="";
        if(!empty($request->search)){
            $search = $request->search;
        }


        $perPage = $request->input('per_page', 5);
        $page = $request->input('page', 1);
        $record = Career::search($search)->select('*')->paginate($perPage, ['*'], 'page', $page);
            
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$record
        ]);
        
    }

    
    public function detail ($slug)
    {

        $record = Career::where('slug',$slug)->first();
            
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$record
        ]);
        
    }


}
