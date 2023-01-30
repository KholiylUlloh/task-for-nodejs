<template>
  <div class="container">
    <div class="w-100 shadow p-3 bg-white rounded">
      <div v-for="number in data"  class="shadow p-3 mb-1 bg-white rounded">
        <div>{{number}}</div>
      </div>
    </div>
    <div class="form-control h-100  w-100">
      <div class="col-sm-10">
        <input v-model="inputValue" type="text" class="form-control" id="inputPassword" placeholder="Type a Number">
        <input v-model="author" type="text" class="form-control" id="inputName" placeholder="type your name">
      </div>
      <span>submit a number to get middle number with previous</span>
      <button @click="postData" class="btn m-2 btn-primary">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "postMessages",
  data(){
    return{
      inputValue: '',
      author: '',
      data: []
    }
  },
  methods:{
    async fetchData() {
      await axios.get("http://localhost:3001/getmessages")
          .then((response) => {
            let content = response?.data?.arrContent
            this.data = content[content.length - 2]
          })
          .catch((error) => {
            console.log(error)
          })
    },
    postData(){
      axios.post("http://localhost:3001/calculate",{
        author_name: this.author,
        n: this.inputValue
      })
      this.inputValue = ""
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