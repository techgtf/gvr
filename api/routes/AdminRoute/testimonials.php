<?php

use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Admin\TestimonialsController;
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
        Route::apiResource('testimonials', TestimonialsController::class)->except(['update']);
        Route::post('testimonials/{id}/update', [TestimonialsController::class,'update']);
        Route::post('testimonials/{id}/status', [TestimonialsController::class,'status']);
    });
});
    

