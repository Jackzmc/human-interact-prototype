<template>
  <div id="app">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column ">
          <NavBar @filter="onFilter" :events="events" :majors="data.majors" />
          <EventList :filter="filter" :events="events"/>
        </div>
        <div class="column is-4">
          <FavoriteList :events="events" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import EventList from '@/components/EventList'
import FavoriteList from '@/components/FavoriteList'
import NavBar from '@/components/NavBar'

import { getEvents, getData } from '@/js/data.js'

export default {
  name: 'App',
  components: {
    EventList,
    FavoriteList,
    NavBar
  },
  data() {
    return {
      filter: null,
      events: getEvents(),
      data: getData()
    }
  },
  methods: {
    onFilter(filter) {
      this.filter = filter
    },
    reloadPage() {
      if (!this.updateRegistration || !this.updateRegistration.waiting) return
      this.updateRegistration.waiting.postMessage({ type: 'SKIP_WAITING' })
      window.location.reload()
    }
  },
  created() {
    this.$on('modifyEvent', (event) => {
      const index = this.events.indexOf(event)
      if(index !== -1) {
        this.$set(this.events, index, event)
      }
    })
    document.addEventListener('swUpdated', () => this.reloadPage(), { once: true })
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
