<template>
    <div v-if="brandData">
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    <img src="https://dummyimage.com/150x40/000/fff" alt="Grupo Safeguard Logo" height="40"
                        class="me-2">
                    Grupo Safeguard
                </router-link>
                <span class="navbar-text ms-3 me-auto">/ {{ brandData.name }}</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#' + brandData.slug + 'Navbar'" aria-controls="childNavbar" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" :id="brandData.slug + 'Navbar'">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#servicios">Nuestros Servicios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#nosotros">Acerca de Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <header class="text-white text-center py-5 hero-section"
            :style="{ backgroundImage: 'url(' + getAssetUrl(brandData.banner) + ')', backgroundColor: brandData.color || '#0d6efd', backgroundSize: 'cover', backgroundPosition: 'center' }">
            <div class="container">
                <h1 class="display-4 mb-3" :style="{ fontFamily: brandData.fontPrincipal + ', sans-serif' }">{{
                    brandData.heroTitle }}</h1>
                <p class="lead mb-4" :style="{ fontFamily: brandData.fontText + ', sans-serif' }">{{
                    brandData.heroSubtitle }}</p>
                <a href="#contacto" class="btn btn-light btn-lg">Solicita una Cotización</a>
            </div>
        </header>
        <section id="servicios" class="py-5">
            <div class="container">
                <h2 class="text-center mb-5" :style="{ fontFamily: brandData.fontPrincipal + ', sans-serif' }">
                    Nuestros Productos y Servicios
                </h2>

                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    <div class="col px-1" v-for="product in brandData.products" :key="product.title">
                        <ProductCard :product="product" :fontPrincipal="brandData.fontPrincipal"
                            :fontText="brandData.fontText" :getAssetUrl="getAssetUrl" />
                    </div>
                </div>

                <div v-if="brandData.testimonials && brandData.testimonials.length" class="mt-5">
                    <h3 class="text-center mb-4" :style="{ fontFamily: brandData.fontPrincipal + ', sans-serif' }">
                        Nuestros Clientes Satisfechos
                    </h3>
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div v-for="(testimonial, index) in brandData.testimonials" :key="index" class="col">
                            <TestimonialCard :testimonial="testimonial" :getAssetUrl="getAssetUrl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="nosotros" class="py-5 bg-light">
            <div class="container">
                <div class="row align-items-center gy-4">
                    <!-- Imagen -->
                    <div class="col-lg-5 text-center">
                        <img :src="getAssetUrl(brandData.logo)" :alt="`Equipo de ${brandData.name}`"
                            class="img-fluid rounded shadow-sm" style="max-height: 300px; object-fit: cover;" />
                    </div>

                    <!-- Texto -->
                    <div class="col-lg-7">
                        <h2 class="mb-4"
                            :style="{ fontFamily: brandData.fontPrincipal + ', sans-serif', fontSize: '2rem' }">
                            Acerca de {{ brandData.name }}
                        </h2>
                        <p class="lead mb-4"
                            :style="{ fontFamily: brandData.fontText + ', sans-serif', fontSize: '1.125rem', lineHeight: '1.6' }">
                            {{ brandData.aboutText }}
                        </p>

                        <div class="row g-4">
                            <div class="col-md-6">
                                <div class="card h-100 shadow-sm border-0 p-3">
                                    <div class="d-flex align-items-center mb-3">
                                        <i class="bi bi-bullseye fs-2 text-primary me-3"></i>
                                        <h3 class="card-title mb-0"
                                            :style="{ fontFamily: brandData.fontPrincipal + ', sans-serif' }">
                                            Nuestra Misión
                                        </h3>
                                    </div>
                                    <p class="card-text"
                                        :style="{ fontFamily: brandData.fontText + ', sans-serif', fontSize: '1rem', lineHeight: '1.5' }">
                                        {{ brandData.mission }}
                                    </p>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card h-100 shadow-sm border-0 p-3">
                                    <div class="d-flex align-items-center mb-3">
                                        <i class="bi bi-eye fs-2 text-primary me-3"></i>
                                        <h3 class="card-title mb-0"
                                            :style="{ fontFamily: brandData.fontPrincipal + ', sans-serif' }">
                                            Nuestra Visión
                                        </h3>
                                    </div>
                                    <p class="card-text"
                                        :style="{ fontFamily: brandData.fontText + ', sans-serif', fontSize: '1rem', lineHeight: '1.5' }">
                                        {{ brandData.vision }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section id="contacto" class="py-5" :style="{
            backgroundColor: brandData.color || '#0d6efd',
            color: 'white',
            fontFamily: brandData.fontText + ', sans-serif'
        }">
            <div class="container">
                <h2 class="text-center mb-5 fw-bold"
                    :style="{ fontFamily: brandData.fontPrincipal + ', sans-serif', letterSpacing: '1.2px' }">
                    Contáctanos para <span :style="nameTextStyle">{{ brandData.name }}</span>
                </h2>

                <div class="row justify-content-center align-items-start">
                    <!-- Formulario a la izquierda -->
                    <div class="col-md-7 col-lg-6 mb-4 mb-md-0 order-md-1 order-1">
                        <form class="bg-white p-4 rounded-4 shadow" @submit.prevent="submitForm">
                            <div class="mb-3">
                                <label for="contactName" class="form-label fw-semibold text-secondary">Nombre</label>
                                <input type="text" class="form-control" id="contactName"
                                    placeholder="Tu nombre completo" required />
                            </div>

                            <div class="mb-3">
                                <label for="contactEmail" class="form-label fw-semibold text-secondary">Correo
                                    Electrónico</label>
                                <input type="email" class="form-control" id="contactEmail"
                                    placeholder="ejemplo@correo.com" required />
                            </div>

                            <div class="mb-4">
                                <label for="contactMessage"
                                    class="form-label fw-semibold text-secondary">Mensaje</label>
                                <textarea class="form-control" id="contactMessage" rows="5"
                                    placeholder="Escribe tu mensaje aquí..." required></textarea>
                            </div>

                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary btn-lg fw-bold"
                                    style="transition: background-color 0.3s ease" @mouseover="hover = true"
                                    @mouseleave="hover = false"
                                    :style="{ backgroundColor: hover ? '#0047b3' : brandData.color || '#0d6efd' }">
                                    Enviar Consulta
                                </button>
                            </div>
                        </form>
                    </div>

                    <!-- Información de contacto a la derecha -->
                    <div class="col-md-5 col-lg-4 order-md-2 order-2">
                        <div class="text-white">
                            <h5 class="mb-4 fw-bold">Información de contacto</h5>

                            <ul class="list-unstyled fs-6">
                                <li v-if="brandData.contact.phone" class="mb-3 d-flex align-items-center">
                                    <i class="bi bi-telephone-fill me-2"></i>
                                    Teléfono: <strong class="ms-1">{{ brandData.contact.phone }}</strong>
                                </li>

                                <li v-if="brandData.contact.phone2" class="mb-3 d-flex align-items-center">
                                    <i class="bi bi-phone-fill me-2"></i>
                                    Teléfono 2: <strong class="ms-1">{{ brandData.contact.phone2 }}</strong>
                                </li>

                                <li v-if="brandData.contact.email" class="mb-3 d-flex align-items-center">
                                    <i class="bi bi-envelope-fill me-2"></i>
                                    Correo:
                                    <a :href="'mailto:' + brandData.contact.email"
                                        class="text-white text-decoration-underline ms-1">{{ brandData.contact.email
                                        }}</a>
                                </li>

                                <li v-if="brandData.contact.address" class="mb-3 d-flex align-items-center">
                                    <i class="bi bi-geo-alt-fill me-2"></i>
                                    Dirección: {{ brandData.contact.address }}
                                </li>

                                <li v-if="brandData.contact.address2" class="mb-3 d-flex align-items-center">
                                    <i class="bi bi-geo-alt-fill me-2"></i>
                                    Dirección 2: {{ brandData.contact.address2 }}
                                </li>

                                <li v-if="brandData.contact.facebook" class="mb-3 d-flex align-items-center">
                                    <i class="bi bi-facebook me-2"></i>
                                    Facebook:
                                    <a :href="brandData.contact.facebook" target="_blank" rel="noopener"
                                        class="text-white text-decoration-underline ms-1">{{ brandData.name }}</a>
                                </li>

                                <li v-if="brandData.contact.website" class="d-flex align-items-center">
                                    <i class="bi bi-globe2 me-2"></i>
                                    Página web:
                                    <a :href="brandData.contact.website" target="_blank" rel="noopener"
                                        class="text-white text-decoration-underline ms-1">{{ brandData.contact.website
                                        }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="bg-light text-center text-lg-start py-3">
            <div class="container text-center">
                <p class="mb-0" :style="{ fontFamily: brandData.fontText + ', sans-serif' }">&copy; {{ currentYear }} {{
                    brandData.name }}. Parte de Grupo Safeguard.</p>
                <p class="mb-0" :style="{ fontFamily: brandData.fontText + ', sans-serif' }"><a href="#"
                        class="text-decoration-none text-muted">Aviso de Privacidad</a> | <a href="#"
                        class="text-decoration-none text-muted">Términos y Condiciones</a></p>
            </div>
        </footer>
    </div>
    <div v-else class="container py-5 text-center">
        <h2>Marca no encontrada</h2>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <router-link to="/" class="btn btn-primary">Volver a Inicio</router-link>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard.vue'
// Para usar Bootstrap Icons, asegúrate de haberlo incluido en public/index.html:
// <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
function submitForm() {
    alert('Gracias por tu consulta. Nos pondremos en contacto pronto.')
}
interface Product {
    title: string;
    description: string;
    icon?: string; // Nombre de la clase de icono (ej. 'bi-clipboard-check')
    image?: string; // Ruta de la imagen referencial del servicio
    price?: string; // Precio del servicio
}

interface ContactInfo {
    email?: string;
    phone?: string;
    phone2?: string;
    address?: string;
    address2?: string;
    facebook?: string;
    website?: string;
}

interface Testimonial {
    company: string;
    text: string;
    logo?: string;
}

interface BrandDetail {
    name: string;
    slug: string;
    heroTitle: string;
    heroSubtitle: string;
    aboutText: string;
    mission: string;
    vision: string;
    products: Product[];
    contact: ContactInfo;
    color?: string; // Color para la sección hero y contacto
    fontPrincipal: string;
    fontText: string;
    banner: string; // Ruta al banner individual de la marca
    testimonials?: Testimonial[]; // Clientes que han contratado los servicios
    logo: string;
}
function getContrastTextColor(rgbColor: string): string {
    // Convertir rgb(a) a componentes
    const rgbMatch = rgbColor.match(/\d+/g)
    if (!rgbMatch || rgbMatch.length < 3) return 'white'

    const r = parseInt(rgbMatch[0]) / 255
    const g = parseInt(rgbMatch[1]) / 255
    const b = parseInt(rgbMatch[2]) / 255

    // Función de corrección gamma
    const lum = (c: number) =>
        c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)

    const luminance = 0.2126 * lum(r) + 0.7152 * lum(g) + 0.0722 * lum(b)

    // Si el contraste con blanco es mejor, usar blanco, si no, usar negro
    return luminance > 0.179 ? '#111111' : '#ffffff'
}

const nameTextStyle = computed(() => ({
    color: getContrastTextColor(brandData.color || 'rgb(13, 110, 253)'),
    fontWeight: '600'
}))

const route = useRoute();
const brandData = ref<BrandDetail | null>(null);
const currentYear = ref(new Date().getFullYear());

const getAssetUrl = (imageFileName: string) => {

    // Si la cadena ya es una URL (ej. empieza con 'https://'), la devuelve directamente
    if (imageFileName.startsWith('https://')) {

        return imageFileName;
    }

    // De lo contrario, asume que es un activo local y construye la URL
    return new URL(`../assets/images/${imageFileName}`, import.meta.url).href;
};
// Datos reales de las marcas hijas extraídos del PDF
const allBrandDetails: BrandDetail[] = [
    {
        name: 'Anticovid',
        slug: 'anticovid',
        heroTitle: 'Desinfección Profunda para Espacios Seguros',
        heroSubtitle: 'Protegiendo tu salud y la de los tuyos con tecnología de vanguardia.',
        aboutText: 'Anticovid nace para dar una solución a la pandemia iniciada en el año 2020 brindando el servicio de desinfección total, eliminando a todo tipo de virus, bacterias y hongos, incluido el Covid-19, mediante el uso de nuestra tecnología de vanguardia en termonebulización, que a través de la formación de una densa neblina, logra penetrar a lugares inaccesibles dando como resultado una desinfección efectiva. ',
        mission: 'En AntiCovid, nuestra misión es ofrecer soluciones eficaces y de alta calidad para la desinfección contra el Covid-19 en hogares, empresas y comunidades.  Nos esforzamos por brindar servicios confiables y seguros, utilizando productos químicos biodegradables y las últimas técnicas de limpieza y desinfección, para asegurar la salud y seguridad de nuestros clientes y la comunidad en general. ',
        vision: 'Nuestra visión en AntiCovid es ser líderes en desinfección contra el Covid-19, proporcionando servicios innovadores y personalizados que satisfagan las necesidades de nuestros clientes.  Nos comprometemos a mantenernos actualizados con los últimos avances tecnológicos y científicos, y a ser responsables con el medio ambiente, utilizando prácticas sostenibles en todo momento.  Además, aspiramos a ser una empresa socialmente responsable, que contribuya al bienestar de la sociedad y fomente un cambio positivo en el mundo. ',
        products: [
            { title: 'Desinfección Total', description: 'Eliminación de todo tipo de virus, bacterias y hongos, incluido el Covid-19, mediante termonebulización avanzada. ', price: 53, image: 'https://dummyimage.com/400x300/666/fff' },
            { title: 'Tecnología de Vanguardia', description: 'Uso de termonebulización que logra penetrar a lugares inaccesibles para una desinfección efectiva. ', price: 53, image: 'https://dummyimage.com/400x300/666/fff' },
            // Aquí se agregarían más servicios con sus imágenes y precios si los proporcionas
        ],
        contact: {
            email: 'Gruposafeguard@gmail.com',
            phone: '9834540025',
            address: 'And 11 #56, Col. Infonavit Fidel Velazquez, Chetumal Quintana Roo, México.',
            facebook: 'https://www.facebook.com/AntiCovidQR' // Enlace de ejemplo, el documento solo da el nombre 
        },
        color: 'rgb(167, 44, 39)', // Rojo principal de Anticovid 
        fontPrincipal: 'Arial Bold',
        fontText: 'Arial',
        banner: 'https://dummyimage.com/1200x400/000/fff', // Placeholder para el banner de Anticovid,
        logo: 'https://dummyimage.com/500x400/09f/fff',
    },
    {
        name: 'Pest Control Total',
        slug: 'pest-control-total',
        heroTitle: 'Control de Plagas Efectivo y Sostenible',
        heroSubtitle: 'Eliminamos invasores, protegemos tu hogar y el medio ambiente.',
        aboutText: 'Pest Control Total es una empresa de fumigación ubicada en Chetumal, Quintana Roo, dedicada al control y prevención de plagas en hogares, negocios y comunidades.  Contamos con profesionales capacitados y equipos de última generación para garantizar la eficacia y seguridad. ',
        mission: 'La misión de Pest Control Total es proporcionar servicios de alta calidad y efectividad, protegiendo hogares, negocios y comunidades de las molestias causadas por plagas y animales ferales.  Nos esforzamos por ofrecer soluciones seguras, eficaces y responsables con el medio ambiente, garantizando la satisfacción y tranquilidad de nuestros clientes. ',
        vision: 'Nuestra visión es convertirnos en líderes en el mercado de fumigación de plagas y control de animales ferales, reconocidos por nuestra calidad, confiabilidad y compromiso con la protección del medio ambiente.  Buscamos ser la empresa de referencia, gracias a nuestro equipo, tecnología y enfoque en la satisfacción del cliente. ',
        products: [
            { title: 'Control de Plagas Comunes', description: 'Incluye cucarachas, hormigas, arañas, termitas, chinches y roedores. ', price: 53, image: 'https://dummyimage.com/400x300/666/fff' },
            { title: 'Control de Animales Ferales', description: 'Manejo de perros, murciélagos, iguanas y serpientes. ', price: 53, image: 'https://dummyimage.com/400x300/666/fff' },
            { title: 'Inspección y Evaluación', description: 'Servicios de inspección y evaluación de riesgos de plagas. ', price: 53, image: 'https://dummyimage.com/400x300/666/fff' },
            // Aquí se agregarían más servicios con sus imágenes y precios si los proporcionas
        ],
        contact: {
            email: 'Pestcontrolcaribe@gmail.com',
            phone: '9834541073',
            address: 'And 11 #56, Col. Infonavit Fidel Velazquez, Chetumal Quintana Roo, México.',
            facebook: 'https://www.facebook.com/PestControlTotal' // Enlace de ejemplo, el documento solo da el nombre 
        },
        color: 'rgb(196, 224, 62)', // Verde lima principal de Pest Control 
        fontPrincipal: 'FONTSPRING DEMO', // Intervogue Alt Bold Regular 
        fontText: 'FONTSPRING DEMO', // Intervogue Alt Bold Regular 
        banner: 'https://dummyimage.com/1200x400/000/fff', // Placeholder para el banner de Anticovid,
        logo: 'https://dummyimage.com/500x400/09f/fff',
    },
    {
        name: 'Miss Clean',
        slug: 'miss-clean',
        heroTitle: 'Limpieza Profesional al Detalle',
        heroSubtitle: 'Transformando tus espacios con un toque de frescura y perfección.',
        aboutText: 'Somos una empresa 100% mexicana fundada en Quintana Roo, con amplia experiencia en saneamiento ambiental, proporcionando servicios de limpieza en diversos sectores: comercial, industrial, corporativo y residencial.  Operamos bajo las normas más estrictas de calidad y contamos con un equipo profesional enfocado en la vocación de servicio.  Estamos comprometidos con el medio ambiente, usando productos biodegradables que limpian y desinfectan, eliminando hongos, virus y bacterias. ',
        mission: 'La misión de Miss Clean es brindar una solución de limpieza y desinfección integral, rápida y efectiva, con el objetivo de mejorar la calidad de vida de las personas y garantizar la salud y seguridad de los ambientes.  Nos enfocamos en brindar un servicio personalizado y de calidad, con una atención al cliente excepcional y en la satisfacción del cliente. ',
        vision: 'La visión de Miss Clean es convertirse en la empresa líder en limpieza y desinfección de hogares y negocios en Chetumal, ofreciendo servicios innovadores y eficientes que mejoren la calidad de vida de las personas y contribuyan a un entorno más saludable.  Buscamos expandirnos a nuevas ciudades y regiones, ayudando a más personas a mantener sus hogares y negocios limpios y saludables. ',
        products: [
            { title: 'Limpieza Comercial', description: 'Servicios para sectores industrial, corporativo y comercial. ', price: 53, image: 'https://dummyimage.com/400x300/666/fff' },
            { title: 'Limpieza Residencial', description: 'Limpieza profunda y mantenimiento para hogares. ', price: 53, image: 'https://dummyimage.com/400x300/666/fff' },
            { title: 'Productos Biodegradables', description: 'Uso de productos de vanguardia que limpian, desinfectan y son biodegradables. ', price: 53, image: 'https://dummyimage.com/400x300/666/fff' },
            // Aquí se agregarían más servicios con sus imágenes y precios si los proporcionas
        ],
        contact: {
            phone: '983130910',
            address: 'Chetumal Quintana Roo, México.',
            // Correo y redes sociales no especificados en el documento
        },
        color: 'rgb(165, 189, 119)', // Verde claro principal de Miss Clean 
        fontPrincipal: 'Poppins Medium',
        fontText: 'Poppins Regular',
        banner: 'https://dummyimage.com/1200x400/000/fff', // Placeholder para el banner de Anticovid,
        logo: 'https://dummyimage.com/500x400/09f/fff',
    },
    {
        name: 'Lavandería Premium Ecológica',
        slug: 'lavanderia-premium-ecologica',
        heroTitle: 'Cuidado de Ropa Sostenible y de Calidad Superior',
        heroSubtitle: 'Tus prendas impecables con respeto por el planeta.',
        aboutText: 'Lavandería Premium Ecológica nació en 2016 con la idea de brindar un servicio de alta calidad en limpieza, restauración y desinfección de prendas.  Nuestro personal está altamente capacitado y calificado para un servicio extraordinario con los más altos estándares.  Contamos con más de 500 clientes frecuentes en Chetumal y atendemos a 15 hoteles en Chetumal, Xul-Ha, Bacalar, con servicio de recolección y lavado de hotelería.  Nuestros productos cumplen la norma 093 de la Secretaría de Salud para desinfección, entregando ropa libre de COVID-19. ',
        mission: 'Brindar un servicio de alta calidad en limpieza, restauración y desinfección de prendas de vestir, garantizando la satisfacción y confianza de nuestros clientes.  Nos enfocamos en utilizar productos y procesos ecológicos y respetuosos con el medio ambiente, y contamos con personal altamente capacitado para un servicio excepcional con los más altos estándares de calidad. ',
        vision: 'Convertirnos en la lavandería líder del mercado, ofreciendo servicios innovadores y eficientes en limpieza, restauración y desinfección de prendas de vestir.  Buscamos expandirnos a los alrededores de Chetumal, proporcionando un servicio de calidad y ecoamigable a una amplia gama de clientes, y seguir actualizándonos y mejorando para mantenernos a la vanguardia.  Nuestro compromiso con la salud se refleja en el uso de productos y procesos apegados a las normas sanitarias. ',
        products: [
            { title: 'Lavado y Desinfección de Prendas', description: 'Servicio de alta calidad en limpieza, restauración y desinfección. ', price: 53, image: 'https://dummyimage.com/400x300/666/fff' },
            { title: 'Servicio de Hotelería', description: 'Recolección y lavado de prendas para hoteles en Chetumal, Xul-Ha, Bacalar. ', price: 53, image: 'https://dummyimage.com/400x300/666/fff' },
            { title: 'Procesos Ecológicos Certificados', description: 'Productos apegados a la norma 093 de la Secretaría de Salud, entregando ropa libre de COVID-19. ', price: 53, image: 'https://dummyimage.com/400x300/666/fff' },
            // Aquí se agregarían más servicios con sus imágenes y precios si los proporcionas
        ],
        contact: {
            email: 'lavanderia.premium@hotmail.com',
            phone: '983 133 81 11',
            address: 'Av. Erick Paolo entre Av. Magisterio y Miguel Alemán',
            phone2: '983 139 22 89',
            address2: 'Av. Luis Manuel Sevilla entre Guyana y Paraguay',
            facebook: 'https://www.facebook.com/LavanderiaPremium', // Enlace de ejemplo, el documento solo da el nombre 
            website: 'https://lavanderiapremium.wixsite.com/lavanderiapemiumche',
        },
        color: 'rgb(16, 84, 128)', // Azul principal de Lavandería Premium 
        fontPrincipal: 'ARTERIONONCOMMERCIAL REGULAR',
        fontText: 'Comfortaa Regular', // O 'Poppins Regular' 
        banner: 'https://dummyimage.com/1200x400/000/fff', // Placeholder para el banner de Anticovid,
        logo: 'https://dummyimage.com/500x400/09f/fff',
    },
];

// Función para cargar los datos de la marca basados en el slug de la URL
const loadBrandData = (slug: string) => {
    const foundBrand = allBrandDetails.find(brand => brand.slug === slug);
    brandData.value = foundBrand || null;
};

// Observa cambios en los parámetros de la ruta para cargar la marca correcta
watch(() => route.params.brandName, (newBrandName) => {
    if (typeof newBrandName === 'string') {
        loadBrandData(newBrandName);
    }
}, { immediate: true }); // Carga los datos al montar el componente por primera vez

// Asegurarse de que los datos se carguen al iniciar la página directamente
onMounted(() => {
    if (typeof route.params.brandName === 'string') {
        loadBrandData(route.params.brandName);
    }
});
</script>

<style scoped>
/* Fuentes de Anticovid */
@font-face {
    font-family: 'Arial Bold';
    /* src: url('@/assets/fonts/Arial-Bold.woff2') format('woff2'),
       url('@/assets/fonts/Arial-Bold.woff') format('woff'); */
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Arial';
    /*   src: url('@/assets/fonts/Arial.woff2') format('woff2'),
       url('@/assets/fonts/Arial.woff') format('woff'); */
    font-weight: normal;
    font-style: normal;
}

/* Fuentes de Pest Control Total */
@font-face {
    font-family: 'FONTSPRING DEMO';
    /* Intervogue Alt Bold Regular */
    /*   src: url('@/assets/fonts/IntervogueAltBold-Regular.woff2') format('woff2'),
       url('@/assets/fonts/IntervogueAltBold-Regular.woff') format('woff'); */
    font-weight: normal;
    font-style: normal;
}

/* Fuentes de Miss Clean y Lavandería Premium (Poppins) */
@font-face {
    font-family: 'Poppins Medium';
    /* src: url('@/assets/fonts/Poppins-Medium.woff2') format('woff2'),
       url('@/assets/fonts/Poppins-Medium.woff') format('woff'); */
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Poppins Regular';
    /*   src: url('@/assets/fonts/Poppins-Regular.woff2') format('woff2'),
       url('@/assets/fonts/Poppins-Regular.woff') format('woff'); */
    font-weight: normal;
    font-style: normal;
}

/* Fuentes de Lavandería Premium (ARTERIONONCOMMERCIAL REGULAR y Comfortaa Regular) */
@font-face {
    font-family: 'ARTERIONONCOMMERCIAL REGULAR';
    /*   src: url('@/assets/fonts/ArterioNonCommercial-Regular.woff2') format('woff2'),
       url('@/assets/fonts/ArterioNonCommercial-Regular.woff') format('woff'); */
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Comfortaa Regular';
    /*  src: url('@/assets/fonts/Comfortaa-Regular.woff2') format('woff2'),
       url('@/assets/fonts/Comfortaa-Regular.woff') format('woff'); */
    font-weight: normal;
    font-style: normal;
}

.hero-section {
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>