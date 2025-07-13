<template>
    <div>
        <!-- NAVBAR -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
            <div class="container">
                <!-- Logo -->
                <router-link class="navbar-brand d-flex align-items-center" to="/">
                    <img src="@/assets/logos/safeguard/Logo 150x40.png" alt="Grupo Safeguard Logo" height="40"
                        class="me-2" />
                    <span class="navbar-text text-white">/ {{ data?.name }}</span>
                </router-link>

                <!-- Toggle button -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#' + brandSlug + '-navbar'" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Menu -->
                <div class="collapse navbar-collapse" :id="brandSlug + '-navbar'">
                    <ul class="navbar-nav ms-auto">

                    </ul>
                </div>
            </div>
        </nav>

        <!-- CONTENIDO -->
        <!-- ... aquí el resto del template (hero, misión, visión, etc.) -->
    </div>
    <div class="container-fluid px-0"
        :style="{ '--primary-color': data?.colors.primary, '--accent-color': data?.colors.accent, '--bg-color': data?.colors.background }">
        <div v-if="data">

            <!-- Hero -->
            <section class="hero-section text-white text-center py-5 mb-5"
                :style="{ background: `linear-gradient(135deg, ${data.colors.primary}, ${data.colors.accent})` }">
                <h1 class="display-4 fw-bold">{{ data.name }}</h1>
                <p class="lead mt-3 w-75 mx-auto">{{ data.about }}</p>
            </section>

            <!-- Misión, Visión, Valores -->
            <section class="container mb-5">
                <div class="row text-center g-4">
                    <div class="col-md-4">
                        <div class="p-4 shadow-sm rounded border-0 bg-white h-100 animate-fade">
                            <i class="bi bi-bullseye text-accent fs-2 mb-2"></i>
                            <h3 class="h5 mb-3" :style="{ color: 'var(--accent-color)' }">Misión</h3>
                            <p class="text-muted">{{ data.mission }}</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-4 shadow-sm rounded border-0 bg-white h-100 animate-fade">
                            <i class="bi bi-eye-fill text-accent fs-2 mb-2"></i>
                            <h3 class="h5 mb-3" :style="{ color: 'var(--accent-color)' }">Visión</h3>
                            <p class="text-muted">{{ data.vision }}</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-4 shadow-sm rounded border-0 bg-white h-100 animate-fade">
                            <i class="bi bi-stars text-accent fs-2 mb-2"></i>
                            <h3 class="h5 mb-3" :style="{ color: 'var(--accent-color)' }">Valores</h3>
                            <ul class="list-unstyled text-start ps-3">
                                <li v-for="(valor, index) in data.values" :key="index" class="mb-2 text-muted">
                                    <i class="bi bi-check-circle-fill me-2 text-success"></i>{{ valor }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Ubicaciones -->
            <section class="container">
                <h2 class="h4 mb-4 text-start" :style="{ color: 'var(--primary-color)' }">Ubicaciones</h2>
                <div class="row">
                    <div v-for="(location, index) in data.locations" :key="index" class="col-md-6 mb-4">
                        <div class="card shadow-lg border-0 rounded-4 animate-fade"
                            :style="{ backgroundColor: 'var(--bg-color)' }">
                            <div class="card-body">
                                <h5 class="card-title fw-bold">{{ location.name }}</h5>
                                <p class="card-text text-muted">{{ location.address }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Si no hay datos -->
        <div v-else class="text-center py-5">
            <p class="text-danger fs-5">Empresa no encontrada.</p>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const companyData = {
    safeguad: {
        name: 'Grupo Safeguard',
        about: 'Grupo Safeguard es una empresa consolidada que agrupa diversas unidades de negocio con un enfoque común: brindar servicios de la más alta calidad en Chetumal y Quintana Roo.',
        mission: 'Proporcionar soluciones integrales de servicios, que aborden de manera eficiente las necesidades de nuestros clientes, garantizando su bienestar y satisfacción.',
        vision: 'Ser el grupo empresarial líder en Quintana Roo, reconocido por su innovación, enfoque al cliente y contribución al desarrollo sostenible.',
        values: ['Compromiso', 'Innovación', 'Responsabilidad', 'Trabajo en equipo', 'Confianza'],
        locations: [
            { name: 'Chetumal - Centro', address: 'Zona centro, Chetumal, Quintana Roo' },
            { name: 'Chetumal - Norte', address: 'Zona norte, Chetumal, Quintana Roo' }
        ],
        colors: {
            primary: '#90182A',    // rojo oscuro
            accent: '#009970',     // verde jade
            background: '#CCCCCA'  // gris claro
        }
    },
    lavanderiapremiumecologica: {
        name: 'Lavandería Premium',
        about: 'Lavandería Premium Ecológica ofrece un servicio exclusivo, eficiente y ecológico, especializado en la limpieza y restauración profesional de prendas en Chetumal y sus alrededores.',
        mission: 'Brindar un servicio de lavandería premium, ecológico y de alta calidad, mediante un proceso profesional, rápido y eficiente.',
        vision: 'Ser la lavandería de referencia en la región, destacando por su calidad, ecología e innovación.',
        values: ['Calidad y Excelencia', 'Trabajo en Equipo', 'Servicio al Cliente', 'Transparencia y Honestidad'],
        locations: [
            { name: 'Chetumal - Centro', address: 'Ubicación centro, Chetumal, Quintana Roo' },
            { name: 'Chetumal - Norte', address: 'Ubicación norte, Chetumal, Quintana Roo' }
        ],
        colors: {
            primary: '#1A4F4F',    // verde oscuro
            accent: '#61C0BF',     // verde claro
            background: '#F0F0F0'  // gris muy claro
        }
    },
    anticovid: {
        name: 'Anticovid',
        about: 'Anticovid ofrece soluciones de desinfección para espacios, con productos certificados y técnicas avanzadas, garantizando seguridad y salud.',
        mission: 'Brindar soluciones integrales y seguras para la desinfección de espacios, protegiendo la salud mediante productos certificados y tecnología avanzada.',
        vision: 'Ser la empresa líder en desinfección en la región, reconocida por su innovación y responsabilidad ambiental.',
        values: ['Compromiso con la salud', 'Calidad', 'Responsabilidad ambiental', 'Innovación'],
        locations: [
            { name: 'Chetumal', address: 'Cobertura general en Chetumal y alrededores' }
        ],
        colors: {
            primary: '#2C3E50',    // azul oscuro
            accent: '#27AE60',     // verde esmeralda
            background: '#ECF0F1'  // gris claro
        }
    },

    pestcontroltotal: {
        name: 'Pest Control',
        about: 'Pest Control es una empresa especializada en el control integral de plagas, comprometida con la salud pública y el cuidado del medio ambiente.',
        mission: 'Eliminar y prevenir la proliferación de plagas mediante métodos seguros, eficaces y respetuosos con el entorno.',
        vision: 'Ser la empresa de control de plagas más confiable en la región, reconocida por su profesionalismo, tecnología y compromiso ambiental.',
        values: ['Eficiencia', 'Responsabilidad', 'Sustentabilidad', 'Confianza'],
        locations: [
            { name: 'Chetumal', address: 'Cobertura regional en Quintana Roo, base en Chetumal' }
        ],
        colors: {
            primary: '#4B3621',    // marrón oscuro
            accent: '#A3C644',     // verde lima
            background: '#F2EFE6'  // beige claro
        }
    },

    missclean: {
        name: 'Miss Clean',
        about: 'Miss Clean ofrece servicios de limpieza profesional a hogares, oficinas y espacios comerciales, garantizando ambientes impecables y seguros.',
        mission: 'Proveer servicios de limpieza con altos estándares de calidad, puntualidad y profesionalismo.',
        vision: 'Convertirse en la empresa de limpieza más reconocida en la región por su eficiencia, confianza y atención personalizada.',
        values: ['Limpieza', 'Puntualidad', 'Responsabilidad', 'Calidad humana'],
        locations: [
            { name: 'Chetumal', address: 'Servicio en toda la ciudad de Chetumal' }
        ],
        colors: {
            primary: '#5DADE2',    // azul brillante
            accent: '#A9DFBF',     // verde suave
            background: '#FAFAFA'  // blanco grisáceo
        }
    },

    JardineriaGubernamental: {
        name: 'Jardinería Gubernamental',
        about: 'Especialistas en mantenimiento de áreas verdes institucionales, la empresa se dedica a conservar espacios públicos limpios, ordenados y en armonía con el entorno.',
        mission: 'Mantener y embellecer espacios verdes gubernamentales mediante técnicas sostenibles y mano de obra especializada.',
        vision: 'Ser el referente estatal en jardinería institucional, aportando bienestar y estética a los entornos públicos.',
        values: ['Respeto ambiental', 'Orden', 'Estética', 'Eficiencia'],
        locations: [
            { name: 'Chetumal', address: 'Atención a instalaciones gubernamentales en Quintana Roo' }
        ],
        colors: {
            primary: '#145A32',    // verde bosque
            accent: '#58D68D',     // verde brillante
            background: '#E9F7EF'  // verde muy claro
        }
    }
};


const route = useRoute()

const brandName = computed(() => route.params.brandName || 'grupoSuso')

const data = computed(() => {
    return companyData[brandName.value.toLowerCase()]
})
</script>
<style scoped>
.text-accent {
    color: var(--accent-color);
}

.hero-section {
    background-size: cover;
    background-position: center;
    color: white;
}

/* Animación suave al aparecer */
.animate-fade {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
