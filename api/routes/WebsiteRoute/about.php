<?php

use App\Http\Controllers\Webiste\HomePageController;
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

 
Route::get('/timeline',[\App\Http\Controllers\Website\AboutController::class,'Timeline']);
Route::get('/team',[\App\Http\Controllers\Website\AboutController::class,'Team']);
Route::get('/verticals',[\App\Http\Controllers\Website\AboutController::class,'Verticals']);
