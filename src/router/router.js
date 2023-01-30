import {createRouter, createWebHistory} from "vue-router";
import messages from "@/components/messages.vue";
import postMessages from "@/components/postMessages.vue";

const routes = [
    {path: '/', component:messages},
    {path: '/get-middle', component:postMessages}
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router