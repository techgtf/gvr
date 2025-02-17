<?php

use App\Http\Controllers\Admin\ContactController;
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

Route::group(['prefix'=>'admin','middleware'=>'admin.auth'],function(){
    Route::group(['middleware' => ['admin.auth']], function () {
        Route::get('contact', [ContactController::class,'index']);
    });
});
    

