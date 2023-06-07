import fetch from 'node-fetch';
import { randomIntInARange } from './randomIntGenerator.js'

const request = `https://jsonplaceholder.typicode.com/comments/${randomIntInARange}`

console.log("Request string:", request)

console.log("Response:")
fetch(request)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(e => console.log(e))