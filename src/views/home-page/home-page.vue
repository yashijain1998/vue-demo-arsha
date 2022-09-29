<template src="./home-page.html">
</template>

<script>
import AboutUs from '../../components/about-us/about-us.vue';
// import WhyUs from '../../components/why-us/why-us.vue';
// import SkillComp from '../../components/skills/skills-comp.vue'
import OrgServices from '../../components/services/org-services.vue';
import OrgPortfolio from '../../components/portfolio/org-portfolio.vue';
import OrgTeam from "../../components/team/org-team.vue";
import OrgPricing from '../../components/pricing/org-pricing.vue';
import OrgFaq from '../../components/faq/org-faq.vue';
import OrgContact from '../../components/contact/org-contact.vue';
import OrgLetter from '../../components/newsletter/org-letter.vue';
import FooterTop from '../../components/footer-top/footer-top.vue'

export default {
    name: 'HomePage',
    components: {
        AboutUs,
        // WhyUs,
        // SkillComp
        OrgServices,
        OrgPortfolio,
        OrgTeam,
        OrgPricing,
        OrgFaq,
        OrgContact,
        OrgLetter,
        FooterTop
    },
    methods: {
        isNavShow(value) {
            this.$emit('isNavbarShow', value);
        }
    }
}
</script>

<style lang="scss" scoped src="./home-page.scss">

</style>