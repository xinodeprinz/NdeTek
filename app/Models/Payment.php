<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'type', 'amount', 'phone_number', 'method', 'user_id'
    ];

    protected $hidden = [
        'user_id',
        'updated_at'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
