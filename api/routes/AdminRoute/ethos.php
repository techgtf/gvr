<?php

use App\Http\Controllers\Admin\EthosController;
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
   
    Route::apiResource('ethos', EthosController::class)->except(['update']);
    Route::post('ethos/{id}/update', [EthosController::class,'update']);
    Route::post('ethos/status', [EthosController::class,'statusUpdate']);
    Route::post('ethos/{id}/status', [EthosController::class,'status']);

   
});
    

