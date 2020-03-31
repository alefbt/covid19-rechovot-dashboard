<template>
  <div class="fit row q-pa-md">
    <div class="td-full col" v-html="text">
      
    </div>
  </div>
</template>

<style lang="stylus">
div.td-full
  font-size: 3vh;

  >div
    @media screen and (min-width: 600px)
      column-count: 2;
      column-gap: 1em;
  
  >h1
    font-size: 2em
    padding: 0
    margin: 0
    font-weight bold
    text-decoration-line underline

.onecolumn-layout
  div.td-full
    >div
      @media screen and (min-width: 1500px)
        column-count: 3;
        column-gap: 1em;

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
  computed: {
    text() {
      return "" + (this.data.title?"<h1>" + this.data.title +"</h1>":"") + this.data.text
    }
  },
  data(){
    return {
      text1: this.data.text
    }
  },
  components: {}
}
</script>
