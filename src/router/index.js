import { createRouter, createWebHistory } from "vue-router"
import EventList from "@/views/EventList.vue"
import EventDetails from "@/views/EventDetails"
import About from "@/views/AboutView.vue"
import NotFoundComponent from "@/views/NotFound.vue"

const routes = [
  {
    path: "/events",
    name: "EventListView",
    component: EventList,
  },
  {
    path: "/about",
    name: "AboutView",
    component: About,
  },
  {
    path: "/event/:id",
    name: "EventDetailsView",
    props: true,
    component: EventDetails,
  },
  {
    path: "*",
    component: NotFoundComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
