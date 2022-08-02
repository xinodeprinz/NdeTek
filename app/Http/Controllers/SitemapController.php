<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Paper;
use Illuminate\Http\Request;
use Spatie\Sitemap\SitemapGenerator;
use Carbon\Carbon;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class SitemapController extends Controller
{
    public function index()
    {
        $blogs = Blog::all();
        $papers = Paper::all();
        $posts = [];
        foreach ($blogs as $blog) {
            $blog->url = "/blog/{$blog->id}/{$blog->title}";
            $posts[] = $blog;
        }
        foreach ($papers as $paper) {
            $paper->url = "/papers";
            $posts[] = $paper;
        }
        return response()->view('sitemap', compact('posts'))
            ->header('Content-Type', 'text/xml');
    }

    public function newSiteMap()
    {
        SitemapGenerator::create(config('app.url'))
            ->getSitemap()
            ->add(Url::create('/extra-page')
                ->setLastModificationDate(Carbon::yesterday())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_YEARLY)
                ->setPriority(0.1))

            //  ->add(...)

            ->writeToFile('sitemap.xml');
        return 1;
    }
}