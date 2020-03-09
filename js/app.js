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

// build the nav

// start html

document.addEventListener('DOMContentLoaded', function () {
    let html = "";

	// Collect all sections

	const sections = document.getElementsByTagName('section');

	// Loop through and build the html based on data-nav values


	for (const section of sections) {
		html += (`<li><a href="#${section.attributes['id'].nodeValue}">` + 
				 `${section.attributes['data-nav'].nodeValue}</a></li>`);
	}

	// Insert html into document

	const nav_list = document.getElementById("navbar__list");
	nav_list.innerHTML = html;
});



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


