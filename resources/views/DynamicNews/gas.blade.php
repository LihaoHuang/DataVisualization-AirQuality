@extends('layouts.master')

@section('title', '溫室氣體')

@section('content')
<div class="x_panel">
	<font size="10px;">溫室氣體</font>
	<img src="{{ asset('/images/einfo.jpg')}} ">
</div>
<div class="x_panel">
	<!-- Table row -->
	<div class="row">
		<div class="col-xs-12 table">
			<table class="table table-striped">
				<thead>
					<tr>
						<th><font size="5px;">標題</font></th>
						<th><font size="5px;">發佈時間</font></th>
						<th><font size="5px;">作者</font></th>
						<th><font size="5px;">文章出處</font></th>
					</tr>
				</thead>
				<tbody id="rss_data">
					<tr>
						<td colspan="4"><center><font size="5px" color="red">無資料</font></center></td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- /.col -->
	</div>
	<!-- /.row -->
</div>
<script src="{{ asset('/js/xml.js') }}"></script>
<script src="{{ asset('/js/gas.js') }}"></script>
@endsection
