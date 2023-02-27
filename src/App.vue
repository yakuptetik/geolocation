<script setup>
import { onMounted } from 'vue';
import { useLocationStore } from './store/location'

const useLocal = useLocationStore()

onMounted(() => {
  useLocal.fetchLocation();
})

</script>

<template>
  <div  class="bg-blue-300 w-screen h-screen p-5 flex items-center justify-center">
    <div class="">
    <div class="flex items-center justify-start pt-8 text-white text-4xl">
      Your IP: {{ useLocal.locations.ip_address }}
    </div>
    <div class="flex items-center justify-start pt-8 text-white text-4xl">
      Your Location: {{ useLocal.locations.region }}/{{ useLocal.locations.country }}
    </div>
    <div class="flex items-center justify-start pt-8 text-white text-4xl">
      Your Flag: {{ useLocal.locations.flag.emoji }}
    </div>      
    </div>

  </div>
</template>

