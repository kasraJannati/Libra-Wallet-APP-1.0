import Vue from 'vue';

//
Vue.filter('formatCurrency', function (value, currency = '€') {
  if (typeof value == 'number') {
    return value.toLocaleString() + ' ' + currency;
  }
  return 'n/a';
})
