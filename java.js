const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navmenu.classList.toggle('open');
}

// Select the "Add to Cart" button
var addToCartButton = document.querySelector('.add-to-cart');

// Add a click event listener to the button
addToCartButton.addEventListener('click', function() {
  // Perform the necessary actions when the button is clicked
  // This could include adding the product to the shopping cart, updating quantities, etc.
  alert('Product added to cart!');
});

const searchContainer = document.querySelector('.search-container');
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form input[type="text"]');
const searchButton = document.querySelector('.search-icon');

// Toggle search container
searchButton.addEventListener('click', function(e) {
  e.preventDefault();
  searchContainer.classList.toggle('active');
  searchInput.focus();
});

// Hide search container when clicked outside
document.addEventListener('click', function(e) {
  const target = e.target;
  if (!target.matches('.search-container, .search-container *, .search-icon')) {
    searchContainer.classList.remove('active');
  }
});

searchForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var query = searchInput.value;
  // Perform the search functionality here
  console.log("Search query: " + query);
});

