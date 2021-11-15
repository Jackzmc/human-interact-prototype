<template>
<div class="box">
  <b-field horizontal>
    <b-field label="Date">
      <b-datepicker
        v-model="dates"
        placeholder="Click to select..."
        icon="calendar-multiselect"
        icon-right-clickable
        trap-focus
        multiple
        :events="datePickerEvents"
      >
        <div class="buttons">
          <b-button
            label="Today"
            type="is-primary"
            icon-left="calendar-today"
            @click="addDate(new Date())"
          />

          <b-button
            label="Tomorrow"
            type="is-secondary"
            icon-left="calendar"
            @click="addDate(tomorrowDate)"
          />

          <b-button
            label="Clear"
            type="is-danger"
            icon-left="close"
            outlined
            @click="dates = []"
          />
        </div>
      </b-datepicker>
    </b-field>
    <b-field label="Major">
      <b-select placeholder="Select a major" v-model="major" icon="school">
        <option value="">Any</option>
        <optgroup v-for="(list, category) in majors" :key="category" :label="category">
          <option
            v-for="option in list"
            :value="option"
            :key="option">
            {{ option}}
          </option>
        </optgroup>
      </b-select>
    </b-field>
    <b-field label="Place">
      <b-select placeholder="Select a place" v-model="place" icon="map-marker">
        <option value="">Any</option>
        <option
          v-for="option in places"
          :value="option"
          :key="option">
          {{ option}}
        </option>
      </b-select>
    </b-field>
    <b-field label="Search">
      <b-input
        v-model.lazy="searchText"
        type="text"
        placeholder="Search"
        icon="magnify"
        :icon-right="searchText && searchText.length ? 'backspace' : null"
        icon-right-clickable
        @icon-right-click="searchText = null"
      />
    </b-field>
  </b-field>
</div>
</template>

<script>

export default {
  props: {
    events: Array,
    majors: Object // Record<category, majors[]>
  },
  data() {
    return {
      searchText: null,
      place: null,
      major: null,
      dates: []
    }
  },
  computed: {
    places() {
      const places = []
      this.events.forEach(event => {
        if(event.place && !places.includes(event.place)) places.push(event.place)
      })
      return places
    },
    tomorrowDate() {
      const today = new Date()
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)
      return tomorrow
    },
    filter() {
      return {
        search: this.searchText ? this.searchText.toLowerCase() : null,
        major: this.major ? this.major : null,
        place: this.place ? this.place : null,
        dates: this.dates
      }
    },
    datePickerEvents() {
      return this.events
        .filter(event => {
          return event.date && !isNaN(Date.parse(event.date))
        })
        .map(event => {
          return {
            date: new Date(event.date)
          }
        })
    }
  },
  watch: {
    filter() {
      this.$emit('filter', this.filter)
    }
  },
  methods: {
    addDate(date = new Date()) {
      if(!this.dates.includes(date)) {
        console.log(this.dates, 'add', date)
        this.dates.push(date)
      }
    }
  }
}
</script>
