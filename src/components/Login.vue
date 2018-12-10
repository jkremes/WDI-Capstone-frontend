<template>
<!-- <div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="email" label="email" type="email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signIn">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div> -->
    <div id="app">
      <v-app id="login">
        <h1>Login!</h1>
          <v-form ref="form">
            <v-container fluid>
      <v-layout align--center justify-center="">

        <v-flex xs12 sm6>
    <!-- <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="Name"
      required
    ></v-text-field> -->
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
    <!-- <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox> -->

    <v-btn
    type="submit" @click="signIn">submit</v-btn>
    <!-- <v-btn @click="clear">clear</v-btn> -->
      </v-flex>
          </v-layout>
     </v-container>
  </v-form>



   
        <!-- <h1>Login</h1>
        <div>
        <v-form>
            <label for="email" >E-Mail Address</label>
            <div>
                <input id="email" type="email" v-model="email" required>
            </div>
             
            <label for="password">Password</label>
            <div>
                <input id="password" type="password" v-model="password" required>
            </div>
            <div>
                <button type="submit" @click="signIn">
                    Login
                </button>
            </div>
        </v-form>
        </div> -->
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
  //   props: {
  //   source: String
  // },
    methods: {
      async signIn (e) {
        e.preventDefault()
        await APIService.signIn({
          email: this.email,
          password: this.password,
        }).then(resp => {
          // console.log(resp)
          // console.log(resp.data.user.token)
          this.$store.state.user = resp.data.user
          this.$store.state.token = resp.data.user.token
          this.$store.state.name = resp.data.user.name
          // console.log(this.$store.state.user)
          // console.log(this.$store.state.token)
          // console.log(this.$store.state.name)
        })
        this.$swal(
          `Hi, ${this.$store.state.name}!`,
          `You are now logged in.`,
          'success'
        )
        this.$router.push({ name: 'index' })
      }
    }
}
</script>

<!--<style type="text/css">
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
</style>-->