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
        Schema::create('page_section_lists', function (Blueprint $table) {
            $table->id();
            $table->integer('page_id');
            $table->string('page_section');
            $table->longText('heading');
            $table->longText('sub_heading')->nullable();

            $table->longText('description')->nullable();
            $table->longText('image')->nullable();
            $table->string('alt')->nullable();


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
        Schema::dropIfExists('page_sections');
    }
};
