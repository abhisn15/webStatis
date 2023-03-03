const garis = document.querySelector("#garis");
const silang = document.querySelector("#silang");
const navMenu = document.querySelector("#nav-menu");

silang.addEventListener("click", function () {
	navMenu.classList.toggle("hidden");
});

navMenu.addEventListener("click", function () {
	silang.style.display = "none";
	garis.style.display = "flex";
});

window.addEventListener("click", function (e) {
	if (e.target != navMenu) {
		navMenu.classList.add("hidden");
	}
});
