<template>
  <div class="fit row q-pa-md">
    <div class="col">
      <q-carousel
            v-model="slide"
            infinite
            autoplay
            height="100%"
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
  name: 'ImagesDisplay',
  props: {
    data: {
      type: Object,
      required: true
    }
  },

  mounted(){
    console.log("IMAGES:",this.data)
  },
  computed: {
    images(){
      return (this.data.images)?this.data.images:[this.data]
    }
  },
  data(){
    return {
      slide: 0
    }
  },
  components: {}
}
</script>
