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
        Schema::table('project_floor_plans', function (Blueprint $table) {
            $table->string('more_typology')->nullable();
            $table->integer('price')->nullable();
            $table->integer('price_type')->nullable();
            $table->integer('carpet_area')->nullable();
            $table->integer('balcony_area')->nullable();
            $table->integer('super_area')->nullable();
            $table->integer('sizes_type')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
