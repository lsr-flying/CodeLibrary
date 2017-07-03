$(function(){
	console.log("contentScript...");
	console.log($("#j_username").val());
});

var queryMarketInstList = function(instName){
	var qryParam = {};
	qryParam.instName = instName;
	qryParam.noPage = 0;
	qryParam.pageNo = 1;
	qryParam.pageSize = 10;
	$.post("http://fic-oprii-admin-stg1.paic.com.cn/fic_opr/yzt/queryMarketInstList",
		  qryParam,
		  function(data){
			  console.log(data);
		  },
		  "json");
}