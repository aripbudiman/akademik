<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Kelas;
class KelasController extends Controller
{
    public function index(){
        $kelas=Kelas::all();
        return Inertia::render('Kelas/Index',[
            'kelas' => $kelas
        ]);
    }
    public function create(){
        return Inertia::render('Kelas/Create');
    }

    public function store(Request $request){
        $request->validate([
            'kelas' => 'required',
            'nama_kelas' => 'required|unique:kelas,nama_kelas',
        ]);
        Kelas::create($request->all());
        return back()->with('message', 'Kelas berhasil ditambahkan');
    }

    public function edit(Kelas $kelas){
        return Inertia::render('Kelas/Edit',[
            'kelas' => $kelas
        ]);
    }

    public function update(Request $request, Kelas $kelas){
        $request->validate([
            'kelas' => 'required',
            'nama_kelas' => 'required|unique:kelas,nama_kelas,'.$kelas->id,
        ]);
        $kelas->update($request->all());
        return back()->with('message', 'Kelas berhasil diupdate');
    }

    public function destroy(Kelas $kelas){
        $kelas->delete();
        return back()->with('message', 'Kelas berhasil dihapus');
    }
}
