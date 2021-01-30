<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto me-5">
                        <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Inicio</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" :to="{name:'Login'}">
                                Iniciar Sesión
                            </router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" :to="{name: 'Registro'}">Registrase</router-link>
                        </li>
                        <li class="nav-item">
                        <button class="nav-link btn btn-danger bg-danger"  :disabled="exiteUser" :class="activandoLogOut" @click="SignOut">Cerrar Sesión</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase';
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2';

export default {
    name: 'Navbar',
    methods: {
        SignOut(){
            firebase.auth().signOut().then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Tu Sesión se ha cerrado exitosamente',
                    showConfirmButton: false,
                    timer: 2500
                })
                this.$router.push({name:'Login'});
                console.log('Sesion cerrada');
            }).catch((error) => {
                console.error(error)
            });
        }
        
    },
    computed: {
        ...mapGetters(['enviandoUsuario']),
        exiteUser(){
            return !this.enviandoUsuario;
        },
        activandoLogOut(){
           return this.exiteUser ? 'disabled' : '';
        },
    },
}
</script>

<style>

</style>