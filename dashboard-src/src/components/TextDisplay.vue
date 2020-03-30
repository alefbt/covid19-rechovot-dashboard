<template>
  <div class="fit row q-pa-md">
    <div class="td-full col" v-html="text">
      
    </div>
  </div>
</template>

<style lang="stylus">
div.td-full
  font-size: 3vh;
  div
    @media screen and (min-width: 600px) and (max-width: 1500px)
      column-count: 2;
      column-gap: 50px;
    @media screen and (min-width: 1500px)
      column-count: 3;
      column-gap: 50px;
  
  h1
    font-size: 3em
    padding: 0
    margin: 0
</style>

<script>
export default {
  name: 'TextDisplay',
  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data(){
    return {
      text: this.data.text
    }
  },
  components: {}
}
</script>
