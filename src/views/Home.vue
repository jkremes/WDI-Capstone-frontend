<template>
  <div class="home">
    <img alt="cmDr" src="../assets/cmDr3.jpeg">
    <HelloWorld msg="Welcome to the Command Dr."/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
