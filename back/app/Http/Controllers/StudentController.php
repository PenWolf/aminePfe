<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class StudentController extends Controller
{
    public function createStudent(Request $request)
    {
        $obj = new User();
        $obj->name = $request->name;
        $obj->lastname = $request->lastname;
        $obj->email = $request->email;
        $obj->password = md5($request->password);
        $obj->role = 'student';
        $obj->gender = $request->gender;
        $obj->type = $request->type;
        $obj->classe = $request->classe;
        if ($obj->save()) {
            return response()->json([
                'data' => $obj,
                'msg' => 'Student Successfully inserted'
            ]);
        } else {
            // echo 'creation failed <br>';
            return response()->json([
                'msg' => 'somethig wrong',
                'flag' => '0'
            ]);
        }
    }

    public function showStudent(Request $request)
    {
        $id = $request->id;
        $user = User::find($id);
        if ($user && $user->role = 'student') {
            return response()->json([
                'student' => $user,
            ]);
        } else {
            // echo 'does not exit <br>';
            return response()->json([
                'msg' => 'does not exit',
                'flag' => '0'
            ]);
        }
    }
    public function updateStudent(Request $request)
    {
        $id = $request->id;
        $user = User::find($id);
        return response()->json([
            'user' => $user,
            'flag' => '0'
        ]);
    /*    if ($user && $user->role = 'student') {
            User::whereId($id)->update(array(
                'name' =>  $request->name,
                'lastname' => $request->lastname,
                'email' => $request->email,
                'type' => $request->type,
                'classe' => $request->classe
            ));
            $user = User::whereId($id)->get();
            return response()->json([
                'data' => $user,
                'msg' => 'Student',
                'flag' => '1'
            ]);
        } else {
            // echo 'does not exit <br>';
            return response()->json([
                'msg' => 'does not exit',
                'flag' => '0'
            ]);
        }
        */
    }
    public function deleteStudent(Request $request)
    {
        $id = $request->number;
        $user = User::find($id);
        if ($user && $user->role = 'student') {
            $user->delete();
            return response()->json([
                'msg' => 'Student Deleted',
                'flag' => '1'
            ]);
        } else {
            // echo 'does not exit <br>';
            return response()->json([
                'msg' => 'does not exit',
                'flag' => '0'
            ]);
        }
    }
    public function displayStudent()
    {
            $users = User::where('role', 'student')->get();
            return response()->json([
                'students' => $users
            ]);
        
    }
}
