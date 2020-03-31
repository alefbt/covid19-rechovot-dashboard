<template>
  <div class="absolute fit row">
    <div class="col covid19-layout david-n4-font">
      <LayoutCols :layoutItem="dataItem"></LayoutCols>
    </div>
  </div>
</template>

<style lang="stylus">

.covid19-layout ul
  padding-inline-start: 1em;
  margin-block-start: 0;

  li
    padding-bottom: 0.5em
    &:last-child
        padding-bottom: 0
</style>

<script>
import LayoutCols from 'components/layouts/LayoutCols'

export default {
  name: 'LayoutBuilder',
  
  components: {
      LayoutCols
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed:{
    dataItem(){
      return this.data
    }
  }
}
</script>
