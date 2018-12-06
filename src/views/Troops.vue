<template>
  <div class="troops">
    <img alt="cmDr" src="../assets/cmDr3.jpeg">
    <h1>See your troops</h1>
    <button type="submit" @click="getTroops">display troops</button>
    <v-btn outline fab color="teal">
      <v-icon>list</v-icon>
    </v-btn>
    <div v-for="subordinate in subordinates" :key="subordinate">
      <p>
        <span><b>{{ subordinate.first_name }}</b></span><br />
        <span>{{ subordinate.last_name }}</span>
      </p>
    </div>
    <div>
      <!-- <button><photo-upload 
    :enableEdits="true"
    :photoDefault="defaultPhoto"
    buttonClass="btn btn-primary"
    :showMessages="true"
    @photo-submit="photo_upload"
    @photo-change="photo_changed"
    >Upload photo
</photo-upload>
      </button> -->
      <form>
        <label for="firstName" >First Name</label>
        <div>
            <input id="firstName" type="text" v-model="first_name" required>
        </div>
          
        <label for="lastName">Last Name</label>
        <div>
            <input id="lastName" type="text" v-model="last_name" required>
        </div>

        <label for="address">Address</label>
        <div>
            <input id="address" type="text" v-model="address" required>
        </div>
        <div>
            <button type="submit" @click="createTroop">
                Create Troop
            </button>
        </div>
      </form>
    </div>
    <!-- <Welcome msg="Welcome to the Command Doctor!"/> -->
  </div>
  
</template>

<script>
// @ is an alias to /src
import Welcome from '../components/Welcome.vue'
import APIService from '../services/APIService';

export default {
  name: 'troops',
  components: {
    Welcome
  },
  data () {
    return {
      // defaultPhoto: '',
      first_name: '',
      last_name: '',
      address: '',
      subordinates: []
    }
  },
  mounted () {
    this.getTroops()
  },
  // mounted() {
  //   fetch(API_URL)
  //     .then(response => response.json())
  //     .then(result => {
  //       this.messages = result;
  //     });
  // },
  methods: {
    photo_upload: function(e, file){
    console.log(e,file)
    },
    async createTroop (e) {
      e.preventDefault()
      await APIService.createTroop({
        // defaultPhoto: this.defaultPhoto
        first_name: this.first_name,
        last_name: this.last_name,
        address: this.address
      })
      .then(console.log('user created'))
    },
    // async getTroops () {
    //   const response = await APIService.getTroops()
    //   console.log(response)
    //   this.posts = response.data
    // },
    async getTroops () {
      const response = await APIService.getTroops()
      this.subordinates = response.data.subordinates
      console.log(response.data.subordinates)
      // .then(console.log)
      // .then(response => response.json())
      // .then(console.log(response))
      // .then(console.log('you got the troops!'))
      // .catch(console.log('something went wrong'))
    }
    // async signUp (e) {
    //     e.preventDefault()
    //     await APIService.signUp({
    //       email: this.email,
    //       password: this.password,
    //       password_confirmation: this.password_confirmation
    //     })
    //     this.$swal(
    //       'Right on!',
    //       `${this.name}, you've been added!`,
    //       'success'
    //     )
    //     this.$router.push({ name: 'login' })
    //   }
  }
}
</script>
