<template>
<div class="box">
  <h4 class="title is-4 has-text-centered">My Events</h4>
  <div class="box" v-for="event in favorited" :key="event.name">
    <p class="title is-6 is-inline">{{event.name}}</p>
    <img src="@/assets/logo.png" class="is-pulled-right is-inline neb-icon" alt="Nebraska Icon" />
    <br>
    <b-icon icon="calendar" />
    {{event.date}}
    <br>
    <b-icon icon="school" />
    {{event.major}}
    <br>
    <b-icon icon="map-marker" />
    {{event.place}}
  </div>
</div>
</template>

<script>
import events from '@/js/events'

export default {
  data() {
    return {
      events: events()
    }
  },
  computed: {
    favorited() {
      return this.events.filter(event => event.favorited)
    }
  }
}
</script>
