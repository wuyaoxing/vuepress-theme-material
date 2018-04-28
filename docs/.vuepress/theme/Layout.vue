<template>
    <AppLayout>
        <div class="site-layout">
            <Header class="site-layout__header --primary"></Header>
            <div class="site-layout__content">
                <component :is="layout"/>
            </div>
            <Footer class="site-layout__footer --dark --light-text-color"></Footer>
        </div>
    </AppLayout>
</template>
<script>
import AppLayout from './components/layout/AppLayout'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './Home'
import Article from './components/layout/Article'

export default {
    name: "site-layout",
    components: {
        AppLayout,
        Header,
        Footer,
        Home,
        Article
    },
    computed: {
        layout() {
            return this.$page.frontmatter.layout || 'Article'
        }
    }
};
</script>
<style lang="stylus">
@import './style/variables.styl'

.site-layout
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    overflow hidden
    display flex
    flex-direction column
    &__header, &__footer
        height 45px
        line-height 45px
    &__header
        box-shadow 0 1px 3px 0 rgba(0, 0, 0, 0.4)
    &__content
        flex 1
        overflow auto
        -webkit-overflow-scrolling touch
    &__footer
        box-shadow 0 0 3px 1px rgba(0, 0, 0, 0.4)
        text-align center
        font-size $font-size-small
</style>
