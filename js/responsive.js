/* Listen for clicks in #openNav and #closeNav */
document.addEventListener("click", function (event) {
	if (event.target.matches("#openNav")){
		var intF = window.innerWidth;    
		document.getElementById("about").style.width = "300px";    
		document.getElementById("main").style.marginLeft = "300px";
		if(intF< 450) { document.getElementById("summary").style.display = "none";}    
 
	}
	if (event.target.matches("#closeNav")){
		document.getElementById("summary").removeAttribute("style");    
		document.getElementById("about").style.width = "0";    
		document.getElementById("main").style.marginLeft= "0";    

	}
	if (event.target.matches("#j1")){
		document.querySelector("#executive").scrollIntoView({ 
			behavior: "smooth" 
		});
	}
	if (event.target.matches("#j2")){
		document.querySelector("#skills").scrollIntoView({ 
			behavior: "smooth" 
		});
	}
	if (event.target.matches("#j3")){
		document.querySelector("#work").scrollIntoView({ 
			behavior: "smooth" 
		});
	}
	if (event.target.matches("#j4")){
		document.querySelector("#executive").scrollIntoView({ 
			behavior: "smooth" 
		});
	}

});

