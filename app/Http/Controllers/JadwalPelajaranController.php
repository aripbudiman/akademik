<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\JadwalPelajaran;
use App\Models\Kurikulum;
use App\Models\Kelas;
use App\Models\MataPelajaran;

class JadwalPelajaranController extends Controller
{
    public function index(){
        $jadwalPelajaran=JadwalPelajaran::with('kurikulum','matapelajaran.guru','kelas')->get();
        return Inertia::render('JadwalPelajaran/Index',[
            'jadwalPelajaran' => $jadwalPelajaran
        ]);
    }

    public function create(){
        $kurikulum=Kurikulum::all();
        $mataPelajaran=MataPelajaran::all();
        $kelas=Kelas::all();
        return Inertia::render('JadwalPelajaran/Create',[
            'kurikulum' => $kurikulum,
            'mataPelajaran' => $mataPelajaran,
            'kelas' => $kelas,
        ]);
    }

    public function store(Request $request){
        $request->validate([
            'kurikulum_id'=>'required|numeric',
            'kelas_id'=>'required|numeric',
            'mata_pelajaran_id'=>'required|numeric',
            'hari'=>'required',
            'jam_mulai'=>'required',
            'jam_selesai'=>'required',
        ]);
        JadwalPelajaran::create($request->all());
        return back()->with('message', 'Jadwal Pelajaran Berhasil');
    }

    public function edit(JadwalPelajaran $jadwalPelajaran){
        $kurikulum=Kurikulum::all();
        $mataPelajaran=MataPelajaran::all();
        $kelas=Kelas::all();
        return Inertia::render('JadwalPelajaran/Edit', [
            'jadwalPelajaran' => $jadwalPelajaran,
            'kurikulum' => $kurikulum,
            'mataPelajaran' => $mataPelajaran,
            'kelas' => $kelas
        ]);
    }

    public function update(Request $request, JadwalPelajaran $jadwalPelajaran){
        $request->validate([
            'kurikulum_id'=>'required|numeric',
            'kelas_id'=>'required|numeric',
            'mata_pelajaran_id'=>'required|numeric',
            'hari'=>'required',
            'jam_mulai'=>'required',
            'jam_selesai'=>'required',
        ]);
        $jadwalPelajaran->update($request->all());
        return back()->with('message', 'Jadwal Pelajaran Berhasil');
    }
    
    public function destroy(JadwalPelajaran $jadwalPelajaran){
        $jadwalPelajaran->delete();
        return back()->with('message', 'Jadwal Pelajaran Berhasil');
    }
    
}
