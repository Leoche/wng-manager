<template>
  <div id="app">
<!--      -->
    <login v-if="authState === 'LOGOUT'"></login>
    <template v-else>
      <main-content v-if="authState === 'LOGGED'"></main-content>
      <loading v-else></loading>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { MainContent } from 'components/layout/'
import Login from 'views/Login'
import Loading from 'views/Loading'

export default {
  components: {
    'main-content': MainContent,
    'login': Login,
    'loading': Loading
  },
  computed: {
    ...mapGetters({
      isLogged: 'isLogged',
      authState: 'getAuthState'
    })
  },
  mounted () {
    let consumerKey = this.$localStorage.get('wng.consumerkey')
    if (typeof consumerKey === 'string') {
      this.$store.dispatch('validateAuth', {consumerKey: consumerKey}).then(res => {
        this.$router.push('Dashboard')
        this.$toast.open({
          message: 'Connected!',
          type: 'is-success'
        })
      }).catch(err => {
        console.error('err', err)
        this.$localStorage.remove('wng.consumerkey')
        this.$toast.open({
          message: 'Your credentials are expired!',
          type: 'is-danger'
        })
      })
    } else {
      this.$store.dispatch('noConsumerKey')
    }
  }
}
</script>

<style lang="scss">
@import '~animate.css';
.animated {
  animation-duration: .377s;
}

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors

// Setup $colors to use as bulma classes (e.g. 'is-twitter')

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

// global custom style
.has-shadow {
  box-shadow: 0 2px 3px hsla(0,0%,4%,.1);
}
html, body{
  min-height: calc(100vh);
}
body{
  background: #F2F6FA;
}
</style>
