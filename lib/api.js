import axios from 'axios'

const endpoint = "https://api.onearth.be/v1/parlonsbitcoin"


export function fetchAll(type, token) {
  return axios({
    method: "GET",
    url: `${endpoint}/${type}?token=${token}`,
  })
}