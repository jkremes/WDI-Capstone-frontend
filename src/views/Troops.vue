<template>
  <div class="troops">
    <img alt="cmDr" src="../assets/cmDr3.jpeg">
    <h1>See your troops</h1>
    <!-- <button type="submit" @click="getTroops">display troops</button> -->
    <v-btn outline fab color="teal">
      <v-icon>list</v-icon>
    </v-btn>
    <DisplayTroops/>
    <div>
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
// import Welcome from '../components/Welcome.vue'
import APIService from '../services/APIService'
import DisplayTroops from '../components/DisplayTroops'

export default {
  name: 'troops',
  components: {
    // Welcome,
    DisplayTroops
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
  // mounted () {
  //   this.getTroops()
  // },
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
    }
    // async getTroops () {
    //   const response = await APIService.getTroops()
    //   this.subordinates = response.data.subordinates
    // }
  }
}
</script>
