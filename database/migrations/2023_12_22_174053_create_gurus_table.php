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
        Schema::create('guru', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->string('nama')->nullable(true);
            $table->enum('jenis_kelamin',['laki-laki','perempuan'])->nullable(true);
            $table->string('tempat_lahir',50)->nullable(true);
            $table->date('tanggal_lahir')->nullable(true);
            $table->string('nik',50)->nullable(true);
            $table->string('agama',100)->nullable(true);
            $table->text('alamat')->nullable(true);
            $table->string('kecamatan',100)->nullable(true);
            $table->string('kabupaten',100)->nullable(true);
            $table->string('provinsi',100)->nullable(true);
            $table->string('no_hp',20)->nullable(true);
            $table->string('email',100)->nullable(true);
            $table->string('status',100)->nullable(true);
            $table->string('foto')->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('guru');
    }
};
