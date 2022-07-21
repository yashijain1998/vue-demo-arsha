<template src="./org-faq.html">
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
    name:'OrgFaq',
    data() {
        return {
            isOpenFirst: false,
            isOpenSecond: false,
            isOpenThird: false,
            isOpenFourth: false,
            isOpenFifth: false
        }
    },
    components: {
		Icon,
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
        },
        isfourvisible() {
            this.isOpenFourth = !this.isOpenFourth;
        },
        isfifthvisible() {
            this.isOpenFifth = !this.isOpenFifth;
        }
    }
}
</script>

<style lang="scss" scoped src="./org-faq.scss">
</style>