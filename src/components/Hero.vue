<template>
    <section  class="bsb-hero-1 px-3 bsb-overlay bsb-hover-pull img-full blur"
        :style="{ backgroundImage: 'url(' + require('@/assets/img/' + backGround) + ')' }">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 text-center text-white">
                    <img class="img-fluid" :src="require('@/assets/img/' + logo)" alt="">
                    <div v-if="showBtn" class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <a type="button" :href="`#${toScroll}`" class="btn bsb-btn-xl  gap-3 btn-blue" >{{btntext}}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { Ref, ref } from 'vue';

defineProps({
    backGround: String,
    logo: String,
    toScroll:String,
    btntext:String,
    showBtn:Boolean,
})

</script>
<style>
.img-full {
    background-position: center top;
    background-size: 100% auto;
}

.btn-blue{
    background-color: #413ADA  !important;
    border-color: #413ADA !important;
    color: white !important;
}

.btn-blue:active{
    background-color: #2B2791  !important;
    color: white !important;
    border-color: #2B2791 !important;
    
}
</style>