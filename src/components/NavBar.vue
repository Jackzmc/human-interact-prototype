<template>
<div class="box">
  <b-field horizontal>
    <b-field label="Date">
      <b-datepicker
        placeholder="Click to select..."
        icon="calendar-today"
        icon-right-clickable
        trap-focus>
      </b-datepicker>
    </b-field>
    <b-field label="Major">
      <b-select placeholder="Select a major">
        <option
          v-for="option in $options.MAJORS"
          :value="option"
          :key="option">
          {{ option}}
        </option>
      </b-select>
    </b-field>
    <b-field label="Place">
      <b-select placeholder="Select a place">
        <option
          v-for="option in $options.PLACES"
          :value="option"
          :key="option">
          {{ option}}
        </option>
      </b-select>
    </b-field>
    <b-field label="Search">
      <b-input v-model="searchText" type="text" placeholder="Search" />
    </b-field>
  </b-field>
</div>
</template>

<script>

const MAJORS = [
  "Major 1",
  "Major 2",
  "Major 3"
]

const PLACES = [
  "Place 1",
  "Place 2",
  "Place 3"
]

export default {
  MAJORS,
  PLACES,
  data() {
    return {
      searchText: null
    }
  }
}
</script>
