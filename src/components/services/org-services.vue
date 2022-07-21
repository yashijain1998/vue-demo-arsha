<template src="./org-services.html">    
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
    name:'OrgServices',
    data() {
        return {
            contentData: []
        }
    },
    computed: {
        
    },
    components: {
		Icon,
	},
    methods: {
        getIcon(icon) {
            let doc = new DOMParser().parseFromString(icon, 'text/html');
            var tag = document.createElement(doc.body.firstChild);
            document.getElementsByClassName('card-title').appendChild(tag);
            // return doc.body.firstChild;
        }
    },
    async created() {
        this.contentData= await fetch('https://api.npoint.io/c29c96089f6288e434e5')
                                .then(res => res.json());
    }
}
</script>

<style lang="scss" scoped src="./org-services.scss">
</style>