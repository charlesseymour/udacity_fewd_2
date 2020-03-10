/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav:

document.addEventListener('DOMContentLoaded', function () {
    
	// start html
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
	
	// Add class 'active' to section when near top of viewport:

	// Get current active section
	let active_section = document.getElementsByClassName("your-active-class")[0];

	// On scroll event, check if current active section is visible in the viewport
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


// If not visible, add your-active-class to next or previous section as appropriate

// Remove your-active-class from current active section




// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

});
