<?php

use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Admin\AmenitiesController;
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
   
    Route::apiResource('amenities', AmenitiesController::class)->except(['update']);
    Route::post('amenities/{id}/update', [AmenitiesController::class,'update']);
    Route::post('amenities/status', [AmenitiesController::class,'statusUpdate']);
    Route::post('amenities/{id}/status', [AmenitiesController::class,'status']);

   
});
    

