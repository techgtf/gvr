<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('typologies', function (Blueprint $table) {
            $table->id();
            $table->string('slug');
            $table->string('typology');
            $table->string('image')->nullable();
            $table->longText('description')->nullable();
            $table->integer('primary')->default(0);
            $table->string('status')->default(1);
            $table->timestamps();
            $table->softDeletes(); // This adds the 'deleted_at' column

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('typologies');
    }
};
