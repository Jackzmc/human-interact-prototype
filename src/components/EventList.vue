<template>
<div class="box">
  <h4 class="title is-4 has-text-centered">Upcoming Events</h4>
  <div class="box" v-for="event in filtered" :key="event.name">
    <p class="subtitle is-4 is-inline">{{event.name}}</p>
    <span class="is-pulled-right is-inline buttons">
      <a>
        <img @click="toggleFavorited(event)" v-if="event.favorited" src="@/assets/logo.png" class="neb-icon" alt="Nebraska Icon" />
        <img @click="toggleFavorited(event)" v-else src="@/assets/logo-empty.jpg" class="neb-icon" alt="Empty Nebraska Icon" />
      </a>
      <b-button :icon-left="event.expanded ? 'chevron-up' : 'chevron-down'" @click="toggleEventExpanded(event)"/>
    </span>
    <template v-if="event.expanded">
      <br><br>
      <p>{{event.description}}</p>
    </template>
  </div>
</div>
</template>

<script>

export default {
  props: {
    searchQuery: String,
    events: Array
  },
  methods: {
    toggleEventExpanded(event) {
      event.expanded = !event.expanded
      this.$parent.$emit('modifyEvent', event)
    },
    toggleFavorited(event) {
      event.favorited = !event.favorited
      this.$parent.$emit('modifyEvent', event)
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
