<template>
    <header class="site-header --ellipsis">
        <b>{{title}}</b>
        <div class="site-header__nav">
            <router-link to="/">
                <i class="icon-home"></i>
            </router-link>
        </div>
    </header>
</template>
<script>
export default {
    name: 'site-title',
    computed: {
        title() {
            return this.$page.frontmatter.title === 'Articles' ? `${this.$site.title}` : `${this.$page.title} · article`
        }
    }
}
</script>

<style lang="stylus">
@import '../../style/variables'
.site-header
    display flex
    justify-content space-between
    padding-left 15px
    color $white-text-color
    &__nav
        i
            padding 15px
</style>

