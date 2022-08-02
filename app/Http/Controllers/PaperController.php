<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Category;
use App\Models\Comment;
use App\Models\Dislike;
use App\Models\Like;
use App\Models\Love;
use App\Models\MainCategory;
use App\Models\Paper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PaperController extends Controller
{
    private static $per_page = 12;

    public function index($main_cat, $category_name) //this is the category name
    {
        $main_cat = str_ireplace('-', ' ', $main_cat);
        $category_name = str_ireplace('-', ' ', $category_name);
        $data = self::getData($main_cat, $category_name);
        $category = $data[0];
        $papers = $data[1];
        $categories = $data[2];
        $paginator_length = $data[3];
        $blogs = Blog::latest()->limit(2)->get();
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


        // Performing search
        if (request()->query('search')) {
            $search = request()->query('search');
            $cats = Category::where('name', 'like', "%$search%")->get() ?? [];
            $papers = [];
            foreach ($cats as $c) {
                if (count($c->papers()->get()) > 0) {
                    foreach ($c->papers()->get() as $p1) {
                        $p1->image = $c->image;
                        $p1->category = $c->name;
                        $p1->uri = $c->uri;
                        $papers[] = $p1;
                    }
                }
            }
            $papers_2 = Paper::where('name', 'like', "%$search%")->get() ?? [];
            if (count($papers_2) > 0) {
                foreach ($papers_2 as $p2) {
                    $cat_2 = Category::find($p2->category_id);
                    $p2->image = $cat_2->image;
                    $p2->category = $cat_2->name;
                    $p2->uri = $cat_2->uri;
                    $papers[] = $p2;
                }
            }
        }


        return Inertia::render('Paper', compact([
            'category', 'papers', 'categories', 'paginator_length', 'blogs', 'main_cat',
        ]));
    }

    private static function getData($main_cat, $category_name)
    {
        if (!Category::where('name', $category_name)->exists()) {
            return abort(404);
        }

        if (!MainCategory::where('name', $main_cat)->exists()) {
            return abort(404);
        }

        $category = Category::where('name', $category_name)->first();

        $main = MainCategory::where('name', $main_cat)->first();
        $categories = $main->categories()->get();

        $paginator_length = ceil($category->papers()->count() / self::$per_page);
        $papers = $category->papers()->latest()->offset(0)->limit(self::$per_page)->get();
        foreach ($papers as $paper) {
            $paper->image = $category->image;
            $paper->category = $category->name;
            $paper->uri = $category->uri;
        }

        foreach ($categories as $c) {
            $c->count = $c->papers->count();
        }

        return [$category, $papers, $categories, $paginator_length];
    }

    public function paginate($cat_id, $pag_id)
    {
        $offset = self::$per_page * ($pag_id - 1); //10
        $category = Category::find($cat_id);
        $papers = $category->papers()->latest()->offset($offset)->limit(self::$per_page)->get();
        foreach ($papers as $paper) {
            $paper->image = $category->image;
            $paper->category = $category->name;
            $paper->uri = $category->uri;
        }
        return response(['papers' => $papers, 'current' => $pag_id]);
    }
}