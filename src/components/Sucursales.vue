<template>
    <div class="container py-5">
        <h2 class="text-center mb-5 fw-bold">Sucursales</h2>
        <div class="row g-4">
            <div v-for="(sucursal, index) in sucursales" :key="index" class="col-md-6">
                <div class="card shadow border-0 h-100 text-white" style="background-color: rgb(16, 84, 128);">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{{ sucursal.nombre }}</h5>
                        <p class="mb-1">{{ sucursal.direccion }}</p>
                        <p class="fw-bold text-warning mb-3">{{ sucursal.telefono }}</p>
                        <div class="ratio ratio-4x3 rounded overflow-hidden border">
                            <iframe :src="sucursal.mapa" width="100%" height="100%" style="border:0" allowfullscreen
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const sucursales = [
    {
        nombre: 'Suc. Erick Paolo',
        direccion: 'Av. Erick Paolo entre Av. Magisterio y Miguel Alemán',
        telefono: 'Tel. 983 133 81 11',
        mapa:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6711683897114!2d-88.309105!3d18.5249631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5ba4a363940a1b%3A0xf33826ef64921713!2sLavanderia%20Premium!5e0!3m2!1ses-419!2smx!4v1720918672345!5m2!1ses-419!2smx',
    },
    {
        nombre: 'Suc. Américas I',
        direccion: 'Av. Luis Manuel Sevilla entre Guyana y Paraguay',
        telefono: 'Tel. 983 139 22 89',
        mapa:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.295948774238!2d-88.2863208!3d18.5471213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5ba5e7b8a4f265%3A0xa537cc7a01434944!2sLavanderia%20Premium%20Sucursal!5e0!3m2!1ses-419!2smx!4v1720919104321!5m2!1ses-419!2smx',
    },
];
</script>

<style scoped>
.card-title {
    font-size: 1.4rem;
}

.ratio iframe {
    border-radius: 0.5rem;
}
</style>
