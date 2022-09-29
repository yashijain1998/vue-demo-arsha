<template src ="./main-header.html">
    
</template>

<script>
export default {
    name: 'MainHeader',
    data() {
        return {
            isScroll: false
        }
    },
    computed: {
        isVissible() {
            if(this.isShown === null) {
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
                name: 'SecondPage'
            });
        },
        handleScroll() {
            this.isScroll = window.pageYOffset > 0; 
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
  },
}
</script>

<style lang="scss" scoped src="./main-header.scss">

</style>