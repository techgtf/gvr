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




Route::get('/pricetype',[HelperController::class,'pricetype']);
Route::get('/sizetype',[HelperController::class,'sizetype']);

Route::get('/getCategory',[HelperController::class,'getCategory']);
Route::get('/getCategory/{slug}',[HelperController::class,'getCategoryBySlug']);
Route::get('category-typology/{categories_slug}', [HelperController::class,'getCategoryTypology']);

Route::get('/geAllTypology',[HelperController::class,'geAllTypology']);
Route::get('/projectstatus',[HelperController::class,'projectstatus']);

Route::get('/job-experience',[HelperController::class,'jobYear']);
Route::get('/get-page-meta/{pageid}',[HelperController::class,'getpageMeta']);



Route::get('/location-type',[HelperController::class,'locationType']);
Route::get('location-advantage-type', [HelperController::class,'getTypesLocationAdvantage']);
Route::get('/getAllCity',[HelperController::class,'getAllCity']);




