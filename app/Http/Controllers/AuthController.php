<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use App\Mail\VerifyEmail;
use App\Mail\forgotPassword;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function __construct()
    {
        return $this->middleware('guest')->except('logout');
    }

    public function validateRequest(Request $request)
    {
        $request->validate([
            'username' => $request->has('email') ? 'required|string|unique:users' : 'required|string',
            'email' => $request->has('email') ? 'required|email|unique:users' : '',
            'phone_number' => $request->has('phone_number') ? 'required|string|size:9' : '',
            'password' => 'required|string'
        ]);

        return back();
    }

    public function register(Request $request)
    {
        if ($request->isMethod('GET')) {
            return Inertia::render('Register');
        } else {
            $this->validateRequest($request);
            $data = $request->all();

            $imagePath = 'images/profiles/empty.jpg';
            if ($request->has('photo') && $request->photo) {
                $imagePath = $request->file('photo')->store('images/profiles', 'public');
            }

            User::create([
                'username' => $data['username'],
                'email' => $data['email'],
                'photo' => $imagePath,
                'balance' => 0,
                'phone_number' => $data['phone_number'],
                'password' => Hash::make($data['password']),
                'dialy_uploads' => 0,
            ]);

            $credentials = $request->except(['email']);
            if (Auth::attempt($credentials)) {
                $request->session()->regenerate();
            }
            //sending email verification message
            $code = self::code();
            $request->session()->put($request->username, $code);
            Mail::to($request->email)->send(new VerifyEmail($request->username, $code));
            return redirect('/email/verify');
        }
    }

    public function login(Request $request)
    {
        if ($request->isMethod('GET')) {
            return Inertia::render('Login');
        } else {
            $this->validateRequest($request);
            $credentials = $request->except('checked');
            if (Auth::attempt($credentials, $request->checked)) {
                $request->session()->regenerate();
                if (strtolower($request->username) === 'admin')
                    return redirect('/admin/users');
                if (!Auth::user()->email)
                    return redirect('/');
                return back();
            }
            return back()->withErrors([
                'failed' => 'The provided credentials do not match our records.',
            ]);
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
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

    public function forgotPassword(Request $request)
    {
        if ($request->isMethod('GET')) {
            return Inertia::render('ForgotPassword');
        } else {
            $data = $request->validate(['email' => 'required|email']);
            if (User::where('email', $data['email'])->exists()) {
                $user = User::where('email', $data['email'])->first();
                $code = self::code();
                $request->session()->put($user->username, $code);
                $request->session()->put('verify-email', $data['email']);
                Mail::to($data['email'])->send(new ForgotPassword($user->username, $code));
                return redirect('/forgot-code');
            }
            return back()->withErrors(['unknown' => "Email doesn't exist."]);
        }
    }

    public function validateForgotPassword(Request $request)
    {
        $request->validate(['email' => 'required|email']);
        return back();
    }

    public function validateForgotCode(Request $request)
    {
        $request->validate(['code' => 'required|string|size:5']);
        return back();
    }

    public function checkCode(Request $request)
    {
        if (!$request->session()->has('verify-email')) {
            return redirect('/forgot-password');
        }
        if ($request->isMethod('GET')) {
            return Inertia::render('ForgotCode');
        } else {
            $request->validate(['code' => 'required|string|size:5']);
            $user = User::where('email', $request->session()->get('verify-email'))->first();
            if ($request->session()->has($user->username) && $request->session()->get($user->username) === $request->code) {
                $request->session()->forget($user->username);
                $request->session()->put('can_change', true);
                return redirect('/new-password');
            }
            return back()->withErrors([
                'unknown' => 'The code is incorrect'
            ]);
        }
    }

    public function validateNewPassword(Request $request)
    {
        $request->validate(['password' => 'required|string|min:5']);
        return back();
    }

    public function changePassword(Request $request)
    {
        if (!$request->session()->has('can_change')) {
            return redirect('/forgot-code');
        }
        if ($request->isMethod('GET')) {
            return Inertia::render('NewPassword');
        } else {
            $request->validate(['password' => 'required|string|min:5']);
            $user = User::where('email', $request->session()->get('verify-email'))->first();
            $user->password = Hash::make($request->password);
            $user->update();
            $request->session()->forget(['can_change', 'verify-email']);
            return back();
        }
    }

    public function checkAuth()
    {
        if (!Auth::check())
            return response(['auth' => false]);
    }
}