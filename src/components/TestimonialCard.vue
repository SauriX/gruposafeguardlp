<template>
    <div class="card h-100 p-3 shadow-sm">
        <div class="d-flex align-items-center">
            <img v-if="testimonial.logo" :src="getAssetUrl(testimonial.logo)" :alt="testimonial.company" class="me-3"
                style="height: 60px; width: auto; object-fit: contain;" />
            <div>
                <h6 class="mb-0">{{ testimonial.company }}</h6>
                <p class="small text-muted mb-0">{{ testimonial.text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    testimonial: {
        company: string;
        text: string;
        logo?: string;
    };
    getAssetUrl: (path: string) => string;
}>();
</script>
