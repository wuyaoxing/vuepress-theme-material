<template>
    <AppLayout>
        <div class="site-layout">
            <Header class="site-layout__header"></Header>
            <div class="site-layout__content">
                {this.props.children}
            </div>
            <footer class="site-layout__footer">footer</footer>
        </div>
    </AppLayout>
</template>
<script>
import AppLayout from './components/layout/AppLayout'
import Header from './components/layout/Header'

export default {
    name: "site-layout",
    components: {
        AppLayout,
        Header
    }
};
</script>
<style lang="stylus">
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
        height 45px
        box-shadow 0 1px 3px 0 rgba(0, 0, 0, 0.4)
    &__content
        flex 1
        overflow auto
        -webkit-overflow-scrolling touch
    &__footer
        height 45px
        box-shadow 0 0 3px 1px rgba(0, 0, 0, 0.4)

</style>
