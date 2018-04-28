<template>
    <div class="site-home">
        <Card :article="item" v-for="item in articles"></Card>
    </div>
</template>
<script>
import Card from './components/layout/Card'

export default {
    name: 'site-home',
    components: {
        Card
    },
    computed: {
        articles() {
            return this.$site.pages.filter(item => item.title !== 'Home')
        }
    }
}
</script>
<style lang="stylus">
.site-home
    padding 50px
</style>

