<template src='./move-top.html'>
</template>

<script>
export default {
    name:'MoveTop',
    methods: {
        moveToTop() {
            window.scroll(0,0)
        }
    }
}
</script>

<style lang="scss" scoped src='./move-top.scss'>
</style>