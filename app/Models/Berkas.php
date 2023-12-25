<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Berkas extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table='berkas';

    public function siswa(){
        return $this->belongsTo(Siswa::class);
    }
}
