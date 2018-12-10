<template>
    <div id="app">
      <v-app id="login">
        <h1>Login!</h1>
          <v-form ref="form">
            <v-container fluid>
      <v-layout align--center justify-center="">
        <v-flex xs12 sm6>
    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      required
    ></v-text-field>
    <v-btn
    type="submit" @click="signIn">submit</v-btn>
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
    </div>
</template>

<script>
import APIService from '../services/APIService'
export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async signIn (e) {
        e.preventDefault()
        try {
          await APIService.signIn({
          email: this.email,
          password: this.password,
        }).then(resp => {
          this.$store.state.user = resp.data.user
          this.$store.state.token = resp.data.user.token
          this.$store.state.name = resp.data.user.name
        })
        this.$swal(
          `Hi, ${this.$store.state.name}!`,
          `You are now logged in.`,
          'success'
        )
        this.$router.push({ name: 'index' })
        } catch (error) {
          this.$swal(
          'Sorry!',
          `Something went wrong, try again.`,
          'error'
        )
        }
      }
    }
}
</script>