<template>
  <div class="register">
    <h1>{{ msg }}</h1>
    <div>
    <router-link to="/sign-up">Sign-up</router-link> |
    <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
