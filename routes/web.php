<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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


require __DIR__ . '/auth.php';


Route::get('/dashboard', function () {
    return inertia('Dashboard');
});

Route::get('/explore', function () {
    return inertia('Explore');
});

Route::get('/chat', function () {
    return inertia('Chat');
});
Route::get('/create', function () {
    return inertia('Create');
});
Route::get('/details', function () {
    return inertia('Details');
});