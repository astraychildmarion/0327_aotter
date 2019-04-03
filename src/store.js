import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase'

Vue.use(Vuex)
require('firebase/firestore')

 
var firebaseApp = Firebase.initializeApp({ 
  apiKey: "AIzaSyDYh7Wxtx3zkrH5ovDi10Mx4hGuMK2n47g",
  authDomain: "ablog-c0f89.firebaseapp.com",
  databaseURL: "https://ablog-c0f89.firebaseio.com",
  projectId: "ablog-c0f89",
  storageBucket: "ablog-c0f89.appspot.com",
  messagingSenderId: "497213046434"
 })
 export const firestore = firebaseApp.firestore();

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
