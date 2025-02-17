<?php

use App\Http\Controllers\HelperController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Website\CitiesController;

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
          Route::get('jobtype',[HelperController::class,'jobType']);
          Route::get('jobyear',[HelperController::class,'jobYear']);
          Route::get('footer-platter',[HelperController::class,'footerPlatter']);
          // Route::get('location-type',[HelperController::class,'locationType']);


          
     });
});









    

