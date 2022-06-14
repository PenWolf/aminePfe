<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class TeacherController extends Controller
{

    public function createTeacher(Request $request)
    {
        $obj = new User();
        $obj->name = $request->name;
        $obj->lastname = $request->lastname;
        $obj->email = $request->email;
        $obj->password = 'none';
        $obj->role = 'teacher';
        $obj->gender = $request->gender;
        $obj->type = 'none';
        $obj->classe = 'none';
        if ($obj->save()) {
            return response()->json([
                'data' => $obj,
                'msg' => 'Teacher Successfully inserted'
            ]);
        } else {
            // echo 'creation failed <br>';
            return response()->json([
                'msg' => 'somethig wrong',
                'flag' => '0'
            ]);
        }
    }

    public function showTeacher(Request $request)
    {
        $id = $request->id;
        $user = User::find($id);
        return response()->json(
            $user

        );
    }
    public function updateTeacher(Request $request)
    {
        $id = $request->id;
        $user = User::find($id);
        User::whereId($id)->update(array(
            'name' =>  $request->name,
            'lastname' => $request->lastname,
            'email' => $request->email,
        ));
        $user = User::whereId($id)->get();
        return response()->json([
            'data' => $user,
        ]);
    }
    public function deleteTeacher(Request $request)
    {
        $id = $request->number;
        $user = User::find($id);
        if ($user) {
            $user->delete();
            return response()->json([
                'msg' => 'Teacher Deleted',
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
    public function displayTeacher()
    {
        $users = User::where('role', 'teacher')->get();
        return response()->json([
            'data' => $users,
        ]);
    }
}
