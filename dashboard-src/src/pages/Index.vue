<template>
<q-page class="column justify-start" style="overflow: hidden;">
   <transition
  appear
  enter-active-class="animated slideInRight"
  leave-active-class="animated slideOutDown" 
  v-on:after-enter="onAfterEnter"
  v-on:after-leave="onAfterLeave"
      >
      <LayoutBuilder v-if="show" :data="currentData"></LayoutBuilder>
   </transition>
</q-page>
</template>

<style lang="stylus">
  #page-id-a
    background-color: #f0f0f0
</style>
<script>
import LayoutBuilder from 'components/layouts/LayoutBuilder'

export default {
  name: 'PageIndex',

  components: {
      LayoutBuilder
  },
  mounted(){
    this.loadData()
    this.startSlider()
  },
  data () {
    return {
      show: false,
      slideItem: 0,
      slides: []
    }
  },  
  computed: {
    currentData(){
      if(!this.isCurrentSlideValid())
        return {}

      return this.slides[this.slideItem];
    }
  },
   methods: {
     loadData(){
       var vm = this;

       this.$axios.get('/statics/data.json')
          .then((response) => {
            vm.slides = response.data['slides']
          })
          .catch((e) => {
            console.log(e)
          })
     },
     isCurrentSlideValid(){
      if(!this.slides || this.slides.length==0)
        return false

      if(this.slideItem > this.slides.length-1 || this.slideItem < 0)
        return false

      return true
     },
     onAfterEnter(){
        this.setTimerNextSlide()
     },

     onAfterLeave(){
       this.show = true
     },

     setTimerNextSlide(){
        const timeoutInterval = (
          this.isCurrentSlideValid()
          && this.slides[this.slideItem].timeout 
          && this.slides[this.slideItem].timeout>3)
         ? this.slides[this.slideItem].timeout : 3

        setTimeout(() => { 
          this.show = false
          this.nextSlide() 
          }, timeoutInterval*1000);
     },
     nextSlide() {
        if(!this.isCurrentSlideValid())
          this.slideItem=0

        this.slideItem++  
        
        if(!this.isCurrentSlideValid())   
          this.slideItem=0 

        console.log(this.slideItem);
     },
     startSlider () {
        this.show = true
     }
  }
}
</script>
