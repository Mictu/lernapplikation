import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Manufacturer from './components/Manufacturer.vue'
import Shipper1 from './components/Shipper1.vue'
import Distributor from './components/Distributor.vue'
import Shipper2 from './components/Shipper2.vue'
import Retailer from './components/Retailer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/manufacturer',
      name: 'manufacturer',
      component: Manufacturer
    },
    {
      path: '/shipper1',
      name: 'shipper1',
      component: Shipper1
    },
    {
      path: '/distributor',
      name: 'distributor',
      component: Distributor
    },
    {
      path: '/shipper2',
      name: 'shipper2',
      component: Shipper2
    },
    {
      path: '/retailer',
      name: 'retailer',
      component: Retailer
    }
  ]
})