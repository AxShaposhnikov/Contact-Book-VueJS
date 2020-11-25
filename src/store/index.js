import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: JSON.parse(localStorage.getItem('contacts') || '[]')
  },
  mutations: {
    createContact(state, contact) {
      state.contacts.push(contact)
      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    removeContact(state, id) {
      state.contacts = state.contacts.filter(contact => contact.id !== id)
      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    updateInfo(state) {
      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    removeContactInfo(state, data) {
      const [id, key] = data
      state.contacts.forEach(contact => {
        if (contact.id === id) {
          delete contact.info[key]
        }
      })
      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    }
  },
  actions: {
    createContact({commit}, contact) {
      commit('createContact', contact)
    },
    removeContact({commit}, id) {
      commit('removeContact', id)
    },
    updateInfo({commit}) {
      commit('updateInfo')
    },
    removeContactInfo({commit}, data) {
      commit('removeContactInfo', data)
    },
  },
  getters: {
    contacts: s => s.contacts,
    contactById: s => id => s.contacts.find(c => c.id === id)
  },
  modules: {
  }
})
