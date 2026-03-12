<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $fillable = [
        'name',
        'email',
        'company',
        'website',
        'industry',
        'challenge',
        'budget',
        'timeline',
        'hear_about',
        'referrer',
        'lead_status',
    ];
}