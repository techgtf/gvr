<?php

use App\Http\Controllers\Admin\CityController;
use App\Http\Controllers\Admin\LocalityController;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Admin\LocationController;
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
        Route::apiResource('cities', CityController::class)->except(['update']);
        Route::post('cities/{id}/update', [CityController::class,'update']);
        Route::get('cities/locality/{id}', [CityController::class,'getLocalityByCity']);
        Route::post('cities/{id}/popular', [CityController::class,'popular']);
        Route::apiResource('locations', LocationController::class);

        Route::apiResource('localities', LocalityController::class)->except(['update']);
        Route::post('localities/{id}/update', [LocalityController::class,'update']);
        Route::post('localities/{id}/status', [LocalityController::class,'status']);
        Route::post('location/nearerst-place', [LocationController::class,'nearby']);


    });
});


