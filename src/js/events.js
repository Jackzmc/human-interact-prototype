import events from '@/assets/events.json'
export default function() {
  return events
    .map(event => {
      return {
        ...event,
        expanded: false
      }
    })
}
