import Wng from 'wngapi-javascript'

const state = {
  informations: {},
  consumerKey: null,
  state: 'LOADING'
}
const actions = {
  validateAuth (store, payload) {
    return new Promise((resolve, reject) => {
      const wngapi = new Wng()
      wngapi.setConsumerKey(payload.consumerKey)
      wngapi.get('/auth/consumerKey').send().then(res => {
        store.commit('SET_STATE', 'VALIDATED')
        if (res.return.consumerWork) {
          store.commit('SET_CONSUMER_KEY', payload.consumerKey)
          wngapi.get('/manager/me').send().then(res => {
            store.commit('SET_ACCOUNT', res.return)
            store.commit('SET_STATE', 'LOGGED')
            resolve(res.return)
          })
        } else {
          store.commit('SET_STATE', 'LOGOUT')
          reject(new Error('Consumer key not valid'))
        }
      })
    })
  },
  getNewConsumerKey (store, payload) {
    return new Promise((resolve, reject) => {
      const wngapi = new Wng()
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
    return new Promise((resolve, reject) => {
      const wngapi = new Wng()
      wngapi.setConsumerKey(store.getters.getConsumerKey)
      wngapi.delete('/auth/consumerKey').send().then(res => {
        if (res.state) {
          store.commit('RESET_CONSUMER_KEY')
          store.commit('RESET_ACCOUNT')
          store.commit('SET_STATE', 'LOGOUT')
        }
      })
    })
  },
  noConsumerKey (store) {
    store.commit('SET_STATE', 'LOGOUT')
  }
}
const getters = {
  getAuthState: state => { return state.state },
  getConsumerKey: state => { return state.consumerKey },
  getUser: state => { return state.informations },
  isLogged: state => { return state.informations.NICHANDLE !== undefined }
}
const mutations = {
  SET_CONSUMER_KEY (state, consumerKey) {
    state.consumerKey = consumerKey
  },
  SET_STATE (state, stateName) {
    state.state = stateName
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
