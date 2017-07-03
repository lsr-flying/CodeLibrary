$(function(){
    console.log($("#j_username").val());
	
	$("#clickAlert").click(function(){
		alert("btn salut");
	});
	
  $("#sendBackgroundMsg").click(function(){
	        console.log("executing sendBackgroundMsg...");
			var instName="艾集团";
			var qryParam = {};
			qryParam.instName = instName;
			qryParam.noPage = 0;
			qryParam.pageNo = 1;
			qryParam.pageSize = 10;
			console.log("sendAjax");
		    callApi("queryMarketInstList",qryParam)
			.then(function (data) {
				 console.log("sendBackgroundMsg response:");
		         console.log(data)
			});
  });
  
    $("#sendAjax").click(function(){
	        console.log("executing sendAjax...");
			var instName="艾集团";
			var qryParam = {};
			qryParam.instName = instName;
			qryParam.noPage = 0;
			qryParam.pageNo = 1;
			qryParam.pageSize = 10;
			console.log("sendAjax");
			$.post("http://fic-oprii-admin-stg1.paic.com.cn/fic_opr/yzt/queryMarketInstList",
				  qryParam,
				  function(data){
					  console.log("sendAjax response:");
					  console.log(data);
				  },
				  "json");
  });
});

var callApi = function (op, params) {
	 console.log("executing callApi...");
	 return new Promise(function (fulfill, reject) {
		params = params || {};
        chrome.runtime.sendMessage(null, {op: op, params: params}, {}, fulfill);		
	});
};