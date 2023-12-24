<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MataPelajaran extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $table='mata_pelajaran';

    public function guru(){
        return $this->belongsTo(Guru::class, 'guru_id', 'id');
    }
}
