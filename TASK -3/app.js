// Define some sample data for items and prices
const items = [
	{ name: 'Pizza', price: 10.99 },
	{ name: 'Burger', price: 8.99 },
	{ name: 'Sushi', price: 12.99 }
];

// Get references to HTML elements
const cart = document.getElementById('cart');
const checkoutButton = document.querySelector('button');

// Add event listeners for the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('button');
addToCartButtons.forEach(button => {
	button.addEventListener('click', () => {
		const item = button.parentNode;
		const name = item.querySelector('h3').textContent;
		const price = parseFloat(item.querySelector('p').textContent.substring(1));
		addToCart(name, price);
	});
});

// Function to add an item to the cart
function addToCart(name, price) {
	const newItem = document.createElement('li');
	newItem.innerHTML = `
		<h3>${name}</h3>
		<p>$${price.toFixed(2)}</p>
		<button>Remove</button>
	`;
	const removeButton = newItem.querySelector('button');
	removeButton.addEventListener('click', () => {
		removeFromCart(newItem);
	});
	cart.appendChild(newItem);
	updateTotal(price);
}

// Function to remove an item from the cart
function removeFromCart(item) {
	const price = parseFloat(item.querySelector('p').textContent.substring(1));
	cart.removeChild(item);
	updateTotal(-price);
}

// Function to update the total price
function updateTotal(price) {
	const total = document.querySelector('p:last-of-type');
	const currentTotal = parseFloat(total.textContent.substring(7));
	total.textContent = `Total: $${(currentTotal + price).toFixed(2)}`;
}

// Add event listener for checkout button
checkoutButton.addEventListener('click', () => {
	alert('Thank you for your order!');
});
