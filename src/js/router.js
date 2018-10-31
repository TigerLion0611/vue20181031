import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/LoginPage'
import MainPage from '../components/MainPage'
import Project from '../components/module/main/Project'
import Service from '../components/module/main/Service'

Vue.use(VueRouter);

const router = new VueRouter ({
   routes: [
       {
           path: '/login',
           component: Login
       },
       {
           path: '/',
           component: MainPage,
           redirect: '/project',
           children: [
               {
                   path: '/project',
                   component: Project
               },
               {
                   path: '/service/:projectId',
                   component: Service
               }
           ]
       }
   ]
});

export default router
