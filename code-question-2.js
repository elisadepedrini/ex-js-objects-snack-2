const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
console.log(hamburger.ingredients[0]); // Salad
console.log(secondBurger.ingredients[0]); // Salad

// P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 3 oggetti, in quanto secondBurger non fa riferimento all'oggetto burger, ma crea un nuovo oggetto, uguale, utilizzando l'operatore spread:
// hamburger
// hamburger.ingredients
// secondBurger

