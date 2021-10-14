<template>
<div class="box">
  <h4 class="title is-4 has-text-centered">My Events</h4>
  <div class="box" v-for="event in favorited" :key="event.name">
    <a class="title is-6 is-inline" @click="expandEvent(event)">
      {{event.name}}
    </a>
    <img src="@/assets/logo.png" class="is-pulled-right is-inline neb-icon" alt="Nebraska Icon" />
    <template v-if="event.date">
      <br>
      <b-icon icon="calendar" />
      {{event.date}}
    </template>
    <template v-if="event.major">
      <br>
      <b-icon icon="school" />
      {{event.major}}
    </template>
    <template v-if="event.place">
      <br>
      <b-icon icon="map-marker" />
      {{event.place}}
    </template>
  </div>
</div>
</template>

<script>

export default {
  props: {
    events: Array
  },
  computed: {
    favorited() {
      return this.events.filter(event => event.favorited)
    }
  },
  methods: {
    expandEvent(event) {
      event.expanded = true
      this.$parent.$emit('modifyEvent', event)
    }
  }
}
</script>
