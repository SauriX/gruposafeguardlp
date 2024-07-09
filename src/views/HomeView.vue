<template>
  <div class="container-fluid">
    <div class="row row-col-auto">
      <div class="col-12">
        <Hero :back-ground="UrlBackground" :logo="logo" to-scroll="final" btntext="Contactanos" :show-btn="true"></Hero>
      </div>
      <div class="col-12">
        <Nosotros :back-ground="nostrosbg">
          <h2 class="text-center"> Nostros</h2>
          El objetivo de Grupo Safeguard es brindar servicios de limpieza, desinfección y fumigación de alta
          calidad para los clientes, siendo responsables con el medio ambiente y apoyando el crecimiento
          personal y profesional de sus empleados.
        </Nosotros>
      </div>

      <div class="col-12">
        <div class="container-fluid empresas-section">
          <div class="container-sm">
            <div class="row justify-content-center gx-0">
              <div class="col-md-12">
                <h2 class="mb-5 text-center">Nuestras empresas</h2>
              </div>
              <div class="col-md-4 mb-4 text-center" v-for="empresa in empresas">
                <CardEmpresas :empresa="empresa" style="margin: auto;"></CardEmpresas>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="row justify-content-center mt-3">
          <div class="col-md-12">
            <h2 class="mb-5 text-center">Lo más destacado </h2>
          </div>
          <div class="col-md-12 text-center">
            Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en "Editar texto" o doble
            clic aquí para agregar tu contenido y cambiar la fuente.
          </div>
          <div class="col-12 ">
            <div class="container-sm mt-3">
              <carousel :items-to-show="5">
                <slide v-for="slide in 10" :key="slide">
                  <img src="../assets//img//imagesd.jpeg" class="img-fluid" alt="...">
                </slide>
                <template #addons>
                  <navigation />
                  <pagination />
                </template>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script lang="ts" setup>
import Hero from '@/components/Hero.vue';
import Nosotros from '@/components/Nostros.vue'
import CardEmpresas from '@/components/CardEmpresas.vue';
import { Ref, ref } from 'vue';
import { Iempresa } from '@/app/model/empresa';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

var UrlBackground = 'images.jpeg';
var logo = 'safeguard.png'
var nostrosbg = 'plantas.png';

const empresas: Ref<Iempresa[]> = ref([{
  img: 'covid.png',
  title: 'q',
  subtitle: '',
  colorButon: '#10BF97',
  secondaryColorButon: '#084861',
  textcolor: 'white',
  textcolorbtn: 'white',
  name: 'about'
}, {
  img: 'pest.png',
  title: '',
  subtitle: '',
  colorButon: '#10BF97',
  secondaryColorButon: '#084861',
  textcolor: 'white',
  textcolorbtn: 'white',
  name: ''
}, {
  img: 'premium.png',
  title: '',
  subtitle: '',
  colorButon: '#10BF97',
  secondaryColorButon: '#084861',
  textcolor: 'white',
  textcolorbtn: 'white',
  name: ''
}, {
  img: 'missclean.png',
  title: '',
  subtitle: '',
  colorButon: '#10BF97',
  secondaryColorButon: '#084861',
  textcolor: 'white',
  textcolorbtn: 'white',
  name: ''
}, {
  img: 'safefire.png',
  title: '',
  subtitle: '',
  colorButon: '#10BF97',
  secondaryColorButon: '#084861',
  textcolor: 'white',
  textcolorbtn: 'white',
  name: ''
}, {
  img: 'rich.png',
  title: '',
  subtitle: '',
  colorButon: '#10BF97',
  secondaryColorButon: '#084861',
  textcolor: 'white',
  textcolorbtn: 'white',
  name: ''
},]);
</script>

<style scoped>
.empresas-section {
  background-color: #E6F7F2;
  /* Fondo verde claro */
  padding: 50px 0;
}

.empresas-section h2 {
  color: #677873;
}
</style>
