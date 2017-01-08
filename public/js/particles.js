/*
* @Author: LihaoHuang
* @Date:   2017-01-08 15:24:23
* @Last Modified by:   LihaoHuang
* @Last Modified time: 2017-01-08 16:30:53
*/

'use strict';
//瀏覽器載入後執行
window.onload=function() { 

	var xmlFile="../xml/particles.xml";
	//載入指定的xml檔案
    var xmlData=loadXMLFile(xmlFile);
	//取得DOM節點內的值
	var Data = xmlData.getElementsByTagName("item");
	
	var rss_data = "";
	for (var i = 0; i < Data.length ; i++) {
		rss_data 	+= "<tr>"
					+		"<td><a href='"+Data[i].getElementsByTagName("link")[0].innerHTML+"'><font size='5px' color='green'>"+Data[i].getElementsByTagName("title")[0].innerHTML+"</font></a></td>"
					
					+		"<td><font size='3px'>"+Data[i].getElementsByTagName("pubDate")[0].innerHTML+"</font></td>"
					+		"<td><font size='3px'>"+Data[i].getElementsByTagName("creator")[0].innerHTML+"</font></td>"
					+		"<td><font size='3px'>"+Data[i].getElementsByTagName("guid")[0].innerHTML+"</font></td>"
					+	"</tr>";

	}
	$("#rss_data").html(rss_data);
	// console.log(Data[0].getElementsByTagName("guid")[0].innerHTML);
};