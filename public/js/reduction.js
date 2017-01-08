/*
* @Author: LihaoHuang
* @Date:   2017-01-07 23:36:39
* @Last Modified by:   LihaoHuang
* @Last Modified time: 2017-01-08 18:21:10
*/

'use strict';
//X軸的Label
var pm10_title = new Array;
var N2O_data = [41, 56, 25, 48, 72, 34, 20];
//瀏覽器載入後執行
window.onload=function() { 

	var xmlFile="http://www.dgbas.gov.tw/public/data/open/LocalStat/green10.xml";
	//載入指定的xml檔案
    var xmlData=loadXMLFile(xmlFile);
	//取得DOM節點內的值
	var Data = xmlData.getElementsByTagName("Data");
	//x.push(50);
	// console.log(Data);
	// console.log(Data[0].childNodes[1]);
	// console.log(Data[0].childNodes[17].innerHTML);
	var Year = new Array();
	var Dust = new Array();	//落塵量
	var PM25 = new Array();
	var SO2 = new Array();	//二氧化硫
	var NO = new Array();  //一氧化氮
	var NO2 = new Array();	//二氧化氮
	var O3 = new Array();	//臭氧

	for(var i = 0; i < Data.length; i++){
		Year.push(Data[i].childNodes[1].innerHTML);
		Dust.push(Data[i].childNodes[5].innerHTML);
		PM25.push(Data[i].childNodes[9].innerHTML);
		SO2.push(Data[i].childNodes[13].innerHTML);
		NO.push(Data[i].childNodes[15].innerHTML);
		NO2.push(Data[i].childNodes[17].innerHTML);
		O3.push(Data[i].childNodes[19].innerHTML);
	}
	// console.log(NO2);

	// Line chart
	var line_ctx = document.getElementById("mylineChart");
	var mylineChart = new Chart(line_ctx, {
		type: 'line',
		data: {
			labels: Year,
			datasets: [
			{
				label: '臭氧',
				backgroundColor: "rgba(3, 88, 106, 0.2)",
				borderColor: "rgba(3, 88, 106, 0.80)",
				pointBorderColor: "rgba(3, 88, 106, 0.80)",
				pointBackgroundColor: "rgba(3, 88, 106, 0.80)",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				data: O3
			},
			{
				label: '二氧化氮',
				backgroundColor: "rgba(38, 185, 154, 0.2)",
				borderColor: "rgba(0, 102, 0, 0.85)",
				pointColor: "rgba(0, 102, 0, 0.85)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: NO2
			},
			{
				label: '落塵量',
				backgroundColor: "rgba(69, 92, 115, 0.2)",
				borderColor: "rgba(0, 0, 204, 0.85)",
				pointColor: "rgba(0, 0, 204, 0.85)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: Dust
			},
			
			{
				label: '二氧化硫',
				backgroundColor: "rgba(189, 195, 199, 0.2)",
				borderColor: "rgba(204, 51, 0, 0.85)",
				pointColor: "rgba(204, 51, 0, 0.85)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: SO2
			},
			{
				label: '一氧化氮',
				backgroundColor: "rgba(38, 185, 154, 0.2)",
				borderColor: "rgba(153, 51, 0, 0.85)",
				pointColor: "rgba(153, 51, 0, 0.85)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: NO
			}
			]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});

	// Bar chart
	var bar_ctx = document.getElementById("mybarChart");
	var mybarChart = new Chart(bar_ctx, {
		type: 'bar',
		data: {
			labels: Year,
			datasets: [
			{
				label: '臭氧',
				backgroundColor: "#455C73",
				data: O3
			},
			{
				label: '二氧化氮',
				backgroundColor: "#9B59B6",
				data: NO2
			},
			{
				label: '落塵量',
				backgroundColor: "#ff00ff",
				data: Dust
			},
			
			{
				label: '二氧化硫',
				backgroundColor: "#BDC3C7",
				data: SO2
			},
			{
				label: '一氧化氮',
				backgroundColor: "#26B99A",
				data: NO
			}
			]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});
};