<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image',
        'uri',
        'main_category_id',
    ];

    protected $hidden = [
        'updated_at'
    ];

    public function papers()
    {
        return $this->hasMany(Paper::class);
    }

    public function uploadedPapers()
    {
        return $this->hasMany(UploadPaper::class);
    }

    public function main_category()
    {
        return $this->belongsTo(MainCategory::class);
    }
}