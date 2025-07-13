<template>
    <div class="card h-100 shadow-sm">
        <div class="card-header image-header" :style="{ backgroundColor: cardColor || '#f8f9fa' }">
            <img :src="brand.logo!" :alt="brand.name + ' Logo'" class="brand-logo" />
        </div>
        <div class="card-body d-flex flex-column text-center">
            <h5 class="card-title text-center">{{ brand.name }}</h5>
            <p class="card-text flex-grow-1">{{ brand.description }}</p>
            <router-link :to="'/' + brand.slug" class="btn btn-outline-primary mt-auto"
                :style="{ borderColor: cardColor, color: cardColor }">
                Ver Más
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Brand {
    name: string;
    slug: string;
    description: string;
    logo?: string;
    color?: string;
}

const props = defineProps<{
    brand: Brand;
    cardColor?: string;
}>();

const getAssetUrl = (imageFileName: string) => {
    if (imageFileName.startsWith('https://')) {
        return imageFileName;
    }
    return new URL(`../assets/images/${imageFileName}`, import.meta.url).href;
};
</script>

<style scoped>
.card-header.image-header {
    height: 200px; /* Ajusta según tu diseño */
    padding: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f9fa;
}

.brand-logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
}
</style>
