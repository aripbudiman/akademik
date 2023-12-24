<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class matapelajaran extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\MataPelajaran::create([
            'nama_mapel' => 'Matematika',
            'kode_mapel'=> 'MTK',
            'jumlah_jam'=> 2,
            'guru_id' => 1,
        ]);
        \App\Models\MataPelajaran::create([
            'nama_mapel' => 'Ilmu Pengetahuan Alam',
            'kode_mapel'=> 'IPA',
            'jumlah_jam'=> 2,
            'guru_id' => 1,
        ]);
        \App\Models\MataPelajaran::create([
            'nama_mapel' => 'Ilmu Pengetahuan Sosial',
            'kode_mapel'=> 'IPS',
            'jumlah_jam'=> 2,
            'guru_id' => 1,
        ]);
    }
}
