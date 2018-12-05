<template>
  <div class="home">
    <img alt="cmDr" src="../assets/cmDr3.jpeg">
    <Welcome msg="Welcome to the Command Doctor!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '../components/Welcome.vue'

export default {
  name: 'home',
  components: {
    Welcome
  }
}
</script>
