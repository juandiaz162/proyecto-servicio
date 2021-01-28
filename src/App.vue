<template>
  <v-app>
    <toolbar />
    <toolbarTienda  v-if="seen"/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import ToolbarTienda from './components/ToolbarTienda.vue'
import {mapState} from 'vuex'
export default {
  name: 'App',
  components: {
    Toolbar,
    ToolbarTienda
  },
  data () {
    return {
      
    }
  },
  computed: {
      ...mapState(['seen'])
    }, mounted() {
    },
}
</script>
