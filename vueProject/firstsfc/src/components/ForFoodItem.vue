<template>
    <div>
        <h2>{{ foodName }}
            <img :src="foodUrl" v-show="isFavorite">
        </h2>
        <p>{{ foodDesc }}</p>
        <button @:click="toggleFavorite">Favorite</button>
    </div>
</template>

<script>
    export default{
        props: ["foodName", "foodDesc", "isFavorite"],
        data(){
            return {
                // foodIsFavorite : this.isFavorite,
                foodUrl: "https://www.w3schools.com/vue/img_quality.svg"
            }
        },
        methods: {
            // We can choose the name of our custom event, but it is normal to use 
            // kebab-case for emit events.
            toggleFavorite(){
                // this.foodIsFavorite = !this.foodIsFavorite
                this.$emit('toggle-favorite', this.foodName)
            }
        }
    }
</script>

<style>
      img {
    height: 1.5em;
    float: right;
  }
</style>