<?php

use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Admin\SocialController;
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
   
    Route::apiResource('social-links', SocialController::class)->except(['update']);
    Route::post('social-links/{id}/update', [SocialController::class,'update']);
    Route::post('social-links/{id}/status', [SocialController::class,'status']);

   
});
    

