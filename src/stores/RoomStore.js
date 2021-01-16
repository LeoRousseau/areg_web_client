import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const _state = {
    rooms:[{
        room_id : '000',
        name : "Partie entre amis",
        scenario : "Warren",
        nb_user : 3,
        nb_user_max : 6,
        owner_id : "39448",
        owner_name : "Léo",
        status : 'en cours',
        location : "Lyon"
    },
    {
        room_id : '001',
        name : "Room privé",
        scenario : "Warren",
        nb_user : 3,
        nb_user_max : 6,
        owner_id : "567567",
        owner_name : "thierry",
        status : 'en cours',
        location : "Paris"
    },
    {
        room_id : '002',
        name : "El famoso Roger",
        scenario : "Warren",
        nb_user : 1,
        nb_user_max : 6,
        owner_id : "3008",
        owner_name : "Roger",
        status : 'en attente',
        location : "Nantes"
    }],
    title : "List of rooms",
    roomSelected : "none",
}


const _mutations = {
ADD_ROOM : (state, _name, _scenario) => {
    state.rooms.push({
        name : _name,
        scenario : _scenario
    })
},
setRoomCliked(state, newroomID) {
    if (state.roomSelected===newroomID) 
    {
        state.roomSelected="none"
    } else {
        state.roomSelected = newroomID
    }
}
}

const _getters = {
    rooms : state => state.rooms,
    title : state => state.title,
    roomIsSelected : state=> (state.roomSelected!="none"),
    selectedRoom : state => ((state.roomSelected!="none") ? state.rooms.find(r => r.room_id===state.roomSelected) : state.rooms[0])
}

const store = new Vuex.Store({
    state : _state,
    mutations:_mutations,
    getters:_getters,
    actions:{}
})

export default store