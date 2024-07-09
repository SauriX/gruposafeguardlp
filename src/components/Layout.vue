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