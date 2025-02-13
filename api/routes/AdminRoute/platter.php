<?php
use App\Http\Controllers\Admin\Platters\PlatterBannerController;
use App\Http\Controllers\Admin\Platters\PlatterController;
use App\Http\Controllers\Admin\Project\FloorPlanController;
use App\Http\Controllers\Admin\Project\ProjectAmenitiesController;
use App\Http\Controllers\Admin\Project\ProjectFaqController;
use App\Http\Controllers\Admin\Project\ProjectGalleryController;
use App\Http\Controllers\Admin\Project\ProjectHighlightController;
use App\Http\Controllers\Admin\Project\ProjectLocationAdvantageController;
use App\Http\Controllers\Admin\Project\ProjectLocationController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\ProjectSectionController;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Admin\LocalityController;

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
        
        Route::resource('platter-page', PlatterController::class)->except(['update']);
        Route::post('platter-page/{id}/update', [PlatterController::class,'update']);
        Route::post('platter-page/{id}/status', [PlatterBannerController::class,'status']);


        Route::post('platter-page/{id}/footer-status', [PlatterBannerController::class,'footerStatus']);


        Route::post('platter/banner/update', [PlatterController::class,'update']);
        Route::resource('platter/{platterid}/banner', PlatterBannerController::class)->except(['update']);
        Route::post('platter/{platterid}/banner/{id}/update', [PlatterBannerController::class,'update']);
        Route::post('platter/banner/{id}/status', [PlatterBannerController::class,'status']);

    });
});
    

