<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark  sticky-top bg-lav">
        <div class="container">
            <a class="navbar-brand" href="#">Pest</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Inicio</a>
                    </li>
                    <li class="nav-item" v-if="false">
                        <a class="nav-link" href="#servi">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">Sobre Nosotros</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <div class="hero">

    </div>

    <!-- About Section -->
    <div class="container my-5" id="about">
        <div class="row">
            <div class="col-md-6">
                <img src="@/assets/img/pest/fumi.png" alt="Calidad Premium" class="img-fluid">
            </div>
            <div class="col-md-6 d-flex flex-column justify-content-center">
                <h2>Misión y visión</h2>
                <p>
                    <span> misión de Pest Control Total como empresa de fumigación de plagas y control de animales
                        ferales es proporcionar servicios de alta calidad y efectividad a nuestros clientes, protegiendo
                        sus
                        hogares, negocios y comunidades de las molestias e impactos negativos causados por las plagas
                        y los animales ferales. Nos esforzamos por ofrecer soluciones seguras, eficaces y responsables
                        con
                        el medio ambiente, garantizando la satisfacción y tranquilidad de nuestros clientes
                    </span>

                    <br>
                    <span> Nuestra visión como empresa es convertirnos en líderes en el mercado de fumigación de plagas
                        y control de animales ferales, reconocidos por nuestra calidad, confiabilidad y compromiso con
                        la
                        protección del medio ambiente. Buscamos ser la empresa de referencia en el sector, gracias a
                        nuestro equipo altamente capacitado, nuestra tecnología de última generación y nuestro
                        enfoque en la satisfacción del cliente</span>
                </p>
                <a href="https://api.whatsapp.com/send?phone=5219831392289&text=Buen%20d%C3%ADa%2C%20me%20interesa%20el%20servicio%20de%20recolecci%C3%B3n%20y%20lavado%20para%20negocio."
                    target="_blank" class="btn btn-primary">
                    ¡Vamos a chatear!
                </a>
            </div>
        </div>
    </div>

    <!-- Testimonials Section -->
    <div class="testimonials text-center" v-if="false">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <blockquote class="blockquote">
                        <p>"Best laundry service in Chetumal! La mejor lavandería de Chetumal!"</p>
                        <footer class="blockquote-footer">Alejandro P.</footer>
                    </blockquote>
                </div>
                <div class="col-md-4">
                    <blockquote class="blockquote">
                        <p>"Hasta ahorita es la mejor lavandería que he encontrado en Chetumal y el plus es que aceptan
                            tarjetas!"</p>
                        <footer class="blockquote-footer">Victor D.</footer>
                    </blockquote>
                </div>
                <div class="col-md-4">
                    <blockquote class="blockquote">
                        <p>"Súper rápido en 1 día todo estaba limpio y personal muy agradable!"</p>
                        <footer class="blockquote-footer">Javier V.</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>

    <!-- Services Section -->
    <div class="container my-5 " id="servi" v-if="true">
        <h2 class="text-center">Nuestros Servicios</h2>
        <div class="row text-center services div-con-scroll">
            <div class="d-flex justify-content-center align-items-center mt-3 col-md-3" v-for="service in services"
                :key="service.alt">
                <div class="card shadow-lg" style="width: 22rem;">
                    <!-- Image Placeholder -->
                    <div class="div-img-top">
                        <img :src="service.img" class="img-fluid" :alt="service.alt">
                    </div>

                    <div class="card-body text-center">
                        <!-- Button -->
                        <div class="mt-4">
                            <a href="https://api.whatsapp.com/send?phone=5219834541073"
                                target="_blank" class="btn">
                                <div class="btn btn-primary btn-lg"
                                    style="background: linear-gradient(90deg, #20c997, #0d6efd); border:none;">

                                    Solicitar el Servicio
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Branches Section -->
    <div class="container my-5" v-if="false">
        <h2 class="text-center">Sucursales</h2>
        <div class="row text-center">
            <!-- class="col-md-6" -->
            <div>
                <br>
                <h5>Suc. Erick Paolo</h5>
                <p>Av. Erick Paolo entre Av. Magisterio y Miguel Alemán</p>
                <p>Tel: 9983-454-1073</p>
                <iframe v-if="false"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0870457985434!2d-88.31167992420299!3d18.524968169038765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5ba4a363940a1b%3A0xf33826ef64921713!2sLavanderia%20Premium!5e0!3m2!1ses-419!2smx!4v1720576627889!5m2!1ses-419!2smx"
                    width="600" height="450" style="border:0;" allowfullscreen="false" loading="lazy" class="branch-map"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="col-md-6" v-if="false">
                <h5>Suc. Américas I</h5>
                <p>Av. Luis Manuel Sevilla entre Guyana y Paraguay</p>
                <p>Tel: 983 139 22 89</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30260.753199012815!2d-88.30733235303559!3d18.547233611297514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5ba5e7b8a4f265%3A0xa537cc7a01434944!2sLavanderia%20Premium%20Sucursal!5e0!3m2!1ses-419!2smx!4v1726331091787!5m2!1ses-419!2smx"
                    width="600" height="450" style="border:0;" allowfullscreen="false" loading="lazy" class="branch-map"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>

    <!-- Clients Section -->
    <div class="container my-5 text-center" v-if="false">
        <h2>Algunos de nuestros Clientes</h2>
        <div class="row">
            <div class="col-md-2" v-for="client in clients" :key="client.alt">
                <img :src="client.img" :alt="client.alt">
            </div>
        </div>
        <div class="text-center mt-4">
            <a href="https://api.whatsapp.com/send?phone=5219831392289&text=Buen%20d%C3%ADa%2C%20me%20interesa%20el%20servicio%20de%20recolecci%C3%B3n%20y%20lavado%20para%20negocio."
                target="_blank" class="btn btn-primary">Solicita una Cotización</a>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Iservicios } from '@/app/model/servicios';
import { ref, Ref } from 'vue';

const services: Ref<Iservicios[]> = ref([
    {
        img: require('@/assets/img/pest/servicios/servicio (1).jpg'),
        alt: 'servicio1'
    },
    {
        img: require('@/assets/img/pest/servicios/servicio (2).jpg'),
        alt: 'servicio2'
    },
    {
        img: require('@/assets/img/pest/servicios/servicio (3).jpg'),
        alt: 'servicio3'
    },
    {
        img: require('@/assets/img/pest/servicios/servicio (4).jpg'),
        alt: 'servicio4'
    },
    {
        img: require('@/assets/img/pest/servicios/servicio (5).jpg'),
        alt: 'servicio5'
    },
    {
        img: require('@/assets/img/pest/servicios/servicio (6).jpg'),
        alt: 'servicio6'
    },
    {
        img: require('@/assets/img/pest/servicios/servicio (10).jpg'),
        alt: 'servicio10'
    },
    {
        img: require('@/assets/img/pest/servicios/servicio (11).jpg'),
        alt: 'servicio11'
    },
    {
        img: require('@/assets/img/pest/servicios/servicio (12).jpg'),
        alt: 'servicio12'
    },
    {
        img: require('@/assets/img/pest/servicios/servicio (13).jpg'),
        alt: 'servicio13'
    },
    {
        img: require('@/assets/img/pest/servicios/servicio (14).jpg'),
        alt: 'servicio14'
    },
    {
        img: require('@/assets/img/pest/servicios/servicio (15).jpg'),
        alt: 'servicio15'
    },
    {
        img: require('@/assets/img/pest/servicios/servicio (16).jpg'),
        alt: 'servicio16'
    },
    {
        img: require('@/assets/img/pest/servicios/servicio (17).jpg'),
        alt: 'servicio17'
    },
    {
        img: require('@/assets/img/pest/servicios/servicio (18).jpg'),
        alt: 'servicio18'
    },
    {
        img: require('@/assets/img/pest/servicios/servicio (19).jpg'),
        alt: 'servicio19'
    },
    {
        img: require('@/assets/img/pest/servicios/servicio (20).jpg'),
        alt: 'servicio20'
    }
]);

const clients: Ref<Iservicios[]> = ref([
    /*     {
            img: require('../assets/img/pest/clientes/clientes (1).jpg'),
            alt: 'cliente 1'
        },
        {
            img: require('../assets/img/pest/clientes/clientes (2).jpg'),
            alt: 'cliente 2'
        },
        {
            img: require('../assets/img/pest/clientes/clientes (3).jpg'),
            alt: 'cliente 3'
        },
        {
            img: require('../assets/img/pest/clientes/clientes (4).jpg'),
            alt: 'cliente 4'
        },
        {
            img: require('../assets/img/pest/clientes/clientes (5).jpg'),
            alt: 'cliente 5'
        }, */
]);
</script>
<style lang="css" scoped>
.hero {
    /* https://placehold.co/1920x600 */
    background: url('@/assets/img/pest/pestb.png') no-repeat center center;
    background-size: cover;
    color: white;
    text-align: center;
    padding: 140px 0;

}

.services img {
    max-width: 100%;
}

.testimonials {
    background-color: #2c3e50;
    color: white;
    padding: 50px 0;
}

.branch-map {
    width: 100%;
    height: 200px;
    border: none;
}

footer {
    background-color: #2c3e50;
    color: white;
    padding: 20px 0;
}

.div-con-scroll {
    overflow-y: auto;
    /* o scroll */
    height: 855px;
    /* agrega una altura al div */
}

.div-con-scroll::-webkit-scrollbar {
    width: 10px;
    /* ancho del scroll */
    background-color: #f5f5f5;
    /* color de fondo del scroll */
}

.div-con-scroll::-webkit-scrollbar-thumb {
    background-color: #ccc;
    /* color del scroll */
    border-radius: 10px;
    /* borde redondeado del scroll */
}

.div-con-scroll::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
    /* color del scroll al pasar el mouse */
}

.bg-lav {
    background-color: #002E5D;
}
</style>