<template>
<v-container v-show="roomIsSelected">
        <v-card>
            <v-toolbar
            color="rgba(22, 175, 197, 1)"
            dark
            >
            <v-toolbar-title bold>{{selectedRoom.name}}</v-toolbar-title>

            <template v-slot:extension>
                <v-tabs
                v-model="tab"
                align-with-title
                >
                <v-tabs-slider color="yellow"></v-tabs-slider>

                <v-tab
                    v-for="item in items"
                    :key="item"
                >
                    {{ item }}
                </v-tab>
                </v-tabs>
            </template>
            </v-toolbar>

            <v-tabs-items v-model="tab">
            <v-tab-item
                v-for="item in items"
                :key="item"
            >
                <RoomDetailGeneral v-if="displayGeneral" :ActualRoom="selectedRoom"></RoomDetailGeneral>
            </v-tab-item>
            </v-tabs-items>
        </v-card>
</v-container>
</template>

<script>
import RoomStore from '../stores/RoomStore.js'
import RoomDetailGeneral from './RoomDetailGeneral.vue'
import Vuex from 'vuex'

export default {
  name: 'RoomDetail',
  components : {
      RoomDetailGeneral,
  },
  store : RoomStore,
      computed : {
      ...Vuex.mapGetters(['title','rooms','roomIsSelected','selectedRoom']),

      displayGeneral : function() {
        return this.tab==0
      }
    },
    data () {
      return {
        tab: null,
        items: [
          'General', 'Progress', 'Users',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
}
</script>