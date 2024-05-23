<template>
    <div>
      <h2>
        {{ foodName }}
        <img src="https://www.w3schools.com/vue/img_quality.svg" v-show="foodIsFavorite">
      </h2>
      <p> <strong>{{ foodId }}</strong>. {{ foodDesc }}</p>
      <button @:click="toggleFavorite">Favorite</button>
    </div>
</template>
  
  <script>
  export default {
        // Passing props as array
    // props: [
    //     'foodName',
    //     'foodDesc',
    //     'isFavorite'
    // ],
    // Passing props as object for documentation purpose
    // Making a prop required when making component in parent element
    // v-for components
    // Components can be reused with v-for to generate many elements of the same kind.
    props: {
        foodName: {
            type: String,
            required: false,
            default: "Any Food"
        },
        foodDesc: {
            type: String,
            required: false,
            default: "This is a default description",
            // validator function to check props
            validator: (value)=>{
                if(20<value.length && value.length<50){
                    return true
                }
                else{
                    return false
                }
            }
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false
        },
        foodId:{
            type: Number,
            required: false,
            default: 1
        }
    },
    data() {
      return {
        foodIsFavorite: this.isFavorite
        // name: 'Apples',
        // message: 'I like apples',
        // count: 0,
      }
    },
    methods:{
        countIt(){
            this.count++
        },
        toggleFavorite(){
            this.foodIsFavorite = !this.foodIsFavorite;
        }
    }
  };
  </script>
  
<style>
    #red {
        font-weight: bold ;
        color: rgb(144, 12, 12);
    }

    img {
    height: 1.5em;
    float: right;
  }
</style>