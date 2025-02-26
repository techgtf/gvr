<?php

use App\Http\Controllers\Webiste\HomePageController;
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




Route::get('/banner-icons',[\App\Http\Controllers\Website\HomePageController::class,'BannerIcons']);
Route::get('/infrastructure',[\App\Http\Controllers\Website\HomePageController::class,'Infrastructure']);
Route::get('/ethos',[\App\Http\Controllers\Website\HomePageController::class,'Ethos']);

 
Route::get('/offer',[\App\Http\Controllers\Website\BannerOfferController::class,'offerSlider']);
Route::get('/loan',[\App\Http\Controllers\Website\LoanController::class,'index']);


Route::get('/media',[\App\Http\Controllers\Website\HomePageController::class,'MediaLogo']);
