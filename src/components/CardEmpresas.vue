<template>
    <div class="card bg-image row align-items-end"
        :style="{ backgroundImage: 'url(' + require('@/assets/img/' + empresa?.img) + ')' }">

        <div class="card-body position-absolute bottom-0 start-50 translate-middle-x">
            <h5 class="card-title" v-if="empresa?.title">{{empresa?.title}}</h5>
            <p class="card-text" v-if="empresa?.subtitle">{{ empresa?.subtitle}}</p>
            <a @click="goToPage" class="btn btn-primary" >CONÓCENOS <i class="bi bi-arrow-right"></i></a>
        </div>
    </div>
</template>
<script lang="ts" setup>

import { Iempresa } from '@/app/model/empresa';
import { PropType } from 'vue'
import router from '@/router';
const props=defineProps({
    empresa: {type:Object as PropType<Iempresa>},
})

const goToPage =()=>{
    router.push({name:props.empresa?.name!});
}
</script>
<style scoped>
.bg-image {
    background-size: cover;
    background-position: center;
    border-radius: 15px;
    width: 18rem;
    height: 25rem;
    border-top-left-radius: 45%;
    border-top-right-radius: 45%;
    
}

.btn-primary{
    background-color:v-bind("empresa?.colorButon");
    border-color: v-bind("empresa?.colorButon");
    color: v-bind("empresa?.textcolorbtn");
}

.btn-primary:hover{
    background-color:v-bind("empresa?.secondaryColorButon") !important;
    border-color: v-bind("empresa?.secondaryColorButon") !important;
    color: v-bind("empresa?.textcolorbtn");
}

.btn-primary:active{
    background-color:v-bind("empresa?.secondaryColorButon") !important;
    border-color: v-bind("empresa?.secondaryColorButon") !important;
    color: v-bind("empresa?.textcolorbtn");
}

.card-body{
    color: v-bind("empresa?.textcolor");
}
</style>