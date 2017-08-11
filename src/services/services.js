import Resource from 'vue-resource'
import Vue from 'vue'

Vue.use(Resource)

export default {
  getApi (url, success, error) {
    Vue.http.get(url).then(
      (response) => {
        success(response)
      },
      (response) => {
        error(response)
      })
  }
}
