<template>
  <div class="index">
    <img alt="cmDr" src="../assets/cmDr3.jpeg">
    <indexComponent msg="Welcome to the Command Doctor!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import indexComponent from '../components/Index.vue'

export default {
  name: 'index',
  components: {
    indexComponent
  }
}
</script>
