<?php

namespace App\Http\Controllers;

use App\Models\Berkas;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BerkasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $berkas=Berkas::with('siswa')->get();
        return Inertia::render('Berkas/Index',[
            'berkas' => $berkas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $siswa=Siswa::all();
        return Inertia::render('Berkas/Create',[
            'siswa' => $siswa
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data=[
            'siswa_id'=>$request->siswa_id,
            'tanggal'=>$request->tanggal
        ];
        $fileFields = ['kk', 'ktp_ayah', 'ktp_ibu', 'akta_lahir', 'ijazah'];

        foreach ($fileFields as $field) {
            if ($request->hasFile($field)) {
                $file = $request->file($field);
                $path = $file->storeAs("berkas/{$field}", $request->siswa_id . '_' . uniqid() . '.' . $file->getClientOriginalExtension(), 'public');
                $data[$field] = $path;
            }
        }
        Berkas::create($data);
        return redirect()->route('berkas')->with('message','Berkas berhasil ditambahkan');
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
    public function edit(Berkas $berkas)
    {
        $siswa=Siswa::all();
        return Inertia::render('Berkas/Edit',[
            'berkas' => $berkas,
            'siswa' => $siswa
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Berkas $berkas)
    {
        $data=[
            'siswa_id'=>$request->siswa_id,
            'tanggal'=>$request->tanggal
        ];
        $fileFields = ['kk', 'ktp_ayah', 'ktp_ibu', 'akta_lahir', 'ijazah'];

    foreach ($fileFields as $field) {
        if ($request->hasFile($field)) {
            $file = $request->file($field);
            $path = $file->storeAs("berkas/{$field}", $request->siswa_id . '_' . uniqid() . '.' . $file->getClientOriginalExtension(), 'public');
            $data[$field] = $path;
        } else {
            $data[$field] = $berkas->$field;
        }
    }
        $berkas->update($data);
        return redirect()->route('berkas')->with('message','Berkas berhasil diperbaharui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
