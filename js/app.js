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

function main(){
    // Build the navBar

    // Select all the sections
    const sections = document.querySelectorAll('section');

    // Seclect the navbar to add elements to it
    const navBar = document.querySelector('#navbar');

    // Create empty DocumentFragment object
    const fragment = document.createDocumentFragment();

    // Itreate over the sctions and create <a> elemet
    // and add nav-link class to each element
    // and add herf attribute with the crossponding section id
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

    // Add active class to the first navlink
    document.querySelector(".nav-link").classList.add('active');
}


// Start the main function
main();

/**
* Begin Scrolling Events
**/

// The below code is inspired from Chris Coyier, https://css-tricks.com/sticky-smooth-active-nav/#active

//seclect the nav-links
const navLinks = document.querySelectorAll('.nav-link');

//start event listener for scrolling
window.addEventListener('scroll', () =>{

    // Get the current position of the window
    let bottomScrollPostion = window.scrollY + window.innerHeight;

    // Iterate through the navlinks to change the active state
    for (const navLink of navLinks){

        let target = document.querySelector(navLink.hash);

        // Checks if the target section is in veiw
        if (target.offsetTop + (window.innerHeight/1.5) < bottomScrollPostion &&
            target.offsetTop + target.offsetHeight + (window.innerHeight/1.5) > bottomScrollPostion){

                // Add active class
                navLink.classList.add('active');
            }else{

                // Remove active class
                navLink.classList.remove('active');
            }
    }

})