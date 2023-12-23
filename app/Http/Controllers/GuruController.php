<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
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

    public function update(Request $request){

        $request->validate([
            'nama' => 'required',
        ]);
        $guru = Guru::find($request->id);
        $data =[
            'nama' => $request->nama,
            'jenis_kelamin'=>$request->jenis_kelamin,
            'tempat_lahir'=>$request->tempat_lahir,
            'tanggal_lahir'=>$request->tanggal_lahir,
            'nik'=>$request->nik,
            'agama'=>$request->agama,
            'alamat'=>$request->alamat,
            'kecamatan'=>$request->kecamatan,
            'kabupaten'=>$request->kabupaten,
            'provinsi'=>$request->provinsi,
            'no_hp'=>$request->no_hp,
            'email'=>$request->email,
            'status'=>$request->status,
        ];
        if($request->hasFile('foto')){
            $foto = $request->file('foto');
            $path = $foto->storeAs('guru', $request->nama . '_' . uniqid() . '.' . $foto->getClientOriginalExtension(), 'public');
            $data['foto'] = $path;
            $guru->update($data);
        }else{
            $guru->update($data);
        }
            
        return back()->with('message','Berhasil Update Data');
    }
}
