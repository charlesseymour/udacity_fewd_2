document.addEventListener('DOMContentLoaded', function () {
    
	// 1. Build the nav:
	
	// Start html
	let html = "";

	// Collect all sections
	const sections = document.getElementsByTagName('section');

	// Loop through and build the html based on data-nav values
	for (const section of sections) {
		html += (`<li><a class="menu__link" href="#${section.attributes['id'].nodeValue}">` + 
				 `${section.attributes['data-nav'].nodeValue}</a></li>`);
	}

	// Insert html into document
	const nav_list = document.getElementById("navbar__list");
	nav_list.innerHTML = html;
	
	// 2. Add class 'active' to section when near top of viewport:

	// Get current active section
	let active_section = document.getElementsByClassName("your-active-class")[0];

	// On scroll event, check if current active section is visible in the viewport
	// Based on https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
	window.addEventListener('scroll', function (event) {
		
		// Get position of current active section
		let active_section_position = active_section.getBoundingClientRect();

		// If bottom of section is above the viewport, make next section active
		let section_bottom_y = active_section_position.y + active_section_position.height;
		
		if (section_bottom_y < 0) {
			active_section.nextElementSibling.classList.add("your-active-class");
			active_section.classList.remove("your-active-class");
			active_section = document.getElementsByClassName("your-active-class")[0];
		}
		
		// If top of section is below the viewport, make previous section active
		if (active_section_position.y > window.innerHeight) {
			active_section.previousElementSibling.classList.add("your-active-class");
			active_section.classList.remove("your-active-class");
			active_section = document.getElementsByClassName("your-active-class")[0];
		}
	}, false);


	// 3. Scroll to anchor ID using scrollTO event
	// Based on https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
});
