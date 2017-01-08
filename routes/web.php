<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/developer', function () {
    return view('developer');
});

Auth::routes();

Route::group(['middleware' => ['auth']], function () {
	

	Route::get('/pollution', function () {
	    return view('DataVisualization.pollution');
	});

	Route::get('/reduction', function () {
	    return view('DataVisualization.reduction');
	});

	Route::get('/particles', function () {
	    return view('DynamicNews.particles');
	});

	Route::get('/gas', function () {
	    return view('DynamicNews.gas');
	});

	Route::get('/home', 'HomeController@index');
});

