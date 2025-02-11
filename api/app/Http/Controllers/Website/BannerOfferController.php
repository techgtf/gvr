<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\Project\BannerOffer;

class BannerOfferController extends Controller
{

    public function offerSlider (Request $request)
    {
      
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);
        $record = BannerOffer::paginate($perPage, ['*'], 'page', $page);
             
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$record
        ]);
        
    }


}
