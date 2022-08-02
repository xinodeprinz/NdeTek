<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    private static $per_page = 5;

    public function comment(Request $request)
    {
        if (Auth::check()) {
            $data = $request->validate([
                'body' => 'required|string',
                'id' => 'required|integer',
            ]);

            $user = Auth::user();

            Comment::create([
                'user_id' => $user->id,
                'body' => $data['body'],
                'blog_id' => $data['id']
            ]);

            return back();
        }
        return back()->withErrors(['login' => 'login']);
    }

    public function isAuth()
    {
        if (!Auth::check()) {
            return back()->withErrors(['login' => 'login']);
        }
        return back();
    }
}