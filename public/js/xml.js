/*
* @Author: LihaoHuang
* @Date:   2017-01-07 23:11:16
* @Last Modified by:   LihaoHuang
* @Last Modified time: 2017-01-07 23:11:27
*/

'use strict';
// 首先會先寫ㄧ個函式來判斷瀏覽器是否支援 javascript 讀取 XML的功能
function loadXMLFile(file){
	var xmlDoc;
	// 這ㄧ個判斷式是針對IE，判斷是不是支援ActiveXObject 這個物件
    if (window.ActiveXObject){
		//如果支援這個物件，就建立ㄧ個讀取XML的物件
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");

		//判斷是否進行異步處理，true代表在瀏覽器送出訊息後即立即更新(就是底下send方法)，false代表在任何情況下，會直接向伺服器提取資料做更新
		xmlDoc.async = false;

		//載入xml檔案
		xmlDoc.load(file);
		
		//載入後回傳
		return xmlDoc;
  	}
  	else if (document.implementation && document.implementation.createDocument){

		//建立ㄧ個讀取XML的物件
        var xmlInfo = new XMLHttpRequest();  

		//用GET的方式取回XML資料，第三個參數是判斷是否異步處理，true代表在瀏覽器送出訊息後即立即更新(就是底下send方法)，false代表在任何情況下，會直接向伺服器提取資料做更新
        xmlInfo.open("GET", file, false);

		//是否傳回資料，因為這裡不傳送資料給伺服器，因此填上null
        xmlInfo.send(null); 

		//把取得的XML回傳
		xmlDoc = xmlInfo.responseXML;

		return xmlDoc;
	}
	//如果瀏覽器不支援就輸出Error
	else{
		alert("您的瀏覽器不支援Javascript!! ");
	}
}