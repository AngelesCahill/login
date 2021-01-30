<template>
  <div>
    <div class="usuario ms-auto" v-if="enviandoUsuario">
      <img :src="enviandoUsuario.photoURL" alt="" class="foto">
      <h3>Hola, {{enviandoUsuario.displayName}} - {{enviandoUsuario.email}}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Nombreusuario',
  computed: {
    ...mapGetters(['enviandoUsuario'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.usuario {
  width: 100vw;
  height: 42px;
  background-color: rgb(102, 95, 95);
  color: white;
  padding-top: 7px;
  
}
img, h3 {
  display: inline-block;
  font-size: 14px;
  margin-left: 1rem;

}
.foto {
  width: 30px;
  height: 10;
  border: 1px solid red;
  border-radius: 100%;
}
</style>
