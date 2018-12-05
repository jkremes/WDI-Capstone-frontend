<template>
  <div class="home">
    <img alt="cmDr" src="../assets/cmDr3.jpeg">
    <SignUp msg="Sign Up!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignUp from '@/components/Sign-up.vue'

export default {
  name: 'Sign-up',
  components: {
    SignUp
  }
}
</script>
