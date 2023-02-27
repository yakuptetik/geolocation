<script setup>
import { onMounted, ref } from 'vue';
import { useLocationStore } from './store/location'

const useLocal = useLocationStore()
const isLoading = ref(true);

onMounted(() => {
  useLocal.fetchLocation()
  .then(() => {
    isLoading.value = false;
  });
})

</script>

<template>
  <div  class="bg-blue-300 w-screen h-screen p-5 flex items-center justify-center">
    <div class="" v-if="!isLoading">
      <div class="flex items-center justify-start pt-8 text-white text-4xl">
        Your IP: {{ useLocal.location.ip_address }}
      </div>
      <div class="flex items-center justify-start pt-8 text-white text-4xl">
        Your Location: {{ useLocal.location.region }}/{{ useLocal.location.country }}
      </div>
      <div class="flex items-center justify-start pt-8 text-white text-4xl">
        Your Flag: {{ useLocal.location.flag.emoji }}
      </div>      
    </div>

  </div>
</template>

