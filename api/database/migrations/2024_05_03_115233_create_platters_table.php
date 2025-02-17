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
        Schema::create('platters', function (Blueprint $table) {
            $table->id();
            $table->integer('category')->nullable();
            // $table->integer('developer')->nullable();
            $table->integer('typology')->nullable();
            $table->integer('sub_typology')->nullable();
            $table->integer('cities')->nullable();
            $table->integer('type')->default(0);
            $table->string('name');
            $table->string('slug');

            $table->string('meta_title')->nullable();
            $table->string('meta_keyword')->nullable();
            $table->string('meta_description')->nullable();
            $table->string('status')->nullable();
            $table->softDeletes();
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
        Schema::dropIfExists('platters');
    }
};
