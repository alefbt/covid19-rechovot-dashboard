<template>
<q-page class="column justify-start">
  aaa
</q-page>
</template>

<style lang="stylus">
  #page-id-a
    background-color: #f0f0f0
</style>
<script>
export default {
  name: 'PageIndex',
   methods: {
    myTweak (offset) {
      // "offset" is a Number (pixels) that refers to the total
      // height of header + footer that occupies on screen,
      // based on the QLayout "view" prop configuration

      // this is actually what the default style-fn does in Quasar
      return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh' }
    }
  }
}
</script>
