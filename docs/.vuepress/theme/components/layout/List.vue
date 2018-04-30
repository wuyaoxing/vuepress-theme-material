<template>
    <router-link :to="article.path"
                 class="site-list">
        <Card class="site-list__card --white">
            <span class="site-list__title --primary-text-color">
                {{article.title}}
            </span>
            <div class="site-list__date"></div>
        </Card>
    </router-link>
</template>
<script>
import Card from './Card'

export default {
    name: 'site-list',
    components: {
        Card
    },
    props: {
        article: Object
    }
}
</script>
<style lang="stylus">
@import '../../style/variables'
.site-list
    display block
    text-decoration none
    margin-bottom 15px
    &:last-of-type
        margin-bottom 0
    &__card
        padding 20px
    &__title
        font-size 20px
</style>
