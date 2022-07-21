<template>
  <div id="app">
    <MainHeader/>
    <OrgIntro/>
    <OrgPartner/>
    <router-view/>
    <OrgFooter/>
    <MoveTop/>
  </div>
</template>

<script>
import MainHeader from './components/header/main-header.vue'
import OrgIntro from './components/org-intro/org-intro.vue'
import OrgPartner from './components/partner/org-partner.vue'
import OrgFooter from './components/footer/org-footer.vue'
import MoveTop from './components/move-top/move-top.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    OrgIntro,
    OrgPartner,
    OrgFooter,
    MoveTop
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* font-family: "Open Sans", sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
