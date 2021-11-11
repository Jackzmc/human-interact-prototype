<template>
<div class="box">
  <h4 class="title is-4 has-text-centered">Upcoming Events</h4>
  <div class="box" v-for="event in filtered" :key="event.name">
    <a class="subtitle is-4 is-inline" @click="toggleEventExpanded(event)">
      {{event.name}}
    </a>
    <span class="is-pulled-right is-inline buttons">
      <a class="button" @click="toggleFavorited(event)">
        <img v-if="event.favorited" src="@/assets/logo.png" class="neb-icon" alt="Nebraska Icon" />
        <img v-else src="@/assets/logo-empty.jpg" class="neb-icon" alt="Empty Nebraska Icon" />
      </a>
      <b-button :icon-left="event.expanded ? 'chevron-up' : 'chevron-down'" @click="toggleEventExpanded(event)"/>
    </span>
    <template v-if="event.expanded">
      <br><br>
      <p>{{event.description}}</p>
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
    </template>
  </div>
</div>
</template>

<script>

export default {
  props: {
    filter: Object,
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
      if(!this.filter) return this.events
      const { dates, major, place, search } = this.filter
      return this.events
        .filter(event => {
          const date = event.date && !isNaN(Date.parse(event.date)) ? new Date(event.date).valueOf() : null
          const isValidSearchResult = search ? event.name.toLowerCase().includes(search) ||
            (event.major && event.major.toLowerCase().includes(search)) ||
            (event.place && event.place.toLowerCase().includes(search)) ||
            (event.description && event.description.toLowerCase().includes(search))
            : true

          if(process.env.NODE_ENV !== 'production') {
            console.log(event.name, ':: search', isValidSearchResult)
            console.log(event.name, ':: date', (!dates || (date && dates.some(d => d.valueOf() === date))))
            console.log(event.name, ':: major', (!major || event.major === major))
            console.log(event.name, ':: place', (!place || event.place === place))
          }

          return isValidSearchResult &&
            (dates.length === 0 || (date && dates.some(d => d.valueOf() === date))) &&
            (!major || event.major === major) &&
            (!place || event.place === place)
        })
        .sort(event => event.date)
    }
  }
}
</script>
