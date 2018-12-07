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
              <span class="headline">Troop</span>
            </v-card-title>
  
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.first_name" label="First Name"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.last_name" label="Last Name"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.address" label="Address"></v-text-field>
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
        v-model="selected"
        item-key="_id"
        :headers="headers"
        :items="subordinates"
        :search="search"
        class="elevation-1"
      >
       <!-- v-for="(subordinate, i) in (subordinates)" -->
        <!-- :key="shadowList[i]" -->
        <template slot="items" slot-scope="props">
          <td>
        <v-checkbox
          v-model="props.selected"
          primary
          hide-details
        ></v-checkbox>
      </td>
          <td class="text-xs-center">{{ props.item.first_name }}</td>
          <td class="text-xs-center">{{ props.item.last_name }}</td>
          <td class="text-xs-center">{{ props.item.address }}</td>
          <td class="justify-center layout px-0">
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
        <template slot="no-data">
      <v-alert :value="true" color="error" icon="warning">
        Sorry, nothing to display here :(
      </v-alert>
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
    //   first_name: '',
    //   last_name: '',
    //   address: '',
      selected: [],
      subordinates: [],
      desserts: [],
      props: [],
      editedIndex: -1,
      editedItem: {
      first_name: '',
      last_name: '',
      address: ''
    //   search: ''
    },
    search: '',
    list: [],
    shadowList: [],
    dialog: false,
    headers: [
//         {
//   text: string
//   value: string
//   align: 'left' | 'center' | 'right'
//   sortable: boolean
//   class: string[] | string
//   width: string
// }
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
    async editItem (item) {
        console.log(item)
    //   this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
    //   console.log(this.editItem)
      this.dialog = true
      const itemID = item._id
      await APIService.updateTroop({
        item
        // params: {
        //     first_name: item.first_name,
        //     last_name: item.last_name,
        //     address: item.address,
        //     id: itemID
        // }
      })
    },
    async deleteItem (item) {
        console.log(item)
        console.log(item._id)
        const itemID = item._id
        await APIService.deleteTroop(itemID)
    //   const index = this.desserts.indexOf(item)
    //   confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    async save (e) {
        e.preventDefault()
        await APIService.createTroop({
        // defaultPhoto: this.defaultPhoto
        first_name: this.editedItem.first_name,
        last_name: this.editedItem.last_name,
        address: this.editedItem.address
      })
    //   if (this.editedIndex > -1) {
    //     Object.assign(this.desserts[this.editedIndex], this.editedItem)
    //   } else {
    //     this.desserts.push(this.editedItem)
    //   }
      this.close()
    },
    // search () {

    // }
  },
//   customFilter: {
//   type: Function,
//   default: (items, search, filter) => {
//     this.search = search.toString().toLowerCase()
//     return items.filter(i => (
//       Object.keys(i).some(j => filter(i[j], search))
//     ))
//   }
// },
}
</script>


class="v-input v-text-field v-text-field--single-line v-input--hide-details theme--light"