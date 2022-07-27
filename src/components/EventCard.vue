<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventDetailsView', params: { id: event.id } }"
  >
    <div class="event-card">
      <span>@ {{ props.event.time }} on {{ props.event.date }}</span>
      <h4>{{ props.event.title }}</h4>
    </div>
  </router-link>
</template>

<script setup>
/* eslint-disable*/
import { defineProps } from "vue"

const props = defineProps({
  event: Object,
})

</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}


.event-card>.title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
