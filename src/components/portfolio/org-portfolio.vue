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

export default {
    name:'OrgPortfolio',
    data() {
        return {
            portImg: [
                { url: bottle, alt: 'App 1', sub: 'App' },
                { url: cup, alt: 'Web 1', sub: 'Web' },
                { url: port, alt: 'App 2', sub: 'App' },
                { url: table, alt: 'App 3', sub: 'App' },
                { url: lamp, alt: 'Web 2', sub: 'Web' },
                { url: specs, alt: 'Card 1', sub: 'Card' },
                { url: watch, alt: 'Web 3', sub: 'Web' },
                { url: lens, alt: 'Card 2', sub: 'Card'},
                { url: glass, alt: 'Card 3', sub: 'Card' }
            ]
        }
    },
    methods: {
        allImages() {
             this.portImg= [
                { url: bottle, alt: 'App 1', sub: 'App' },
                { url: cup, alt: 'Web 1', sub: 'Web' },
                { url: port, alt: 'App 2', sub: 'App' },
                { url: table, alt: 'App 3', sub: 'App' },
                { url: lamp, alt: 'Web 2', sub: 'Web' },
                { url: specs, alt: 'Card 1', sub: 'Card' },
                { url: watch, alt: 'Web 3', sub: 'Web' },
                { url: lens, alt: 'Card 2', sub: 'Card'},
                { url: glass, alt: 'Card 3', sub: 'Card' }
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
        }
    }
}
</script>

<style lang="scss" scoped src="./org-portfolio.scss">
</style>