<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Siswa;
use Inertia\Inertia;

class SiswaController extends Controller
{
    public function index(){
        $siswa=Siswa::with('user')->get();
        return Inertia::render('Siswa/Index',[
            'siswa' => $siswa
        ]);
    }

    public function update(Request $request){
        $siswa=Siswa::find($request->id);
        $data =[
            'nama' => $request->nama,
            'nisn' => $request->nisn,
            'nis' => $request->nis,
            'jenis_kelamin'=>$request->jenis_kelamin,
            'tempat_lahir'=>$request->tempat_lahir,
            'tanggal_lahir'=>$request->tanggal_lahir,
            'agama'=>$request->agama,
            'alamat'=>$request->alamat,
            'kecamatan'=>$request->kecamatan,
            'kabupaten'=>$request->kabupaten,
            'provinsi'=>$request->provinsi,
            'no_hp'=>$request->no_hp,
            'email'=>$request->email,
            'nama_ayah'=>$request->nama_ayah,
            'tanggal_lahir_ayah'=>$request->tanggal_lahir_ayah,
            'pendidikan_ayah'=>$request->pendidikan_ayah,
            'nama_ibu'=>$request->nama_ibu,
            'tanggal_lahir_ibu'=>$request->tanggal_lahir_ibu,
            'pendidikan_ibu'=>$request->pendidikan_ibu,
            'no_hp_wali'=>$request->no_hp_wali,
        ];
        if($request->hasFile('foto')){
            $foto = $request->file('foto');
            $path = $foto->storeAs('siswa', $request->nama . '_' . uniqid() . '.' . $foto->getClientOriginalExtension(), 'public');
            $data['foto'] = $path;
            $siswa->update($data);
        }else{
            $siswa->update($data);
        }  
        return back()->with('message','Berhasil Update Data');
    }

    public function destroy($id){
        // return $id;
        $siswa=Siswa::find($id);
        $siswa->delete();
        return back()->with('message','Berhasil Delete Data');
    }
}
