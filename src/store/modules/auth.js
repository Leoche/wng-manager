import Wng from 'wngapi-javascript'

const state = {
  informations: {},
  consumerKey: null
}
const actions = {
  initSession (store, payload) {
    if (typeof payload === 'object') {
      store.commit('SET_ACCOUNT', payload)
    }
  },
  validateAuth (store, payload) {
    return new Promise((resolve, reject) => {
      const wngapi = new Wng()
      wngapi.setConsumerKey(payload.consumerKey)
      wngapi.get('/auth/consumerKey').send().then(res => {
        if (res.return.consumerWork) {
          store.commit('SET_CONSUMER_KEY', payload.consumerKey)
          resolve()
        } else {
          reject(new Error('Consumer key not valid'))
        }
      })
    })
  },
  getConsumerKey (store, payload) {
    return new Promise((resolve, reject) => {
      const wngapi = new Wng()
      console.log('wngapi', wngapi)
      wngapi.post('/auth/credential', {
        EXPIRATION: 0,
        APLICATION_NAME: 'vManagerJS',
        APLICATION_DESCRIPTION: 'A VueJS Manager for WNG',
        REDIRECTION: window.location.href
      }).send().then(res => {
        if (res.state && typeof res.return.consumerKey === 'string') {
          store.commit('SET_CONSUMER_KEY', res.return.consumerKey)
          resolve(res.return)
        } else {
          reject(new Error('Can\'t create a new consumer key'))
        }
      })
    })
  },
  logout (store) {
    store.commit('RESET_ACCOUNT')
  }
}
const getters = {
  getConsumerKey: state => { return state.consumerKey },
  getUser: state => { return state.informations },
  isLogged: state => { return state.informations.email !== undefined }
}
const mutations = {
  SET_CONSUMER_KEY (state, consumerKey) {
    state.consumerKey = consumerKey
  },
  RESET_CONSUMER_KEY (state) {
    state.consumerKey = null
  },
  SET_ACCOUNT (state, user) {
    state.informations = user
  },
  RESET_ACCOUNT (store) {
    state.informations = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
