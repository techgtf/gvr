<?php

use App\Http\Controllers\Admin\EthosController;
use App\Http\Controllers\Admin\InfrastructureController;
use Illuminate\Support\Facades\Route;
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
   
    Route::apiResource('infrastructure', InfrastructureController::class)->except(['update']);
    Route::post('infrastructure/{id}/update', [InfrastructureController::class,'update']);
    Route::post('infrastructure/status', [InfrastructureController::class,'statusUpdate']);
    Route::post('infrastructure/{id}/status', [InfrastructureController::class,'status']);

   
});
    

