@component('mail::message')
# Verify your email address

Dear {{$username}},

Thank you for creating an account on NdeTek.
Your email verification code is: <br>

# {{$code}}

{{-- @component('mail::button', ['url' => 'localhost:8000'])
Blog
@endcomponent --}}

Thanks,<br>
{{ config('app.name') }}
@endcomponent