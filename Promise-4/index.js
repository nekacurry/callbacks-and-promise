const food = new Promise((resolve, reject) => {
  resolve('Lox')
  reject('Zucchini')
})


// resolve food here: 
food.then((favFood) => {
  console.log(`${favFood}? yummy yummy in my tummy!`)
})


// **Challenge 1** Resolve your promise with the name of your favorite food. 
// Do this by calling the `resolve` with an argument. 

// **Challenge 2** Resolve the `food` promise with that `.then()` syntax 
// and print your favorite food to the console. 