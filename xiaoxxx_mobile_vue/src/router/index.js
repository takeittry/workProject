import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Service from '../pages/Service.vue'
import Case from '../pages/Case.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import CaseDetail from '../pages/CaseDetail.vue'
import NewsDetail from '../pages/NewsDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/',
     name: 'Home',
     component: Home
    },
    {
      path:'/Service',
      name:'Service',
      component:Service
    },
    {
      path:'/Case',
      name:'Case',
      component:Case
    },
    {
      path:'/About',
      name:About,
      component:About
    },
    {
      path:'/Contact',
      name:Contact,
      component:Contact
    },
    {
      path:'/CaseDetail',
      name:CaseDetail,
      component:CaseDetail
    },{
      path:'/NewsDetail',
      name:NewsDetail,
      component:NewsDetail
    }
  ]
})
