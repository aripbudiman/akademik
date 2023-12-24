<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Guru;
use App\Models\MataPelajaran as MP;
class MataPelajaranController extends Controller
{
    public function index(){
        $mataPelajaran = MP::with('guru')->get();
        return Inertia::render('MataPelajaran/Index',[
            'mataPelajaran' => $mataPelajaran
        ]);
    }

    public function create(){
        $guru = Guru::all();
        return Inertia::render('MataPelajaran/Create',[
            'guru' => $guru
        ]);
    }

    public function store(Request $request){
        $request->validate([
            'nama_mapel' => 'required',
            'kode_mapel' => 'required',
            'jumlah_jam' => 'required|numeric',
        ]);
        MP::create([
            'nama_mapel' => $request->nama_mapel,
            'kode_mapel' => $request->kode_mapel,
            'jumlah_jam' => $request->jumlah_jam,
            'guru_id' => $request->guru_id
        ]);
        return back()->with('message', 'Mata Pelajaran Berhasil');
    }

    public function edit(MP $mataPelajaran){
        $guru = Guru::all();
        return Inertia::render('MataPelajaran/Edit',[
            'data' => $mataPelajaran,
            'guru' => $guru
        ]);
    }

    public function update(Request $request, MP $mataPelajaran){
        $request->validate([
            'nama_mapel' => 'required',
            'kode_mapel' => 'required',
            'jumlah_jam' => 'required|numeric',
        ]);
        $mataPelajaran->update([
            'nama_mapel' => $request->nama_mapel,
            'kode_mapel' => $request->kode_mapel,
            'jumlah_jam' => $request->jumlah_jam,
            'guru_id' => $request->guru_id
        ]);
        return back()->with('message', 'Mata Pelajaran Berhasil');
    }

    public function destroy(MP $mataPelajaran){
        $mataPelajaran->delete();
        return back()->with('message', 'Mata Pelajaran Berhasil');
    }
}
