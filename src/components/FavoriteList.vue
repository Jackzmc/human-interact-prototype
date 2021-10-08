<template>
<div class="box">
  <h4 class="title is-4 has-text-centered">My Events</h4>
  <div class="box" v-for="event in favorited" :key="event.name">
    <p class="title is-6 is-inline">{{event.name}}</p>
    <b-button class="is-pulled-right is-inline" />
    <br>
    <b-button />
    Date
    <br>
    <b-button />
    Major
    <br>
    <b-button />
    Place
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
