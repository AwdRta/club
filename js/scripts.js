window.addEventListener("scroll", function () {
	if (window.scrollY > 50) {
		document.querySelector(".navbar").classList.add("bg-dark");
	} else {
		// Keep default color defined in CSS (Army Green)
	}
});

fetch("navbar.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("navbar").innerHTML = data;
	});

fetch("carousel.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("carousel").innerHTML = data;
	});

fetch("about.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("about").innerHTML = data;
	});

fetch("service.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("service").innerHTML = data;
	});

fetch("contact.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("contact").innerHTML = data;
	});

fetch("footer.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("footer").innerHTML = data;
	});

fetch("room.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("room").innerHTML = data;
	});

fetch("room1.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("room1").innerHTML = data;
	});

fetch("room2.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("room2").innerHTML = data;
	});

fetch("room3.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("room3").innerHTML = data;
	});

fetch("room4.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("room4").innerHTML = data;
	});
