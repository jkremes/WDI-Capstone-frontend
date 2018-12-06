<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <h3>Do stuff now!</h3>
    <button type="submit" @click="changePassword">Change Password</button>
    <button type="submit" @click="signOut">Sign Out!</button>
  </div>
</template>

<script>
import APIService from '../services/APIService'
export default {
  name: 'indexComponent',
  props: {
    msg: String
  },
  data () {
      return {
        token: '',
      }
    },
  methods: {
    async signOut (e) {
        e.preventDefault()
        await APIService.signOut({
        })
        .then(console.log('you successfully logged out'))

  },
  async changePassword (e) {
      e.preventDefault()
      await APIService.changePassword({
            token: this.$store.state.token
      })
  }
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
