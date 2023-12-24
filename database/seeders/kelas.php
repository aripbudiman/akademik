<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class kelas extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Kelas::create([
            'nama_kelas' => 'XII RPL 1',
            'kelas'=>'12',
        ]);
        \App\Models\Kelas::create([
            'nama_kelas' => 'XII RPL 2',
            'kelas'=>'12',
        ]);
        \App\Models\Kelas::create([
            'nama_kelas' => 'XII RPL 3',
            'kelas'=>'12',
        ]);
    }
}
