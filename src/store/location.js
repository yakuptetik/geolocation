import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios'

export const useLocationStore = defineStore('location', () => {

  const location = ref({})

  function fetchLocation() {
    return new Promise((resolve, reject) => {
      try {
        axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=2b1dae796fba4614bface662a27962d8')
          .then((response) => {
            location.value = response.data;
            console.log(response.data)
            resolve();
          });
      }	catch (err) {
      }
    });
}

  return {location,  fetchLocation}
})