<template>
  <h1>Food</h1>
  <p>My favorite food has a diploma image attached to it.</p>
  <!-- To pass props with a data type different to String, we must write 
    v-bind: in front of the attribute we want to pass. -->
  <div id="wrapper">
    <food-item
      food-name="Apples"
      food-desc="Apples are a type of fruit that grow on trees."
      v-bind:is-favorite="true"/>
    <food-item
      food-name="Pizza"
      food-desc="Pizza has a bread base with tomato sauce on top."
      v-bind:is-favorite="false"
      v-bind:food-id="2"/>
    <food-item
      food-name="Rice"
      food-desc="Rice is a type of grain that people like to eat."
      v-bind:is-favorite="true"
      v-bind:food-id="3"/>
    <!-- Let's have a prop that will load all default values -->
      <food-item v-bind:food-id="4"/>
  </div>

  <div>
    <h3>
      For Food Item Loading from foods into props
    </h3>
    <p>Components created with v-for based on an array.</p>
    <button @:click="removeItem">Remove Item</button>
    <p>Toggle with the 'Favorite' button to emit an event from 'FoodItem.vue' to 'App.vue' with the built-in Vue method '$emit()'.</p>
    <div id="wrapper">
      <for-food-item 
        v-for="food in foods"
        :key="food.name"
        :food-name="food.name"
        :food-desc="food.desc"
        :is-favorite="food.favorite"
        @toggle-favorite="receiveEmit"
      />
    </div>
    <div>
    <!-- Trying out model example to mirror input and page element -->
    <label for="mirror"> Mirror: </label>
    <input id="mirror"type="text" v-model="typingMirror">
    <p>{{ typingMirror }}</p>
  </div>

  <!-- Vue emit example and explanation -->
  <!-- prop sends data from parent to child component, $emit() does the opposite -->
  <div>

  </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        foods: [
            { name: 'Apples',
                desc: 'Apples are a type of fruit that grow on trees.',
                favorite: true,},
              { name: 'Pizza',
                desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.',
                favorite: false },
              { name: 'Rice',
                desc: 'Rice is a type of grain that people like to eat.',
                favorite: false },
              { name: 'Fish',
                desc: 'Fish is an animal that lives in water.',
                favorite: true },
              { name: 'Cake',
                desc: 'Cake is something sweet that tastes good.',
                favorite: false }
        ], 

        typingMirror: ""
      }
    },
    methods:{
      // to delete items from listing
      removeItem() {
      this.foods.splice(1,1);
    },
      receiveEmit(foodId){
        // alert(`You clicked ${foodId}, ${this.foods[0].favorite}`)
        let foundFood = this.foods.find(
          (food) => {return food.name === foodId}
        ) 
        // console.log(foundFood)
        foundFood.favorite = !foundFood.favorite
      }
    }

  }
</script>

<style>
  #wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  #wrapper > div {
    border: dashed black 1px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
</style>