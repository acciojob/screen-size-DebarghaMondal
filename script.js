//your JS code here. If required.
function displayWindowSize(){
	let w =window.innerWidth;
	let h = window.innerHeight;
	
	document.getElementById('sizeInfo').innerHTML = "Width: " + w + ", Height: " + h;
}
window.addEventListener("resize", displayWindowSize);
displayWindowSize();


