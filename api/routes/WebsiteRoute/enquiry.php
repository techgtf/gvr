<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Website\Enquiry\ProjectEnquiryController;
use App\Http\Controllers\Website\ContactController;

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

Route::get('enquiry', [ProjectEnquiryController::class,  'index']);
Route::post('enquiry', [ProjectEnquiryController::class,  'store']);
Route::get('enquiry/{id}', [ProjectEnquiryController::class,  'show']);
    

// contact rouets

Route::post('contact', [ContactController::class, 'store']);
