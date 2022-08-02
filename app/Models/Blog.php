<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'sub_text',
        'body',
        'image',
        'video',
        'blog_category_id',
    ];

    protected $hidden = [
        'updated_at'
    ];

    public function category()
    {
        return $this->belongsTo(BlogCategory::class);
    }

    public function comments()
    {
        $this->hasMany(Comment::class);
    }
}