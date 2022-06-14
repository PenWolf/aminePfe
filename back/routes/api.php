<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\StudentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

#to login
Route::post('/store-login', [AuthController::class, 'storeLogin']);
Route::get('get-user/{id}', [AuthController::class, 'getUserById']);
Route::post('get-all', [AuthController::class, 'getStudents']);


//Teacher :--------------------------------------------------------------
    Route::post('create-teacher', [TeacherController::class, 'createTeacher']);
    Route::post('delete-teacher', [TeacherController::class, 'deleteTeacher']);
    Route::post('update-teacher', [TeacherController::class, 'updateTeacher']);
    Route::post('show-teacher', [TeacherController::class, 'showTeacher']);
    Route::get('display-teacher', [TeacherController::class, 'displayTeacher']);



//Student :---------------------------------------------------------------

Route::post('create-student', [StudentController::class, 'createStudent']);
Route::post('delete-student', [StudentController::class, 'deleteStudent']);
Route::post('update-student', [StudentController::class, 'updateStudent']);
Route::post('show-student', [StudentController::class, 'showStudent']);
Route::get('display-student', [StudentController::class, 'displayStudent']);


//Category :---------------------------------------------------------------
// has many specialites


//Speciality :---------------------------------------------------------------
// has many classes

//Classe :---------------------------------------------------------------
// has many students


//blog :---------------------------------------------------------------
// display either by speciality or by category

//Event :---------------------------------------------------------------
// display  either by speciality or by category

//Calendrier :---------------------------------------------------------------
// display only by class

//Notes :---------------------------------------------------------------
// display only by student and use the class list to add notes