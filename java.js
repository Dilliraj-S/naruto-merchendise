const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

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