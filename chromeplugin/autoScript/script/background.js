var api = {};

api.queryMarketInstList = function (params) {
	console.log("api.queryMarketInstList...")
	return new Promise(function (resolve, reject) {
			$.post("http://fic-oprii-admin-stg1.paic.com.cn/fic_opr/yzt/queryMarketInstList",
				  params,
				  function(data){
					  console.log(data);
					  resolve(data);
				  },
				  "json");
		});
};

chrome.runtime.onMessage.addListener(function (msg, sender, cb) {
	console.log("message arriving...");
	
	var fulfill = function (res) {
		console.log(msg, res);
		cb(res);
	};

	var func = api[msg.op];
	if (func)
		func(msg.params).then(fulfill);

	return true;
});