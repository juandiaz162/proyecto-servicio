<template>
    <div>
        <v-toolbar  wrap color="rgb(132, 172, 152, 0.8)" fixed style="top:70px;">
            <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat :to="{name: 'productos'}">Productos</v-btn>
            <v-btn flat :to="{name: 'productores'}">Productores</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>

export default {
    name: 'toolbarTienda',
    
    
}
</script>
