<template>
  <div class="absolute fit row q-pa-md" v-bind:class="classObject">
    <div class="col layout-col" v-for="(item, itemIdx) in columnItems" v-bind:key="itemIdx">
      <TextDisplay v-if="item.type=='text'" :data="item"></TextDisplay>
      <ImagesDisplay v-if="item.type=='images' || item.type=='image'" :data="item"></ImagesDisplay>
    </div>
  </div>
</template>
<style lang="stylus">
.layout-col
  overflow: hidden
  height: 100%
</style>
<script>
import ImagesDisplay from 'components/ImagesDisplay'
import TextDisplay from 'components/TextDisplay'

export default {
  name: 'LayoutCols',
  props: {
    layoutItem: {
      type: Object,
      required: true
    }
  },

  mounted(){
    console.log("ITEM:",this.layoutItem)
  },
  computed:{
    classObject(){
      var v ={};
      v['onecolumn-layout'] = !(this.layoutItem.items && this.layoutItem.items.length>1)
      return v;
    },
    columnItems() {
      return (this.layoutItem.items)?this.layoutItem.items:[this.layoutItem];
    }
  },
  
  components: {
    ImagesDisplay,
    TextDisplay,
  }
}
</script>
