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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->integer('categorie_id');
            $table->integer('typologie_id');
            $table->integer('sub_typologie_id')->nullable();
            $table->integer('project_status');
            $table->string('name');
            $table->string('slug');
            $table->string('ivr_no')->nullable();
            $table->string('whatsapp_no')->nullable();
            $table->string('payment_plan')->nullable();
            $table->string('rera_no')->nullable();
            $table->string('feature_image')->nullable();
            $table->string('short_description')->nullable();


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
        Schema::dropIfExists('projects');
    }
};
