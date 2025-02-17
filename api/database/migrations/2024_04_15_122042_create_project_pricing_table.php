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
        Schema::create('project_prices', function (Blueprint $table) {
            $table->id();
            $table->integer('project_id');
            $table->integer('sub_typology')->nullable();
            $table->integer('size')->nullable();
            $table->integer('size_type')->nullable();
            $table->integer('price')->nullable();
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
        Schema::dropIfExists('project_prices');
    }
};
