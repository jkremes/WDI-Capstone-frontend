<template>
<div>
<!-- <div>
    <h1>{{subordinate.first_name}}</h1>
</div> -->
          <div id="app">
  <v-app id="inspire">
      <div>
    <!-- <div  v-for="(subordinate, i) in subordinates" :key="`${i}-${subordinate.first_name}`"> -->
      <v-toolbar flat color="white">
        <v-toolbar-title>TROOPS</v-toolbar-title>
        <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
        <v-divider
          class="mx-2"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn> -->
          <v-card>
            <v-card-title>
              <span class="headline">Create Troop</span>
            </v-card-title>
  
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
  
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="subordinates"
        :search="search"
        class="elevation-1"
      >
        <template slot="items" slot-scope="subordinates" v-for="(subordinate, i) in (subordinates)">
          <td :key="shadowList[i]">{{ props.first_name }}</td>
          <td :key="shadowList[i]" class="text-xs-center">{{ subordinate.first_name }}</td>
          <td :key="shadowList[i]" class="text-xs-center">{{ subordinate.last_name }}</td>
          <td :key="shadowList[i]" class="text-xs-center">{{ subordinate.address }}</td>
          <td :key="shadowList[i]" class="justify-center layout px-0">
            <v-icon
              small
              class="mr-2"
              @click="editItem(props.item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click="deleteItem(props.item)"
            >
              delete
            </v-icon>
          </td>
          
        </template>
        <template slot="no-data">
          <v-btn color="primary" @click="getTroops">Reset</v-btn>
        </template>
      </v-data-table>
    </div>
  </v-app>
 </div>
 <!-- <div v-for="(subordinate, i) in subordinates" :key="`${i}-${subordinate.first_name}`">
      <p>
        <span><b>{{ subordinate.first_name }}</b></span><br />
        <span>{{ subordinate.last_name }}</span>
      </p>
    </div> -->
</div>
</template>

<script>
import APIService from '../services/APIService'

export default {
  name: 'DisplayTroops',
//   props: {
//       subordinates: []
//   },
  data () {
    return {
      subordinates: [],
      desserts: [],
      props: [],
      editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    //   search: ''
    },
    search: '',
    list: [],
    shadowList: [],
    dialog: false,
    headers: [
      {
        text: 'Accounted?',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'First Name', value: 'first_name' },
      { text: 'Last Name', value: 'last_name' },
      { text: 'Address', value: 'address' },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    }
  },
  mounted () {
    this.getTroops()
  },
  methods: {
      async getTroops () {
      const response = await APIService.getTroops()
      this.subordinates = response.data.subordinates
      this.list.push({ value: 1 })
      this.shadowList.push(this.$store.count)
      console.log(this.shadowList)
      console.log(response.data)
    },
    changeIndex() {
        this.$store.commit('increment')
    },
    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
    // search () {

    // }
  },
  customFilter: {
  type: Function,
  default: (items, search, filter) => {
    this.search = search.toString().toLowerCase()
    return items.filter(i => (
      Object.keys(i).some(j => filter(i[j], search))
    ))
  }
},
}
</script>


class="v-input v-text-field v-text-field--single-line v-input--hide-details theme--light"