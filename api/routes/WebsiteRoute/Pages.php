<?php

use App\Http\Controllers\Admin\Project\ProjectGalleryController;
use App\Http\Controllers\Website\PageSectionListController;
use App\Http\Controllers\Website\PlatterController;
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

Route::get('/page/page-sections/{sectiontype}',[PageSectionListController::class,'index']);
Route::get('/page-sections/{id}', [PageSectionListController::class, 'pagesListingSection']);