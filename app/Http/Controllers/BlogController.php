<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\Category;
use App\Models\Comment;
use App\Models\CommentLove;
use App\Models\Dislike;
use App\Models\Like;
use App\Models\Love;
use App\Models\Paper;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BlogController extends Controller
{
    private static $per_page = 5;

    public function single($id)
    {
        if (Blog::find($id)) {
            $blog = Blog::find($id);

            $blog->likes = Like::where('blog_id', $blog->id)->count();
            $blog->dislikes = Dislike::where('blog_id', $blog->id)->count();
            $blog->loves = Love::where('blog_id', $blog->id)->count();
            $blog->comments = Comment::where('blog_id', $blog->id)->count();
            if (Auth::check()) {
                $user = Auth::user();
                $blog->liked = false;
                $blog->disliked = false;
                $blog->loved = false;
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

            $latest_blogs = Blog::latest()->limit(2)->get();
            foreach ($latest_blogs as $b) {
                if (Auth::check()) {
                    $user = Auth::user();
                    $b->liked = false;
                    $b->disliked = false;
                    $b->loved = false;
                    if (Like::where('blog_id', $b->id)->where('user_id', $user->id)->exists()) {
                        $b->liked = true;
                    }
                    if (Dislike::where('blog_id', $b->id)->where('user_id', $user->id)->exists()) {
                        $b->disliked = true;
                    }
                    if (Love::where('blog_id', $b->id)->where('user_id', $user->id)->exists()) {
                        $b->loved = true;
                    }
                }
                $b->likes = Like::where('blog_id', $b->id)->count();
                $b->dislikes = Dislike::where('blog_id', $b->id)->count();
                $b->loves = Love::where('blog_id', $b->id)->count();
                $b->comments = Comment::where('blog_id', $b->id)->count();
            }
            $latest_papers = Paper::latest()->limit(2)->get();
            $comments = Comment::where('blog_id', $blog->id)->latest()->limit(self::$per_page)->get();
            $comment_count = Comment::where('blog_id', $blog->id)->count();
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

            foreach ($latest_papers as $paper) {
                $category = Category::find($paper->category_id);
                $paper->image = $category->image;
                $paper->category = $category->name;
                $paper->uri = $category->uri;
            }

            $paginator_length = ceil(Comment::where('blog_id', $blog->id)->count() / self::$per_page);

            return Inertia::render('BlogSingle', compact(
                'blog',
                'latest_blogs',
                'latest_papers',
                'comments',
                'paginator_length',
                'comment_count'
            ));
        }
        return abort(404);
    }

    public function index($category_name)
    {
        $category_name = str_ireplace('-', ' ', $category_name);
        $data = self::getData($category_name);
        $category = $data[0];
        $blogs = $data[1];
        $categories = $data[2];
        $paginator_length = $data[3];
        $latest = Blog::latest()->limit(2)->get();

        foreach ($blogs as $blog) {
            $blog->comments = Comment::where('blog_id', $blog->id)->count();
        }

        foreach ($latest as $blog) {
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

        // Handling searching
        if (request()->query('search')) {
            $search = request()->query('search');
            $cats = BlogCategory::where('name', 'like', "%$search%")->get() ?? [];
            $blogs = [];
            foreach ($cats as $c) {
                if (count($c->blogs()->get()) > 0) {
                    foreach ($c->blogs()->get() as $blog) {
                        $blogs[] = $blog;
                    }
                }
            }
            $blogs_2 = Blog::where('title', 'like', "%$search%")->get() ?? [];
            if (count($blogs_2) > 0) {
                foreach ($blogs_2 as $b2) {
                    $blogs[] = $b2;
                }
            }
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
        }

        return Inertia::render('Blog', compact([
            'category', 'blogs', 'categories', 'paginator_length', 'latest'
        ]));
    }

    private static function getData($category_name)
    {
        if (!BlogCategory::where('name', $category_name)->exists()) {
            return abort(404);
        }

        $category = BlogCategory::where('name', $category_name)->first();
        $categories = BlogCategory::all();
        $paginator_length = ceil($category->blogs()->count() / self::$per_page);
        $blogs = $category->blogs()->latest()->offset(0)->limit(self::$per_page)->get();

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
        }

        foreach ($categories as $c) {
            $c->count = $c->blogs()->count();
        }

        return [$category, $blogs, $categories, $paginator_length];
    }

    public function paginate($cat_id, $pag_id)
    {
        $offset = self::$per_page * ($pag_id - 1); //5
        $category = BlogCategory::find($cat_id);
        $blogs = $category->blogs()->offset($offset)->limit(self::$per_page)->get();
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
        }
        return response(['blogs' => $blogs, 'current' => $pag_id]);
    }
}