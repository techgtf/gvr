<?php

use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Admin\MediaLogoController;
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
   
    Route::apiResource('media', MediaLogoController::class)->except(['update']);
    Route::post('media/{id}/update', [MediaLogoController::class,'update']);
    Route::post('media/status', [MediaLogoController::class,'statusUpdate']);
    Route::post('media/{id}/status', [MediaLogoController::class,'status']);

   
});
    

