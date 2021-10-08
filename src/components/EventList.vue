<template>
<div class="box">
  <h4 class="title is-4 has-text-centered">Upcoming Events</h4>
  <div class="box" v-for="(event, i) in filtered" :key="event.name">
    <p class="subtitle is-4 is-inline">{{event.name}}</p>
    <span class="is-pulled-right is-inline buttons">
      <a>
        <img v-if="event.favorited" src="@/assets/logo.png" class="neb-icon" alt="Nebraska Icon" />
        <img v-else src="@/assets/logo-empty.jpg" class="neb-icon" alt="Empty Nebraska Icon" />
      </a>
      <b-button :icon-left="event.expanded ? 'chevron-up' : 'chevron-down'" @click="toggleEventExpanded(i)"/>
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
  props: {
    searchQuery: String
  },
  data() {
    return {
      events: events()
    }
  },
  methods: {
    toggleEventExpanded(i) {
      this.events[i].expanded = !this.events[i].expanded
    }
  },
  computed: {
    filtered() {
      if(this.searchQuery) {
        return this.events.filter(event => event.name.toLowerCase().includes(this.searchQuery))
      } else {
        return this.events
      }
    }
  }
}
</script>
