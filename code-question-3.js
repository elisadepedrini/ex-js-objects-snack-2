const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);


// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 9 oggetti, in quanto structureClone fa una copia profonda dell'oggetto, compreso di oggetti annidati:
// hamburger
// hamburger.maker
// hamburger.maker.restaurant
// secondBurger
// secondBurger.maker
// secondBurger.maker.restaurant
// thirdBurger
// thirdBurger.maker
// thirdBurger.maker.restaurant
