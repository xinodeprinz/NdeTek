<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>NdeTek</title>
    <link rel="shortcut icon" href="/storage/images/favicon.ico">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>

    @yield('content')
    
    <script src="{{ mix('js/app.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>