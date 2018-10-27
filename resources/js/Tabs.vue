<template>
  <f7-page :page-content="false">
    <f7-navbar title="Static Tabs"></f7-navbar>
    <f7-toolbar tabbar>
      <f7-link tab-link="#tab-1" tab-link-active>Tab 1</f7-link>
      <f7-link tab-link="#tab-2">Tab 2</f7-link>
    </f7-toolbar>
    <f7-tabs swipeable>
      <f7-tab id="tab-1" class="page-content" tab-active>
        <home-tab></home-tab>
      </f7-tab>
      <f7-tab id="tab-2" class="page-content">
        <about-tab></about-tab>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script>
  import HomeTab from './pages/Home.vue'
  import AboutTab from './pages/About.vue'
  
  export default {
    components: {
      HomeTab,
      AboutTab
    }
  }
</script>