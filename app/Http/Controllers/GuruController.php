<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuruController extends Controller
{
    public function index(){
        return Inertia::render('Guru/Index');
    }

    public function create(){
        return Inertia::render('Guru/Create');
    }

    public function store(Request $request){
        $request->validate([
            'nama' => 'required',
        ]);
        $foto = $request->file('foto');
        $path = $foto->storeAs('guru', $request->nama . '_' . uniqid() . '.' . $foto->getClientOriginalExtension(), 'public');
        Guru::create([
            'nama' => $request->nama,
            'foto' => $path,
            

        ]);
        return Inertia::render('Guru/Create');
    }
}
