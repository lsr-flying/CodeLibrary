$(function(){

$("#goal").click(function(){
  alert('');
});

$("#money").click(function(){

   if(window.webkitNotifications){  
        var notification = window.webkitNotifications.createNotification(  
            'images/icon.png',  // icon url - can be relative  
            '通知的title!',  // notification title  
            data  // notification body text  
        );  
        notification.show();          
        // 设置3秒后，将桌面通知dismiss  
        setTimeout(function(){notification.cancel();}, 3000);  
   
    }else if(chrome.notifications){  
        var opt = {  
            type: 'basic',
            title: '通知',  
            message: 'aloha',
            iconUrl: '/img/alert_32.png'
        }  
        chrome.notifications.create('', opt, function(id){  
            setTimeout(function(){  
            chrome.notifications.clear(id, function(){});  
            }, 3000);  
        });  
      
    }else{  
        alert('亲，你的浏览器不支持啊！');  
    }

});

});




