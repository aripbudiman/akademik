<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ruangan extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table='ruangan';

    public function kelas(){
        return $this->belongsTo(Kelas::class,'kelas_id','id');
    }

    public function siswa(){
        return $this->belongsTo(Siswa::class,'siswa_id','id');
    }
}
