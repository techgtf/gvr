<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\TimelineController;

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

Route::group(['prefix'=>'admin'],function(){
    Route::group(['middleware' => ['admin.auth']], function () {
        Route::apiResource('timeline', TimelineController::class)->except(['update']);
        Route::post('timeline/{id}/update', [TimelineController::class,'update']);
        Route::post('timeline/{id}/status', [TimelineController::class,'status']);
    });
});
    

