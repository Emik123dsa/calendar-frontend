import Vue from 'vue';

export const createApp = () => {
  new Vue({
    render: (h) => h('div', '12345354asdasdasadsdasdasdds3'),
  }).$mount('#app');
};
