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
