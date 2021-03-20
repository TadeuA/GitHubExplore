import axios from 'axios'
const _baseURL = 'https://api.github.com'

const apiGitHub = {
  users: axios.create({
    baseURL: `${_baseURL}/users`
  }),

  orgs: axios.create({
    baseURL: `${_baseURL}/orgs`
  }),
}


export default apiGitHub