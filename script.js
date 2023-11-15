document.addEventListener("DOMContentLoaded", function() {

	let items = document.querySelectorAll(".faq-item");

	items.forEach(function(item) {
		item.addEventListener("click", function() {
			if (item.classList.contains("active")) 
			{
				item.classList.remove("active");
			}

			else
			{
				item.classList.add("active");
			}
		});
	});
});

// document.addEventListener("DOMContentLoaded", function() {
// 	const storeLogo = document.querySelector(".logo-appstore");

// 	storeLogo.onmouseover = function() {
// 		document.querySelector(".first-part").style.color = "red";
// 		document.querySelector(".second-part").style.color = "red";
// 		document.querySelector(".bxl-apple").style.color = "red";
// 	}

// 	storeLogo.onmouseout = function() {
// 		document.querySelector(".first-part").style.color = "black";
// 		document.querySelector(".second-part").style.color = "black";
// 		document.querySelector(".bxl-apple").style.color = "black";
// 	}
// });