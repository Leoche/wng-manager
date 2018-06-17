<template>
  <div id="app">
    <main-content></main-content>
  </div>
</template>

<script>
import { MainContent } from 'components/layout/'

export default {
  components: {
    'main-content': MainContent
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
</style>
