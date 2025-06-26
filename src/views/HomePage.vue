<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    <img src="https://dummyimage.com/150x40/000/fff" alt="Grupo Safeguard Logo" height="40"
                        class="me-2">
                    Grupo Safeguard
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

        <header class="text-white text-center py-5 hero-section"
            :style="{ backgroundImage: 'url(' + getAssetUrl('https://dummyimage.com/1920x600/000/fff') + ')', backgroundColor: primaryColor, backgroundSize: 'cover', backgroundPosition: 'center' }">
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
                        <img src="https://dummyimage.com/500x400.png/09f/fff" class="img-fluid rounded shadow-sm"
                            alt="Grupo Safeguard Team">
                    </div>

                    <!-- Texto y tarjetas -->
                    <div class="col-lg-6">
                        <h2 class="mb-4" :style="{ fontFamily: 'Myriad Pro Bold, sans-serif', fontSize: '2.25rem' }">
                            Sobre Grupo Safeguard
                        </h2>
                        <p class="lead mb-4"
                            :style="{ fontFamily: 'Myriad Pro Regular, sans-serif', fontSize: '1.125rem', lineHeight: '1.6' }">
                            En Grupo Safeguard nos dedicamos a brindar servicios de limpieza, desinfección y fumigación
                            de alta calidad,
                            con un compromiso firme hacia el cuidado del medio ambiente y el desarrollo de nuestros
                            colaboradores.<br /><br />
                            Fundados en 2020, hemos crecido integrando divisiones especializadas que ofrecen soluciones
                            integrales para hogares y empresas.
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
                                        Proporcionar servicios eficientes y de alta calidad que aseguren ambientes
                                        saludables y seguros,
                                        siendo líderes en innovación y responsables con el planeta, apoyando el
                                        crecimiento de nuestro equipo.
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
                                        Ser el referente líder en México en servicios esenciales para hogares y
                                        empresas,
                                        reconocidos por nuestra excelencia, impacto social y adaptación constante al
                                        mercado.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <button class="btn btn-primary btn-lg">Conoce Más</button>
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
                <p  :style="{ fontFamily: 'Myriad Pro Regular, sans-serif' }" class="text-center mb-4">
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
        name: 'Anticovid',
        slug: 'anticovid',
        description: 'Soluciones profesionales de desinfección y sanitización.',
        logo: 'https://dummyimage.com/600x400/007bff/ffffff',
        color: 'rgb(167, 44, 39)', // Rojo de Anticovid
    },
    {
        name: 'Pest Control Total',
        slug: 'pest-control-total',
        description: 'Control de plagas integral y amigable con el ambiente.',
        logo: 'https://dummyimage.com/600x400/007bff/ffffff',
        color: 'rgb(196, 224, 62)', // Verde lima de Pest Control Total
    },
    {
        name: 'Miss Clean',
        slug: 'miss-clean',
        description: 'Servicios de limpieza profunda para hogares y oficinas.',
        logo: 'https://dummyimage.com/600x400/007bff/ffffff',
        color: 'rgb(165, 189, 119)', // Verde claro de Miss Clean
    },
    {
        name: 'Lavandería Premium Ecológica',
        slug: 'lavanderia-premium-ecologica',
        description: 'Lavado de ropa y textiles con procesos ecológicos.',
        logo: 'https://dummyimage.com/600x400/007bff/ffffff',
        color: 'rgb(16, 84, 128)', // Azul oscuro de Lavandería Premium Ecológica
    },
];

const getAssetUrl = (imageFileName: string) => {
    // Si la cadena ya es una URL (ej. empieza con 'https://'), la devuelve directamente
    if (imageFileName.startsWith('https://')) {
        return imageFileName;
    }
    // De lo contrario, asume que es un activo local y construye la URL
    return new URL(`../assets/images/${imageFileName}`, import.meta.url).href;
};
</script>

<style scoped>
/* Estilos globales para la fuente principal */
@font-face {
    font-family: 'Myriad Pro Bold';
    /*     src: url('@/assets/fonts/MyriadPro-Bold.woff2') format('woff2'),
        url('@/assets/fonts/MyriadPro-Bold.woff') format('woff'); */
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Myriad Pro Regular';
    /*     src: url('@/assets/fonts/MyriadPro-Regular.woff2') format('woff2'),
        url('@/assets/fonts/MyriadPro-Regular.woff') format('woff'); */
    font-weight: normal;
    font-style: normal;
}

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