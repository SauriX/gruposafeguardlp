<template>
    <div class="row">
        <div class="col-12 sticky-top">
            <nav class="navbar navbar-expand-sm navbar-light ">
                <div class="container-fluid ">
                    <a class="navbar-brand" @click="goHome">
                        <img src="../assets/img/favicon.png" alt="" width="40" height="40"
                            class="d-inline-block align-text-top">
                        Grupo SafeGuard
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <router-link v-for="route in routes" :key="route.name" :to="route.path" class="nav-item active">
                            {{ route.name }}
                        </router-link>
                    </div>
                </div>
            </nav>
        </div>
        <div class="col-12">
            <div class="mt-10 ">
                <slot></slot>
            </div>
        </div>
        <div class="col-12">
            <div style="height: 6rem; background-color: #BADA55;"></div>
        </div>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h2>GRUPO SAFEGUARD</h2>
                        <p>Chetumal, México</p>
                        <p>Email: gruposafeguard@gmail.com</p>
                        <p>Tel: 983 454 00 25</p>
                    </div>
                    <div class="col-md-6">
                        <h2>¿Cómo podemos ayudarte?</h2>
                        <form>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" placeholder="Nombre" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" placeholder="Apellido" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <input type="tel" class="form-control" placeholder="Teléfono" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="email" class="form-control" placeholder="Email" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" placeholder="Escribe tu mensaje aquí..." rows="4"
                                    required></textarea>
                            </div>
                            <button type="submit" class="btn btn-block">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script lang="ts" setup>
import routesName from '@/app/utils/routes';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const routes = computed(() => {
    return router.options.routes.filter(route => route.meta && route.meta.show);
});
const currentRouteName = computed(() => router.currentRoute.value.name);
const goHome = () => {
    router.push({ name: routesName.home });
}
</script>
<style>
.footer {
    background-color: #1A1A52;
    /* Fondo oscuro */
    color: white;
    /* Texto blanco */
    padding: 20px 0;
}

.footer h2,
.footer p,
.footer input,
.footer textarea {
    color: white;
}

.footer .form-control {
    margin-bottom: 10px;
}

.footer .btn {
    background-color: #A9F5E1;
    /* Fondo del botón */
    color: #1A1A52;
    /* Texto del botón */
}

.footer .btn:hover {
    background-color: #8EEDD4;
    /* Fondo del botón al pasar el ratón */
}

.nav-item {
    text-align: right;
    line-height: 34px;
    text-decoration: none;
    color: white;
    margin-right: 10px;
    font-size: 20px;
    font-family: MYRIADPRO-REGULAR;
}

.navbar {
    background-color: #53D89F;
}

.navbar-brand {
    text-align: center;
    color: white !important;
    font-size: 30px !important;
    font-family: MYRIADPRO-REGULAR
}
</style>