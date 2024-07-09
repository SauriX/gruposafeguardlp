<template>
    <div class="container-fluid premium-section">
        <div class="row w-100">
            <div class="col-md-6 premium-image" :style="{ backgroundImage: 'url(' + require('@/assets/img/' + backGround) + ')' }">
                <!-- Imagen de fondo -->
            </div>
            <div class="col-md-6 d-flex align-items-center">
                <div class="premium-content text-left">
                        <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
defineProps({
    backGround: String,
})

</script>
<style scoped>
.premium-section {
    background-color: #0E1636;
    /* Color de fondo general */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
}

.premium-image {
    background-size: cover;
    background-position: center;
    height: 400px;
}

.premium-content {
    background-color: #ffffff;
    /* Fondo blanco para el texto */
    padding: 40px;
    margin-left: -50px;
    /* Superposición del contenido sobre la imagen */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>