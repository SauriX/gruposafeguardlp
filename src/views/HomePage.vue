<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    <img src="@/assets/logos/safeguard/Logo 150x40.png" alt="Grupo Safeguard Logo" height="40"
                        class="me-2">

                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#marcas">Nuestras Marcas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#nosotros">Sobre Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <header class="text-white text-center py-5 hero-section" :style="{
            backgroundImage: 'url(' + heroBanner + ')', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '540px'
        }">
            <div class="container">
                <h1 class="display-4 mb-3" :style="{ fontFamily: 'Myriad Pro Bold, sans-serif' }">Grupo Safeguard:
                    Soluciones Integrales para Tu Bienestar y Entorno</h1>
                <p class="lead mb-4" :style="{ fontFamily: 'Myriad Pro Regular, sans-serif' }">Innovación y Compromiso
                    en Servicios Esenciales para Hogares y Empresas.</p>
                <a href="#marcas" class="btn btn-light btn-lg">Explora Nuestras Soluciones</a>
            </div>
        </header>

        <section id="marcas" class="py-5">
            <div class="container">
                <h2 class="text-center mb-5" :style="{ fontFamily: 'Myriad Pro Bold, sans-serif' }">Descubre Nuestras
                    Marcas Especializadas</h2>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    <div class="col" v-for="brand in brands" :key="brand.name">
                        <BrandCard :brand="brand" :cardColor="brand.color" />
                    </div>
                </div>
            </div>
        </section>

        <section id="nosotros" class="py-5 bg-light">
            <div class="container">
                <div class="row align-items-center gy-4">
                    <!-- Imagen -->
                    <div class="col-lg-6 text-center">
                        <img src="@/assets/banners/safeguard/500X400.png" class="img-fluid rounded shadow-sm"
                            alt="Grupo Safeguard Team">
                    </div>

                    <!-- Texto y tarjetas -->
                    <div class="col-lg-6">
                        <h2 class="mb-4" :style="{ fontFamily: 'Myriad Pro Bold, sans-serif', fontSize: '2.25rem' }">
                            Sobre Grupo Safeguard
                        </h2>
                        <p class="lead mb-4"
                            :style="{ fontFamily: 'Myriad Pro Regular, sans-serif', fontSize: '1.125rem', lineHeight: '1.6' }">
                            <strong><em><span style="color:#171717;">Grupo Safeguard</span></em></strong><em><span
                                    style="color:#171717;"> es una empresa consolidada que agrupa diversas unidades de
                                    negocio con un enfoque com&uacute;n: brindar servicios de la m&aacute;s alta calidad
                                    en la ciudad de Chetumal y sus alrededores, as&iacute; como en toda la regi&oacute;n
                                    de Quintana Roo. </span></em>
                            <em><span style="color:#171717;">Nuestra cartera de empresas incluye <strong>Anticovid, Pest
                                        Control, Lavander&iacute;a Premium, Miss Clean y Jardiner&iacute;a
                                        Gubernamental</strong>, todas ellas orientadas a satisfacer las necesidades
                                    espec&iacute;ficas de nuestros clientes, manteniendo un compromiso constante con la
                                    excelencia, la innovaci&oacute;n y el respeto por el medio ambiente.</span></em>
                        </p>
                        <div class="row g-4">
                            <div class="col-md-6">
                                <div class="card h-100 shadow-sm border-0 p-3">
                                    <div class="d-flex align-items-center mb-3">
                                        <i class="bi bi-bullseye fs-2 text-primary me-3"></i>
                                        <h3 class="card-title mb-0"
                                            :style="{ fontFamily: 'Myriad Pro Bold, sans-serif' }">Nuestra Misión</h3>
                                    </div>
                                    <p class="card-text"
                                        :style="{ fontFamily: 'Myriad Pro Regular, sans-serif', fontSize: '1rem', lineHeight: '1.5' }">
                                        Proporcionar soluciones integrales de servicios, que aborden de manera eficiente
                                        las necesidades de nuestros clientes, garantizando su bienestar y satisfacción.
                                        Nos comprometemos a ofrecer un trabajo de calidad superior, adaptado a las
                                        demandas de cada sector, utilizando tecnología avanzada y promoviendo prácticas
                                        responsables en todos nuestros procesos.
                                    </p>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card h-100 shadow-sm border-0 p-3">
                                    <div class="d-flex align-items-center mb-3">
                                        <i class="bi bi-eye fs-2 text-primary me-3"></i>
                                        <h3 class="card-title mb-0"
                                            :style="{ fontFamily: 'Myriad Pro Bold, sans-serif' }">Nuestra Visión</h3>
                                    </div>
                                    <p class="card-text"
                                        :style="{ fontFamily: 'Myriad Pro Regular, sans-serif', fontSize: '1rem', lineHeight: '1.5' }">
                                        Ser el grupo empresarial líder en Quintana Roo, reconocido por su capacidad de
                                        innovación, su enfoque en el servicio al cliente y su contribución al desarrollo
                                        sostenible de la comunidad. Aspiramos a expandir nuestras operaciones y
                                        fortalecer nuestra presencia en el mercado, creando un entorno de trabajo que
                                        fomente el crecimiento personal y profesional de nuestro equipo.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <router-link :to="'/safeguad/about'" class="btn btn-primary btn-lg">
                                Conoce Más
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <<section id="contacto" class="py-5 bg-dark text-white">
            <div class="container">
                <h2 class="text-center mb-4" :style="{ fontFamily: 'Myriad Pro Bold, sans-serif' }">
                    Contáctanos
                </h2>
                <p :style="{ fontFamily: 'Myriad Pro Regular, sans-serif' }" class="text-center mb-4">
                    ¿Tienes alguna pregunta o necesitas una cotización? Estamos aquí para ayudarte.
                </p>
                <div class="row justify-content-center align-items-start">
                    <!-- Formulario a la izquierda -->
                    <div class="col-md-7">
                        <form class="bg-white text-dark p-4 rounded-4 shadow-sm mb-4 mb-md-0">
                            <div class="mb-3">
                                <label for="name" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="name" placeholder="Tu nombre completo"
                                    required />
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label">Correo Electrónico</label>
                                <input type="email" class="form-control" id="email" placeholder="ejemplo@correo.com"
                                    required />
                            </div>

                            <div class="mb-4">
                                <label for="message" class="form-label">Mensaje</label>
                                <textarea class="form-control" id="message" rows="5"
                                    placeholder="Escribe tu mensaje aquí..." required></textarea>
                            </div>

                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary btn-lg">Enviar Mensaje</button>
                            </div>
                        </form>
                    </div>

                    <!-- Información de contacto a la derecha -->
                    <div class="col-md-5">
                        <div class="ps-md-4">


                            <p :style="{ fontFamily: 'Myriad Pro Regular, sans-serif' }">
                                Correo:
                                <a href="mailto:Gruposafeguard@gmail.com" class="text-white text-decoration-underline">
                                    Gruposafeguard@gmail.com
                                </a><br />
                                Dirección: Chetumal, Quintana Roo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>



            <footer class="bg-light text-center text-lg-start py-3">
                <div class="container text-center">
                    <p class="mb-0" :style="{ fontFamily: 'Myriad Pro Regular, sans-serif' }">&copy; {{ currentYear }}
                        Grupo
                        Safeguard. Todos los derechos reservados.</p>
                    <p class="mb-0" :style="{ fontFamily: 'Myriad Pro Regular, sans-serif' }"><a href="#"
                            class="text-decoration-none text-muted">Aviso de Privacidad</a> | <a href="#"
                            class="text-decoration-none text-muted">Términos y Condiciones</a></p>
                </div>
            </footer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BrandCard from '@/components/BrandCard.vue';
import heroBanner from '@/assets/banners/safeguard/1920X600.png';
interface Brand {
    name: string;
    slug: string;
    description: string;
    logo?: string;
    color?: string; // Nuevo prop para el color de la tarjeta
}

const currentYear = ref(new Date().getFullYear());

const primaryColor = 'rgb(204, 12, 42)'; // Rojo principal de Safeguard

const brands: Brand[] = [
    {
        name: 'Lavandería Premium Ecológica',
        slug: 'lavanderia-premium-ecologica',
        description: 'Lavado de ropa y textiles con procesos ecológicos.',
        logo: require('@/assets/productos/safeguard/lavanderia.png'),
        color: 'rgb(16, 84, 128)', // Azul oscuro de Lavandería Premium Ecológica
    },
    {
        name: 'Pest Control Total',
        slug: 'pest-control-total',
        description: 'Control de plagas integral y amigable con el ambiente.',
        logo: require('@/assets/productos/safeguard/pest.png'),
        color: 'rgb(9, 79, 41)', // Verde lima de Pest Control Total
    },
    {
        name: 'Miss Clean',
        slug: 'miss-clean',
        description: 'Servicios de limpieza profunda para hogares y oficinas.',
        logo: require('@/assets/productos/safeguard/mssclean.png'),
        color: 'rgb(221, 120, 144)', // Verde claro de Miss Clean
    },
    {
        name: 'Jardineria Gubernamental',
        slug: 'Jardineria-Gubernamental',
        description: '',
        logo: require('@/assets/productos/safeguard/jardineria.png'),
        color: '#3D432C', // Azul oscuro de Lavandería Premium Ecológica
    },
    {
        name: 'Anticovid',
        slug: 'anticovid',
        description: 'Soluciones profesionales de desinfección y sanitización.',
        logo: require('@/assets/productos/safeguard/anticovid.png'),
        color: '#382968', // Rojo de Anticovid
    },



    {
        name: 'Castelvania',
        slug: 'Castelvania',
        description: 'Eventos Tienda y Camping.',
        logo: require('@/assets/productos/safeguard/castelvania.png'),
        color: '#CB9B48', // Azul oscuro de Lavandería Premium Ecológica
    },
    {
        name: 'ExtinFire',
        slug: 'ExtinFire',
        description: 'Mantenimiento y venta de extintores.',
        logo: require('@/assets/productos/safeguard/extinfire.png'),
        color: '#CE1D43', // Azul oscuro de Lavandería Premium Ecológica
    },

    {
        name: 'Ric-H2O',
        slug: 'Ric-H2O',
        description: '!Vive bien,bebe rico¡',
        logo: require('@/assets/productos/safeguard/rich2o.png'),
        color: '#B4E0E5', // Azul oscuro de Lavandería Premium Ecológica
    },
];


</script>

<style scoped>
/* Estilos globales para la fuente principal */
/*@font-face {
    font-family: 'Myriad Pro Bold';
    src: url('@/assets/fonts/MyriadPro-Bold.woff2') format('woff2'),
        url('@/assets/fonts/MyriadPro-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Myriad Pro Regular';
    src: url('@/assets/fonts/MyriadPro-Regular.woff2') format('woff2'),
        url('@/assets/fonts/MyriadPro-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}*/

.bg-primary {
    background-color: rgb(204, 12, 42) !important;
    /* Rojo principal de Safeguard */
}

.btn-primary {
    background-color: rgb(204, 12, 42) !important;
    border-color: rgb(204, 12, 42) !important;
}

.btn-light {
    color: rgb(204, 12, 42) !important;
}

.hero-section {
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>