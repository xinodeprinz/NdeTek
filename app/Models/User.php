<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'email',
        'balance',
        'photo',
        'password',
        'phone_number',
        'dialy_uploads',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function papers()
    {
        return $this->hasMany(Paper::class);
    }

    public function uploadedPapers()
    {
        return $this->hasMany(UploadPaper::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function likes()
    {
        return $this->hasOne(Like::class);
    }

    public function dislikes()
    {
        return $this->hasOne(Dislike::class);
    }

    public function loves()
    {
        return $this->hasOne(Love::class);
    }
}