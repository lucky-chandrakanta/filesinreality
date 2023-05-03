let toast = document.querySelector(".toast"),
closeIcon = document.querySelector(".close"),
progress = document.querySelector(".progress");

let timer1, timer2;

window.onload = (event) => {
	
	toast.classList.add("active");
	progress.classList.add("active");
	
	timer1 = setTimeout(() => {
		toast.classList.remove("active");
	}, 10000); //1s = 1000 milliseconds
	
	timer2 = setTimeout(() => {
		progress.classList.remove("active");
	}, 10300);
}

closeIcon.addEventListener("click", () => {
	toast.classList.remove("active");
	
	setTimeout(() => {
		progress.classList.remove("active");
	}, 300);
	
	clearTimeout(timer1);
	clearTimeout(timer2);
});