/*
* @Author: LihaoHuang
* @Date:   2017-01-07 23:36:39
* @Last Modified by:   LihaoHuang
* @Last Modified time: 2017-01-08 18:02:03
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

	// Bar chart
	var ctx = document.getElementById("mybarChart");
	var mybarChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: Year,
			datasets: [
			{
				label: '臭氧',
				backgroundColor: "#ff00ff",
				data: O3
			},
			{
				label: '二氧化氮',
				backgroundColor: "#00cc00",
				data: NO2
			},
			{
				label: '落塵量',
				backgroundColor: "#455C73",
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