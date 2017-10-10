$(function(){
	
	$(window).on("resize",function(){
		var width=$(window).width();
		if(width<768){
			var isMobile = true;
		}
		else{
			var isMoblie = false;
		}
		
		var ImgInfo=[
				{
					"bac":"url(images/slide_01_2000x410.jpg)",
					"img":"images/slide_01_640x340.jpg",
					"num":"0"
				},
				{
					"bac":"url(images/slide_02_2000x410.jpg)",
					"img":"images/slide_02_640x340.jpg",
					"num":"1"
				},
				{
					"bac":"url(images/slide_03_2000x410.jpg)",
					"img":"images/slide_03_640x340.jpg",
					"num":"2"
				},
				{
					"bac":"url(images/slide_04_2000x410.jpg)",
					"img":"images/slide_04_640x340.jpg",
					"num":"3"
				},
				{
					"bac":"url(images/slide_02_2000x410.jpg)",
					"img":"images/slide_02_640x340.jpg",
					"num":"4"
				},
				{
					"bac":"url(images/slide_03_2000x410.jpg)",
					"img":"images/slide_03_640x340.jpg",
					"num":"5"
				}
			]
			
			var data={json:ImgInfo,isMobile:isMobile};
			var html=template("slide",data);
			$("#inner").html(html);
			
			var datapoint={num:ImgInfo};
			var htmlpoint=template("points",datapoint);
			$("#point").html(htmlpoint);
			
			var isMove=false;
			var startX = 0 ;
			var moveX = 0;
			var distanceX = 0;
			
			$('#inner').on("touchstart",function(e){
				startX =e.originalEvent.touches[0].clientX;
				/*console.log(e);*/
				
			})
			$('#inner').on("touchmove",function(e){
				isMove=true;
				moveX =e.originalEvent.touches[0].clientX;
				/*console.log(moveX);*/
				
			})
			$('#inner').on("touchend",function(e){
				distanceX=moveX-startX;
				if(isMove){
					if(distanceX>0){
						$("#carousel-example-generic").carousel('prev');
					}else if(distanceX<0){
						$("#carousel-example-generic").carousel('next');
					}
				}
				
				isMove=false;
				startX=0;
				moveX=0;
				distanceX=0;
			})
			
	}).trigger("resize");
	
	
	
})

