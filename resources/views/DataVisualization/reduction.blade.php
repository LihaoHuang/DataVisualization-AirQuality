@extends('layouts.master')

@section('title', '溫室氣體排放量')

@section('content')

<div class="x_panel">
	<div class="col-md-12 col-sm-12 col-xs-12">
		<div class="x_panel">
			<div class="x_title">
				<h2>Bar graph <small>Sessions</small></h2>
				<div class="clearfix"></div>
			</div>
		<div class="x_content">
		<canvas id="mybarChart"></canvas>
		</div>
		</div>
	</div>
</div>
<script src="{{ asset('/js/xml.js') }}"></script>
<script src="{{ asset('/js/reduction.js') }}"></script>
@endsection
