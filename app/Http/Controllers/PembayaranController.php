<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Siswa;
use App\Models\Pembayaran;
use Illuminate\Http\Request;

class PembayaranController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pembayaran = Pembayaran::with('siswa')->get();
        return Inertia::render('Pembayaran/Index', [
            'pembayaran' => $pembayaran
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $siswa=Siswa::all();
        return Inertia::render('Pembayaran/Create',[
            'siswa' => $siswa
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'siswa_id' => 'required',
            'semester'=>'required',
            'spp'=>'required|numeric',
            'dsp'=>'required|numeric',
            'jumlah'=>'required|numeric',
            'tanggal'=>'required',
            'foto'=>'required|image|mimes:jpeg,png,jpg',
            'konfirmasi'=>'required'
        ]);
        $data=$request->all();
        if($request->hasFile('foto')){
            $foto = $request->file('foto');
            $path = $foto->storeAs('pembayaran', $request->siswa_id . '_' . uniqid() . '.' . $foto->getClientOriginalExtension(), 'public');
            $data['foto'] = $path;
            Pembayaran::create($data);
        }else{
            Pembayaran::create($data);
        }  
        return back()->with('message', 'Pembayaran Berhasil');
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
    public function edit(Pembayaran $pembayaran)
    {
     $siswa=Siswa::all();
        return Inertia::render('Pembayaran/Edit',[
            'pembayaran' => $pembayaran,
            'siswa'=>$siswa
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pembayaran $pembayaran)
    {
        $request->validate([
            'siswa_id' => 'required',
            'semester'=>'required',
            'spp'=>'required|numeric',
            'dsp'=>'required|numeric',
            'jumlah'=>'required|numeric',
            'tanggal'=>'required',
            'konfirmasi'=>'required'
        ]);
        $data=$request->all();
        if($request->hasFile('foto')){
            $foto = $request->file('foto');
            $path = $foto->storeAs('pembayaran', $request->siswa_id . '_' . uniqid() . '.' . $foto->getClientOriginalExtension(), 'public');
            $data['foto'] = $path;
            $pembayaran->update($data);
        }else{
            $pembayaran->update($data);
        }  
        return back()->with('message', 'Pembayaran Berhasil');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pembayaran $pembayaran)
    {
        $pembayaran->delete();
        return back()->with('message', 'Pembayaran Berhasil');
    }
}
