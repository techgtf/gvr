<?php
 
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

 
Route::get('/esg-list/{type}',[\App\Http\Controllers\Website\EsgController::class,'EsgDataList']);
Route::get('/gallery',[\App\Http\Controllers\Website\EsgController::class,'Gallery']);
