<template>
  <div id="app">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column">
          <NavBar />
          <EventList />
        </div>
        <div class="column is-4">
          <FavoriteList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import EventList from '@/components/EventList'
import FavoriteList from '@/components/FavoriteList'
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    EventList,
    FavoriteList,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
