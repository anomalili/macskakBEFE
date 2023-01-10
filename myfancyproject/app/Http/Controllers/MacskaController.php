<?php

namespace App\Http\Controllers;

use App\Models\Macska;

use Illuminate\Http\Request;

class MacskaController extends Controller
{
    //GET

    public function index()
    {
        $macskas = response()->json(Macska::all());
        return $macskas;
    }
    public function show($id)
    {
        $macskas = response()->json(Macska::find($id));
        return $macskas;
    }

}
