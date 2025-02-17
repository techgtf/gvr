<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Admin\Admin;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    //

    public function __construct()
    {
        $this->middleware('admin.auth', ['except' => ['login','register']]);
    }
    public function login(Request $request)
    {
        $validator = Validator::make($request->input(), [
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ], [
            'email.required' => 'The email field is required.',
            'email.string' => 'The email must be a string.',
            'email.email' => 'Invalid email format.',
            'password.required' => 'The password field is required.',
            'password.string' => 'The password must be a string.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'statusCode' => 403,
                'message' => $validator->errors()->toArray(),
            ]);
        }
        


        
        $credentials = $request->only('email', 'password');

        $token = Auth::guard('admin')->attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::guard('admin')->user();
        return response()->json([
                'status' => 'success',
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);

    }

    public function register(Request $request){
        $validator = Validator::make($request->input(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:admins'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ], [
            'name.required' => 'The name field is required.',
            'name.string' => 'The name must be a string.',
            'name.max' => 'The name must not exceed 255 characters.',
            'email.required' => 'The email field is required.',
            'email.string' => 'The email must be a string.',
            'email.email' => 'Invalid email format.',
            'email.max' => 'The email must not exceed 255 characters.',
            'email.unique' => 'The email has already been taken.',
            'password.required' => 'The password field is required.',
            'password.string' => 'The password must be a string.',
            'password.min' => 'The password must be at least 8 characters.',
            'password.confirmed' => 'The password confirmation does not match.',
        ]);
        
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'statusCode' => 403,
                'message' => $validator->errors()->toArray(),
            ]);
        }
        
        $user = Admin::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = Auth::guard('admin')->login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function logout()
    {
        Auth::guard('admin')->logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
    
        return response()->json([
            'status' => 'success',
            'user' => Auth::guard('admin')->user(),
            'authorisation' => [
                'token' => Auth::guard('admin')->refresh(),
                'type' => 'bearer',
            ]
        ]);
    }

    public function CheckToken()
    {
    

        
        return response()->json([
            'status' => 'success',
            'message' => 'token is valid',
            'statusCode' =>200,
        ]);
    }




}
