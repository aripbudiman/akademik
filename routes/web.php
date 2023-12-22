<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\GuruController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;

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
    return Inertia::render('Home');
})->middleware('auth')->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/guru', [GuruController::class, 'index'])->name('guru');
    Route::get('/guru/create', [GuruController::class, 'create'])->name('guru.create');
    Route::post('/guru', [GuruController::class, 'store'])->name('guru.store');

    Route::get('user',[UserController::class, 'index'])->name('user');
    Route::get('user/create',[UserController::class, 'create'])->name('user.create');
    Route::post('user',[UserController::class, 'store'])->name('user.store');
    Route::get('user/{user}/edit',[UserController::class, 'edit'])->name('user.edit');
    Route::get('/control_panel', function () {
        return Inertia::render('ControlPanel');
    });
});










Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
