<?php

namespace App\Http\Controllers\Admin\Home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Admin\Home\BannerContent;

class BannerContentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        // $search="";
        // if(!empty($request->search)){
        //     $search = $request->search;
        // }
        // $perPage = $request->input('per_page', 3);
        // $page = $request->input('page', 1);
        // $record = BannerContent::search($search)->select('developers.*','developer as name')->paginate($perPage, ['*'], 'page', $page);
             
        // return response()->json([
        //     'status'=>true,
        //     'statusCode'=>200,
        //     'message'=>"Success ",
        //     'data'=>$record
        // ]);
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
        $validator = Validator::make($request->all(), [
            'sub_heading' => 'required',
            'heading' => 'required',
        ],[
            'sub_heading' => 'This field is required',
            'heading' => 'This field is required',
        ]);


        if($validator->fails()){

            return response()->json([
                'status' => true,
                'statusCode' => 403,
                'message' => $validator->errors(),
            ]);

        }else{
            try {
                $bannerQuery = new BannerContent();
                $bannerQuery->sub_heading = $request->sub_heading;
                $bannerQuery->headinng = $request->heading;
                $bannerQuery->description = $request->description;
        
        
                if($bannerQuery->save()){
                    return response()->json([
                        'status' => true,
                        'statusCode' => 200,
                        'message' => "Add to Banner Successfully",
                        'data' => $bannerQuery,
                    ]);

                }else{
                    return response()->json([
                        'status' => false,
                        'statusCode' => 400,
                        'message' => "Failde to add Banner "
                    ]);
                }

            } catch (\Throwable $e) {
                return response()->json([
                    'status' => false,
                    'statusCode' => 500,
                    'message' => "Something went wrong",
                    'error' => $e
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
        $result = BannerContent::find($id);
        if(!empty($result)){

            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' => "Get Single Record",
                'data' => $result,
            ]);

        }else{

            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' => "Matching record not found",
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
        //
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
        //
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
