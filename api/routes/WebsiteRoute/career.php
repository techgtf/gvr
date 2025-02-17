<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Website\CareerController;

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




Route::post('/apply-for-job',[CareerController::class, 'store']);
Route::get('/career',[CareerController::class,'list']);
Route::get('/career/{slug}',[CareerController::class,'detail']);




    

