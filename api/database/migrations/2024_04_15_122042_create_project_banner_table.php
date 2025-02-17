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
        Schema::create('project_banners', function (Blueprint $table) {
            $table->id();
            $table->integer('project_id');
            $table->string('desktop_image');
            $table->string('mobile_image')->nullable();
            $table->string('alt_text')->nullable();
            $table->integer('status')->default(1);
            $table->timestamps();
            $table->softDeletes();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_banners');
    }
};
