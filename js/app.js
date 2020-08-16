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
 * Main function
**/


// Build the navBar

// Select all the sections
const sections = document.querySelectorAll('section');

// Seclect the navbar to add elements to it
const navBar = document.querySelector('#navbar');

// Create empty DocumentFragment object
const fragment = document.createDocumentFragment();

// Itreate over the sctions and create <a> elemet
// and add nav-link class to each element
// and add herf attribute with the crossponding id
for (const section of sections){

    // Cerate a new a element
    const newElement = document.createElement('a');

    // Add text to it (text value is in html attribute data-name)
    newElement.innerText = section.dataset.name;

    // Add nav-link class to the element
    newElement.classList.add('nav-link');

    // Add herf attribute to the section id
    newElement.setAttribute('href', '#'+section.id);

    // Append the element to the fragment
    fragment.appendChild(newElement);
}

// Append the fragment to the navBar
navBar.appendChild(fragment);