<template>
    <div class="site-app-layout --primary-background">
        <div class="site-app-layout__north">
            <slot name="north"></slot>
        </div>
        <div class="site-app-layout__center">
            <slot></slot>
        </div>
        <div class="site-app-layout__south">
            <slot name="south"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "site-app-layout"
};
</script>
<style lang="stylus">
.site-app-layout
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    z-index 0
    display flex
    flex-direction column
    &__center
        position relative
        z-index 1
        flex 1 1
        contain strict
        overflow hidden
    &__south
        position relative
        z-index 2
        flex none
    &__north
        position relative
        z-index 3
        flex none
    &__center-contents
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        overflow hidden
        -webkit-overflow-scrolling touch
</style>
