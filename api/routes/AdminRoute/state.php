<?php

use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Admin\StateController;
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
    Route::group(['middleware' => ['admin.auth']], function () {
        Route::apiResource('state', StateController::class)->except(['update']);
        Route::post('state/{id}/update', [StateController::class,'update']);
        Route::get('state/city/{id}', [StateController::class,'getCityByState']);

    });
});
    

