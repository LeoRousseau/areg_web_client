
<template>
  <div id="app">
    <PageHeader/>
    <div class="PageContent">
      <v-row >
      <v-col cols="4">
        <v-container fluid>
        <v-card>
          <RoomList/>
        </v-card>
        </v-container>
      </v-col>
      <v-col cols="8">
        <RoomDetail/>
      </v-col>
    </v-row>
    </div>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import RoomList from './components/RoomList.vue'
import RoomDetail from './components/RoomDetail.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    RoomList,
    RoomDetail
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.PageContent {
      margin-top: 30px;
}
</style>
