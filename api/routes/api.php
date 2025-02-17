<?php

use Illuminate\Http\Request;
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

$adminroutes = glob(__DIR__ . "/AdminRoute/*.php");
$userRoutes = glob(__DIR__ . "/WebsiteRoute/*.php");

foreach ($adminroutes as $route) require($route);
foreach ($userRoutes as $route) require($route);


