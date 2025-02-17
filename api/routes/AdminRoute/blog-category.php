<?php

use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Admin\BlogCategoryController;
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
        Route::apiResource('blog-category', BlogCategoryController::class)->except(['update']);
        Route::post('blog-category/{id}/update', [BlogCategoryController::class,'update']);
        
        Route::post('blog-category/{id}/status', [BlogCategoryController::class,'status']);

    });
});
    

