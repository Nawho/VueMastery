<template>
  <h1> Events for good</h1>


  <div class="events">
    <img alt="Vue logo" src="../assets/logo.png" />
    <EventCard v-for="e in events" :key="e.id" :event="e" />
  </div>
</template>

<script setup>
import EventCard from "@/components/EventCard.vue"; // @ is an alias to /src
import axios from "axios"
import { onMounted } from "vue"
import { reject } from "core-js/fn/promise"

const name = "EventList"
const events = ref(null)

onMounted(() => {
  axios.get("https://my-json-server.typicode.com/Nawho/Databases/events")
    .then(response => {
      console.log(response.data)
      events.value = response.data.events
    })
    .catch(err => {
      console.error(err)
    })
})

</script>

<style scoped>
.events {
  display: flexbox;
  flex-direction: column;
  align-items: center;
}
</style>