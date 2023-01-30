const axios = require('axios')
axios.get('http://localhost:3001/getmessages').then(data => console.log(data))