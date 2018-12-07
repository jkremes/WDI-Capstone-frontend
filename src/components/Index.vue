<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <h3>Do stuff now!</h3>
    <button  v-on:click="seen = !seen">Change Password</button> |
    <button type="submit" @click="signOut">Sign Out!</button> |
    <button @click="seeTroops">See Troops</button>
     <!-- <v-btn color="success">Success</v-btn> -->
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
        this.$router.push({ name: 'home' })
    },
    async changePassword (e) {
        e.preventDefault()
        await APIService.changePassword({
            old_password: this.old_password,
            new_password: this.new_password
        })
    },
    seeTroops () {
        this.$router.push({ name: 'troops' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

