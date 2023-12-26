<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\Siswa;
use Illuminate\Http\Request;
use App\Models\Berkas;
use Inertia\Inertia;

class BerkasController extends Controller
{
    public function index(){
        $siswa_id=Siswa::where('user_id',auth()->user()->id)->first();
        $berkas=Berkas::where('siswa_id',$siswa_id->id)->get();
        return Inertia::render('Siswa/Berkas',[
            'berkas' => $berkas
        ]);
    }
}
