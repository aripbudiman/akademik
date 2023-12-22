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
        Schema::create('siswa', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->string('name')->nullable(true);
            $table->string('nis')->nullable(true);
            $table->string('nisn')->nullable(true);
            $table->enum('jenis_kelamin', ['laki-laki', 'perempuan'])->nullable(true);
            $table->string('tempat_lahir')->nullable(true);
            $table->date('tanggal_lahir')->nullable(true);
            $table->string('agama')->nullable(true);
            $table->string('alamat')->nullable(true);
            $table->string('kecamatan')->nullable(true);
            $table->string('kabupaten')->nullable(true);
            $table->string('provinsi')->nullable(true);
            $table->string('no_hp',20)->nullable(true);
            $table->string('email')->unique(true);
            $table->string('foto')->nullable(true);
            $table->string('nama_ayah',100)->nullable(true);
            $table->date('tanggal_lahir_ayah')->nullable(true);
            $table->string('pendidikan_ayah',30)->nullable(true);
            $table->string('nama_ibu',100)->nullable(true);
            $table->date('tanggal_lahir_ibu')->nullable(true);
            $table->string('pendidikan_ibu',30)->nullable(true);
            $table->string('no_hp_wali',20)->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('siswa');
    }
};
