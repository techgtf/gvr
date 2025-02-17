<?php

use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Admin\PagesFaqController;
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
        Route::apiResource('pagesfaq', PagesFaqController::class)->except(['update']);
        Route::post('pagesfaq/{id}/update', [PagesFaqController::class,'update']);
        Route::post('pagesfaq/{id}/status', [PagesFaqController::class,'status']);
        Route::post('pagesfaq/{id}/type', [PagesFaqController::class,'typeupdate']);

    });
});