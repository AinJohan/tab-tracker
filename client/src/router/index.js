import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Register from '@/componenets/Register'
<<<<<<< HEAD
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/Index'
import CreateSong from '@/components/CreateSong'
import EditSong from '@/components/EditSong'
import ViewSong from '@/components/ViewSong/Index'
=======
import HelloWorld from '@/components/HelloWorld'
>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)

Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/songs/:songId/edit',
      name: 'song-edit',
      component: EditSong
    },
    {
      path: '*',
      redirect: 'songs'
=======
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)
    }
  ]
})
