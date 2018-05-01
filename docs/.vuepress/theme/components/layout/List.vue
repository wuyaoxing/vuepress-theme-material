<template>
    <router-link :to="article.path"
                 class="site-list">
        <Card class="site-list__card --white --primary-text-color">
            <span class="site-list__title">
                {{article.title}}
            </span>
            <div class="site-list__date">{{formatDate(article.frontmatter.date)}}</div>
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
    },
    methods: {
        formatDate(date) {
            return new Date(date).toLocaleDateString()
        }
    }
}
</script>
<style lang="stylus">
@import '../../style/variables'
.site-list
    display block
    text-decoration none
    margin-bottom 8px
    &:last-of-type
        margin-bottom 0
    &__card
        padding 16px
    &__title
        font-size 20px
    &__date
        margin-top 8px
</style>
