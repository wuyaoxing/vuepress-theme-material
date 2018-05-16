<template>
    <AppLayout :class="$material">
        <canvas id="canvas" v-if="isHome"></canvas>
        <div class="site-layout">
            <Header class="site-layout__header"
                    :class="`${$material}__base`"
                    v-if="!isHome"></Header>
            <div class="site-layout__content">
                <component class="site-layout__content-container"
                           :style="containerStyle"
                           :is="layout" />
                <Footer class="site-layout__footer" v-if="!isHome"></Footer>
            </div>
        </div>
    </AppLayout>
</template>
<script>
import AppLayout from './components/layout/AppLayout'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './Home'
import Articles from './Articles'
import Article from './components/layout/Article'

export default {
    name: "site-layout",
    components: {
        AppLayout,
        Header,
        Footer,
        Home,
        Articles,
        Article
    },
    computed: {
        layout() {
            return this.$page.frontmatter.layout || 'Article'
        },
        isHome() {
            return this.$page.frontmatter.title === 'Home'
        },
        containerStyle() {
            return {
                minHeight: this.isHome ? `calc(100vh - 75px)` : `calc(100vh - 125px)`
            }
        }
    }
}
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
    &__header
        line-height 50px
    &__header
        box-shadow 0 1px 3px 0 rgba(0, 0, 0, 0.4)
    &__content
        flex 1
        overflow auto
        -webkit-overflow-scrolling touch
        &-container
            padding 10px
            margin 0 auto
            box-sizing border-box
    &__footer
        height 75px
        box-shadow 0 0 3px 1px rgba(0, 0, 0, 0.4)
        text-align center
        font-size $font-size-small
        color $white-text-color
</style>
