import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
  },
  mutations: {
    // 状态变更函数-一般大写
    SET_COUNT (state, n) {
      state.count = n;
    }
  },

  actions: {
    // 触发mutations中相应的方法-一般小写
    set_count ({commit}, data) {
      commit('SET_COUNT', data)
    }
  },
  modules: {
  },
  getters :{
    count: function(state){
        return state.count;
    }
  }
})
