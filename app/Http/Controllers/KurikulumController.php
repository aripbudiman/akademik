<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Kurikulum;
class KurikulumController extends Controller
{
    public function index(){
        $kurikulum=Kurikulum::all();
        return Inertia::render('Kurikulum/Index',[
            'kurikulum' => $kurikulum
        ]);
    }

    public function create(){
        return Inertia::render('Kurikulum/Create');
    }
    public function store(Request $request){
        $request->validate([
            'nama_kurikulum' => 'required',
            'status_kurikulum' => 'required',
            'tahun_akademik' => 'required',
        ]);
        Kurikulum::create($request->all());
        return back()->with('message', 'Data Berhasil ditambahkan');
    }

    public function edit(Kurikulum $kurikulum){
        return Inertia::render('Kurikulum/Edit',[
            'kurikulum' => $kurikulum
        ]);
    }

    public function update(Request $request, Kurikulum $kurikulum){
        $request->validate([
            'nama_kurikulum' => 'required',
            'status_kurikulum' => 'required',
            'tahun_akademik' => 'required',
        ]);
        $kurikulum->update($request->all());
        return back()->with('message', 'Data Berhasil diperbaharui');
    }
    public function destroy(Kurikulum $kurikulum){
        $kurikulum->delete();
        return back()->with('message', 'Data Berhasil dihapus');
    }
}
