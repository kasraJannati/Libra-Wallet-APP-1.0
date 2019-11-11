import axios  from 'axios';


const endpoint = (useProxy = true) => {
  //return 'https://cors-anywhere.herokuapp.com' + '/'
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  return (useProxy ? proxy : '') + 'http://172.105.68.208:8080'
}

//
var cache = {}

const delay = async (ms) => new Promise(done =>
  setTimeout(done, ms)
)
