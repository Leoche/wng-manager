<template>
  <section class="is-fullheight">
    <NavBar></NavBar>
  </section>
</template>

<script>
import NavBar from '../components/layout/NavBar.vue'

export default {
  name: 'Dashboard',
  components: {
    NavBar
  },
  data () {
    return {
      loading: false
    }
  }
}
</script>

<style lang="scss" scoped>
section{
}
</style>

