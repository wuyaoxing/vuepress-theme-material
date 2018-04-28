<template>
    <footer class="site-footer --ellipsis">
        Copyright © 2018-present {{$site.title}}
        <a href="https://github.com/wuyaoxing/vuepress-theme-material">theme</a>
    </footer>
</template>
<style lang="stylus">
@import '../../style/variables'
.site-footer
    a
        padding 0 5px
        color #d1c4e9
        &:hover
            color $header-text-color
</style>
