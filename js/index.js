window.onresize = function(){
    if(document.body.clientWidth <= "1200"){
        container.style.width = "1200px";
    }else{
    	container.style.width = "100%";
    }
}
window.onload = function() {
	console.log("谢谢你这么好看还来看我的网站");
	
	if(document.body.clientWidth <= "1200"){
            container.style.width = "1200px";
        }else{
    	    container.style.width = "100%";
        }
	
	//主题切换导航部分js
	var topCenterNav = document.getElementsByClassName("top-center-nav")[0];
	var navLi = topCenterNav.getElementsByTagName("li");
    var top = document.getElementById("top");
    var container = document.getElementById("container");
    var bt = document.getElementsByClassName("bt");
    var conPart2Text = document.getElementsByClassName("content-part2-text")[0];
    var conPart3 = document.getElementsByClassName("content-part3")[0];
    var conPart4 = document.getElementsByClassName("content-part4")[0];
    var footerBor = document.getElementsByClassName("footer-center")[0];
    
    
	//alert(navLi.length);
	for(var i = 0; i < navLi.length; i++) {
		navLi[i].index = i;
		navLi[i].onclick = function() {
			for(var j = 0; j < navLi.length; j++) {
				navLi[j].className = "";
			}
			switch(this.index) {
				case 0:
					this.className = "active" + this.index;
					top.style.backgroundColor = "#D6EEF7";
					container.style.backgroundColor = "#77C5E3";
					conPart2Text.style.borderColor = "#77C5E3";
					conPart3.style.backgroundColor = "#77C5E3";
					conPart4.style.backgroundColor = "#77C5E3";
					footerBor.style.borderColor = "#77C5E3";
					footerBor.style.color = "#77C5E3";
					for(var z = 0;z<bt.length;z++){
						bt[z].style.color = "#77C5E3";
					}
					break;
				case 1:
					this.className = "active" + this.index;
					top.style.backgroundColor = "#F8DCDA";
					container.style.backgroundColor = "#E78883";
					conPart2Text.style.borderColor = "#E78883";
					conPart3.style.backgroundColor = "#E78883";
					conPart4.style.backgroundColor = "#E78883";
					footerBor.style.borderColor = "#E78883";
					footerBor.style.color = "#E78883";
					for(var z = 0;z<bt.length;z++){
						bt[z].style.color = "#E78883";
					}
					break;
				case 2:
					this.className = "active" + this.index;
					top.style.backgroundColor = "#F7EAD1";
					container.style.backgroundColor = "#E5B964";
					conPart2Text.style.borderColor = "#E5B964";
					conPart3.style.backgroundColor = "#E5B964";
					conPart4.style.backgroundColor = "#E5B964";
					footerBor.style.borderColor = "#E5B964";
					footerBor.style.color = "#E5B964";
					for(var z = 0;z<bt.length;z++){
						bt[z].style.color = "#E5B964";
					}
					break;
				case 3:
					this.className = "active" + this.index;
					top.style.backgroundColor = "#D0EDEA";
					container.style.backgroundColor = "#62C4B9";
					conPart2Text.style.borderColor = "#62C4B9";
					conPart3.style.backgroundColor = "#62C4B9";
					conPart4.style.backgroundColor = "#62C4B9";
					footerBor.style.borderColor = "#62C4B9";
					footerBor.style.color = "#62C4B9";
					for(var z = 0;z<bt.length;z++){
						bt[z].style.color = "#62C4B9";
					}
					break;
				case 4:
					this.className = "active" + this.index;
					top.style.backgroundColor = "#D9E4F1";
					container.style.backgroundColor = "#7EA3D1";
					conPart2Text.style.borderColor = "#7EA3D1";
					conPart3.style.backgroundColor = "#7EA3D1";
					conPart4.style.backgroundColor = "#7EA3D1";
					footerBor.style.borderColor = "#7EA3D1";
					footerBor.style.color = "#7EA3D1";
					for(var z = 0;z<bt.length;z++){
						bt[z].style.color = "#7EA3D1";
					}
					break;
			}
		}
	}
	
	//右边照片魔方js部分
	document.onmousemove = function(ev){
        var event = ev||event;
        var box = document.getElementsByClassName("right-box")[0];
        //alert(event.clientX);

        box.style.transform = "rotateY("+event.clientX+"deg) rotateX("+event.clientY+"deg)";
    }
	
	
}


//part6选项卡
function show(index){
	//获取所有div
	var part6Con = document.getElementsByClassName("content-part6-con-bt")[0];
	var part6ConBt = part6Con.getElementsByTagName("div");
	var part6Text = document.getElementsByClassName("content-part6-con-text")[0];
	var part6TextCon = part6Text.getElementsByTagName("div");
    
    for(var i=0;i<part6ConBt.length;i++){
    	part6ConBt[i].className = "";
    	part6TextCon[i].style.display = "none";
    }
    part6ConBt[index].className = "part6-active";
    	part6TextCon[index].style.display = "block";
}

