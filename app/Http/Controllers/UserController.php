<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Siswa;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
        return Inertia::render('User/Index',compact('users'));
    }

    public function create(){
        return Inertia::render('User/Create');
    }

    public function store(Request $request){
        // $request->validate([
        //     'name' => 'required',
        //     'email' => 'required|unique:users',
        //     'password' => 'required',
        //     'level' => 'required',
        // ]);
        // $data = $request->all();
        // $data['password'] = bcrypt($data['password']);
        // $user=User::create($data);
        // if($data['level'] == 'siswa'){
        //     Siswa::create([
        //         'user_id' => $user->id,
        //         'email'=>$user->email
        //     ]);
        // }else{
        //     Guru::create([
        //         'user_id' => $user->id,
        //         'email'=>$user->email
        //     ]);
        // }
        return to_route('user')->with('message', 'Data Berhasil Ditambahkan');
    }
}
