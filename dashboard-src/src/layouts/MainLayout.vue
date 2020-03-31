<template>
  <q-layout view="hHh lpR fFf">
    <div class="z-top text-white" style="position: absolute; top:0; righth:0;">
    בס"ד
    </div>
    <q-header elevated class="">
      <q-toolbar>       
        <q-space></q-space>
         <q-toolbar-title>
            מערכת <strong>עדכונים</strong>
          </q-toolbar-title>
          <div>
            PREPROD
          </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-on:click="getNewsItem" class="cursor-pointer" content-style="overflow: hidden;" v-model="leftDrawer" side="left" bordered>
      <q-card 
       style="margin: 1em; background-color: #f0f0f0;"
      class="info-card" 
      v-for="item in items" :key="item.key">
        <q-card-section>
          <div class="text-h6">{{item.title}}</div>
          <div v-html="item.text"></div>
        </q-card-section>

        <q-card-actions>
          <q-item-label caption>
            <q-icon icon="event"></q-icon> {{item.updatedAt}}

            עודכן ע"י:
            <strong>{{item.updatedBy}}</strong>
          </q-item-label>
        </q-card-actions>

      </q-card>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-3 text-black">
      <q-toolbar>
        <div>
           מוקד משרד הבריאות בטלפון 5400* | כללית 2700* | מכבי 3555* | מאוחדת 3833* | לאומית 507* | מד"א 101
        </div>
        <q-space></q-space>
        <small>
          כל הזכויות שמורות 

          ל<a href="https://www.alefbt.com/">אלףבט</a>
          ו- <a href="https://www.alefbt.com/">קורוטקין</a>
        </small>

      </q-toolbar>
    </q-footer>
  </q-layout>

</template>

<style lang="stylus">
.info-card
  .text-h6
    font-size: 1.25rem;
    line-height: 1.25rem;
    font-weight: bold;
</style>
<script>
import { uid,extend } from 'quasar'

export default {
  name: 'MainLayout',
  mounted(){
    this.getFullData()

    setInterval(f=>{
      this.getNewsItem()
    },5000)
  },

  methods: {
    getFullData(){
       var vm = this;

       this.$axios.get('/statics/data-flash.json')
          .then((response) => {
            vm.fulldata = response.data.data      
            this.getNewsItem()      
          })
          .catch((e) => {
            console.log("getFullData",e)
          })

    },
    getNewsItem(){
      if(this.fulldataPointer < 0 || this.fulldataPointer >= this.fulldata.length)
        this.fulldataPointer = 0

      const data = extend(false, {"key":uid()}, this.fulldata[this.fulldataPointer])

      this.items.splice(0, 0, data);
      
      this.fulldataPointer++

      if(this.items.length>20)
        this.items.pop()
    }
  },
  data () {
    return {
      fulldata: [],
      fulldataPointer:0,
      leftDrawer: true,
      items: [],
      show: true
    }
  }
}
</script>
