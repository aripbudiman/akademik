<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Absensi extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $table='absensi';

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }

    public function siswa(){
        return $this->belongsTo(Siswa::class,'siswa_id');
    }

    public function kelas(){
        return $this->belongsTo(Kelas::class,'kelas_id');
    }

    public function mapel(){
        return $this->belongsTo(MataPelajaran::class,'mapel_id','id');
    }
}
