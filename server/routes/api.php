<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\GenderController;

Route::controller(GenderController::class)->group(function() {
    Route::get('loadGenders', 'loadGenders');
    Route::get('/getGender/{genderId}', 'getGender');
    Route::post('/storeGender', 'storeGender');
    Route::put('/updateGender/{gender}', 'updateGender');
});

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
