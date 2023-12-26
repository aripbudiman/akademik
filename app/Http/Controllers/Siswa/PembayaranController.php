<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Pembayaran;
use App\Models\Siswa;
use Illuminate\Support\Facades\Auth;
class PembayaranController extends Controller
{
    public function index(){
        $siswa_id=Siswa::where('user_id',Auth::user()->id)->first();
        $pembayaran=Pembayaran::with('siswa')->where('siswa_id',$siswa_id->id)->get();
        return Inertia::render('Pembayaran/LihatPembayaran',[
            'pembayaran'=>$pembayaran
        ]);
    }
}
