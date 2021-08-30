<template>
  <div id="app">
<<<<<<< HEAD
    <v-app>
      <page-header />
      
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
=======
    <img src="./assets/logo.png">
    <router-view/>
>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)
  </div>
</template>

<script>
<<<<<<< HEAD
import PageHeader from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  }
=======
export default {
  name: 'App'
>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
<<<<<<< HEAD

.danger-alert {
  color: red;
}
=======
>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)
</style>
