<template>
    <header class="site-header --ellipsis">
        <b>{{title}}</b>
        <div class="site-header__nav">
            <router-link to="/">Home</router-link>
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
@import '../../style/variables';

.site-header
    display flex
    justify-content space-between
    padding 0 15px
    color $header-text-color
</style>

