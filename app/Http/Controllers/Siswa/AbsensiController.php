<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\Absensi;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AbsensiController extends Controller
{
    public function lihat(){
        $siswa_id=Siswa::where('user_id',auth()->user()->id)->first();
        $absensi=Absensi::with('mapel','siswa','user','kelas')->where('siswa_id',$siswa_id->id)->get();
        return Inertia::render('Siswa/LihatAbsensi',[
            'absensi' => $absensi
        ]);
    }
}
