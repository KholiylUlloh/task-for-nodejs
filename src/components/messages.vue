<template>
  <div class="container">
    <div class="w-100 shadow p-3 bg-white rounded">
    <div v-for="number in numbersArr"  class="shadow p-3 mb-1 bg-white rounded">
          <div>{{number}}</div>
    </div>
    </div>
    <div class="form-control h-100  w-100">
      <div class="col-sm-10">
        <input v-model="inputVal" type="text" class="form-control" id="inputPassword" placeholder="Type a Number">
        <input v-model="author" type="text" class="form-control" id="inputName" placeholder="type your name">
      </div>
      <span>sumbit more than one</span>
      <button @click="postData" class="btn m-2 btn-primary">Submit</button>
      <router-link to="/get-middle">Go to get results</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {computed} from "vue";

export default {
  name: "messages",
  data() {
    return {
      numbersArr: [],
      inputVal: '',
      author: '',
    }
  },
  methods:{
    async fetchData() {
        await axios.get("http://localhost:3001/getmessages")
            .then((response) => {
              response?.data?.arrContent.forEach(item => {
                item.forEach(i => {
                  this.numbersArr.push(`${i}`)
                })
              })
        })
            .catch((error) => {
              console.log(error)
            })

    },
    postData(){
      axios.post("http://localhost:3001/message",{
        author_name: this.author,
        n: this.inputVal
      })
      this.inputVal = ""
      this.author = ""
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style scoped>
.container{
  display: flex;
  /*align-items: center;*/
  justify-content: center;
  gap: 20px;
  padding: 50px;
}

</style>