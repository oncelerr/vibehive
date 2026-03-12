<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();

            // Step 1
            $table->string('name');
            $table->string('email');
            $table->string('company');
            $table->string('website')->nullable();

            // Step 2
            $table->string('industry');
            $table->text('challenge');

            // Step 3
            $table->string('budget');
            $table->string('timeline');

            // Step 4
            $table->string('hear_about');
            $table->string('referrer')->nullable();

            // Lead classification
            $table->enum('lead_status', [
                'premium_lead',
                'standard_lead',
                'needs_review',
                'not_a_fit',
            ])->default('needs_review');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('applications');
    }
};