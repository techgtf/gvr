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
        Schema::create('typologies_galleries', function (Blueprint $table) {
            $table->id();
            $table->integer('type')->comment('1 = icons, 2 = images');
            $table->string('file');
            $table->boolean('status')->default(1);
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
        Schema::dropIfExists('typologies_galleries');
    }
};
