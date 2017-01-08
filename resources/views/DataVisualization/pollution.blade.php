@extends('layouts.master')

@section('title', '空氣品質汙染指標')

@section('content')
<div class="x_panel">
	<font size="10px;">空氣品質汙染指標</font>
</div>
<div style="margin-top: 20px;" class="col-md-12 col-sm-12 col-xs-12">
	<label for="country">選擇縣市</label>
	<select id="country" class="form-control">
		<option value="臺北市">臺北市</option>
		<option value="新北市">新北市</option>
		<option value="桃園市">桃園市</option>
		<option value="臺中市">臺中市</option>
		<option value="臺南市">臺南市</option>
		<option value="高雄市">高雄市</option>
		<option value="基隆市">基隆市</option>
		<option value="新竹市">新竹市</option>
		<option value="嘉義市">嘉義市</option>
		<option value="新竹縣">新竹縣</option>
		<option value="苗栗縣">苗栗縣</option>
		<option value="彰化縣">彰化縣</option>
		<option value="南投縣">南投縣</option>
		<option value="雲林縣">雲林縣</option>
		<option value="嘉義縣">嘉義縣</option>
		<option value="屏東縣">屏東縣</option>
		<option value="宜蘭縣">宜蘭縣</option>
		<option value="花蓮縣">花蓮縣</option>
		<option value="臺東縣">臺東縣</option>
		<option value="澎湖縣">澎湖縣</option>
		<option value="金門縣">金門縣</option>
		<option value="連江縣">連江縣</option>
	</select>
	<div align="center">
		<button style=";margin-top: 10px;" class="btn btn-success" onclick="Country()">確定</button>
	</div>
</div>
<div class="x_panel">
	<div id="PM25" style="margin-top: 20px;" class="col-md-6 col-sm-6 col-xs-12 bg-white">
		<div class="x_panel">
			<div class="x_title">
				<h2>PM2.5 含量比較 <small>Sessions</small></h2>
				<div class="clearfix"></div>
			</div>

			<div id="progress" class="col-md-12 col-sm-12 col-xs-6">
				<div>
					<p>Facebook Campaign</p>
					<div class="">
						<div class="progress" style="width: 76%;">
							<div class="progress-bar bg-green" role="progressbar" style="width:70%"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div style="margin-top: 20px;" class="col-md-6 col-sm-6 col-xs-12">
		<div class="x_panel">
			<div class="x_title">
				<h2>PM2.5 含量比較 <small>Pie Chart Graph</small></h2>
				<div class="clearfix"></div>
			</div>
			<div class="x_content">
				<canvas id="co"></canvas>
			</div>
		</div>
	</div>
</div>
<div class="x_panel">
	<div id="PM10" style="margin-top: 20px;" class="col-md-6 col-sm-6 col-xs-12 bg-white">
		<div class="x_panel">
			<div class="x_title">
				<h2>PM10 比較 <small>Sessions</small></h2>
				<div class="clearfix"></div>
			</div>

			<div id="progress" class="col-md-12 col-sm-12 col-xs-6">
				<div>
					<p>Facebook Campaign</p>
					<div class="">
						<div class="progress" style="width: 76%;">
							<div class="progress-bar bg-green" role="progressbar" style="width:70%"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div style="margin-top: 20px;" class="col-md-6 col-sm-6 col-xs-12">
		<div class="x_panel">
			<div class="x_title">
				<h2>PM10 含量比較 <small>Pie Chart Graph</small></h2>
				<div class="clearfix"></div>
			</div>
			<div class="x_content">
				<canvas id="pm10"></canvas>
			</div>
		</div>
	</div>
</div>
<script src="{{ asset('/js/xml.js') }}"></script>
<script src="{{ asset('/js/pollution.js') }}"></script>
@endsection
