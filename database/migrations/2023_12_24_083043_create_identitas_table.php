<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('identitas', function (Blueprint $table) {
            $table->id();
            $table->string('nama_sekolah',100)->nullable(true);
            $table->string('nama_kepala_sekolah',100)->nullable(true);
            $table->string('npsn',50)->nullable(true);
            $table->string('nss',50)->nullable(true);
            $table->string('alamat_sekolah',150)->nullable(true);
            $table->string('kode_pos',20)->nullable(true);
            $table->string('kabupaten',50)->nullable(true);
            $table->string('provinsi',50)->nullable(true);
            $table->string('email')->nullable(true);
            $table->string('website')->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('identitas');
    }
};
