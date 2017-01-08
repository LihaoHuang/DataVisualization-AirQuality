@extends('layouts.master')

@section('title', '溫室氣體')

@section('content')
<div class="x_panel">
	<font size="10px;">溫室氣體</font>
</div>
<div class="x_panel">
	<div class="col-md-6 col-sm-6 col-xs-12">
		<div class="x_panel">
			<div class="x_title">
				<h2>年度比較 <small>Line graph</small></h2>
				<div class="clearfix"></div>
			</div>
		<div class="x_content">
		<canvas id="mylineChart"></canvas>
		</div>
		</div>
	</div>
	<div class="col-md-6 col-sm-6 col-xs-12">
		<div class="x_panel">
			<div class="x_title">
				<h2>年度比較 <small>Bar graph</small></h2>
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
