

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza. toppings = toppings;
    return pizza;
}

pie1 = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage']);

pie2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions']);

pie3 = pizzaOven('thin crust','bbq sauce',['mozarella', 'provolone'],['chicken', 'bacon'])

pie4 = pizzaOven('hand tossed','marinara',['mozarella', 'provolone', 'cheddar'],['pepperoni', 'sausage', 'bacon', 'canadian bacon', 'seasoned beef' ])

// console.log(pie1)
// console.log(pie2)
// console.log(pie3)
// console.log(pie4)

function randomPizza() {
    var pizza = {
        crustType: ['thin crust', 'deep dish', 'hand tossed'],
        sauceType: ['traditional', 'marinara', 'BBQ sauce', 'alfredo sauce'],
        cheeses: ['mozarella', 'provolone', 'cheddar', 'parmesan'],
        toppings: ['pepperoni', 'sausage', 'bacon', 'canadian bacon', 'seasoned beef', 'peppers', 'jalapenos']
    }
    result = {
        crustType: pizza.crustType[Math.floor(Math.random() * pizza.crustType.length)],
        sauceType: pizza.sauceType[Math.floor(Math.random() * pizza.sauceType.length)],
        cheeses: pizza.cheeses[Math.floor(Math.random() * pizza.cheeses.length)],
        toppings: pizza.toppings[Math.floor(Math.random() * pizza.toppings.length)],
    }
        return result;
}
var pie5 = randomPizza()
console.log(pie5)
