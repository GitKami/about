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
/* Listen for clicks in #openNav and #closeNav */
document.addEventListener('click', function (event) {
	if (event.target.matches('#openNav')){
		var intF = window.innerWidth;    
		document.getElementById("about").style.width = "300px";    
		document.getElementById("main").style.marginLeft = "300px";
		if(intF< 450) { document.getElementById("summary").style.display = "none";}    
 
	}
	if (event.target.matches('#closeNav')){
		document.getElementById("summary").removeAttribute("style");    
		document.getElementById("about").style.width = "0";    
		document.getElementById("main").style.marginLeft= "0";    

	}
	// Don't follow the link
	event.preventDefault();
}, false);


