<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\GuruController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\KelasController;
use App\Http\Controllers\SiswaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\IdentitasController;
use App\Http\Controllers\KurikulumController;
use App\Http\Controllers\PembayaranController;
use App\Http\Controllers\MataPelajaranController;
use App\Http\Controllers\JadwalPelajaranController;
use App\Http\Controllers\AbsensiController;
use App\Http\Controllers\BerkasController;
use App\Http\Controllers\RuanganController;
use App\Models\Siswa;
use App\Models\Guru;
use App\Models\Berkas;
use App\Http\Controllers\Siswa\AbsensiController as SiswasAbsensiController;
use App\Http\Controllers\Siswa\BerkasController as SiswasBerkasController;
use App\Http\Controllers\Siswa\PembayaranController as SiswasPembayaranController;
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
    $siswa=Siswa::count();
    $guru=Guru::count();
    $berkas=Berkas::count();
    return Inertia::render('Home',[
        'siswa' => $siswa,
        'guru' => $guru,
        'berkas' => $berkas
    ]);
})->middleware('auth')->name('home');
Route::prefix('siswa')->middleware('auth')->group(function () {
    Route::get('/lihat_absen', [SiswasAbsensiController::class, 'lihat'])->name('lihat_absensi');
    Route::get('/berkas',[SiswasBerkasController::class, 'index'])->name('siswa.berkas.index');
    Route::get('/pembayaran',[SiswasPembayaranController::class, 'index'])->name('siswa.pembayaran');
});
Route::prefix('guru')->middleware('auth')->group(function () {
    Route::get('/isi_absen/{ruangan}/ruangan/{mapel}',[AbsensiController::class, 'isi'])->name('isi_absen');
    Route::post('/isi_absen',[AbsensiController::class, 'isiAbsensi'])->name('isi_absen.isi');
});
Route::middleware('auth')->group(function () {
    Route::get('/guru', [GuruController::class, 'index'])->name('guru');
    Route::get('/guru/create', [GuruController::class, 'create'])->name('guru.create');
    Route::post('/guru/update',[GuruController::class, 'update'])->name('guru.update');
    Route::post('/guru', [GuruController::class, 'store'])->name('guru.store');

    Route::get('/user',[UserController::class, 'index'])->name('user');
    Route::get('/user/create',[UserController::class, 'create'])->name('user.create');
    Route::post('/user',[UserController::class, 'store'])->name('user.store');
    Route::get('/user/{user}/edit',[UserController::class, 'edit'])->name('user.edit');

    Route::get('/siswa',[SiswaController::class, 'index'])->name('siswa');
    Route::post('/siswa/update',[SiswaController::class, 'update'])->name('siswa.update');
    Route::delete('/siswa/{id}/delete', [SiswaController::class, 'destroy'])->name('siswa.delete');

    Route::get('/kurikulum',[KurikulumController::class, 'index'])->name('kurikulum');
    Route::get('/kurikulum/create',[KurikulumController::class, 'create'])->name('kurikulum.create');
    Route::post('/kurikulum',[KurikulumController::class, 'store'])->name('kurikulum.store');
    Route::get('/kurikulum/{kurikulum}/edit',[KurikulumController::class, 'edit'])->name('kurikulum.edit');
    Route::post('/kurikulum/{kurikulum}/update',[KurikulumController::class, 'update'])->name('kurikulum.update');
    Route::delete('/kurikulum/{kurikulum}/delete', [KurikulumController::class, 'destroy'])->name('kurikulum.delete');

    Route::get('/kelas',[KelasController::class, 'index'])->name('kelas');
    Route::get('/kelas/create',[KelasController::class, 'create'])->name('kelas.create');
    Route::post('/kelas',[KelasController::class, 'store'])->name('kelas.store');
    Route::get('/kelas/{kelas}/edit',[KelasController::class, 'edit'])->name('kelas.edit');
    Route::post('/kelas/{kelas}/update',[KelasController::class, 'update'])->name('kelas.update');
    Route::delete('/kelas/{kelas}/delete', [KelasController::class, 'destroy'])->name('kelas.delete');

    Route::get('/mata_pelajaran',[MataPelajaranController::class, 'index'])->name('mata_pelajaran');
    Route::get('/mata_pelajaran/create',[MataPelajaranController::class, 'create'])->name('mata_pelajaran.create');
    Route::post('/mata_pelajaran',[MataPelajaranController::class, 'store'])->name('mata_pelajaran.store');
    Route::get('/mata_pelajaran/{mata_pelajaran}/edit',[MataPelajaranController::class, 'edit'])->name('mata_pelajaran.edit');
    Route::post('/mata_pelajaran/{mata_pelajaran}/update',[MataPelajaranController::class, 'update'])->name('mata_pelajaran.update');
    Route::delete('/mata_pelajaran/{mata_pelajaran}/delete', [MataPelajaranController::class, 'destroy'])->name('mata_pelajaran.delete');

    Route::get('/jadwal_pelajaran',[JadwalPelajaranController::class, 'index'])->name('jadwal_pelajaran');
    Route::get('/jadwal_pelajaran/create',[JadwalPelajaranController::class, 'create'])->name('jadwal_pelajaran.create');
    Route::post('/jadwal_pelajaran',[JadwalPelajaranController::class, 'store'])->name('jadwal_pelajaran.store');
    Route::get('/jadwal_pelajaran/{jadwal_pelajaran}/edit',[JadwalPelajaranController::class, 'edit'])->name('jadwal_pelajaran.edit');
    Route::post('/jadwal_pelajaran/{jadwal_pelajaran}/update',[JadwalPelajaranController::class, 'update'])->name('jadwal_pelajaran.update');
    Route::delete('/jadwal_pelajaran/{jadwal_pelajaran}/delete', [JadwalPelajaranController::class, 'destroy'])->name('jadwal_pelajaran.delete');

    Route::get('/pembayaran',[PembayaranController::class, 'index'])->name('pembayaran');
    Route::get('/pembayaran/create',[PembayaranController::class, 'create'])->name('pembayaran.create');
    Route::post('/pembayaran',[PembayaranController::class, 'store'])->name('pembayaran.store');
    Route::get('/pembayaran/{pembayaran}/edit',[PembayaranController::class, 'edit'])->name('pembayaran.edit');
    Route::post('/pembayaran/{pembayaran}/update',[PembayaranController::class, 'update'])->name('pembayaran.update');
    Route::delete('/pembayaran/{pembayaran}/delete', [PembayaranController::class, 'destroy'])->name('pembayaran.delete');

    Route::get('/ruangan',[RuanganController::class, 'index'])->name('ruangan');
    Route::get('/ruangan/create',[RuanganController::class, 'create'])->name('ruangan.create');
    Route::post('/ruangan',[RuanganController::class, 'store'])->name('ruangan.store');
    Route::get('/ruangan/{ruangan}/edit',[RuanganController::class, 'edit'])->name('ruangan.edit');
    Route::post('/ruangan/{ruangan}/update',[RuanganController::class, 'update'])->name('ruangan.update');
    Route::delete('/ruangan/{ruangan}/delete', [RuanganController::class, 'destroy'])->name('ruangan.delete');
    
    Route::get('/control_panel', function () {
        return Inertia::render('ControlPanel');
    });

    Route::get('/identitas', [IdentitasController::class, 'index'])->name('identitas');
    Route::get('/identitas/create', [IdentitasController::class, 'create'])->name('identitas.create');
    Route::post('/identitas', [IdentitasController::class, 'store'])->name('identitas.store');
    Route::get('/identitas/{identitas}/edit', [IdentitasController::class, 'edit'])->name('identitas.edit');
    Route::post('/identitas/{identitas}/update', [IdentitasController::class, 'update'])->name('identitas.update');

    Route::get('/absensi',[AbsensiController::class, 'index'])->name('absensi');
    Route::get('/absensi/create',[AbsensiController::class, 'create'])->name('absensi.create');
    Route::post('/absensi',[AbsensiController::class, 'store'])->name('absensi.store');
    Route::get('/absensi/{absensi}/edit',[AbsensiController::class, 'edit'])->name('absensi.edit');
    Route::post('/absensi/{absensi}/update',[AbsensiController::class, 'update'])->name('absensi.update');
    Route::delete('/absensi/{absensi}/delete', [AbsensiController::class, 'destroy'])->name('absensi.delete');

    Route::get('/berkas',[BerkasController::class, 'index'])->name('berkas');
    Route::get('/berkas/create',[BerkasController::class, 'create'])->name('berkas.create');
    Route::post('/berkas',[BerkasController::class, 'store'])->name('berkas.store');
    Route::get('/berkas/{berkas}/edit',[BerkasController::class, 'edit'])->name('berkas.edit');
    Route::post('/berkas/{berkas}/update',[BerkasController::class, 'update'])->name('berkas.update');
    Route::delete('/berkas/{berkas}/delete', [BerkasController::class, 'destroy'])->name('berkas.delete');
    
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
