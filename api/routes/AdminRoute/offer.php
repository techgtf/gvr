<?php

use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Admin\Project\BannerOfferController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix'=>'admin','middleware'=>'admin.auth'],function(){
   
    Route::apiResource('offer', BannerOfferController::class)->except(['update']);
    Route::post('offer/{id}/update', [BannerOfferController::class,'update']);
    Route::post('offer/{id}/status', [BannerOfferController::class,'status']);

   
});
    

