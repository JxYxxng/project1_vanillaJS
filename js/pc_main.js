window.addEventListener("load", function(){
	var container=document.getElementsByClassName("container")[0].children;
	var body=document.getElementsByTagName("body")[0];

	// 팝업
	for(var i=0; i<container.length; i++){
		if(container[i].className == "pop"){
			var pop=container[i];
			var close=pop.children[1];
		}
		else if(container[i].className == "dim"){
			var dim=container[i];
		}
	}
	
	body.classList.add("static");
	dim.classList.add("static");
	
	close.addEventListener("click", function(e){
		e.preventDefault();
		pop.style.display="none";
		body.classList.remove("static");
		dim.classList.remove("static");
	});


	// 키비주얼
	var n1=0;
	var key=document.getElementsByClassName("keyvisual")[0].children;

	for(var i=0; i<key.length; i++){
		if(key[i].className == "keyvisual_inner"){
			var keyLi=key[i].children[0].children;
		}
		else if(key[i].className == "controlls"){
			var contLi=key[i].children[0].children;
		}
		else if(key[i].className == "key_btn"){
			var left=key[i].children[0];
			var right=key[i].children[1];
		}
	}

	keyLi[0].classList.add("active");

	function keyMoving(){
		for(var j=0; j<contLi.length; j++){
			if(n1==j){
				keyLi[j].classList.add("active");
				contLi[j].classList.add("active");
			}
			else{
				keyLi[j].classList.remove("active");
				contLi[j].classList.remove("active");
			}
		}
	}

	for(var i=0; i<contLi.length; i++){
		contLi[i].index=i;

		contLi[i].addEventListener("click",function(e){
			e.preventDefault();
			n1=e.currentTarget.index;
			keyMoving();
		});
	}

	right.addEventListener("click",function(e){
		e.preventDefault();
		if(n1<4){
			n1=n1+1;
		}
		else{
			n1=0;
		}
		keyMoving();
	});

	left.addEventListener("click",function(e){
		e.preventDefault();
		if(n1>0){
			n1=n1-1;
		}
		else{
			n1=4;
		}
		keyMoving();
	});

	setInterval(function(){ /**/
		if(n1<4){
			n1=n1+1;
		}
		else{
			n1=0;
		}
		keyMoving();
	}, 5000);

	// gnb
	var menuInner=document.getElementsByClassName("menu_zone_inner")[0];
	var gnb=document.getElementById("GNB");
	var gnbUl=gnb.children[0];
	var depth1=gnbUl.children; // #GNB > ul > li
	var gnbBg=document.getElementsByClassName("gnb_bg")[0];

	gnb.addEventListener("mouseenter",function(){
		gnb.parentNode.classList.add("on");
		gnbBg.classList.add("on");
	});
	gnb.addEventListener("mouseleave",function(){
		gnb.parentNode.classList.remove("on");
		gnbBg.classList.remove("on");
	});

	// focusin
	// console.log(gnb.children[0].children[0]);
	for(var i=0; i<depth1.length; i++){
		// console.log(depth1[i]);
		var depth2Ul=depth1[i].children[1]; // #GNB ul ul
		var depth2Li=depth2Ul.children; // #GNB ul ul li

		depth1[i].children[0].addEventListener("focusin",function(e){
			// console.log("포커스인");
			// console.log(e.currentTarget.parentNode);
			e.currentTarget.parentNode.classList.add("on");
			menuInner.classList.add("on");
			gnbBg.classList.add("on");
		});

		// console.log(depth2Li.length);
		for(var j=0; j<depth2Li.length; j++){
			if(j==depth2Li.length-1){
				depth2Li[j].addEventListener("focusout",function(e){
					// console.log("포커스아웃");
					e.currentTarget.parentNode.parentNode.classList.remove("on");
				});
			}
		}

		if(i==depth1.length-1){
			for(var j=0; j<depth2Li.length; j++){
				if(j==depth2Li.length-1){
					depth2Li[j].addEventListener("focusout",function(e){
						// console.log("포커스아웃");
						menuInner.classList.remove("on");
						gnbBg.classList.remove("on");
					});
				}
			}
		}
	}


	// 공지사항 이벤트 탭
	var tab=document.getElementsByClassName("main_notice")[0];
	var tabLi=tab.children[0].children[0].children;
	var panelUl=tab.children[1].children;

	for(var i=0; i<tabLi.length; i++){
		tabLi[i].index=i;

		tabLi[i].addEventListener("click",function(e){
			e.preventDefault();
			n=e.currentTarget.index;

			for(var j=0; j<tabLi.length; j++){
				if(n==j){
					tabLi[j].classList.add("active");
					panelUl[j].classList.add("active");
				}
				else{
					tabLi[j].classList.remove("active");
					panelUl[j].classList.remove("active");
				}
			}
		});
	}


	// 배너 갤러리 자동슬라이드
	var campus=document.getElementsByClassName("campus_pager")[0];
	var campusLi=campus.children[0].children;
	var camMove=document.getElementsByClassName("campus_wrap_moving")[0];
	var n3=0;
	var distance=0;

	setInterval(function () {
		if(n3<2){
			n3=n3+1;
		}
		else {
			n3=0;
		}
		myFn2();
	}, 5000);

	for(var i=0; i<campusLi.length; i++){
		campusLi[i].index=i;

		campusLi[i].addEventListener("click",function(e){
			e.preventDefault();
			n3=e.currentTarget.index;
			myFn2();
		});
	}
	function myFn2(){
		for(var j=0; j<campusLi.length; j++){
			if(n3==j){
				distance=-1*n3*368;
				campusLi[j].children[0].classList.add("active");
				camMove.style.left=distance+"px"
			}
			else{
				campusLi[j].children[0].classList.remove("active");
			}
		}
	}


	// 지역 버튼
	var localBt=document.getElementsByClassName("a_sel_local")[0];
	var centerBt=document.getElementsByClassName("a_sel_center")[0];
	var localUl=localBt.nextElementSibling;
	var localLi=localUl.children;
	var centerUl=centerBt.nextElementSibling;
	var centerLi=centerBt.nextElementSibling.children;

	localBt.addEventListener("click",function(e){
		e.preventDefault();

		if(localUl.style.display=="block"){
			localUl.style.display="none"
		}
		else{
			localUl.style.display="block"
			centerUl.style.display="none"
		}
	});

	centerBt.addEventListener("click",function(e){
		e.preventDefault();
		if(localBt.innerText == "시/도"){
		}
		else if(centerUl.style.display=="block"){
			centerUl.style.display="none"
		}
		else{
			centerUl.style.display="block"
		}
		localUl.style.display="none"
	});

	var localNum=0;
	var localName="";

	for(var i=0; i<localLi.length; i++){
		localLi[i].index=i;

		localLi[i].addEventListener("click",function(e){
			e.preventDefault();
			var n=e.currentTarget.index;
			var localName=e.currentTarget.innerText;

			for(var j=0; j<centerLi.length; j++){
				centerLi[j].style.display="none"
			}
			localBt.innerText=localName;
			localUl.style.display="none"
			centerLi[n].style.display="block"
		});
	}


	// 하단 배너 슬라이드
	var n4=0;
	var distance2=0;
	var logoBanner=document.getElementsByClassName("rel_site_inner")[0];
	var logoUl=logoBanner.children[0].children[0].children[0];
	var logoLi=logoUl.children;
	var prev=logoBanner.children[1].children[0];
	var next=logoBanner.children[1].children[1];

	// prev 버튼
	prev.addEventListener("click",function(e){
		e.preventDefault();
		n4=n4-1;
		distance2=-1*167*n4;

		for(var i=0; i<logoLi.length; i++){
			if(i == 6){
				var lastLogoLi=logoLi[i].cloneNode(true);
				logoUl.removeChild(logoLi[i]);
				logoUl.insertBefore(lastLogoLi, logoLi[0]);
				n4=n4+1;
				distance2=-1*167*n4;
				logoUl.style.left=distance2+"px";
			}
		}
	});

	// next 버튼
	next.addEventListener("click", function(e){
		e.preventDefault();
		n4=n4+1;
		distance2=167*n4;

		var logoFirstLi=logoUl.children[0].cloneNode(true);
		logoUl.children[0].remove();
		logoUl.appendChild(logoFirstLi);

		n4=n4-1;
		distance2=-1*167*n4;
		currentx=distance2;

		logoUl.style.left=(-1*currentx)+"px";
	});
});
