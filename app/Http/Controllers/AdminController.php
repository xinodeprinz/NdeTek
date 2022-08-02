<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\Category;
use App\Models\MainCategory;
use App\Models\Paper;
use App\Models\Payment;
use App\Models\UploadPaper;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;

class AdminController extends Controller
{
    public function __construct()
    {
        return $this->middleware('auth');
    }

    public function users()
    {
        if (Gate::denies('admin')) {
            return abort(403);
        }

        $users = User::where('username', '!=', 'admin')->get();
        return Inertia::render('admin/Users', compact('users'));
    }

    public function deleteUser($id)
    {
        // if (Gate::denies('admin')) {
        //     return abort(403);
        // }

        $user = User::find($id);
        $user->delete();
        return back();
    }

    public function pendingPapers()
    {
        if (Gate::denies('admin')) {
            return abort(403);
        }

        $papers = UploadPaper::all();
        foreach ($papers as $paper) {
            $category = Category::find($paper->category_id);
            $paper->username = User::find($paper->user_id)->username ?? 'Admin';
            $paper->category = $category->name ?? NULL;
            $paper->uri = $category->uri;
        }

        return Inertia::render('admin/PendingPapers', compact('papers'));
    }

    public function approvedPapers()
    {
        if (Gate::denies('admin')) {
            return abort(403);
        }

        $papers = Paper::all();
        foreach ($papers as $paper) {
            $category = Category::find($paper->category_id);
            $paper->username = User::find($paper->user_id)->username ?? 'Admin';
            $paper->category = $category->name ?? NULL;
            $paper->uri = $category->uri;
        }

        return Inertia::render('admin/ApprovedPapers', compact('papers'));
    }

    public function blogs()
    {
        if (Gate::denies('admin')) {
            return abort(403);
        }

        $blogs = Blog::all();
        foreach ($blogs as $blog) {
            $category = BlogCategory::find($blog->blog_category_id);
            $blog->category = $category->name;
            $id = $blog->id;
            $title = $blog->title;
            $blog->uri = "/blog/$id/$title";
        }

        return Inertia::render('admin/BlogPosts', compact('blogs'));
    }

    public function deletePendingPaper($id)
    {
        if (Gate::denies('admin')) {
            return abort(403);
        }

        $paper = UploadPaper::find($id);
        $path = Category::find($paper->category_id)->uri . $paper->name;
        Storage::disk('public')->delete($path);
        $paper->delete();
        return back();
    }

    public function deleteBlogPost($id)
    {
        if (Gate::denies('admin')) {
            return abort(403);
        }

        $blog = Blog::find($id);
        Storage::disk('public')->delete($blog->image);
        $blog->delete();
        return back();
    }

    public function deleteApprovedPaper($id)
    {
        if (Gate::denies('admin')) {
            return abort(403);
        }

        $paper = Paper::find($id);
        $path = Category::find($paper->category_id)->uri . $paper->name;
        Storage::disk('public')->delete($path);
        $paper->delete();
        return back();
    }

    public function approvePaper($id)
    {
        if (Gate::denies('admin')) {
            return abort(403);
        }

        $paper = UploadPaper::find($id);
        Paper::create([
            'name' => $paper->name,
            'category_id' => $paper->category_id,
            'user_id' => $paper->user_id,
        ]);
        $user = User::find($paper->user_id);
        if ($user) {
            $category = $paper->category()->first();
            $main_category = $category->main_category()->first();

            if (in_array($main_category->name, ['concours', 'gce'])) {
                $user->update(['balance' => $user->balance + 25]);
            }
        }
        $paper->delete();
        return back();
    }

    public function createBlog(Request $request)
    {
        if (Gate::denies('admin')) {
            return abort(403);
        }
        if ($request->isMethod('GET')) {
            $categories = BlogCategory::all();
            return Inertia::render('admin/CreateBlog', compact('categories'));
        } else {
            $data = $request->validate([
                'title' => 'required|string',
                // 'video' => $request->has('video') ? 'required|file' : '',
                'image' => 'required',
                'blog_category_id' => 'required|integer',
                'sub_text' => 'required|string',
                'body' => 'required|string'
            ]);

            $imagePath = $request->file('image')->store('images/blogs', 'public');
            // to be uncommented during production
            // $image = Image::make(public_path("storage/{$imagePath}"))->fit(240, 240); //150 150 for papers
            // $image->save();

            $video_uri = NULL;
            if ($request->has('video')) {
                $video = $request->file('video');
                $name = $video->getClientOriginalName();
                // $extension = $video->getClientOriginalExtension();
                $video_name = $name;
                Storage::disk('public')->putFileAs('videos', $request->file('video'), $video_name);
                $video_uri = "videos/{$video_name}";
            }

            Blog::create([
                'title' => $data['title'],
                'video' => $video_uri,
                'image' => $imagePath,
                'blog_category_id' => $data['blog_category_id'],
                'sub_text' => $data['sub_text'],
                'body' => $data['body'],
                'likes' => 0,
                'dislikes' => 0,
                'loves' => 0
            ]);

            return back();
        }
    }

    public function supports()
    {
        if (Gate::denies('admin')) {
            return abort(403);
        }

        $transactions = Payment::where('type', 'support')->get();
        return Inertia::render('admin/Support', compact('transactions'));
    }

    public function withdrawals()
    {
        if (Gate::denies('admin')) {
            return abort(403);
        }

        $transactions = Payment::where('type', 'withdrawal')->get();
        return Inertia::render('admin/Withdrawals', compact('transactions'));
    }

    public function uploadImage(Request $request)
    {
        $request->validate(['image' => 'required|image']);

        $imagePath = $request->file('image')->store('images/blogs', 'public');

        return $imagePath;
    }
}