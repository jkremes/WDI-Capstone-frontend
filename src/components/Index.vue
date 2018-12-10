<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <h3>Lets work!</h3>
    <button  v-on:click="seen = !seen">Change Password</button> |
    <button type="submit" @click="signOut">Sign Out!</button> |
    <button @click="seeTroops">See Troops</button>
     <!-- <v-btn color="success">Success</v-btn> -->
    <div v-if="seen">
        <div id="app">
      <v-app id="login">
        <h1>Change Password!</h1>
          <v-form ref="form">
            <v-container fluid>
      <v-layout align--center justify-center="">
        <v-flex xs12 sm6>
    <v-text-field
      v-model="old_password"
      type="password"
      label="Old Password"
      required
    ></v-text-field>
    <v-text-field
      v-model="new_password"
      label="Password"
      type="password"
      required
    ></v-text-field>
    <v-btn
    type="submit" @click="changePassword">submit</v-btn>
    <!-- <v-btn @click="clear">clear</v-btn> -->
      </v-flex>
          </v-layout>
     </v-container>
  </v-form>
        <br>
        <div>
          <router-link to="/">Go Back</router-link>
    </div>
    <v-alert
      :value="false"
      color="success"
      icon="check_circle"
      outline
    >
    </v-alert>
      </v-app>
    <!-- </div>
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
    </div> -->
        </div>
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
        try {
            await APIService.changePassword({
            old_password: this.old_password,
            new_password: this.new_password
        })
        this.$swal(
          'Great!',
          `Password changed`,
          'success'
        )
        } catch (error) {
            this.$swal(
          'Sorry!',
          `Something went wrong, try again.`,
          'error'
        )
        }
    },
    seeTroops () {
        this.$router.push({ name: 'troops' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

