<template>
    <div class="site-card">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'site-card',
}
</script>
<style lang="stylus">
@import '../../style/variables';

.site-card
    overflow hidden
    border-radius 2px
    box-shadow 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)
    &:hover
        box-shadow 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)

</style>
