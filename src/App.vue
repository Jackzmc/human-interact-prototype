<template>
  <div id="app">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column ">
          <NavBar @search="onSearch" />
          <EventList :searchQuery="searchQuery"/>
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
  },
  data() {
    return {
      searchQuery: null
    }
  },
  methods: {
    onSearch(query) {
      this.searchQuery = query
    }
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
html body  {
  background-color: #ecf0f1;
}
.neb-icon {
  width: 32px;
  height: 32px;
}
</style>
