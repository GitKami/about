/*Read more buttons*/
window.onload = function() {
  var dots1 = document.getElementById("dots1"),
			dots2 = document.getElementById("dots2");

	var more1 = document.getElementById("more1"),
			more2 = document.getElementById("more2");
	
	var btn1 = document.getElementById("btn1"),
			btn2 = document.getElementById("btn2");
	var ifm	 = document.getElementById("iframe");	


	btn1.onclick= function(){
		if(dots1.style.display === "none"){
			ifm.style.display = "none";
			dots1.style.display = "inline";
			btn1.innerHTML = "Read more";
			more1.style.display = "none";
		} else {
			ifm.style.display = "block";
			dots1.style.display = "none";
			btn1.innerHTML = "Read less";
			more1.style.display = "block";
		}
	};
	
	btn2.onclick= function(){
		if(dots2.style.display === "none"){
			dots2.style.display = "inline";
			btn2.innerHTML = "Read more";
			more2.style.display = "none";
		} else {
			dots2.style.display = "none";
			btn2.innerHTML = "Read less";
			more2.style.display = "block";
		}
	};
};


