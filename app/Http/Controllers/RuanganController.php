<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Ruangan;
use App\Models\Kelas;
use App\Models\Siswa;
use Illuminate\Support\Facades\DB;


class RuanganController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ruangan = DB::table('ruangan')
            ->join('siswa', 'ruangan.siswa_id', '=', 'siswa.id')
            ->join('kelas', 'ruangan.kelas_id', '=', 'kelas.id')
            ->select('kelas.id as kelas_id', 'kelas.nama_kelas as nama_kelas', DB::raw('count(ruangan.siswa_id) as total_siswa'))
            ->groupBy('kelas.id', 'kelas.nama_kelas')
            ->get();
        return Inertia::render('Ruangan/Index',[
            'ruangan' => $ruangan
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $siswa=Siswa::all();
        $kelas=Kelas::all();
        return Inertia::render('Ruangan/Create',[
            'siswa' => $siswa,
            'kelas' => $kelas
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $kelas_id=$request->kelas_id;
        $siswa_id=$request->siswa_id;
        foreach($siswa_id as $siswa){
            Ruangan::create([
                'siswa_id' => $siswa,
                'kelas_id' => $kelas_id
            ]);
        }
        return redirect()->route('ruangan')->with('message','Data Ruangan Berhasil');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ruangan $ruangan)
    {
        $siswa=Siswa::all();
        $kelas=Kelas::all();
        return Inertia::render('Ruangan/Edit',[
            'ruangan' => $ruangan,
            'siswa' => $siswa,
            'kelas' => $kelas
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ruangan $ruangan)
    {
        $ruangan->update([
            'siswa_id' => $request->siswa_id,
            'kelas_id' => $request->kelas_id
        ]);
        return redirect()->route('ruangan')->with('message','Data Ruangan Berhasil');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ruangan $ruangan)
    {
        $ruangan->delete();
        return redirect()->route('ruangan')->with('message','Data Ruangan Berhasil');
    }
}
