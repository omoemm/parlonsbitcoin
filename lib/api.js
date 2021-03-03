import axios from 'axios'

const endpoint = "https://api.onearth.be/v1/parlonsbitcoin"


export function get(type) {
  return axios({
    method: "GET",
    url: `${endpoint}/${type}`,
    data: {
      token: process.env.TOKEN
    }
  })
}