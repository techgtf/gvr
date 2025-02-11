<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Admin\Country;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        $this->middleware('admin.auth');
    }
    

    public function index(Request $request)
    {
    
        $search="";
        if(!empty($request->search)){
            $search=$request->search;
        }
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);
        $countries = Country::search($search)->paginate($perPage, ['*'], 'page', $page);
             
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$countries
        ]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'country'=>'required|unique:countries,country',
            'countrycode'=>'required',

        ],[
            'country.required'=>'Country Name is Required',
            'countrycode.required'=>'Country Code is Required'
        ]);

        if($validator->fails()){

            return response()->json([
                    'status'=>3,
                    'statusCode'=>400,
                    'message'=>$validator->errors()
            ]);

        }else{

            $Countries = new Country();
            $Countries->country = $request->country;
            $Countries->country_code = $request->countrycode;

            if($Countries->save()){
                return response()->json([
                    'status'=>1,
                    'statusCode'=>200,
                    'message'=>'Countries Addedd Sucessfully'
                ]);
            }else{
                return response()->json([
                    'status'=>0,
                    'statusCode'=>400,
                    'message'=>'Failed to add Countries'
            ]);
            }


        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $stateRecord = Country::find($id);
        if($stateRecord){
            return response()->json([
                'status' => 1,
                'statusCode' => 200,
                'message' => 'Get Single Record',
                'data' => $stateRecord
            ]);
        } else {
            return response()->json([
                'status' => 0,
                'statusCode' => 404,
                'message' => 'Result Not Found'
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $validator = Validator::make($request->all(),[
            'country'=>'required|unique:countries,country',
            'countrycode'=>'required',

        ],[
            'country.required'=>'Country Name is Required',
            'countrycode.required'=>'Country Code is Required'
        ]);

        if($validator->fails()){

            return response()->json([
                    'status'=>3,
                    'statusCode'=>400,
                    'message'=>$validator->errors()
            ]);

        }else{

            $Countries = new Country();
            $updateCountries = $Countries->find($id);

            if(!empty($updateCountries)){
                $updateCountries->country = $request->country;
                $updateCountries->country_code = $request->countrycode;
                $updateCountries->slug = $request->slug;

                if($updateCountries->save()){
                    return response()->json([
                        'status' => 1,
                        'statusCode' => 200,
                        'message' => 'Country Updated Successfully',
                        'data' => $updateCountries
                    ]);

                }else{
                    return response()->json([
                        'status' => 0,
                        'statusCode' => 400,
                        'message' => 'Failed to update Country'
                    ]);
                }

            }else {
                return response()->json([
                    'status' => 0,
                    'statusCode' => 404,
                    'message' => 'Country not found'
                ]);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
