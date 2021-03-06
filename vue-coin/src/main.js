import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import List from './components/list/List.vue';
import Detail from './components/detail/Detail.vue';
import NotFound from './components/notfound/NotFound.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: List },
    { path: '/currency/:id', component: Detail, props: true },
    { path: '*', component: NotFound },
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#root')
