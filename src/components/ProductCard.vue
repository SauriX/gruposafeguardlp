<template>
    <div class="product-card shadow rounded-4 d-flex flex-column overflow-hidden">
        <div class="image-wrapper">
            <img :src="getAssetUrl(product.image || defaultImage)" :alt="product.title" class="product-image" />
        </div>

        <div class="card-content p-4 text-start d-flex flex-column flex-grow-1">
<!--             <h5 :style="{ fontFamily: fontPrincipal + ', sans-serif' }" class="product-title fw-bold text-dark mb-2">
                {{ product.title }}
            </h5>

            <h5 :style="{ fontFamily: fontPrincipal + ', sans-serif' }" class="product-title fw-bold text-dark mb-2">
                {{ product.subTitle }}
            </h5> -->

            <a class="buy-now-button fw-bold mt-auto text-center text-white text-decoration-none"
                :href="`https://wa.me/${whatsappNumber}?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(product.title)}`"
                target="_blank" rel="noopener">
                Cotizar por WhatsApp
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
    product: {
        title: string;
        subTitle: string;
        description: string;
        icon?: string;
        image?: string;
    };
    fontPrincipal: string;
    fontText: string;
    getAssetUrl: (path: string) => string;
    whatsappNumber: string;
}>();

const defaultImage = "https://dummyimage.com/300.png/09f/fff";
</script>

<style scoped>
.product-card {
    background: white;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.image-wrapper {
    background-color: #f7f7f7;
    max-height: 250px;
    height: auto;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product-image {
    width: 100%;
    height: auto;
    object-fit: contain;
    transition: transform 0.3s ease;
}


.product-card:hover .product-image {
    transform: scale(1.05);
}

.card-content {
    text-align: left;
    flex-grow: 1;
}

.product-title {
    font-size: 1.2rem;
    line-height: 1.3;
    color: #333;
}

.product-description {
    font-size: 0.9rem;
    line-height: 1.5;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

.buy-now-button {
    background: linear-gradient(90deg, #25d366, #128c7e);
    /* WhatsApp colors */
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 0.95rem;
    transition: background 0.3s ease;
    width: 100%;
    display: inline-block;
}

.buy-now-button:hover {
    background: linear-gradient(90deg, #128c7e, #075e54);
}
</style>
