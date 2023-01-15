<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MacskaController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');

});
Route::get('/cica', [MacskaController::class, 'index']);
Route::get('/cica/{id}', [MacskaController::class, 'show']);
/* Route::put('/cica/{id}', [MacskaController::class, 'update']);
Route::delete('/cica/{id}', [MacskaController::class, 'destroy']); */