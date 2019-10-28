import Vue from 'vue';
import VueRouter from 'vue-router';
// import Search from '@/components/Search.vue';
import Search from '@/components/Search.vue';
import Profile from '@/components/Profile.vue';


Vue.use(VueRouter);

const routes = [
    {path: '/', component: Search, name: 'search'},
    {path: '/profile/:platform/:gamertag', component: Profile, name: 'profile'}

];

export default new VueRouter({
	
	routes,
	mode: 'history'
})