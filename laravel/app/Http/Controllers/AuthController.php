<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Login successful',
            ]);
        }

        if (User::where('email', $request->email)->exists()) {
            $user = User::where('email', $request->email)->first();
            $token = $user->createToken('authToken')->plainTextToken;
            return response()->json([
                'message' => 'Login successful',
                'token' => $token,
                'user' => $user,
            ]);
        }

        return response()->json([
            'message' => 'Login failed',
        ]);
    }
}
