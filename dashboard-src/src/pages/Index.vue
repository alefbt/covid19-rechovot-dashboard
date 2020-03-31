<template>
<q-page class="column justify-start cursor-pointer" style="overflow: hidden;" v-on:click="nextSlide">
   <LayoutBuilder :data="currentData"></LayoutBuilder>
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
  },
  data () {
    return {
      timeoutObj: null,
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
            console.log(response.data)
            vm.slides = response.data['slides']
            
            if(vm.slides.length>0)
              vm.slideItem = 0

            vm.setTimerNextSlide()
          })
          .catch((e) => {
            console.log(e)
          })
     },
     isCurrentSlideValid(){
      if(!this.slides || this.slides.length==0)
        return false

      if(this.slideItem < 0 || this.slideItem >= this.slides.length )
        return false

      return true
     },
     setTimerNextSlide(){
        const timeoutInterval = (
          this.isCurrentSlideValid()
          && this.slides[this.slideItem].timeout 
          && this.slides[this.slideItem].timeout>3)
         ? this.slides[this.slideItem].timeout : 3

        if(this.slides.length>0)
        {
          console.log(this.slides)
          console.log("Slide: ", this.slideItem, "Time:", timeoutInterval, this.slides[this.slideItem] , this.slides[this.slideItem].timeout )
        }

        if(this.timeoutObj)
          clearTimeout(this.timeoutObj) 

        this.timeoutObj = setTimeout(() => { 
          this.nextSlide() 
          }, timeoutInterval*1000);
     },
     nextSlide() {
        if(!this.isCurrentSlideValid())
          this.slideItem=0

        this.slideItem++  

        if(!this.isCurrentSlideValid())   
          this.slideItem=0 
        
        this.setTimerNextSlide()
     }
  }
}
</script>
