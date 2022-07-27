<script setup>
import { reactive, defineProps, onBeforeMount } from "vue"
import EventService from "@/services/EventService"

const data = reactive({ event: null })
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

onBeforeMount(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      data.event = response.data
    })
    .catch()
})
</script>

<template>
  <div v-if="data.event">
    <h1>{{ data.event.title }}</h1>
    <p>
      {{ data.event.time }} on {{ data.event.date }} @ {{ data.event.location }}
    </p>
    <p>{{ data.event.description }}</p>
  </div>
</template>
