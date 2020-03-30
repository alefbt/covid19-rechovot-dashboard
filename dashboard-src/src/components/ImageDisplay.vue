<template>
  <div class="absolute fit row q-pa-md">
    <div class="col">
      <q-carousel
            animated
            v-model="slide"
            infinite
            autoplay
            transition-prev="slide-right"
            transition-next="slide-left"
            height="80vh"
            draggable="false"
          >
        <q-carousel-slide v-for="(img, index) in images" v-bind:key="index" :name="index" :img-src="img.src" />
      </q-carousel>
  
    </div>
  </div>
</template>

<style lang="stylus">
.q-carousel__slide
  background-size: contain
  background-position: 50%
  background-repeat: no-repeat
</style>

<script>
export default {
  name: 'ImageDisplay',
  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data(){
    return {
      slide: 0,
      images: this.data.images
    }
  },
  components: {}
}
</script>
