import Home from '../components/home.vue'
import Personal from '../components/personal.vue'
import Exhibition from '../components/Exhibition.vue'
import contact from '../components/contact.vue'
import app from  '../App.vue'

export default{
    routes:[ v
        {path:'/home', component:Home},
        {path:'/Personal', component:Personal},
        {path:'/Exhibition', component:Exhibition},
        {path:'/contact', component:contact},
        {path:'*', redirect:'/home'}
    ]
}