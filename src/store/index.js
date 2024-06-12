import {createPinia} from "pinia";
import {createPersistedState} from "pinia-persistedstate-plugin";

const pinia = createPinia()
const persistedState = createPersistedState();
pinia.use(persistedState)

export default pinia;