<script setup>
import EventCard from "@/components/EventCard.vue" // @ is an alias to /src
import EventService from "@/services/EventService"
import { onBeforeMount, reactive } from "vue"

//const name = "EventList"
const events = reactive({ list: null })

onBeforeMount(() => {
  EventService.getEvents()
    .then((response) => {
      events.list = response.data
    })
    .catch()
})
</script>

<template>
  <h1>Events for good</h1>

  <div class="events">
    <img alt="Vue logo" src="../assets/logo.png" />
    <EventCard v-for="e in events.list" :key="e.id" :event="e" />
  </div>
</template>

<style scoped>
.events {
  display: flexbox;
  flex-direction: column;
  align-items: center;
}
</style>
