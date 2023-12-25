<?php

namespace App\Http\Controllers;

use App\Models\Absensi;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\MataPelajaran as Mapel;
use App\Models\Kelas;
use Illuminate\Support\Facades\Auth;

class AbsensiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $absensi=Absensi::with('user','siswa','kelas','mapel')->get();
        return Inertia::render('Absensi/Index',[
            'absensi' => $absensi
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $siswa=Siswa::all();
        $mapel=Mapel::all();
        $kelas=Kelas::all();
        return Inertia::render('Absensi/Create',[
            'siswa' => $siswa,
            'mapel' => $mapel,
            'kelas' => $kelas
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Absensi::create([
            'siswa_id' => $request->siswa_id,
            'mapel_id' => $request->mapel_id,
            'kelas_id' => $request->kelas_id,
            'user_id' => Auth::user()->id,
            'tanggal'=> $request->tanggal,
            'kehadiran' => $request->kehadiran
        ]);
        return redirect()->route('absensi')->with('message','Data Absensi Berhasil');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Absensi $absensi)
    {
        $siswa=Siswa::all();
        $mapel=Mapel::all();
        $kelas=Kelas::all();
        return Inertia::render('Absensi/Edit',[
            'absensi' => $absensi,
            'siswa' => $siswa,
            'mapel' => $mapel,
            'kelas' => $kelas,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Absensi $absensi)
    {
        $absensi->update([
            'siswa_id' => $request->siswa_id,
            'mapel_id' => $request->mapel_id,
            'kelas_id' => $request->kelas_id,
            'user_id' => Auth::user()->id,
            'tanggal'=> $request->tanggal,
            'kehadiran' => $request->kehadiran
        ]);
        return redirect()->route('absensi')->with('message','Data Absensi Berhasil');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Absensi $absensi)
    {
        $absensi->delete();
        return redirect()->route('absensi')->with('message','Data Absensi Berhasil');
    }
}
