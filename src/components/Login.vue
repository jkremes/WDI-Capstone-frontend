<template>
    <div>
        <h1>Login</h1>
        <div>
        <form>
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
        </form>
        </div>
        <br>
        <div>
          <router-link to="/">Go Back</router-link>
    </div>
    </div>
</template>

<script>
import APIService from '../services/APIService'
export default {
    name: 'loginComponent',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async signIn (e) {
        e.preventDefault()
        await APIService.signIn({
          email: this.email,
          password: this.password,
        }).then(resp => {
          console.log(resp)
          console.log(resp.data.user.token)
          this.$store.state.user = resp.data.user
          this.$store.state.token = resp.data.user.token
          this.$store.state.name = resp.data.user.name
          console.log(this.$store.state.user)
          console.log(this.$store.state.token)
          console.log(this.$store.state.name)
        })
        this.$swal(
          `Hi, ${this.$store.state.name}!`,
          `You are now logged in.`,
          'success'
        )
        // this.$store.dispatch('login', { email, password })
        // this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        //   this.$router.push({ name: 'index' })
        // })
        this.$router.push({ name: 'index' })
      }
		 	// signIn: function (e) {
      //     e.preventDefault()
		  //  		let email = this.email 
		  //  		let password = this.password
		  //  		this.$store.dispatch('login', { email, password })
		  //  		.then(() => this.$router.push('/'))
		  //  		.catch(err => console.log(err))
		  //  	}
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