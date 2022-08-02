<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'reply',
        'body',
        'blog_id'
    ];

    protected $hidden = [
        'updated_at'
    ];

    public function blog()
    {
        $this->belongsTo(Blog::class);
    }
}