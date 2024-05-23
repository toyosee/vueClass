A Little Bug in W3Schools Vue $emit() Method Tutorial

If you are learning Vue.js from W3Schools, you might encounter an issue when you get to the Vue $emit() method. The purpose of $emit() is to send data from a child component to a parent component (e.g., App.vue), just as props are used to send data from a parent to a child.

In the tutorial, you might see this code snippet:

methods: {
  receiveEmit(foodId) {
    const foundFood = this.foods.find(
      food => food.name === foodId
    );
    foundFood.favorite = !foundFood.favorite;
  }
}

However, this should be written as:

methods: {
  receiveEmit(foodId) {
    const foundFood = this.foods.find(
      (food) => {return food.name === foodId}
    );
    foundFood.favorite = !foundFood.favorite;
  }
}
The "return" keyword is missing in the arrow function used with the array's find() method. Without "return," the function does not return the correct object, causing the foundFood variable to be undefined. Including "return" ensures that the food object is returned properly, allowing you to update the favorite property correctly.

Happy Coding!

Elijah Abolaji