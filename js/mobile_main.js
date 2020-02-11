window.addEventListener("load",function(){
	var body=document.getElementsByTagName("body")[0];
	var pop=document.getElementsByClassName("pop")[0];
	var dim=document.getElementsByClassName("dim")[0];
	// 팝업
	body.classList.add("static");
	dim.classList.add("static");
	pop.children[1].addEventListener("click",function(e){
		e.preventDefault();
		pop.style.display="none";
		body.classList.remove("static");
		dim.classList.remove("static");
	});


	// 키비주얼**
	var key=document.getElementsByClassName("keyvisual")[0];
	var keyUl=key.children[0];
	var n1=0;
	var distance=0;
	setInterval(function(){
		n1=n1+1;
		distance=n1*-1*100+"%";
		$(".keyvisual ul").animate({left:distance},300,function(){
			$(".keyvisual ul").append($(".keyvisual li:first-child"));
			n1=n1-1;
			distance=n1*-1*100+"%";
			$(".keyvisual ul").animate({left:distance}, 0);
		});
	}, 3000);


	// 소식 버튼 높이 지정 **
	var w=0;
	var button_h=0;
	var timer;
	var buttonLi=document.getElementsByClassName("button")[0].children[0].children;

	resizeTrigger();
	window.addEventListener("resize",function(){
		clearTimeout(timer);
		timer=setTimeout(function(){
			for(var i=0; i<buttonLi.length; i++){
				buttonH=buttonLi[i].children[0].width; /**/
			}
			// button_h=$(".button li a").width();
			// $(".button li a").css({"height": button_h, "line-height": button_h+"px"});
		}, 10);
	});
	function resizeTrigger(){
		timer=setTimeout(function(){
			for(var i=0; i<buttonLi.length; i++){
				buttonH=buttonLi[i].children[0].width; /**/
			}
			// $(".button li a").css({"height": button_h, "line-height": button_h+"px"});
		}, 10);
	}


	// gnb
	var header=document.getElementById("header");
	var tab=document.getElementsByClassName("tab")[0];
	var gnb=document.getElementById("gnb");
	var depth1Li=gnb.children[0].children;
	var h=44;
	var depth2h=[]; // 2뎁스 ul 수직 크기 배열입니다.


	tab.addEventListener("click",function(e){
		e.preventDefault();
		for(var i=0; i<depth1Li.length; i++){
			depth2Ul=depth1Li[i].children[1];
			depth2h.push(depth2Ul.offsetHeight+h);
			console.log(depth2Ul);
			console.log(depth2h.push(depth2Ul.offsetHeight+h));
		}

		if(header.classList.contains("active")){
			header.classList.remove("active");
			body.classList.remove("static");
			for(var i=0; i<depth1Li.length; i++){
				depth1Li[i].children[0].classList.remove("active");
			}
			gnb.children[0].style.display="block";
		}
		else{
			header.classList.add("active");
			body.classList.add("static");
		}
	});

	for(var i=0; i<depth1Li.length; i++){
		depth1Li[i].index=i;
		depth1Li[i].children[0].addEventListener("click", function(e){
			e.preventDefault();
			if(e.currentTarget.classList.contains("active")){
				e.currentTarget.classList.remove("active");
				e.currentTarget.nextElementSibling.style.display="none";
			}
			else{
				for(var j=0; j<depth1Li.length; j++){
					depth1Li[j].children[0].classList.remove("active");
					depth1Li[j].children[0].nextElementSibling.style.display="none";
				}

				e.currentTarget.classList.add("active");
				e.currentTarget.nextElementSibling.style.display="block";
			}
		});
	}






	// 이벤트 배너 갤러리 버튼
	var n2=0;
	var banner=document.getElementsByClassName("banner_list")[0];
	var bannerLi=banner.children[0].children;
	var cont=document.getElementsByClassName("banner_controll")[0];
	var contLi=cont.children[0].children;

	bannerLi[0].classList.add("timer");
	contLi[0].classList.add("timer");

	setInterval(function(){
		if(n2<2){
			n2=n2+1;
		}
		else {
			n2=0;
		}
		for(var i=0; i<bannerLi.length; i++){
			bannerLi[i].classList.remove("timer");
			bannerLi[n2].classList.add("timer");
			contLi[i].classList.remove("timer");
			contLi[n2].classList.add("timer");
		}
	}, 3000);
});
