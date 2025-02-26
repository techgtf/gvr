<?php

use App\Http\Controllers\Admin\Project\ProjectGalleryController;
use App\Http\Controllers\Website\ProjectController;
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




Route::get('/project',[ProjectController::class,'index']);
Route::get('/project/{slug}',[ProjectController::class,'details']);


Route::get('/project/{project_id}/gallery',[ProjectController::class,'gallery']);
Route::get('/project/{project_id}/banner',[ProjectController::class,'banner']);

Route::get('/project/{project_id}/highlights',[ProjectController::class,'highlights']);
Route::get('/project/{project_id}/keyhighlights',[ProjectController::class,'keyhighlights']);
Route::get('/project/{project_id}/location-advantage',[ProjectController::class,'LocationAdvantage']);


Route::get('/project/{project_id}/floor-plan',[ProjectController::class,'FloorPlan']);
Route::get('/project/{project_id}/price',[ProjectController::class,'price']);
Route::get('/project/{project_id}/specifications',[ProjectController::class,'Specifications']);


Route::get('/project/{project_id}/project-sections',[ProjectController::class,'projectSections']);
Route::get('/project/{section_id}/section',[ProjectController::class,'projectSectionsData']);

Route::get('/project/{section_id}/amenities',[ProjectController::class,'Amenities']);
Route::get('/project/{section_id}/amenities-galleries',[ProjectController::class,'AmenitiesGalleries']);
Route::get('/project/{section_id}/faq',[ProjectController::class,'getFaq']);



Route::get('/get-all-projectImages', [ProjectController::class, 'ProjectImages']);










    

