<template>
  <section class="hero is-fullheight">
    <div class="spinner">
      <div class="dot1"></div>
      <div class="dot2"></div>
    </div>
    <p class="title"><span>WNG</span>Manager</p>
    <p class="subtitle has-text-grey">Chargement...</p>
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
      this.$store.dispatch('getConsumerKey').then(res => {
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
  & .title{
    font-family: 'Arvo', sans-serif;
    font-weight: 400;
    & span{
      font-weight: 700;
    }
  }
}
.spinner {
  margin: 30px auto;
  width: 80px;
  height: 80px;
  position: relative;
  text-align: center;

  -webkit-animation: sk-rotate 2.0s infinite linear;
  animation: sk-rotate 2.0s infinite linear;
}

.dot1, .dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #333;
  border-radius: 100%;

  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}
@keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}

@-webkit-keyframes sk-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bounce {
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>

