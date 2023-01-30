import { createStore } from 'vuex'
import counter from "./counter"

export const store = createStore({
    modules:{
       counter
    },
    namespaced: true
})
