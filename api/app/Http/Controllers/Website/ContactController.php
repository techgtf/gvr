<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Website\Contact;

class ContactController extends Controller
{
    
    public function store (Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required|integer',
            'message' => 'required'
        ],[
            'name.required' => 'The Name field is required',
            'email.required' => 'The Email field is required',
            'email.email' => 'Invalid Email',

            'phone.required' => 'The Phone field is required',
            'phone.integer' => 'Only Integer is allowed',

            'message.required' => 'The Message field is required',
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
                
                $record = new Contact();
                $record->name = $request->name;
                $record->phone = $request->phone;
                $record->email = $request->email;
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
                    'error' => $e
                ]);
            }
        }  
    }


}
