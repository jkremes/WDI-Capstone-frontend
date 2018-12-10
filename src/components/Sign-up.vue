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
        <!-- <form>
            <label for="name">Name</label>
            <div>
                <input id="name" type="text" v-model="name" required autofocus>
            </div>

            <label for="email" >E-Mail Address</label>
            <div>
                <input id="email" type="email" v-model="email" required>
            </div>
             
            <label for="password">Password</label>
            <div>
                <input id="password" type="password" v-model="password" required>
            </div>
            
            <label for="password-confirm">Confirm Password</label>
            <div>
                <input id="password-confirm" type="password" v-model="password_confirmation" required>
            </div>
            <div>
                <button type="submit" @click="signUp">
                    Register
                </button>
            </div>
        </form> -->
        <!-- </div> -->
        <!-- </div> -->
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
          // console.log(error)
          console.log('bummer')
        }
        // await APIService.signUp({
        //   name: this.name,
        //   email: this.email,
        //   password: this.password,
        //   password_confirmation: this.password_confirmation
        // })
        // return new Promise(function (res, rej) {
        //             res({body: _this.$http.get('website.net/api').then(response => {
        //             console.log("response", response.body);
        //         }, response => {
        //             console.log("error");
        //         })})
        //         })
        // console.log(err)
        // console.log(resolve)
        // console.log(error)
        // try {
          
        // } catch (error) {
          
        // }
        // .then(this.$swal(
        //   'Right on!',
        //   `${this.name}, you've been added!`,
        //   'success'
        // ))
        // .then(this.$router.push({ name: 'login' }))
        // try {
        //   console.log('all good here')
        // } catch (error) {
        //   console.log('error')
        // }
        // catch {
        //   console.log('nope')
        // }
        //   (this.$swal(
        //   'Sorry!',
        //   `Something went wrong, try again.`,
        //   'error'
        // ))
      }
    }
}
</script>

  return new Promise((resolve) => {
    resolve(`id: ${id}`);
  });
}

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