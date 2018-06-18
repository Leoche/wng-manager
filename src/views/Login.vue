<template>
  <section class="hero is-fullheight">
    <div class="box">
      <div class="background"></div>
      <div class="content">
        <div>
          <div class="level">
            <div class="level-right">
              <div class="level-item"><p class="title">Login</p></div>
            </div>
            <div class="level-right">
              <div class="level-item"><p class="title"><i class="fe fe-lock has-text-grey-lighter"></i></p></div>
            </div>
          </div>
          <p class="subtitle has-text-grey">Please login to proceed</p>
          <p class="has-text-grey-light">You will be redirected to Wng to proceed an authentification</p>
        </div>
        <p class="buttons">
          <a class="button is-blank"><i class="fe fe-arrow-left"></i> Retour au site</a>
          <a :class="{'is-loading':loading}" class="button is-link" @click.prevent="login">Login <i class="fe fe-log-in"></i></a>
        </p>
      </div>
    </div>
    <p class="has-text-grey is-size-6 has-text-centered">Sign Up  ·  Forgot Password  ·  Need Help?</p>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loading: false
    }
  },
  methods: {
    login () {
      this.loading = true
      this.$store.dispatch('getNewConsumerKey').then(res => {
        console.log('res', res)
        this.loading = false
        this.$localStorage.set('wng.consumerkey', res.consumerKey)
        window.location.href = res.validationUrl
      })
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F2F6FA;
  .background{
    background: url('https://cdn.dribbble.com/users/1049434/screenshots/4469284/illustration_for_lexop.png') 70% top;
    width: 100px;
    height: 100%;
    background-size: cover;
    opacity: .8;
  }
  &>p.has-text-grey-light{
    margin-bottom: 16px;
  }
  & p.subtitle{
    margin-bottom: 16px;
  }
  & .box{
    width: 500px;
    height: 250px;
    overflow: hidden;
    display: flex;
    padding:0;
    box-shadow: 0 15px 35px rgba(0,0,0,.2);
    & .level{
      margin-bottom: 1rem;
    }
    & .content {
      padding: 1.25rem;
      flex-grow: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      & .buttons{
        display: flex;
        justify-content: space-between;
        & .is-link i{
          padding-left:8px;
        }
        & .is-blank i{
          padding-right:8px;
        }
      }
    }
  }
}
</style>

