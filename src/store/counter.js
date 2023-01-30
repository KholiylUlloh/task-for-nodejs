
export default {
    name: 'counter',
    state() {
        return{
            count: 0,
            todos: [
                { id: 1, text: 'todo one', done: true },
                { id: 2, text: 'todo second', done: false }
              ]
        }  
    },
    mutations: {
        increment(state) {
            state.count++
        },
        incrementByAmount(state, payload) {
            state.count += payload
        }
    },
    getters:{
        doneTodos(state) {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount(state, getters) {
            return getters.doneTodos.length
        },
        count(state) {
            return state.count
        }
    },
}