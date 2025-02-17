<?php

use App\Http\Controllers\Admin\Category\CategoryTypologyController;
use App\Http\Controllers\Admin\Typology\TypologySubTypologyController;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Admin\Typology\TypologiesController;
use  App\Http\Controllers\Admin\Typology\SubTypologiesController;

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
        Route::apiResource('typology', TypologiesController::class)->except(['update']);
        Route::post('typology/{id}/update', [TypologiesController::class,'update']);
        Route::post('typology/makeprimary/{id}', [TypologiesController::class,'makeprimary']);


        Route::resource('sub-typology', SubTypologiesController::class)->except(['update']);
        Route::post('sub-typology/{id}/update', [SubTypologiesController::class,'update']);


        Route::apiResource('typology-sub-typology', TypologySubTypologyController::class)->except(['update']);
        Route::post('typology-sub-typology/{id}/update', [TypologySubTypologyController::class,'update']);
        Route::get('all-typology-sub-typology', [TypologySubTypologyController::class,'allindex']);


        Route::get('getSubTypologyDistinct/{id}', [CategoryTypologyController::class,'getSubTypologyDistinct']);
        Route::get('getTypologyDistinctByCategory/{id}', [CategoryTypologyController::class,'getTypologyDistinct']);
        Route::get('get-all-subtyplogy-by-typology/{id}', [TypologySubTypologyController::class,'getAllSubtyplogyByTypology']);

        




    });
});
    

