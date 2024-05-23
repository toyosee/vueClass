A LITTLE BUG IN W3SCHOOLS VUE $emit() method tutorial: if you happen to learn VUEjs from w3schools, you might get stuck when you get to VUE $emit(). Purpose of emit is to send data from child element to parent component (App.vue) just as props sends from parent to child.
this code snippet: 
methods: {
  receiveEmit(foodId) {
    const foundFood = this.foods.find(
      food => food.name === foodId
    );
    foundFood.favorite = !foundFood.favorite;
  }
}

should be written as:
methods: {
  receiveEmit(foodId) {
    const foundFood = this.foods.find(
      (food) => {return food.name === foodId}
    );
    foundFood.favorite = !foundFood.favorite;
  }
}
The "return" keyword is missing in the function after using the array find() method and the foundFood variable returned as undefined. The "return" keyword sends the food variable which is now and object according to the example and you can extract the favorites value from the object. (food.favorite)

Happy Coding

Elijah Abolaji.