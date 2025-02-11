<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Auth\AdminController;
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
    Route::post('/login',[AdminController::class,'login']);
    Route::post('/register',[AdminController::class,'register']);
    Route::post('/refresh',[AdminController::class,'refresh']);
    Route::post('/validateToken',[AdminController::class,'CheckToken']);


});
    

