<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\UploadPaper;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __construct()
    {
        return $this->middleware(['auth', 'verified']);
    }

    public function index()
    {
        $myUser = auth()->user();
        $categories = Category::select(['id', 'name'])->get();
        $pending_uploads = $myUser->uploadedPapers()->get();
        $uploaded_papers = $myUser->papers()->get();
        $withdrawals = $myUser->payments()->where('type', 'withdrawal')->get();

        // to be deleted
        // return Inertia::render('emails/Test');


        return Inertia::render('Dashboard', compact(
            'myUser',
            'categories',
            'pending_uploads',
            'uploaded_papers',
            'withdrawals'
        ));
    }

    public function uploadPaper(Request $request)
    {
        $data = $request->validate([
            'category' => 'required|integer',
            'name' => 'required|string',
            'paper' => 'required|file'
        ]);

        $user = auth()->user();
        $extension = $request->file('paper')->getClientOriginalExtension();
        $paper_name = $data['name'] . '.' . $extension;

        $category = Category::find($data['category']);
        $uri = $category->uri;

        // Trying to move the paper to the server.
        try {
            // $request->file('paper')->storeAs($paper_path, 'public');
            Storage::disk('public')->putFileAs($uri, $request->file('paper'), $paper_name);
        } catch (\Throwable $th) {
            return back()->withErrors([
                'failed' => 'Unable to upload the paper! Please check your internet connection and try again'
            ]);
        }

        $user->uploadedPapers()->create([
            'category_id' => $data['category'],
            'name' => $paper_name,
            'category' => $data['category'],
        ]);
        $user->dialy_uploads += 1;
        $user->update();

        return back();
    }
}