import data from '@/assets/data.json'

export function getEvents() {
  return data.events
    .map(event => {
      return {
        ...event,
        expanded: false
      }
    })
}

export function getData() {
  return {
    majors: data.majors || {},
    places: data.places || []
  }
}
