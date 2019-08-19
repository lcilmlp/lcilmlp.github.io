window.addEventListener("load", function(){
	/*下面的渐变条*/
	icon = document.getElementsByClassName("littleicon");
	a = document.getElementsByClassName("icona");
	for(i = 0; i < a.length; i++) {
		a[i].onmouseover = function() {
			for(j=0; j < a.length; j++){
				if (this == a[j]){
					break;
				}	
			};	
			icon[j].style.animation = "mymove 4s infinite";
		}
		a[i].onmouseout = function() {
			for(j=0; j < a.length; j++){
				if (this == a[j]){
					break;
				}	
			};	
			icon[j].style.animation = "";
		}		
	}
	/*谷歌的解决方法*/
	googlea = document.getElementById("googlea");
	G = document.getElementById("G");
	o1 = document.getElementById("o1");
	o2 = document.getElementById("o2");
	g = document.getElementById("g");
	l = document.getElementById("l");
	e = document.getElementById("e");
	googlea.addEventListener("mouseover", function() {
		G.style.color = "#4285F4";
		o1.style.color = "#EA4335";
		o2.style.color = "#FBBC05";
		g.style.color = "#4285F4";
		l.style.color = "#34A853";
		e.style.color = "#EA4335";
	});	
	googlea.addEventListener("mouseout", function() {
		G.style.color = "";
		o1.style.color = "";
		o2.style.color = "";
		g.style.color = "";
		l.style.color = "";
		e.style.color = "";
	});
	/*侧边栏设置*/
	mubu = document.getElementById("mubu");
	mubu.style.height = document.documentElement.clientHeight + "px";
	mubu.style.width = document.documentElement.clientWidth + "px";
	cebianlan = document.getElementById("cebianlan");
	sidebox = document.getElementById("sidebox");
	cebianlan.onclick = function () {
		sidebox.style.left = "0px";
		mubu.style.display = "block";
		mubu.style.animation = "show .3s ease-out";
		mubu.style.opacity = "0.4";
	}
	mubu.onclick = function () {
		sidebox.style.left = "";
		mubu.style.animation = "showout .3s ease-out";
		mubu.style.opacity = "0";
		setTimeout("mubu.style.display='none'", 300);
	}
	
})