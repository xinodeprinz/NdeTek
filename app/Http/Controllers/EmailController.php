<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Mail\VerifyEmail;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function __construct()
    {
        return $this->middleware('auth');
    }

    public function verify(Request $request)
    {
        if (!auth()->user()->email) {
            return back();
        }

        if (auth()->user()->email_verified_at) return redirect('/dashboard');
        if ($request->isMethod('GET')) {
            // return view("emails.verify");
            $email = auth()->user()->email;
            return Inertia::render('emails/Verify', compact('email'));
        } else {
            $request->validate([
                'code' => 'required|string|size:5'
            ]);
            $user = auth()->user();
            if ($request->session()->has($user->username) && $request->session()->get($user->username) === $request->code) {
                $timestamp = Carbon::now()->toDateTimeString();
                $user->email_verified_at = $timestamp;
                $request->session()->forget($user->username);
                $user->save();
                //
                return redirect('/dashboard');
            }
            return back()->withErrors([
                'unknown' => 'The code is incorrect'
            ]);
        }
    }

    public function validateRequest(Request $request)
    {
        $request->validate([
            'code' => 'required|string|size:5'
        ]);
        return back();
    }

    public function resendEmail(Request $request)
    {
        $code = self::code();
        $user = auth()->user();
        $request->session()->put($user->username, $code);
        Mail::to($user->email)->send(new VerifyEmail($user->username, $code));
        return back();
    }

    private static function code()
    {
        $str = '0123456789';
        $code = '';
        for ($i = 0; $i < 5; $i++) {
            $index = rand(0, strlen($str) - 1);
            $code .= $str[$index];
        }
        return $code;
    }
}