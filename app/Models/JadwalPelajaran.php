<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JadwalPelajaran extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $table='jadwal_pelajaran';

    public function kurikulum(){
        return $this->belongsTo(Kurikulum::class,'kurikulum_id');
    }

    public function kelas(){
        return $this->belongsTo(Kelas::class,'kelas_id');
    }

    public function matapelajaran(){
        return $this->belongsTo(MataPelajaran::class,'mata_pelajaran_id');
    }
}
