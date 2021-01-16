<template>
<div class="roomList">
  <v-card>
     <v-app-bar
      color="rgba(22, 175, 197, 1)"
      dark
    >
      <v-toolbar-title>Rooms</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-delete-forever</v-icon>
      </v-btn>
    </v-app-bar>
    <v-list two-line >
      <v-list-item-group
        color="primary">
          <RoomItem
          v-for="(r, i) in rooms"
          :key="i"
          :name=r.name :scenario=r.scenario :nb_user=r.nb_user :nb_user_max=r.nb_user_max :roomID="r.room_id"></RoomItem>
      </v-list-item-group>
    </v-list>
  </v-card>
  </div>
</template>

<style>
.v-list{
  height:600px;/* or any height you want */
  overflow-y:auto
}
</style>

<script>
import RoomStore from '../stores/RoomStore.js'
import RoomItem from './RoomItem.vue'
import Vuex from 'vuex'

  export default {
    components : {
      RoomItem
      },
    store : RoomStore,
    name:'RoomList', 
    computed : {
      ...Vuex.mapGetters(['title','rooms'])
    }

  }
</script>
