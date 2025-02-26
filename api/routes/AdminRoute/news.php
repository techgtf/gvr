<?php

use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Admin\NewsController;
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
   
    Route::apiResource('news', NewsController::class)->except(['update']);
    Route::post('news/{id}/update', [NewsController::class,'update']);
    Route::post('news/{id}/status', [NewsController::class,'status']);

   
});
    

