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
        Schema::create('project_floor_plans', function (Blueprint $table) {
            $table->id();
            $table->integer('project_id');
            $table->string('type');
            $table->integer('sub_typology')->nullable();
            $table->string('image')->nullable();
            $table->integer('protected')->default(0);
            $table->integer('size')->nullable();
            $table->integer('price')->nullable();
            $table->integer('carpet_area')->nullable();
            $table->integer('balcony_area')->nullable();
            $table->integer('super_area')->nullable();
            $table->integer('sizes_type')->nullable();
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
        Schema::dropIfExists('project_floor_plans');
    }
};
