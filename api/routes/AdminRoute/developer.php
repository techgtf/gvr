<?php

use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Admin\DeveloperController;
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
        Route::apiResource('developer', DeveloperController::class)->except(['update']);
        Route::post('developer/{id}/update', [DeveloperController::class,'update']);

        Route::post('developer/{id}/status', [DeveloperController::class,'status']);
        Route::post('developer/{id}/is-popular', [DeveloperController::class,'IsPopular']);

    });
});
    

