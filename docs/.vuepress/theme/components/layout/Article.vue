<template>
    <div class="site-article">
        <div class="site-article__line" ref="line"></div>
        <div class="site-article__content --white">
            <Content :custom="false" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'site-article',
    mounted() {
        this.$nextTick(() => {
            this.$refs.line && this.$refs.line.scrollIntoView()
        })
    }
}
</script>
<style lang="stylus">
.site-article
    &__content
        padding 10px
        margin 30px
        border-radius 2px
        box-shadow 0 6px 30px rgba(0, 0, 0, 0.4)
    &__line
        margin -10px 0 10px
@media all and (max-width: 700px)
    .site-article
        &__content
            margin 0
</style>

