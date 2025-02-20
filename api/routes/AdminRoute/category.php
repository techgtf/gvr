<?php

use App\Http\Controllers\Admin\Category\CategoryTypologyController;
use App\Models\Admin\CategoryTypology;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Admin\Project\CategoryController;
use  App\Http\Controllers\Admin\Project\CateoryOverviewController;
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
    Route::group(['middleware' => ['admin.auth','admin.refreshtoken']], function () {

        Route::apiResource('category', CategoryController::class)->except(['update']);
        Route::get('category/getbyslug/{slug}', [CategoryController::class,'getDataBySlug']);

        Route::post('category/{id}/update', [CategoryController::class,'update']);
        Route::post('category/{id}/status', [CategoryController::class,'status']);
        
        
        Route::apiResource('category-typology', CategoryTypologyController::class)->except(['update']);
        Route::post('category-typology/{id}/update', [CategoryTypologyController::class,'update']);


        Route::apiResource('category/{id}/overview', CateoryOverviewController::class)->except(['update']);
        Route::post('category/{id}/update', [CategoryController::class,'update']);

    });
});


