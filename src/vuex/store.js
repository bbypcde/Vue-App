import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    bgColor:'red',
    text:""
    // photoData:[]
}

const mutations = {
    change(state,{bgColor,text}){
        state.bgColor = bgColor;
        state.text = text;

    }
    
    
}

export default new Vuex.Store({
    state,
    mutations
});