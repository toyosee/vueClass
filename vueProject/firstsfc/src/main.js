import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import ToDoList from './components/ToDoList.vue'
import ForFoodItem from './components/ForFoodItem.vue'

const app = createApp(App)
//Allows us call the component name and access the components
app.component('food-item', FoodItem)
app.component('for-food-item', ForFoodItem)
app.component("to-do", ToDoList)
app.mount('#app')
