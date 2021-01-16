
<template>
  <v-list-item @click="selectRoom">
    <v-list-item-content>
      <v-list-item-title class="RoomTitle" v-text="name"></v-list-item-title>

    <v-list-item-subtitle class="text--primary" v-text="scenario"></v-list-item-subtitle>
    </v-list-item-content>
      <v-btn icon @click.stop="deleteRoom">
        <v-icon>mdi-delete</v-icon>
      </v-btn>

      <v-snackbar
      v-model="snackbar"
    >
      {{ this.name + " removed !"}}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          v-bind="attrs"
          @click.stop="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-list-item>

</template>

<style>

.RoomTitle {
  font-size: 1.5rem !important;
}

</style>
<script>

import RoomStore from '../stores/RoomStore.js'
import Vuex from 'vuex'

export default {
    name :'RoomItem',
    store : RoomStore,
    props : {
        roomID : String,
        name : String,
        scenario : String,
        nb_user : Number,
        nb_user_max : Number,
    },
    computed : {
        ...Vuex.mapGetters(['title','rooms']),
        numberOfUser : function() {
            return this.nb_user + "/" + this.nb_user_max
        }
    },
    methods : {
      deleteRoom : function() {
        console.log("Delete"),
        this.snackbar=true;
      },
     selectRoom : function() {
        RoomStore.commit('setRoomCliked',this.roomID)
      }
    }, 
    data: () => ({
      snackbar: false,
    }),
}
</script>