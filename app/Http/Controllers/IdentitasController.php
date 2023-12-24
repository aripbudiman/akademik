<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Identitas;


class IdentitasController extends Controller
{
    public function index(){
        return Inertia::render('Identitas',[
            'identitas' => Identitas::first()
        ]);
    }

    public function edit(Identitas $identitas){
        return Inertia::render('FormIdentitas',[
            'identitas' => $identitas
        ]);
    }

    public function update(Request $request, Identitas $identitas){
        $identitas->update($request->all());
        return back()->with('message', 'Data identitas berhasil diperbarui');
    }

    public function store(Request $request){
        
    }
}
