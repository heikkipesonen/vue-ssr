<template>
<div>
  <h2>main</h2>
</div>
</template>
<script>
  import api from '../api'
  import { mapGetters } from 'vuex'

  export default {
    components: {
    },

    head () {
      return {
        title: this.page.title
      }
    },

    computed: {
      ...mapGetters({
        page: 'frontpage'
      })
    },

    methods: {

    }
  }
</script>
<style lang="scss" scoped>
@import '../styles/variables';

</style>
