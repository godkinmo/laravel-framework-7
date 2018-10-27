
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// Import Vue
import Vue from 'vue'

// Import F7 Bundle
import Framework7 from 'framework7/framework7.esm.bundle.js'

// Import F7-Vue Plugin Bundle (with all F7 components registered)
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'

// Init F7-Vue Plugin
Framework7.use(Framework7Vue);

// Import Main App component
import App from './App.vue';

// Init App
new Vue({
  el: '#app',
  render: (h) => h(App),
});