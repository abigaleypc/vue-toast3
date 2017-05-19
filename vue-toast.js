var Toast = {};

Toast.install = function (Vue, options) {
  let opt = {
    defaultType: 'buttom',
    duration: 2500
  };
  Vue.prototype.$toast = function (msg, type) {
    let ToastTpl = Vue.extend({
      template: '<div class="vue-toast">' + msg + '</div>'
    });
    let tpl = new ToastTpl().$mount().$el;
    if (document.body.getElementsByClassName('vue-toast').length) {
      return;
    };
    document.body.appendChild(tpl);
    setTimeout(function () {
      document.body.removeChild(tpl);
    }, opt.duration);
  };
};

module.exports = Toast;
