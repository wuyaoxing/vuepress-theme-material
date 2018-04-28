<template>
    <router-link :to="article.path"
                 class="site-card --white">
        <h3 class="site-card__title">
            {{article.title}}
        </h3>
        <div class="site-card__date"></div>
    </router-link>
</template>
<script>
export default {
    name: 'site-card',
    props: {
        article: Object
    }
}
</script>
<style lang="stylus">
@import '../../style/variables'
.site-card
    display block
    text-decoration none
    padding 20px
    margin-bottom 15px
    border-radius 2px
    box-shadow 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)
    &:hover
        box-shadow 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)
    &:last-of-type
        margin-bottom 0
    &__title
        color $accent-color
        font-weight 600

</style>
