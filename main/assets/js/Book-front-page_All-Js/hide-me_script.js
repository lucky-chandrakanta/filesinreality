function myShowHideDivFunction() {
	var x = document.getElementById("myShowHideDiv");
	if (x.style.display === "none") {
		x.style.display = "block";
		} else {
		x.style.display = "none";
	}
}