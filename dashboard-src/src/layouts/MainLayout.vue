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
            test
          </div>
      </q-toolbar>
    </q-header>

    <q-drawer content-style="overflow: hidden;" v-model="leftDrawer" side="left" bordered>
 

      <transition-group
  appear
  enter-active-class="animated slideInTop"
  leave-active-class="animated fadeOut" 
      >
      <q-card class="info-card" v-for="item in items" :key="item.key">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2"> </div>
        </q-card-section> 

        <q-card-section>
          <p>
            ur
          </p>
        </q-card-section>

        <q-card-actions>
          <q-item-label caption>
            <q-icon icon="event"></q-icon> 5:30PM

            עודכן ע"י:
            <strong>John Doe</strong>
          </q-item-label>
        </q-card-actions>

      </q-card>

      </transition-group>
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
  transition: all 2.5s
</style>
<script>
import { uid,extend } from 'quasar'

export default {
  name: 'MainLayout',
  mounted(){
    this.getFullData()

    setInterval(f=>{
      this.getNewsItem()
    },3000)
  },

  methods: {
    getFullData(){
       var vm = this;

       this.$axios.get('/statics/data-flash.json')
          .then((response) => {
            vm.fulldata = response.data.data            
          })
          .catch((e) => {
            console.log("getFullData",e)
          })

    },
    getNewsItem(){

      if(this.fulldataPointer < 0 || this.fulldataPointer > this.fulldata.length)
        this.fulldataPointer = 0

      const data = extend(false, {"key":uid()}, this.fulldata[this.fulldataPointer]) //JSON.parse(JSON.stringify(this.fulldata[this.fulldataPointer])))
      this.items.splice(0, 0, data);
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
