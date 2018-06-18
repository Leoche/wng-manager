<template>
  <!--<section class="hero app-navbar is-bold">
    <div class="hero-head">-->
      <header class="navbar is-fixed-top">
        <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item navbar-logo">WNG<span>Manager</span></a>
          <a class="navbar-item is-hidden-desktop" href="https://github.com/ndro/vue-webpack-buefy" target="_blank">
            <i class="fe fe-github"></i>
          </a>
          <div class="navbar-burger burger" data-target="navbarDropdown">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarDropdown" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="#">
              <!-- <router-link :to="{ name: 'Home' }">Home</router-link> -->
            </a>
          </div>

          <div class="navbar-end">
            <!--<div class="navbar-item">-->
              <a class="navbar-item" href="https://github.com/ndro/vue-webpack-buefy" target="_blank">
                <span class="fe fe-github"></span>
              </a>
            <!--</div>-->
            <div class="navbar-item has-dropdown is-hoverable is-active">
              <a class="navbar-link navbar-account" href="#">
                <avatar :username="user.FIRSTNAME + ' ' + user.LASTNAME" :size="32" :lighten="100"></avatar>
                <span>{{ user.NICHANDLE }}</span>
              </a>
              <div class="navbar-dropdown is-right">
                <a class="navbar-item" href="#">
                  Mon compte <i class="fe fe-user"></i>
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="#" @click.prevent="logout">
                  Déconnexion <i class="fe fe-log-out"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </header>
    <!--</div>
  </section>-->
</template>

<script>
import { mapGetters } from 'vuex'
import Avatar from 'vue-avatar'
export default {
  components: {
    Avatar
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    logout () {
      this.$store.dispatch('logout').then(res => this.$localStorage.remove('wng.consumerkey'))
    }
  }
}

/* burger navigation */
document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target
        var $target = document.getElementById(target)
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  box-shadow: 0 5px 35px rgba(0,0,0,.1);
  & .navbar-logo{
    font-family: 'Arvo', sans-serif;
    font-weight: 700;
    & span{
      font-weight: 400;
    }
  }
  & .navbar-account {
    display: flex;
    align-items: center;
    & span{
      padding-left: 8px;
    }
  }
  & .navbar-item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  & .navbar-dropdown{
    border-top: 0;
    & .navbar-item {
      padding-right: 1rem;
      font-size: 16px;
    }
  }
  & .navbar-divider{
    height: 1px;
  }
}
</style>

