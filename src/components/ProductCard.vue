<template>
    <div class="product-card shadow rounded-4 d-flex flex-column overflow-hidden">
        <div class="image-wrapper">
            <img :src="getAssetUrl(product.image || defaultImage)" :alt="product.title" class="product-image" />
        </div>

        <div class="card-content p-4 text-start d-flex flex-column flex-grow-1">
            <h5 :style="{ fontFamily: fontPrincipal + ', sans-serif' }" class="product-title fw-bold text-dark mb-2">
                {{ product.title }}
            </h5>

            <p class="product-description text-muted small flex-grow-1 mb-3"
                :style="{ fontFamily: fontText + ', sans-serif' }">
                {{ product.description }}
            </p>

            <div class="price-container mb-3" :style="{ fontFamily: fontText + ', sans-serif' }">
                <span class="me-2 text-dark fw-medium">Precio:</span>
                <template v-if="product.discountPrice && product.price">
                    <span class="original-price text-muted text-decoration-line-through me-2">
                        ${{ product.discountPrice }}
                    </span>
                    <span class="current-price text-success fw-bold fs-5">
                        ${{ product.price }}
                    </span>
                </template>
                <template v-else-if="product.price">
                    <span class="current-price text-primary fw-bold fs-5">
                        ${{ product.price }}
                    </span>
                </template>
            </div>

            <button class="buy-now-button fw-bold mt-auto">Comprar Ahora</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
    product: {
        title: string;
        description: string;
        image?: string;
        price?: number;
        discountPrice?: number;
    };
    fontPrincipal: string;
    fontText: string;
    getAssetUrl: (path: string) => string;
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
    height: 190px;
    position: relative;
    /* IMPORTANTE para el posicionamiento absoluto */
    overflow: hidden;
    display: block;
    /* para evitar flex centrar que no funciona con absolute */
}

.product-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Cambia a 'contain' si prefieres que no se recorte */
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

.price-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.95rem;
}

.original-price {
    font-size: 1rem;
    color: #999;
}

.current-price {
    font-size: 1.3rem;
}

.buy-now-button {
    background: linear-gradient(90deg, #5d5dff, #7777ff);
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 0.95rem;
    transition: background 0.3s ease;
    width: 100%;
}

.buy-now-button:hover {
    background: linear-gradient(90deg, #4545e0, #5d5dff);
}
</style>