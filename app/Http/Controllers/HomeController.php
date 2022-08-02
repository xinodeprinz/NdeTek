<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Category;
use App\Models\Comment;
use App\Models\Dislike;
use App\Models\Like;
use App\Models\Love;
use App\Models\Paper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $papers = Paper::latest()->limit(4)->get();
        $blogs = Blog::latest()->limit(4)->get();
        foreach ($blogs as $blog) {
            $blog->liked = false;
            $blog->disliked = false;
            $blog->loved = false;
            if (Auth::check()) {
                $user = Auth::user();
                if (Like::where('blog_id', $blog->id)->where('user_id', $user->id)->exists()) {
                    $blog->liked = true;
                }
                if (Dislike::where('blog_id', $blog->id)->where('user_id', $user->id)->exists()) {
                    $blog->disliked = true;
                }
                if (Love::where('blog_id', $blog->id)->where('user_id', $user->id)->exists()) {
                    $blog->loved = true;
                }
            }
            $blog->likes = Like::where('blog_id', $blog->id)->count();
            $blog->dislikes = Dislike::where('blog_id', $blog->id)->count();
            $blog->loves = Love::where('blog_id', $blog->id)->count();
            $blog->comments = Comment::where('blog_id', $blog->id)->count();
        }
        foreach ($papers as $paper) {
            $category = Category::find($paper->category_id);
            $paper->image = $category->image;
            $paper->category = $category->name;
            $paper->uri = $category->uri;
        }
        return Inertia::render('Home', compact('papers', 'blogs'));
    }
}