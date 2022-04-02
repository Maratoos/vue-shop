import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import AboutUs from '../views/AboutUs.vue'
import New from '../views/New.vue'
import Return from '../views/Return.vue'
import Contacts from '../views/Contacts.vue'
import Favorite from '../views/Favorite.vue'
import Payment from '../views/Payment.vue'
import Cart from '../views/Cart.vue'
import Product from '../views/Product.vue'
import Auth from '../views/Auth.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'New',
    component: New
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/return',
    name: 'Return',
    component: Return
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
