(function(_win){
	
		var swipe  = function(){
			this.container = undefined;
			this.imgs = undefined;
			this.timeout = 2;
			this.loopId = undefined;
			this.init = function(obj){
				this.container = obj.container;
				this.imgs = obj.imgs || [];
				this.timeout = obj.timeout || 2;
				createImage(this);
			}
			var createImage =function(self){
				var fg = document.createDocumentFragment();
				var controls = document.createElement("ul");
				var loop = document.createElement("div");
					loop.id = "loop";
					controls.className="controls";
				for(var i = 0 ; i < self.imgs.length; i++){
					var img = document.createElement("div");
					   (function(image,len){
							// image.onload = function(){
								// var pixed = (image.height / image.width * 100).toFixed(2) * 1;
								// console.log(image.width,image.height,pixed);
								image.style.width = 100 / len +"%";
								image.style.height= "100%";
								image.style.float ="left";
							// }
					   })(img,self.imgs.length) 
					var li = document.createElement("li");
						if(i == 0){
							li.className = "active";
						}
						li.style.width  = "15px";
						li.style.height = "15px";
						li.style.position="relative";
						li.style.left="30px";
						li.style.top ="15px";
						li.setAttribute("onclick","changePic("+i+")");
						controls.appendChild(li);
					img.style.background= "url(" + self.imgs[i] +") no-repeat";
					img.style.backgroundSize="50% auto";
					img.style.backgroundPosition="center";
					fg.appendChild(img);
				}
				loop.style.transition="all .5s ease-in-out";
				loop.style.width = self.imgs.length * 100 +"%";
				loop.style.height="420px";
				loop.style.overflow="hidden";
				loop.appendChild(fg);
				self.container.appendChild(loop);
				self.container.appendChild(controls);
			}
			this.play = function(){
				var loop = this.container.querySelector("#loop");
				var point = 100/this.imgs.length;
				var index = 0;
				var _this  = this;
				var lis = this.container.querySelector(".controls").children;
				this.loopId = setInterval(function(){
					
					if(index > _this.imgs.length-1){
						index = 0;
					} 
						[].forEach.call(lis,function(v,i){
							if(i == index){
								v.className = "active";
							}else{
								v.className ="";
							}
						})
						loop.style.transform="translateX(-"+ (index * point)+ "%)";
						index++;
					console.log(index);
				},1500);
			}
		}		
		_win.$sw = swipe;
})(window)












