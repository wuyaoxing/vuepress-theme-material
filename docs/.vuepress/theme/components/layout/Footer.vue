<template>
    <footer class="site-footer --ellipsis">
        <div class="site-footer__copyright"
             :class="`${$material}__darken-3`">
            Copyright © 2018-present {{$site.title}}
        </div>
        <div class="site-footer__theme"
             :class="`${$material}__darken-4`">
            Power by
            <a href="https://vuepress.vuejs.org"
               target="_blank">VuePress</a> Theme
            <a href="https://github.com/wuyaoxing/vuepress-theme-meterial"
               target="_blank">meterial</a>
        </div>
    </footer>
</template>
<style lang="stylus">
@import '../../style/variables'
.site-footer
    &__theme
        line-height 30px
    &__copyright
        line-height 45px
    a
        padding 0 5px
        color #d1c4e9
        &:hover
            color $header-text-color
</style>
