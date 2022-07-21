<template src="./org-team.html">
</template>

<script>
import amanda from '../../assets/images/team/Amanda-Jepson.jpg';
import sarah from '../../assets/images/team/Sarah-Jhonson.jpg';
import walter from '../../assets/images/team/walter-white.jpg';
import william from '../../assets/images/team/william-anderson.jpg';

export default {
    name:'OrgTeam',
    data() {
        return {
            teamDetails: [],
            memberImages: [walter,sarah,william,amanda]
        }
    },
    async created() {
        this.teamDetails = await fetch('https://api.npoint.io/251db8163b766e04b4cb')
                                .then(res => res.json());
        this.teamDetails.map((member,index) => {
            member['image'] = this.memberImages[index];
        })
    }
}
</script>

<style lang="scss" scoped src="./org-team.scss">
</style>