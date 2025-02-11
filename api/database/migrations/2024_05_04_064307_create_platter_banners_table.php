api/database/migrations/2024_05_04_064307_create_platter_banners_table.php<?php

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
        Schema::create('platter_banners', function (Blueprint $table) {
            $table->id();
            $table->integer('platter_id');
            $table->string('desktop_image');
            $table->string('mobile_image');
            $table->string('alt_text');
            $table->integer('status')->default(0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('platter_baners');
    }
};
