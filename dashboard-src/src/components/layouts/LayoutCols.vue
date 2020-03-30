<template>
  <div class="absolute fit row q-pa-md">
    <div class="col layout-col" v-for="(item, itemIdx) in columnItems" v-bind:key="itemIdx">
      <TextDisplay v-if="item.type=='text'" :data="item"></TextDisplay>
      <ImageDisplay v-if="item.type=='images'" :data="item"></ImageDisplay>
    </div>
  </div>
</template>
<style lang="stylus">
.layout-col
  overflow: hidden
  height: 100%
</style>
<script>
import ImageDisplay from 'components/ImageDisplay'
import TextDisplay from 'components/TextDisplay'

export default {
  name: 'LayoutCols',
  props: {
    layoutItem: {
      type: Object,
      required: true
    }
  },
  computed:{
    columnItems() {
      return this.layoutItem.items;
    }
  },
  
  components: {
    ImageDisplay,
    TextDisplay,
  }
}
</script>
