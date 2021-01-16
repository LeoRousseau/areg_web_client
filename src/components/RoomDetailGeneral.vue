<template>
        <v-card flat>
            <v-container>
                <v-card-title>Owner</v-card-title>
            <v-row class="middleDivider" justify="center">
                <v-col cols="3">
                    <v-card flat>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon size="35px">mdi-account</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title class="property">{{ActualRoom.owner_name}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card flat>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon size="35px">mdi-account-details</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title class="property">{{ActualRoom.owner_id}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card flat>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon size="35px">mdi-calendar-range</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title class="property">Title</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card flat>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon size="35px">mdi-map-marker</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title class="property">{{ActualRoom.location}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                    </v-card>
                </v-col>
            </v-row>
            <v-divider class="middleDivider"></v-divider>
                    <v-card-title>State</v-card-title>
            <v-row justify="center">
                <v-col cols="3">
                    <v-card flat>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon size="35px">mdi-arrow-right-drop-circle</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title class="property">{{ActualRoom.status}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card flat>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon size="35px">mdi-book</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title class="property">{{ActualRoom.scenario}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card flat>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon size="35px">mdi-timer-sand</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title class="property">Title</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card flat>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon size="35px">mdi-account-multiple</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title class="property">{{UserPercentage}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                    </v-card>
                </v-col>
            </v-row>
            </v-container>
            
        </v-card>
</template>

<style>

.middleDivider{
    padding-bottom: 30px;
}

.property {
    font-size: 22px !important ;
    padding-left: 15px;
}


</style>


<script>
export default {
    name : "RoomDetailGeneral",
    props : {
        ActualRoom : Object,
    }, 
    computed : {
        UserPercentage : function() {
            return this.ActualRoom.nb_user + "/" + this.ActualRoom.nb_user_max;
        }
    }
}
</script>