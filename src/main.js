import Vue from 'vue';
import App from './app/index.vue';

import './assets/styles/thirdparty/_tailwindcss.scss';

const createApp = () => {
  new Vue({
    render: h => h(App),
  }).$mount('#app');
};

createApp();
