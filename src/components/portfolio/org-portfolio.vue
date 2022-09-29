<template src="./org-portfolio.html">
</template>

<script>
import bottle from '../../assets/images/app/bottle.jpg';
import port from '../../assets/images/app/port.jpg';
import table from '../../assets/images/app/table.jpg';
import specs from '../../assets/images/card/specs.jpg';
import lens from '../../assets/images/card/lens.jpg';
import glass from '../../assets/images/card/glass.jpg';
import cup from '../../assets/images/web/cup.jpg';
import lamp from '../../assets/images/web/lamp.jpg';
import watch from '../../assets/images/web/watch.jpg';
import $ from 'jquery';

export default {
    name:'OrgPortfolio',
    data() {
        return {
            portImg: [
               { url: bottle, alt: 'App 1', sub: 'App' ,id:0},
                { url: cup, alt: 'Web 1', sub: 'Web' ,id:1},
                { url: port, alt: 'App 2', sub: 'App' ,id:2},
                { url: table, alt: 'App 3', sub: 'App',id:3 },
                { url: lamp, alt: 'Web 2', sub: 'Web',id:4 },
                { url: specs, alt: 'Card 1', sub: 'Card',id:5 },
                { url: watch, alt: 'Web 3', sub: 'Web' ,id:6},
                { url: lens, alt: 'Card 2', sub: 'Card',id:7},
                { url: glass, alt: 'Card 3', sub: 'Card',id:8}
            ],
            currentImage: null,
            isshow : false
        }
    },
    methods: {
        allImages() {
             this.portImg= [
                { url: bottle, alt: 'App 1', sub: 'App' ,id:0},
                { url: cup, alt: 'Web 1', sub: 'Web' ,id:1},
                { url: port, alt: 'App 2', sub: 'App' ,id:2},
                { url: table, alt: 'App 3', sub: 'App',id:3 },
                { url: lamp, alt: 'Web 2', sub: 'Web',id:4 },
                { url: specs, alt: 'Card 1', sub: 'Card',id:5 },
                { url: watch, alt: 'Web 3', sub: 'Web' ,id:6},
                { url: lens, alt: 'Card 2', sub: 'Card',id:7},
                { url: glass, alt: 'Card 3', sub: 'Card',id:8}
            ]
        },
        appImages() {
             this.portImg= [
                { url: bottle, alt: 'App 1', sub: 'App' },
                { url: port, alt: 'App 2', sub: 'App' },
                { url: table, alt: 'App 3', sub: 'App' }
            ]
        },
        cardImages() {
            this.portImg= [
                { url: specs, alt: 'Card 1', sub: 'Card' },
                { url: lens, alt: 'Card 2', sub: 'Card' },
                { url: glass, alt: 'Card 3', sub: 'Card' }
            ]
        },
        webImages() {
            this.portImg= [
                { url: cup, alt: 'Web 1', sub: 'Web' },
                { url: lamp,alt: 'Web 2', sub: 'Web' },
                { url: watch, alt: 'Web 3', sub: 'Web'  }
            ]
        },
        displayFullImage(id) {
            this.currentImage = id;
            this.isshow = true;
            this.$emit('isNavbarShow', false);
        },
        doSomethingOnHidden() {
            var element = document.querySelectorAll(".carousel-item");
            element.forEach(el => el.classList.remove("active"));
            this.isshow = false;
            this.$emit('isNavbarShow', true);
        }

    },
    mounted () {
        $(this.$refs.vuemodal).on("hidden.bs.modal", this.doSomethingOnHidden);
    }
}
</script>

<style lang="scss" scoped src="./org-portfolio.scss">
</style>