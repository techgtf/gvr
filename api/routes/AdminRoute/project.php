<?php

use App\Http\Controllers\Admin\Project\FloorPlanController;
use App\Http\Controllers\Admin\Project\ProjectAmenitiesController;
use App\Http\Controllers\Admin\Project\ProjectAmenitiesGalleryController;
use App\Http\Controllers\Admin\Project\ProjectBannerController;
use App\Http\Controllers\Admin\Project\ProjectEnquiryController;
use App\Http\Controllers\Admin\Project\ProjectFaqController;
use App\Http\Controllers\Admin\Project\ProjectGalleryController;
use App\Http\Controllers\Admin\Project\ProjectHighlightController;
use App\Http\Controllers\Admin\Project\ProjectLocationAdvantageController;
use App\Http\Controllers\Admin\Project\ProjectLocationController;
use App\Http\Controllers\Admin\Project\ProjectSpecificationController;
use App\Http\Controllers\Admin\Project\ProjectSpecificationListController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\ProjectSectionController;
use App\Models\Admin\Project\ProjectBanner;
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

        Route::get('project-enquiry-developer', [ProjectEnquiryController::class,'getDeveloperWithCountProject']);

        Route::apiResource('project-section', ProjectSectionController::class)->except(['update']);
        Route::post('project-section/{id}/update', [ProjectSectionController::class,'update']);
        Route::get('project-section-list', [ProjectSectionController::class,'sectionlist']);
        Route::post('project-section-sequence', [ProjectSectionController::class,'ChangeSequence']);

            
        Route::post('show-by-project-with-sectionType', [ProjectSectionController::class,'showByProjectWithSectionType']);
        
        


        // project crud 
        Route::resource('project', ProjectController::class)->except(['update']);
        Route::post('project/{id}/update', [ProjectController::class,'update']);
        Route::post('project/{id}/feature', [ProjectController::class, 'projectIsFeature']);
        Route::get('project-status-list', [ProjectController::class,'statuslist']);
        Route::get('project/{id}/deletelogo', [ProjectController::class, 'deleteProjectLogo']);
        Route::get('project/{id}/deletebrochure', [ProjectController::class, 'deleteProjectBrochure']);
        // end crud 


        


        // amenities && amenities gallery  
        Route::resource('projectdata/amenities', ProjectAmenitiesController::class)->names([
            'index' => 'amenities.index', // Rename the conflicting route name
        ])->except(['update']);
        Route::post('projectdata/amenities/{id}/update', [ProjectAmenitiesController::class,'update']);
        
        
        Route::resource('projectdata/amenities-gallery', ProjectAmenitiesGalleryController::class)->except(['update','destroy']);
        Route::post('projectdata/amenities-gallery/{id}/update', [ProjectAmenitiesGalleryController::class,'update']);
        Route::post('projectdata/amenities-gallerydelete/{id}', [ProjectAmenitiesGalleryController::class,'destroy']);
        // end amenities  
        


        
        // faq 
        Route::resource('projectdata/faq', ProjectFaqController::class)->except(['update','destroy']);
        Route::post('projectdata/faq/{id}/update', [ProjectFaqController::class,'update']);
        Route::post('projectdata/faq/{id}/delete', [ProjectFaqController::class,'destroy']);



        Route::resource('projectdata/location', ProjectLocationController::class)->except(['update']);
        Route::post('projectdata/location/{id}/update', [ProjectLocationController::class,'update']);
        Route::get('projectdata/location/getByProject/{projectid}', [ProjectLocationController::class,'getByProject']);


        // floor plan 
        Route::resource('projectdata/floor-plan', FloorPlanController::class)->except(['update','destroy']);
        Route::post('projectdata/floor-plan/{id}/update', [FloorPlanController::class,'update']);
        Route::post('projectdata/floor-plan/{id}/delete', [FloorPlanController::class,'destroy']);

        Route::post('projectdata/floor-plan/{id}/status', [FloorPlanController::class,'status']);
        Route::post('projectdata/floor-plan/{id}/protected', [FloorPlanController::class,'MakeProtected']);
        // end floor plan 



        
        // gallery  
        Route::resource('projectdata/gallery', ProjectGalleryController::class)->except(['update','destroy']);
        Route::post('projectdata/gallery/{id}/update', [ProjectGalleryController::class,'update']);
        Route::post('projectdata/gallerydelete/{id}', [ProjectGalleryController::class,'destroy']);


        //  banner 
        Route::resource('projectdata/banner', ProjectBannerController::class)->except(['update','destroy']);
        Route::post('projectdata/banner/{id}/update', [ProjectBannerController::class,'update']);
        Route::post('projectdata/bannerdelete/{id}', [ProjectBannerController::class,'destroy']);
        // end banner 

        

        Route::get('projectsectionlist', [ProjectController::class,'projectsectionlist']);



        Route::resource('projectdata/highlights', ProjectHighlightController::class)->except(['update','destroy']);
        Route::post('projectdata/highlights/{id}/keyhighlight', [ProjectHighlightController::class,'keyhighlightupdate']);
        Route::post('projectdata/highlights/{id}/update', [ProjectHighlightController::class,'update']);
        Route::post('projectdata/highlights/{id}/delete', [ProjectHighlightController::class,'destroy']);



        Route::resource('projectdata/specification', ProjectSpecificationController::class)->except(['update','destroy']);
        Route::post('projectdata/specification/{id}/update', [ProjectSpecificationController::class,'update']);
        Route::delete('projectdata/specification/{id}/delete', [ProjectSpecificationController::class,'destroy']);


        
        Route::resource('projectdata/specificationlist', ProjectSpecificationListController::class)->except(['update','destroy']);
        Route::post('projectdata/specificationlist/{id}/update', [ProjectSpecificationListController::class,'update']);
        Route::delete('projectdata/specificationlist/{id}/delete', [ProjectSpecificationListController::class,'destroy']);
    

        

        // location advantage 
        Route::resource('projectdata/location-advantage', ProjectLocationAdvantageController::class)->except(['update','destroy']);
        Route::post('projectdata/location-advantage/{id}/update', [ProjectLocationAdvantageController::class,'update']);
        Route::delete('projectdata/location-advantage/{id}/delete', [ProjectLocationAdvantageController::class,'destroy']);

    
    });
});
    

