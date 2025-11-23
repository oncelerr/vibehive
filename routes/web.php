<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

// Authentication routes
Route::post('/api/login', [AuthController::class, 'login']);
Route::post('/api/logout', [AuthController::class, 'logout']);
Route::get('/api/user', [AuthController::class, 'user']);

// Root route
Route::get('/', function () {
    return view('welcome');
});

// Catch-all route for React Router
Route::get('/{path?}', function () {
    return view('welcome');
})->where('path', '.*');
