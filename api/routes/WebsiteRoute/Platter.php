<?php

use App\Http\Controllers\Admin\Project\ProjectGalleryController;
use App\Http\Controllers\Website\PlatterController;
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




Route::get('/platter',[PlatterController::class,'index']);
Route::get('/platter-detail/{slug}',[PlatterController::class,'platterDetail']);















    

