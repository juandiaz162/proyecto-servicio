<template>
    <v-container>
        <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        >
            <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Nombre"
            required
            ></v-text-field>

            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>

           <v-text-field
            v-model="ciudad"
            label="Ciudad"
            required
            ></v-text-field>

            <v-text-field
            v-model="telefono"
            label="Telefono"
            required
            ></v-text-field>

           

            <v-btn
            :disabled="!valid"
            color="success"
            @click="validate"
            >
            Validate
            </v-btn>

            <v-btn
            color="error"
            @click="reset"
            >
            Reset Form
            </v-btn>

            <v-btn
            color="warning"
            @click="resetValidation"
            >
            Reset Validation
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>



export default {
    name: 'contacto',
    data () {
        return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'El Nombre es requerido',
        v => (v && v.length <= 10) || 'Nombre menor a 10 caracteres'
      ],

      email: '',
      emailRules: [
        v => !!v || 'El Email es requerido',
        v => /.+@.+/.test(v) || 'Escribe un email valido'
      ],

      select: null,
      ciudad:'',
      telefono:''
        }
    },

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
          console.log("lol");
        }else {
          console.log("fuera");
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
    }
  }
</script>

