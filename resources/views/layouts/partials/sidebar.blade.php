<div class="col-md-3 left_col">
  <div class="left_col scroll-view">
    <div class="navbar nav_title" style="border: 0;">
      <a href="/" class="site_title"><i class="fa fa-star"></i> <span>{{config('app.smallname', 'Laravel')}}</span></a>
    </div>

    <div class="clearfix"></div>
    <br />
	<!-- sidebar menu -->
	<div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
		<div class="menu_section">
			<h3>General</h3>
			<ul class="nav side-menu">
				<li class=""><a href="/home"><i class="fa fa-home"></i> Home </a></li>
				<li><a><i class="fa fa-bar-chart-o"></i> DataVisualization <span class="fa fa-chevron-down"></span></a>
					<ul class="nav child_menu">
						<li><a href="/pollution">空氣品質汙染指標</a></li>
						<li><a href="/reduction">溫室氣體排放量</a></li>
					</ul>
				</li>
				<li><a><i class="fa fa-rss-square"></i> DynamicNews <span class="fa fa-chevron-down"></span></a>
					<ul class="nav child_menu">
						<li><a href="/particles">細懸浮微粒</a></li>
						<li><a href="/gas">溫室氣體</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
	<!-- /sidebar menu -->
	</div>
</div>