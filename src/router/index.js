import { createRouter, createWebHistory } from "vue-router";
import Users from "../components/Users.vue";
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'

const routes = [{
    path: '/',
    name: Home,
    component: Home

}, {
    path: '/profile/:id',
    name: Profile,
    component: Profile,
    name: 'users'

}]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router