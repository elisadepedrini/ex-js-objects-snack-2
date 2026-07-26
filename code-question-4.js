const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};



// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// Tramite l'operatore spread, perchè non abbiamo proprietà annidate e abbiamo una funzione, che l'operatore spread può copiare
// const secondChef = {...chef}

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
// Tramite la copia profonda con structuredClone, perchè abbiamo proprietà annidate e un oggetto complesso (Date); inoltre non abbiamo funzioni da dover copiare
// const secondRestaurant = structuredClone(restaurant)