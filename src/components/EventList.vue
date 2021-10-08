<template>
<div class="box">
  <h4 class="title is-4 has-text-centered">Upcoming Events</h4>
  <div class="box" v-for="(event, i) in events" :key="event.name">
    <p class="subtitle is-4 is-inline">{{event.name}}</p>
    <span class="is-pulled-right is-inline">
      <b-button v-if="event.expanded" @click="toggleEventExpanded(i)" />
      <b-button v-else @click="toggleEventExpanded(i)" />
    </span>
    <template v-if="event.expanded">
      <br><br>
      <p>{{event.description}}</p>
    </template>
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
  methods: {
    toggleEventExpanded(i) {
      this.events[i].expanded = !this.events[i].expanded
    }
  }
}
</script>
