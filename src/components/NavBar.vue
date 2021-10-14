<template>
<div class="box">
  <b-field horizontal>
    <b-field label="Date">
      <b-datepicker
        v-model="date"
        placeholder="Click to select..."
        icon="calendar-today"
        icon-right-clickable
        trap-focus>
      </b-datepicker>
    </b-field>
    <b-field label="Major">
      <b-select placeholder="Select a major" v-model="major" icon="school">
        <option
          v-for="option in $options.MAJORS"
          :value="option"
          :key="option">
          {{ option}}
        </option>
      </b-select>
    </b-field>
    <b-field label="Place">
      <b-select placeholder="Select a place" v-model="place" icon="map-marker">
        <option
          v-for="option in $options.PLACES"
          :value="option"
          :key="option">
          {{ option}}
        </option>
      </b-select>
    </b-field>
    <b-field label="Search">
      <b-input @input="search" v-model.lazy="searchText" type="text" placeholder="Search" icon="magnify" />
    </b-field>
  </b-field>
</div>
</template>

<script>

import { getData } from '@/js/data.js'
const data = getData()

export default {
  MAJORS: data.majors,
  PLACES: data.places,
  data() {
    return {
      searchText: null,
      place: null,
      major: null,
      date: null
    }
  },
  methods: {
    search() {
      this.$emit('search', this.searchText.toLowerCase())
    }
  }
}
</script>
