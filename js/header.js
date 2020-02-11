$(function(){
	var agent=navigator.userAgent.toLowerCase();

	if(agent.indexOf("iphone") != -1 || agent.indexOf("ipad") != -1 || agent.indexOf("android") != -1){
		// console.log("Mobile Device!!");
		location.href="mobile_index.html";
	}
	else{
		// console.log("PC Device!!");
		location.href="pc_index.html";
	}
});
