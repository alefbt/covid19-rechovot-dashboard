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
          כל הזכויות שמורות 

          ל<a href="https://www.alefbt.com/">אלףבט וקורוטקין</a>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>

</template>

<style lang="stylus">
.info-card
  transition: all 2.5s
</style>
<script>
export default {
  name: 'MainLayout',
  mounted(){
    setInterval(f=>{
      this.getNewsItem()
    },3000)
  },

  methods: {
    getNewsItem(){
      this.items.splice(0, 0, {"key":'idx-' + this.items.length});
      if(this.items.length>30)
        this.items.pop()
    }
  },
  data () {
    return {
      leftDrawer: true,
      items: [],
      show: true
    }
  }
}
</script>
