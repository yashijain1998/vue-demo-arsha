<template src ="./main-header.html">
    
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      isScroll: false
    };
  },
  computed: {
    isVissible() {
      if (this.isShown === null) {
        return true;
      }
      return this.isShown;
    }
  },
  props: {
    isShown: Boolean
  },
  methods: {
    goTosecondpage() {
      this.$router.push({
        name: "SecondPage",
      });
    },
    handleScroll() {
      this.isScroll = window.pageYOffset > 0;
    },
    
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    let anchorSelector = 'a[href^="#"]';
    // Collect all such anchor links
    let anchorList = document.querySelectorAll(anchorSelector);
    function removeHash() {
      history.replaceState(
        "",
        document.title,
        window.location.origin +
          window.location.pathname +
          window.location.search
      );
    }

    anchorList.forEach((link) => {
      link.onclick = function (e) {
         setTimeout(() => {
            removeHash();
          }, 5);
        e.preventDefault();
        let destination = document.querySelector(this.hash);
        destination.scrollIntoView({
          behavior: "smooth",
        });
      };
    });
    
  },
};
</script>

<style lang="scss" scoped src="./main-header.scss">
</style>