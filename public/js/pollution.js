/*
* @Author: LihaoHuang
* @Date:   2017-01-07 18:41:21
* @Last Modified by:   LihaoHuang
* @Last Modified time: 2017-01-07 23:50:17
*/
'use strict';

//CO圓餅圖需要的變數
var pm25_value = new Array;
var pm25_title = new Array;

//PM10圓餅圖需要的變數
var pm10_value = new Array;
var pm10_title = new Array;

//瀏覽器載入後執行
window.onload=function() { 
	//設定Slect的預設值
	$("#country").children().each(function(){
		
	    if ($(this).text() == localStorage.getItem('Country')){
	        //jQuery給法
	        $(this).attr("selected", "selected"); //或是給"selected"也可
	        //javascript給法
	        this.selected = true; 
	    }
	});
	
	var xmlFile="http://opendata2.epa.gov.tw/AQX.xml";
	//載入指定的xml檔案
    var xmlData=loadXMLFile(xmlFile);
	//取得DOM節點內的值
	var Data = xmlData.getElementsByTagName("Data");
	var PM25 = "";
	var PM10 = "";
	for (var i = 0; i < Data.length; i++) {
		if (Data[i].childNodes[3].innerHTML == localStorage.getItem("Country")) {
			//CO的資料呈現
			PM25 += "<div>"
			+	"<p>"+Data[i].childNodes[25].innerHTML+"</p>"
			+	"<div class=''>"
			+		"<div class='progress' style='width: 85%;'>"
			+			"<div class='progress-bar bg-green' role='progressbar' style='width:"
			+			Data[i].childNodes[19].innerHTML
			+			"%'>"+Data[i].childNodes[19].innerHTML+"</div>"
			+		"</div>"
			+	"</div>"
			+"</div>";
			pm25_value.push(Data[i].childNodes[19].innerHTML);
			pm25_title.push(Data[i].childNodes[25].innerHTML);

			PM10 += "<div>"
			+	"<p>"+Data[i].childNodes[25].innerHTML+"</p>"
			+	"<div class=''>"
			+		"<div class='progress' style='width: 85%;'>"
			+			"<div class='progress-bar bg-green' role='progressbar' style='width:"
			+			Data[i].childNodes[17].innerHTML
			+			"%'>"+Data[i].childNodes[17].innerHTML+"</div>"
			+		"</div>"
			+	"</div>"
			+"</div>";
			pm10_value.push(Data[i].childNodes[17].innerHTML);
			pm10_title.push(Data[i].childNodes[25].innerHTML);
		}
	}
	$("#PM25 #progress").html(PM25);
	$("#PM10 #progress").html(PM10);

	//CO圓餅圖設定
	var pm25_ctx = document.getElementById("co");
	var pm25_data = {
		datasets: [{
			data: pm25_value,
			backgroundColor: [
				"#455C73",
				"#9B59B6",
				"#BDC3C7",
				"#26B99A",
				"#00cc00",
				"#ff00ff",
				"#cc6600",
				"#0099cc",
				"#666633",
				"#660066",
				"#339966",
				"#339511",
			],
			label: 'My dataset' // for legend
		}],
		labels: pm25_title
	};
	var pm25_pieChart = new Chart(pm25_ctx, {
		data: pm25_data,
		type: 'pie',
		otpions: {
		  legend: false
		}
	});

	//PM10圓餅圖設定
	var pm10_ctx = document.getElementById("pm10");
	var pm10_data = {
		datasets: [{
			data: pm10_value,
			backgroundColor: [
				"#455C73",
				"#9B59B6",
				"#BDC3C7",
				"#26B99A",
				"#00cc00",
				"#ff00ff",
				"#cc6600",
				"#0099cc",
				"#666633",
				"#660066",
				"#339966",
				"#339511",
			],
			label: 'My dataset' // for legend
		}],
		labels: pm10_title
	};
	var pm10_pieChart = new Chart(pm10_ctx, {
		data: pm10_data,
		type: 'pie',
		otpions: {
		  legend: false
		}
	});
};

function Country() {
	localStorage.setItem('Country', $('#country').val());
	location.reload();
}