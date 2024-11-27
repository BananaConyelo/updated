// Get the search box element
const searchBox = document.querySelector('.search-box');
const searchButton = searchBox.querySelector('button'); // Get the search button

// Function to hide the search box
function hideSearchBox() {
    searchBox.style.display = 'none';
}

// Event listener for clicks on the document
document.addEventListener('click', function(event) {
    // Check if the clicked element is not the search box or its children
    if (!searchBox.contains(event.target)) {
        hideSearchBox();
    }
});

// Optional: Show the search box when clicking on a specific element (like a search icon)
const searchIcon = document.getElementById('search-icon'); // Adjust the selector as needed
searchIcon.addEventListener('click', function(event) {
    // Prevent the click event from bubbling up to the document
    event.stopPropagation();
    // Toggle the display of the search box
    if (searchBox.style.display === 'none' || searchBox.style.display === '') {
        searchBox.style.display = 'flex'; // Show the search box
    } else {
        hideSearchBox(); // Hide the search box if it's already visible
    }
});

// Event listener for the search button click
searchButton.addEventListener('click', function(event) {
    // Perform any search action here (if needed)
    
    hideSearchBox(); // Hide the search box when the button is clicked
});

// Get the menu icon and navigation links
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

// Event listener for the menu icon click
menuIcon.addEventListener('click', () => {
    // Toggle the visibility of the navigation links
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none'; // Hide the nav links
    } else {
        navLinks.style.display = 'flex'; // Show the nav links
    }
});

// Optional: Add an event listener to window resize to reset nav links display
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex'; // Ensure nav links are visible on larger screens
    } else {
        navLinks.style.display = 'none'; // Hide nav links on small screens
    }
});



// LOGIN 
// Get the login form element
const loginForm = document.getElementById('login-form');
const userIcon = document.getElementById('user-icon'); // Icon to toggle the login form
const closeButton = document.getElementById('close-close'); // Close button in the login form

// Function to hide the login form
function hideLoginForm() {
    loginForm.style.display = 'none';
}



// Event listener for the user icon click
userIcon.addEventListener('click', function(event) {
    // Prevent the click event from bubbling up to the document
    event.stopPropagation();
    // Toggle the display of the login form
    if (loginForm.style.display === 'none' || loginForm.style.display === '') {
        loginForm.style.display = 'block'; // Show the login form
    } else {
        hideLoginForm(); // Hide the login form if it's already visible
    }
});

// Close the login form when clicking on the close button
closeButton.addEventListener('click', function() {
    hideLoginForm();
});

// FOOD MENU
// Get the menu image element
const menuImage = document.getElementById('menu-image');

// Event listener for clicks on the document
document.addEventListener('click', function(event) {
    // Check if the clicked element is not the menu image or its children
    if (!menuImage.contains(event.target) && menuImage.style.display === 'block') {
        menuImage.style.display = 'none'; // Hide the menu image
    }
});

// Existing event listener for the menu button click
document.getElementById('menu-menu').addEventListener('click', function(event) {
    // Prevent the click event from bubbling up to the document
    event.stopPropagation();
    // Toggle the display of the menu image
    if (menuImage.style.display === 'none' || menuImage.style.display === '') {
        menuImage.style.display = 'block'; // Show the menu image
    } else {
        menuImage.style.display = 'none'; // Hide the menu image
    }
});