@extends('layouts.master')

@section('title', '首頁')

@section('content')
<script type="text/javascript">
	localStorage.setItem("Country", "臺北市");
</script>
<div class="container">
    <div class="row">
        <div align="center" style="height: 60vh;margin-top: 20%;">
            <font size="50px">{{ config('app.name') }}</font>
        </div>
    </div>
</div>
@endsection
