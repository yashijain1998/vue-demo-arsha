<template>
  <div id="app">
    <MainHeader :isShown ='isShown'/>
    <OrgIntro/>
    <OrgPartner/>
    <router-view @isNavbarShow ='isNavbarShow'/>
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
  },
  data() {
    return {
      isShown: null
    }
  },
  created() {
    console.log('app started');
  },
  methods: {
    isNavbarShow(value) {
      this.isShown = value
    }
  }
}
</script>

<style lang="scss" src="./assets/styles/index.scss"></style>
