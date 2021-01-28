<template>
        <v-container>
           
            <v-toolbar app height="70px" wrap color="rgb(132, 172, 152, 0.8)">
                <!--<v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>-->
                
                <div class="col col-md-2 letOp" style="position:absolute;left:20px" >
                    <img z-index="100" :src="src" height="80px" width="70px">
                    
                </div>
                <v-spacer></v-spacer>
                <v-toolbar-title style="position:absolute;left:90px" >
                    <h1 display-3>
                         Café Magón
                    </h1>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items sm6  top="100px">
                    <v-btn flat dark sm2  to="/carrito" v-if="seen">
                        <v-badge right color="green">
                        <template v-slot:badge>
                            <span>{{carrito.length}}</span>
                        </template>
                        
                            <v-icon>
                                local_grocery_store
                            </v-icon>
                       
                        </v-badge>
                    </v-btn>
                    <v-btn flat dark sm2  to="/" >
                        Home
                    </v-btn>
                    <v-btn flat dark :to="{name: 'productos'}" >
                        Tienda
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </v-container>
    
</template>

<script>
import {mapState, mapMutations} from "vuex"

export default {
    name:'toolbar',
    data() {
        return {
            
            gradient: 'to top right, rgba(0,0,0, .7), rgba(0,0,0, .7)',
            src:require('@/assets/logo-sn-marca.png')
        }
    },
    computed: {
        ...mapState(['seen','carrito'])
    },
    methods: {
        ...mapMutations(['falso'])
    }
}
</script>

<style>
.letOp {
    opacity: 1;
  filter: alpha(opacity=60);
}
</style>
