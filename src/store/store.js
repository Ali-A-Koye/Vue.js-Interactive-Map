import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectedBeforeMap:"",
    MapObj:"" ,
    PostSelectedAvatar:"PostingAvatar",
    Selectedlatitude:"",
    Selectedlongitude:""
  },
  getters: {
    selectedType : state => {
      return state.selectedBeforeMap
    },
    PostSelectedPicture : state => {
      return state.PostSelectedAvatar
    },
    SelectedlatitudeGet : state => {
      return state.Selectedlatitude
    },
    SelectedlongitudeGet : state => {
      return state.Selectedlongitude
    }
  },
  mutations:{
    selectedMap : (state,token) => {
      state.selectedBeforeMap = token
    }
  }
});
