<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <h3>Do stuff now!</h3>
    <button  v-on:click="seen = !seen">Change Password</button>
    <button type="submit" @click="signOut">Sign Out!</button>
    <div v-if="seen">
        <form>
            <label for="old_password" >Old Password</label>
            <div>
                <input id="oldPassword" type="password" v-model="old_password" required>
            </div>
             
            <label for="password">New Password</label>
            <div>
                <input id="newPassword" type="password" v-model="new_password" required>
            </div>
            <div>
                <button type="submit" @click="changePassword">
                    Submit
                </button>
            </div>
        </form>
    </div>
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
        seen: false,
        old_password: '',
        new_password: ''
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
          old_password: this.old_password,
          new_password: this.new_password
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
