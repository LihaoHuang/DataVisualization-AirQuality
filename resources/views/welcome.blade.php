<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height" style="background-image:url({{ asset('/images/img101.jpg') }})">
            @if (Route::has('login'))
                <div class="top-right links">
                    @if (Auth::check())
                        <a href="{{ url('/home') }}"><font color="black">Home</font></a>
                    @else
                        <a href="{{ url('/login') }}"><font color="black">登入</font></a>
                        <a href="{{ url('/register') }}"><font color="black">註冊</font></a>
                    @endif
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    <font color="black">{{ config('app.name','Laravel') }}</font>
                </div>

                <div class="links">
                    <a href="{{ url('/home') }}"><font color="black">Home</font></a>
                    <a href="https://github.com/LihaoHuang/DataVisualization-AirQuality"><font color="black">GitHub</font></a>
                    <a href="{{ url('/developer') }}"><font color="black">Developer</font></a>
                </div>
            </div>
        </div>
    </body>
</html>
