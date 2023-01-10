<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Macska;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('macskas', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('nev', 40)->default('001');
            $table->string('szorszin');
            $table->smallInteger('szuletesiEv');
            $table->boolean('nem');
            $table->boolean('ivaros');
            $table->tinyInteger('napiAlvas');
            $table->boolean('chip');

        });

        Macska::create(['nev' => 'Yami','szorszin' => 'fekete', 'szuletesiEv' => '2022', 'nem'=> False, 'ivaros' => False, 'napiAlvas'=>12, 'chip'=>True]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('macskas');
    }
};
