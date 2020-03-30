<template>
  <div class="absolute fit row">
    <div class="col">
      <LayoutCols v-if="data.type=='LayoutCols'" :layoutItem="dataItem"></LayoutCols>
    </div>
  </div>
</template>

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
