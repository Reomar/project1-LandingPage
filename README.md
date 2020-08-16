# Udacity Landing Page Project
This is project 1 in the egyptFWD web Professional Track.
which is a simple landing page that have Dynamic NavBar (The NavBar is cerated in the js based on the number of sections in the html).

------------

##index.html
the **index.html** contains `<sections>` with the attributes  of`id` & `data-name`  , which are used in the js to generate the NavBar.
> `data-name` is the text that is used in the NavBar.

##styles.css
the `.active` is a class used to style the NavBar link that indecates that `<section>` is in the viewport.

##app.js
- The `main()` function generates the NavBar.
- The event listener is listening for scroll to determine which `<section>` is in the view port and add `.active` class to the nav-link corresponding to it. 


------------

##Demo: [Landing Page Demo](https://reomar.github.io/project1-LandingPage/ "Landing Page Demo") 
