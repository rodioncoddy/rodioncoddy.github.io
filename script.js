var box = document.getElementById('tree');
function auto() {
	console.log("auto cliker on")
	setInterval(plus_c,100)
}

function plus_c() {
	c = c + 1
	text.innerHTML = c
}

function buy(){
	if (c >= 10000){
		c = c - 10000;
		text.innerHTML = c;
		box.src = "Tree.gif";
	} 
}