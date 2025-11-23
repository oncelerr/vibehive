<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

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

Route::post('/login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if (Auth::attempt($request->only('email', 'password'))) {
        $request->session()->regenerate();
        
        return response()->json([
            'success' => true,
            'user' => Auth::user(),
            'message' => 'Login successful'
        ]);
    }

    return response()->json([
        'success' => false,
        'message' => 'Invalid credentials'
    ], 401);
});

Route::post('/logout', function (Request $request) {
    Auth::logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    
    return response()->json([
        'success' => true,
        'message' => 'Logged out successfully'
    ]);
});

Route::get('/user', function (Request $request) {
    if (Auth::check()) {
        return response()->json([
            'success' => true,
            'user' => Auth::user()
        ]);
    }
    
    return response()->json([
        'success' => false,
        'message' => 'Not authenticated'
    ], 401);
});
