<template>
  <div class="home">
    <Nombreusuario/>
    <button @click="verificarEmail">Verificar Email</button>
    <h1>Vista Home</h1>
  </div>
</template>

<script>
import Nombreusuario from '@/components/Nombreusuario.vue';
import firebase from 'firebase';
import { mapGetters } from 'vuex';
export default {
  name: 'Home',
  components: {
    Nombreusuario,
  },
  methods: {
    verificarEmail(){
      firebase.auth().currentUser;
        if (!this.enviandoUsuario.emailVerified){
           this.enviandoUsuario.sendEmailVerification().then(() => {
            console.log('Correo Verificado')
          }).catch(function(error) {
            console.error(error);
          });
        } else {
          console.log('Correo Verificado');
        }
       
    }
  },
  computed: {
    ...mapGetters(['enviandoUsuario'])
  }
  
}
</script>
