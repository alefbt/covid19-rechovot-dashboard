<template>
<q-page class="column justify-start" padding="">
   <div class="row">
     <div class="col">
           <q-editor v-model="editor" min-height="15rem"
           :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          },
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }" />
     </div>
     <div class="col">
       <q-card flat bordered>
        <q-card-section>
          <label for="">הדבק טקסט פשוט:</label>
          <textarea style="white-space: pre-line; width: 100%; height: 100%" v-model="editor"></textarea>
        </q-card-section>
        <q-card-section>
          <label for="">תוצאה ל JSON</label>
          <textarea readonly style="white-space: pre-line; width: 100%; height: 100%" v-model="currentData"></textarea>
        </q-card-section>
      </q-card>
     </div>
   </div>
</q-page>
</template>

<style lang="stylus">
</style>
<script>
import LayoutBuilder from 'components/layouts/LayoutBuilder'

export default {
  name: 'PageCreate',

  components: {},
  mounted(){},
  data () {
    return {
      data: {},
      editor:""
    }
  },  
  computed: {
    currentData(){
      let o = {
        "type": "text",
        "text": this.editor
      }
      return JSON.stringify(o)
    }
  },
   methods: {  }
}
</script>
