<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\CommentLove;
use App\Models\Dislike;
use App\Models\Like;
use App\Models\Love;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class BueatyController extends Controller
{
    private static $per_page = 5;

    public function like($id)
    {
        if (Auth::check()) {
            $user = Auth::user();
            if (Like::where('blog_id', $id)->where('user_id', $user->id)->exists()) {
                Like::where('blog_id', $id)->where('user_id', $user->id)->first()->delete();
            } else {
                Like::create([
                    'user_id' => $user->id,
                    'blog_id' => $id
                ]);
            }
            return back();
        }
        return back()->withErrors(['login' => 'login']);
    }

    public function dislike($id)
    {
        if (Auth::check()) {
            $user = Auth::user();
            if (Dislike::where('blog_id', $id)->where('user_id', $user->id)->exists()) {
                Dislike::where('blog_id', $id)->where('user_id', $user->id)->first()->delete();
            } else {
                Dislike::create([
                    'user_id' => $user->id,
                    'blog_id' => $id
                ]);
            }
            return back();
        }
        return back()->withErrors(['login' => 'login']);
    }

    public function love($id)
    {
        if (Auth::check()) {
            $user = Auth::user();
            if (Love::where('blog_id', $id)->where('user_id', $user->id)->exists()) {
                Love::where('blog_id', $id)->where('user_id', $user->id)->first()->delete();
            } else {
                Love::create([
                    'user_id' => $user->id,
                    'blog_id' => $id
                ]);
            }
            return back();
        }
        return back()->withErrors(['login' => 'login']);
    }

    public function validateRequest(Request $request)
    {
        $request->validate([
            'username' => $request->has('photo') ? 'required|string|unique:users' : 'required|string',
            'photo' => $request->has('photo') ? 'required|image' : '',
            'password' => 'required|string'
        ]);

        return back();
    }

    public function register(Request $request)
    {
        $this->validateRequest($request);
        $data = $request->all();
        User::create([
            'username' => $data['username'],
            'photo' => $request->has('photo') ? $request->file('photo')->store('images/profiles', 'public') : "images/profiles/empty.jpg",
            'password' => Hash::make($data['password']),
        ]);
        $credentials = $request->except(['photo']);
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
        }
        return back();
    }

    public function login(Request $request)
    {
        $this->validateRequest($request);
        $credentials = $request->all();
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return back();
        }
        return back()->withErrors([
            'failed' => 'The provided credentials do not match our records.',
        ]);
    }


    public function commentLove($id)
    {
        if (Auth::check()) {
            $user = Auth::user();
            if (CommentLove::where('comment_id', $id)->where('user_id', $user->id)->exists()) {
                CommentLove::where('comment_id', $id)->where('user_id', $user->id)->first()->delete();
            } else {
                CommentLove::create([
                    'user_id' => $user->id,
                    'comment_id' => $id
                ]);
            }
            return back();
        }
        return back()->withErrors(['login' => 'login']);
    }

    public function paginate($pag_id, $blog_id)
    {
        $offset = self::$per_page * ($pag_id - 1);
        $comments = Comment::where('blog_id', $blog_id)->latest()->offset($offset)->limit(self::$per_page)->get();
        foreach ($comments as $com) {
            $com->loved = false;
            if (Auth::check()) {
                $user = Auth::user();
                if (CommentLove::where('comment_id', $com->id)->where('user_id', $user->id)->exists()) {
                    $com->loved = true;
                }
            }
            $com->user = User::find($com->user_id);
            $com->loves = CommentLove::where('comment_id', $com->id)->count();
        }
        return response(['coms' => $comments, 'current' => $pag_id]);
    }
}