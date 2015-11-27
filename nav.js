(function(_window){
	document.addEventListener("DOMContentLoaded",function(){
		var list = document.querySelector(".list");
		var head = document.querySelector(".head");
		var buy  = document.querySelector(".buy");
		var is = list.children;
		var lis = head.querySelectorAll("ul li");
		var isSwitch = true;
			list.addEventListener("click",function(){
				if(isSwitch){
					
					head.className+=" head_fill";
					is[0].className="leftRote";
					is[1].className="rightRote";
					buy.className += " buyTransLater";
					setTimeout(function(){
						navAnimate(0,lis)
					},100);
				}else{
					head.className=head.className.split(" ")[0];
					is[0].className="";
					is[1].className="";
					buy.className="buy";
					[].forEach.call(lis,function(v){
						v.style.transform = "rotate3d(0, 1, 0, 0deg) scale(1.35,1) rotateX(-65deg)";
					})
				}
				isSwitch=!isSwitch;
			},false);
		var monitorScreenWidth = function(){

		}
		var navAnimate = function(index,lis){
			console.log(index);
			if(index  < lis.length -1){
				lis[index].style.transform = "rotate3d(0,1,0,15deg) rotateX(0deg) scale(.8)";		
				lis[index].style.opacity="1";		
				setTimeout(function(){
					navAnimate(++index,lis);
				},50);
			}
		}
		var init = function(){
			monitorScreenWidth();
		}
	},false);
})(window);