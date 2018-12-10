<template>
            <div id="app">
      <v-app id="login">
        <h1>Sign Up!</h1>
          <v-form ref="form">
            <v-container fluid>
      <v-layout align--center justify-center="">
        <v-flex xs12 sm6>
    <v-text-field
      v-model="name"
      label="Name"
      required
    ></v-text-field>
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
        <v-text-field
      v-model="password_confirmation"
      label="Confirm Password"
      type="password"
      required
    ></v-text-field>
    <v-btn
    type="submit" @click="signUp">submit</v-btn>
    <!-- <v-btn @click="clear">clear</v-btn> -->
      </v-flex>
          </v-layout>
     </v-container>
  </v-form>
        <br>
        <div>
          <router-link to="/">Go Back</router-link>
    </div>
      </v-app>
    </div>
</template>

<script>
import APIService from '../services/APIService'
export default {
    name: 'sign-up',
    data () {
      return {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    },
    methods: {
      async signUp (e) {
        e.preventDefault()
        try {
          await APIService.signUp({
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
        this.$swal(
          'Right on!',
          `${this.name}, you've been added!`,
          'success'
        )
        this.$router.push({ name: 'login' })
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

<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>