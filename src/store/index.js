import { createStore } from 'vuex';

export default createStore({
  // 需要维护的状态
    state: {
    isAuthenticated: false, // 设置默认登录状态为false
  },
  // 改变全局属性的唯一方法:mutations
  mutations: {
    // 设置登录状态
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  },
  // 异步方法actions
  // actions不能直接修改全局变量，需要调用commit方法来触发mutations中的方法
  actions: {
    async inlog({ commit }, credentials) {
      // 假设 login(credentials) 直接返回一个布尔值表示认证成功与否
      const isAuthenticated = await login(credentials);
      commit('setAuthenticated', isAuthenticated);
    },
    async outlog({ commit }) {
      // 假设 logout() 直接执行注销操作，并返回一个布尔值表示注销成功与否
      const isAuthenticated = logout();
      commit('setAuthenticated', isAuthenticated);
    },
  },
});
