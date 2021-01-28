import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: {
      titulo:'',
      estado: false,
      color: 'primary'
    },
    productosState: [],
    productoresState: [],
    seen: false,
    carrito: []

  },
  mutations: {
    mostrarLoading(state, payload) {
      state.loading.titulo = payload.titulo
      state.loading.color = payload.color
      state.loading.estado = true
    },
    ocultarLoading( state) {
      state.loading.estado = false
    },
    falso(state, valor) {
      state.seen = valor
    },
    setProductos(state, productos) {
      state.productosState = productos
    },
    setProductores(state, productos) {
      state.productoresState = productos
    },
    maxmin(state,op) {
      
        state.productosState.sort((a, b) => b.precio -a.precio)
       
         
    },
    minmax(state, op) {
     
        state.productosState.sort((a, b) => a.precio -b.precio)
        
         
    },
    az(state, op) {
      if(op == 1)
      state.productosState.sort((a, b) => (a.titulo > b.titulo) ? 1 : -1)
      else
      state.productoresState.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1)
    },
    za(state, op) {
      if(op== 1)
      state.productosState.sort((a, b) => (a.titulo < b.titulo) ? 1 : -1)
      else
      state.productoresState.sort((a, b) => (a.nombre < b.nombre) ? 1 : -1)
    },
    setCarrito(state,item){
      state.carrito.push(item)
      localStorage.setItem('carrito', JSON.stringify(state.carrito))
    },
    inicializaCarrito(state) {
      let datosDB = JSON.parse(localStorage.getItem('carrito'))
        if(datosDB === null) {
            state.carrito = []
        }else{
            state.carrito = datosDB
        }
    }
  },
  actions: {

  }
})
