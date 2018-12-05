<template>
    <div>
        <h4>Register</h4>
        <div>
        <form>
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
        </form>
        </div>
        <div>
<!-- <div>
  <tree-view :data="jsonSource" :options="{maxDepth: 3}"></tree-view>
</div> -->
 </div>
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
        console.log(JSON.stringify(e))
        console.log(e)
        // e.preventDefault()
        await APIService.signUp({
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
        this.$swal(
          'Great!',
          `User has been added!`,
          'success'
        )
        console.log({ name: 'sign-up' })
        this.$router.push({ name: 'sign-up' })
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