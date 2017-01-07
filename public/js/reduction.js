/*
* @Author: LihaoHuang
* @Date:   2017-01-07 23:36:39
* @Last Modified by:   LihaoHuang
* @Last Modified time: 2017-01-08 00:02:48
*/

'use strict';
//X軸的Label
var pm10_title = new Array;
var N2O_data = [41, 56, 25, 48, 72, 34, 20];
//瀏覽器載入後執行
window.onload=function() { 

	var xmlFile="../xml/GreenhouseGasRpt.xml";
	//載入指定的xml檔案
    var xmlData=loadXMLFile(xmlFile);
	//取得DOM節點內的值
	var Data = xmlData.getElementsByTagName("Data");
	// x.push(50);






	// Bar chart
	var ctx = document.getElementById("mybarChart");
	var mybarChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [
			{
				label: 'CO2',
				backgroundColor: "#26B99A",
				data: [51, 30, 40, 28, 92, 50, 45]
			},
			{
				label: 'N2O',
				backgroundColor: "#03586A",
				data: N2O_data
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