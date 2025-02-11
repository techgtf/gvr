<?php

use App\Http\Controllers\Admin\JobApplicationController;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Admin\CareerController;
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
        Route::apiResource('career', CareerController::class)->except(['update']);
        Route::post('career/{id}/update', [CareerController::class,'update']);
        Route::post('career/{id}/status', [CareerController::class,'status']);



        Route::get('job-application', [JobApplicationController::class,'index']);

    });
});
    

