<template>
<div>
          <div id="app">
  <v-app id="inspire">
      <div>
      <v-toolbar flat color="white">
        <v-toolbar-title>TROOPS</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <v-btn slot="activator" color="primary" dark class="mb-2">New Troop</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">Troop</span>
            </v-card-title>
  
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field 
                    v-model="editedItem.first_name" 
                    label="First Name" 
                    required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.last_name" label="Last Name" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.address" label="Address" required></v-text-field>
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
              medium
              type: submit
              class="mr-2"
              @click="editItem(props.item)"
            >
              edit
            </v-icon>
            <v-icon
              medium
              type: submit
              @click="deleteItem(props.item)"
            >
              delete
            </v-icon>
          </td>
          
        </template>
        <template slot="no-data">
      <v-alert :value="true" color="error" icon="warning">
        Sorry, nothing to display here :(
      </v-alert>
    </template>
          <v-btn color="primary" @click="getTroops">Reset</v-btn>
      </v-data-table>
    </div>
  </v-app>
 </div>
</div>
</template>

<script>
import APIService from '../services/APIService'

export default {
  name: 'DisplayTroops',
  data () {
    return {
      selected: [],
      subordinates: [],
      desserts: [],
      props: [],
      troop: {},
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
    dialogTwo: false,
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
    computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
      async getTroops () {
      const response = await APIService.getTroops()
      this.subordinates = response.data.subordinates
      this.list.push({ value: 1 })
      this.shadowList.push(this.$store.count)
    },
  //   created () {
  //   this.initialize()
  // },
    changeIndex() {
        this.$store.commit('increment')
    },
    async editItem (item) {
        this.troop = item
        console.log(this.troop)
      this.editedIndex = this.subordinates.indexOf(item)
      this.editedItem = Object.assign({}, item)
    //   console.log(this.editItem)
      this.dialog = true
      const itemID = item._id
      // await APIService.updateTroop({
      //   item
      //   params: {
      //       first_name: item.first_name,
      //       last_name: item.last_name,
      //       address: item.address,
      //       id: itemID
      //   }
      // })
    },
    // async updateTroop () {
    //   console.log(this.troop)
    //   await APIService.updateTroop(this.troop)
    //     // params: {
    //     //     first_name: item.first_name,
    //     //     last_name: item.last_name,
    //     //     address: item.address,
    //     //     id: itemID
    //     // }
    // },
    async deleteItem (item) {
        const itemID = item._id
        await APIService.deleteTroop(itemID)
        this.getTroops()
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
    async save () {
        // e.preventDefault()
      if (this.editedIndex > -1) {
      await APIService.updateTroop({
        params: this.editedItem
            // first_name: item.first_name,
            // last_name: item.last_name,
            // address: item.address,
            // id: itemID
      })
        // Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        try {
          await APIService.createTroop({
        // defaultPhoto: this.defaultPhoto
        first_name: this.editedItem.first_name,
        last_name: this.editedItem.last_name,
        address: this.editedItem.address
      })
        } catch (error) {
          this.$swal(
          'Sorry!',
          `Something went wrong, try again.`,
          'error'
        )
        }
        // this.desserts.push(this.editedItem)
      }
      this.close()
      this.getTroops()
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

<style>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}
</style>
