<template src="./org-pricing.html">
</template>

<script>
export default {
    name:'OrgPricing',
    data() {
        return {
            PlanDetails: [],
        }
    },
    async created() {
        this.PlanDetails = await fetch('https://api.npoint.io/4394971e600dd6948c3e').then(res => res.json());
    }
}
</script>

<style lang="scss" scoped src="./org-pricing.scss">
</style>