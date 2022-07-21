<template src="./why-us.html"></template>

<script>
export default {
    name: 'WhyUs',
    data() {
        return {
            isOpenFirst: false,
            isOpenSecond: false,
            isOpenThird: false
        }
    },
    methods: {
        isFirstvisible() {
            this.isOpenFirst = !this.isOpenFirst;
        },
        isSecondvisible() {
            this.isOpenSecond = !this.isOpenSecond;
        },
        isThirdvisible() {
            this.isOpenThird = !this.isOpenThird;
        }
    }
}
</script>

<style lang="scss" scoped src="./why-us.scss">
</style>