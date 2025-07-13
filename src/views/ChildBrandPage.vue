<template>
    
    <div v-if="brandData">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    <img src="@/assets/logos/safeguard/Logo 150x40.png" alt="Grupo Safeguard Logo" height="40"
                        class="me-2">
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
        <header class="hero-section w-100" :style="{
            backgroundImage: 'url(' + getAssetUrl(brandData.banner) + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '540px'
        }">

            <div class="container text-white text-center py-5">
                <!-- Texto opcional (puedes quitarlo si no lo necesitas) -->
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
                            :fontText="brandData.fontText" :getAssetUrl="getAssetUrl"
                            :whatsapp-number="brandData.numero" />
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
        <section v-if="brandData.slug==='lavanderia-premium-ecologica'">
            <Sucursales></Sucursales>
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
import ProductCard from '@/components/ProductCard.vue';
import TestimonialCard from '@/components/TestimonialCard.vue'
import Sucursales from '@/components/Sucursales.vue';
// Para usar Bootstrap Icons, asegúrate de haberlo incluido en public/index.html:
// <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
const hover = ref(false);

function submitForm() {
    alert('Gracias por tu consulta. Nos pondremos en contacto pronto.')
}
interface Product {
    title: string;
    subTitle: string;
    description: string;
    icon?: string; // Nombre de la clase de icono (ej. 'bi-clipboard-check')
    image?: string; // Ruta de la imagen referencial del servicio
    price?: string; // Precio del servicio
    discountPrice?: string;
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
    numero: string;
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


const route = useRoute();
const brandData = ref<BrandDetail | null>(null);
const currentYear = ref(new Date().getFullYear());
const nameTextStyle = computed(() => ({
    color: getContrastTextColor(brandData.value!.color || 'rgb(13, 110, 253)'),
    fontWeight: '600'
}))

const getAssetUrl = (imageFileName: string) => {
    if (!imageFileName) return ''; // en caso de null

    // Si ya es una URL remota, úsala tal cual
    if (imageFileName.startsWith('http') || imageFileName.startsWith('//')) {
        return imageFileName;
    }

    // Si ya empieza con '/img/' o '/assets/', solo retorna como está (servida desde /public)
    if (imageFileName.startsWith('/img/') || imageFileName.startsWith('/assets/')) {
        return imageFileName;
    }

    // Sino, es una imagen local desde la carpeta de assets importadas en Vite
    return new URL(`../assets/images/${imageFileName}`, import.meta.url).href;
};
// Datos reales de las marcas hijas extraídos del PDF
const allBrandDetails: BrandDetail[] = [
    {
        name: 'Anticovid',
        slug: 'anticovid',
        heroTitle: 'Desinfección Profunda para Espacios Seguros',
        heroSubtitle: 'Protegiendo tu salud y la de los tuyos con tecnología de vanguardia.',
        aboutText: 'En Anticovid somos una empresa comprometida con la salud y seguridad de nuestros clientes, ofreciendo soluciones efectivas y responsables para la desinfección de edificios y hogares. En un contexto global marcado por la pandemia del SARS-CoV-2, seguimos de cerca las recomendaciones de las principales autoridades sanitarias internacionales, adaptándonos continuamente a los más altos estándares de seguridad y calidad.',
        mission: 'Brindar soluciones integrales y seguras para la desinfección de espacios, protegiendo la salud de nuestros clientes mediante el uso de productos de alta calidad y tecnologías de vanguardia, adaptándonos siempre a los estándares internacionales.',
        vision: 'Ser la empresa líder en desinfección en la región, reconocida por nuestra innovación, compromiso con la calidad y el medio ambiente, y por ofrecer soluciones efectivas en la lucha contra el SARS-CoV-2 y otros patógenos.     ',
        products: [
            { title: 'Desinfección Hogar', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/anticovid/iconos-21.png', import.meta.url).href },
            { title: 'Desinfección Hoteles', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/anticovid/iconos-23.png', import.meta.url).href },
            { title: 'Desinfección Negocios', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/anticovid/iconos-22.png', import.meta.url).href },
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
        banner: new URL('../assets/banners/anticovid/banners-56.png', import.meta.url).href, // Placeholder para el banner de Anticovid,
        logo: 'https://dummyimage.com/500x400/09f/fff',
        testimonials: [{
            company: 'Dirección General Casa de la Cultura Jurídica',
            text: ''
        }, {
            company: 'Papitos Bacalar: Marina, Cabañas & Restaurant.',
            text: ''
        }],

        numero: '9834540025'
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
            { title: 'Fumigación Contra Insectos Rastreros', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/pest/iconos-11.png', import.meta.url).href },
            { title: 'Fumigación Contra Hormigas', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/pest/iconos-09.png', import.meta.url).href },
            { title: 'Fumigación Contra Pulgas y garrapatas', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/pest/iconos-10.png', import.meta.url).href },
            { title: 'Control Contra Animales Ferales', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/pest/iconos-12.png', import.meta.url).href },
            { title: 'Control Contra Roedores', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/pest/iconos-13.png', import.meta.url).href },
            { title: 'Control Contra Murcielagos', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/pest/iconos-14.png', import.meta.url).href },
            { title: 'Fumigación Contra Chinches', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/pest/iconos-15.png', import.meta.url).href },
            { title: 'Fumigación Contra Cucarachas', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/pest/iconos-16.png', import.meta.url).href },
            { title: 'Fumigación Contra Termitas', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/pest/iconos-17.png', import.meta.url).href },
            { title: 'Termonebulazación Insectos Voladores', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/pest/iconos-18.png', import.meta.url).href },
            { title: 'Fumigación Contra Alacranes', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/pest/iconos-19.png', import.meta.url).href },
            { title: 'Control Contra Abejas', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/pest/iconos-20.png', import.meta.url).href },
        ],
        contact: {
            email: 'Pestcontrolcaribe@gmail.com',
            phone: '9834541073',
            address: 'And 11 #56, Col. Infonavit Fidel Velazquez, Chetumal Quintana Roo, México.',
            facebook: 'https://www.facebook.com/PestControlTotal' // Enlace de ejemplo, el documento solo da el nombre 
        },
        color: 'rgb(0, 61, 26)', // Verde lima principal de Pest Control 
        fontPrincipal: 'FONTSPRING DEMO', // Intervogue Alt Bold Regular 
        fontText: 'FONTSPRING DEMO', // Intervogue Alt Bold Regular 
        banner: new URL('../assets/banners/pest/banners-57.png', import.meta.url).href, // Placeholder para el banner de Anticovid,
        logo: 'https://dummyimage.com/500x400/09f/fff',
        numero: '9834540025'
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
            { title: 'Limpieza Hogar', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/msclean/iconos-24.png', import.meta.url).href },
            { title: 'Limpieza Negocios', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/msclean/iconos-25.png', import.meta.url).href },
            { title: 'Limpieza Oficinas', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/msclean/iconos-26.png', import.meta.url).href },
        ],
        contact: {
            phone: '983130910',
            address: 'Chetumal Quintana Roo, México.',
            // Correo y redes sociales no especificados en el documento
        },
        color: 'rgb(221, 120, 144)', // Verde claro principal de Miss Clean 
        fontPrincipal: 'Poppins Medium',
        fontText: 'Poppins Regular',
        banner: new URL('../assets/banners/msclean/banners-54.png', import.meta.url).href, // Placeholder para el banner de Anticovid,
        logo: 'https://dummyimage.com/500x400/09f/fff',
        numero: '9831208570'
    },
    {
        name: 'Lavandería Premium Ecológica',
        slug: 'lavanderia-premium-ecologica',
        heroTitle: 'Cuidado de Ropa Sostenible y de Calidad Superior',
        heroSubtitle: 'Tus prendas impecables con respeto por el planeta.',
        aboutText: 'Lavandería Premium Ecológica fue fundada en 2016 con el propósito de ofrecer un servicio de lavandería exclusivo y de alta calidad, comprometidos con el cuidado y tratamiento adecuado de las prendas. Nuestra misión es garantizar la limpieza, restauración y desinfección impecable de cada prenda, con el respaldo de un equipo altamente capacitado y profesional. Desde su creación, hemos logrado consolidarnos como líderes en la industria de lavandería de alto nivel en la ciudad de Chetumal, y actualmente extendemos nuestros servicios a destinos cercanos como Xul-Ha y Bacalar, atendiendo a más de 500 clientes frecuentes, entre los cuales destacan 15 hoteles, spas, hospitales y centros de belleza.Nos distinguimos por ofrecer un servicio eficiente, rápido y ecológico, cumpliendo con la normatividad sanitaria y garantizando que todas nuestras prendas estén completamente libres de virus y bacterias, asegurando una atención excepcional para cada uno de nuestros clientes.',
        mission: 'Brindar un servicio de lavandería premium, ecológico y de alta calidad, especializado en la limpieza, desinfección y restauración de prendas, mediante un proceso profesional, rápido y eficiente, que garantice la satisfacción total de nuestros clientes.',
        vision: 'Ser la lavandería premium de referencia en la región, destacando por nuestro compromiso con la calidad, la ecología y la innovación en el servicio. Buscamos expandir nuestra presencia a nivel nacional, siendo reconocidos por nuestra capacidad de ofrecer soluciones personalizadas, respetuosas con el medio ambiente y eficientes para negocios del sector hotelero y servicios relacionados.',
        products: [
            { title: 'lavado,Secado y Doblado', subTitle: '', description: '', price: '1', image: new URL('../assets/productos/lavanderia/iconos-33.png', import.meta.url).href },
            { title: 'Secado y Doblado', subTitle: '', description: '', price: '2', image: new URL('../assets/productos/lavanderia/iconos-34.png', import.meta.url).href },
            { title: 'Lavado profundo', subTitle: '', description: '', price: '3', image: new URL('../assets/productos/lavanderia/iconos-35.png', import.meta.url).href },
            { title: 'Tintoreria Lavdo En Seco', subTitle: '', description: '', price: '4', image: new URL('../assets/productos/lavanderia/iconos-36.png', import.meta.url).href },
            { title: 'Lavado prendas Delicadas', subTitle: '', description: '', price: '5', image: new URL('../assets/productos/lavanderia/iconos-37.png', import.meta.url).href },
            { title: 'Lavado Vestido De Novia', subTitle: '', description: '', price: '6', image: new URL('../assets/productos/lavanderia/iconos-38.png', import.meta.url).href },
            { title: 'Lavado Vestido De XV', subTitle: '', description: '', price: '7', image: new URL('../assets/productos/lavanderia/iconos-39.png', import.meta.url).href },
            { title: 'Planchado Por Pieza', subTitle: '', description: '', price: '8', image: new URL('../assets/productos/lavanderia/iconos-40.png', import.meta.url).href },
            { title: 'Planchado Por Docena', subTitle: '', description: '', price: '9', image: new URL('../assets/productos/lavanderia/iconos-41.png', import.meta.url).href },
            { title: 'Lavado De Almohadas', subTitle: '', description: '', price: '10', image: new URL('../assets/productos/lavanderia/iconos-42.png', import.meta.url).href },
            { title: 'Lavado De Frazadas', subTitle: '', description: '', price: '11', image: new URL('../assets/productos/lavanderia/iconos-43.png', import.meta.url).href },
            { title: 'Lavado De Edrecolcha', subTitle: '', description: '', price: '12', image: new URL('../assets/productos/lavanderia/iconos-44.png', import.meta.url).href },
            { title: 'Lavado De Edredones', subTitle: '', description: '', price: '13', image: new URL('../assets/productos/lavanderia/iconos-45.png', import.meta.url).href },
            { title: 'Lavado De Sognare', subTitle: '', description: '', price: '14', image: new URL('../assets/productos/lavanderia/iconos-46.png', import.meta.url).href },
            { title: 'Lavado De Hamacas.', subTitle: '', description: '', price: '15', image: new URL('../assets/productos/lavanderia/iconos-47.png', import.meta.url).href },
            { title: 'Lavado De Tenis', subTitle: '', description: '', price: '16', image: new URL('../assets/productos/lavanderia/iconos-48.png', import.meta.url).href },
            { title: 'Lavado De Peluches', subTitle: '', description: '', price: '17', image: new URL('../assets/productos/lavanderia/iconos-49.png', import.meta.url).href },
            { title: 'Lavado De Mochilas', subTitle: '', description: '', price: '18', image: new URL('../assets/productos/lavanderia/iconos-50.png', import.meta.url).href },
            { title: 'Servicio Express', subTitle: '', description: '', price: '19', image: new URL('../assets/productos/lavanderia/iconos-52.png', import.meta.url).href },
            { title: 'Lavado De Maletas', subTitle: '', description: '', price: '20', image: new URL('../assets/productos/lavanderia/iconos-53.png', import.meta.url).href },

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
        banner: new URL('../assets/banners/lavanderia/banners-55.png', import.meta.url).href, // Placeholder para el banner de Anticovid,
        logo: new URL('../assets/logos/lavanderia/1.png', import.meta.url).href,
        numero: '9831338111'
    },
    {
        name: 'Castelvania',
        slug: 'Castelvania',
        heroTitle: 'Cuidado de Ropa Sostenible y de Calidad Superior',
        heroSubtitle: 'Tus prendas impecables con respeto por el planeta.',
        aboutText: 'Lavandería Premium Ecológica fue fundada en 2016 con el propósito de ofrecer un servicio de lavandería exclusivo y de alta calidad, comprometidos con el cuidado y tratamiento adecuado de las prendas. Nuestra misión es garantizar la limpieza, restauración y desinfección impecable de cada prenda, con el respaldo de un equipo altamente capacitado y profesional. Desde su creación, hemos logrado consolidarnos como líderes en la industria de lavandería de alto nivel en la ciudad de Chetumal, y actualmente extendemos nuestros servicios a destinos cercanos como Xul-Ha y Bacalar, atendiendo a más de 500 clientes frecuentes, entre los cuales destacan 15 hoteles, spas, hospitales y centros de belleza.Nos distinguimos por ofrecer un servicio eficiente, rápido y ecológico, cumpliendo con la normatividad sanitaria y garantizando que todas nuestras prendas estén completamente libres de virus y bacterias, asegurando una atención excepcional para cada uno de nuestros clientes.',
        mission: 'Brindar un servicio de lavandería premium, ecológico y de alta calidad, especializado en la limpieza, desinfección y restauración de prendas, mediante un proceso profesional, rápido y eficiente, que garantice la satisfacción total de nuestros clientes.',
        vision: 'Ser la lavandería premium de referencia en la región, destacando por nuestro compromiso con la calidad, la ecología y la innovación en el servicio. Buscamos expandir nuestra presencia a nivel nacional, siendo reconocidos por nuestra capacidad de ofrecer soluciones personalizadas, respetuosas con el medio ambiente y eficientes para negocios del sector hotelero y servicios relacionados.',
        products: [
            { title: 'Contratación Eventos', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/castlevania/iconos-29.png', import.meta.url).href },
            { title: 'Contratación Camping', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/castlevania/iconos-30.png', import.meta.url).href },
            { title: 'Contratación Piscinada', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/castlevania/iconos-31.png', import.meta.url).href },
            { title: 'Contratación oficinas', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/castlevania/iconos-32.png', import.meta.url).href },
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
        color: 'rgb(203, 155, 73)', // Azul principal de Lavandería Premium 
        fontPrincipal: 'ARTERIONONCOMMERCIAL REGULAR',
        fontText: 'Comfortaa Regular', // O 'Poppins Regular' 
        banner: new URL('../assets/banners/castlevania/banners-60.png', import.meta.url).href, // Placeholder para el banner de Anticovid,
        logo: 'https://dummyimage.com/500x400/09f/fff',
        numero: '983 1350910'
    },
    {
        name: 'ExtinFire',
        slug: 'ExtinFire',
        heroTitle: 'Cuidado de Ropa Sostenible y de Calidad Superior',
        heroSubtitle: 'Tus prendas impecables con respeto por el planeta.',
        aboutText: 'Lavandería Premium Ecológica fue fundada en 2016 con el propósito de ofrecer un servicio de lavandería exclusivo y de alta calidad, comprometidos con el cuidado y tratamiento adecuado de las prendas. Nuestra misión es garantizar la limpieza, restauración y desinfección impecable de cada prenda, con el respaldo de un equipo altamente capacitado y profesional. Desde su creación, hemos logrado consolidarnos como líderes en la industria de lavandería de alto nivel en la ciudad de Chetumal, y actualmente extendemos nuestros servicios a destinos cercanos como Xul-Ha y Bacalar, atendiendo a más de 500 clientes frecuentes, entre los cuales destacan 15 hoteles, spas, hospitales y centros de belleza.Nos distinguimos por ofrecer un servicio eficiente, rápido y ecológico, cumpliendo con la normatividad sanitaria y garantizando que todas nuestras prendas estén completamente libres de virus y bacterias, asegurando una atención excepcional para cada uno de nuestros clientes.',
        mission: 'Brindar un servicio de lavandería premium, ecológico y de alta calidad, especializado en la limpieza, desinfección y restauración de prendas, mediante un proceso profesional, rápido y eficiente, que garantice la satisfacción total de nuestros clientes.',
        vision: 'Ser la lavandería premium de referencia en la región, destacando por nuestro compromiso con la calidad, la ecología y la innovación en el servicio. Buscamos expandir nuestra presencia a nivel nacional, siendo reconocidos por nuestra capacidad de ofrecer soluciones personalizadas, respetuosas con el medio ambiente y eficientes para negocios del sector hotelero y servicios relacionados.',
        products: [
            { title: 'Desinfección Hogar', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/anticovid/iconos-21.png', import.meta.url).href },
            { title: 'Desinfección Hoteles', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/anticovid/iconos-23.png', import.meta.url).href },
            { title: 'Desinfección Negocios', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/anticovid/iconos-22.png', import.meta.url).href },
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
        color: 'rgb(40, 7, 14)', // Azul principal de Lavandería Premium 
        fontPrincipal: 'ARTERIONONCOMMERCIAL REGULAR',
        fontText: 'Comfortaa Regular', // O 'Poppins Regular' 
        banner: new URL('../assets/banners/extintor/banners-59.png', import.meta.url).href, // Placeholder para el banner de Anticovid,
        logo: 'https://dummyimage.com/500x400/09f/fff',
        numero: ''
    },
    {
        name: 'Ric-H2O',
        slug: 'Ric-H2O',
        heroTitle: 'Cuidado de Ropa Sostenible y de Calidad Superior',
        heroSubtitle: 'Tus prendas impecables con respeto por el planeta.',
        aboutText: 'Lavandería Premium Ecológica fue fundada en 2016 con el propósito de ofrecer un servicio de lavandería exclusivo y de alta calidad, comprometidos con el cuidado y tratamiento adecuado de las prendas. Nuestra misión es garantizar la limpieza, restauración y desinfección impecable de cada prenda, con el respaldo de un equipo altamente capacitado y profesional. Desde su creación, hemos logrado consolidarnos como líderes en la industria de lavandería de alto nivel en la ciudad de Chetumal, y actualmente extendemos nuestros servicios a destinos cercanos como Xul-Ha y Bacalar, atendiendo a más de 500 clientes frecuentes, entre los cuales destacan 15 hoteles, spas, hospitales y centros de belleza.Nos distinguimos por ofrecer un servicio eficiente, rápido y ecológico, cumpliendo con la normatividad sanitaria y garantizando que todas nuestras prendas estén completamente libres de virus y bacterias, asegurando una atención excepcional para cada uno de nuestros clientes.',
        mission: 'Brindar un servicio de lavandería premium, ecológico y de alta calidad, especializado en la limpieza, desinfección y restauración de prendas, mediante un proceso profesional, rápido y eficiente, que garantice la satisfacción total de nuestros clientes.',
        vision: 'Ser la lavandería premium de referencia en la región, destacando por nuestro compromiso con la calidad, la ecología y la innovación en el servicio. Buscamos expandir nuestra presencia a nivel nacional, siendo reconocidos por nuestra capacidad de ofrecer soluciones personalizadas, respetuosas con el medio ambiente y eficientes para negocios del sector hotelero y servicios relacionados.',
        products: [
            { title: 'Desinfección Hogar', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/anticovid/iconos-21.png', import.meta.url).href },
            { title: 'Desinfección Hoteles', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/anticovid/iconos-23.png', import.meta.url).href },
            { title: 'Desinfección Negocios', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/anticovid/iconos-22.png', import.meta.url).href },
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
        banner: new URL('../assets/banners/lavanderia/banners-55.png', import.meta.url).href, // Placeholder para el banner de Anticovid,
        logo: 'https://dummyimage.com/500x400/09f/fff',
        numero: ''
    },
    {
        name: 'Jardineria Gubernamental',
        slug: 'Jardineria-Gubernamental',
        heroTitle: 'Cuidado de Ropa Sostenible y de Calidad Superior',
        heroSubtitle: 'Tus prendas impecables con respeto por el planeta.',
        aboutText: 'Especialistas en mantenimiento de áreas verdes institucionales, la empresa se dedica a conservar espacios públicos limpios, ordenados y en armonía con el entorno.',
        mission: 'Mantener y embellecer espacios verdes gubernamentales mediante técnicas sostenibles y mano de obra especializada.',
        vision: 'Ser el referente estatal en jardinería institucional, aportando bienestar y estética a los entornos públicos.',
        products: [
            { title: 'Jardinería Negocios', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/jasdinera/iconos-27.png', import.meta.url).href },
            { title: 'Jardinería Oficinas', subTitle: '', description: '', price: '53', image: new URL('../assets/productos/jasdinera/iconos-28.png', import.meta.url).href },
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
        color: 'rgb(19, 44, 4)', // Azul principal de Lavandería Premium 
        fontPrincipal: 'ARTERIONONCOMMERCIAL REGULAR',
        fontText: 'Comfortaa Regular', // O 'Poppins Regular' 
        banner: new URL('../assets/banners/jardineria/banners-58.png', import.meta.url).href, // Placeholder para el banner de Anticovid,
        logo: 'https://dummyimage.com/500x400/09f/fff',
        numero: '9831208570'
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

.hero-section {}
</style>