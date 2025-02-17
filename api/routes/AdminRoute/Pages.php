<?php

use App\Http\Controllers\Admin\PageMetaController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Auth\AdminController;
use App\Http\Controllers\Admin\PageSectionController;

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
        Route::apiResource('page/page-sections', PageSectionController::class);
        Route::resource('page-meta', PageMetaController::class);
        Route::get('distinct-pages', [PageMetaController::class,'DistinctPages']);
        Route::get('page/{id}', [PageSectionController::class,'getSecionList']);
    });
});