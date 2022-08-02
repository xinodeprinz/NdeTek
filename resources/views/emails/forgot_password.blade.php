@component('mail::message')
# Change your account password

Dear {{$username}},

Use the code below to change your account password: <br>

# {{$code}}

Thanks,<br>
{{ config('app.name') }}
@endcomponent