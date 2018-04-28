<template>
    <header class="site-header --ellipsis">
        {{title}}
        <img :src="$site.avatar" alt="">
    </header>
</template>
<script>
export default {
  name: 'site-title',
  computed: {
      title() {
          return this.$page.title === 'Home' ? `${this.$site.description} · ${this.$site.title}` : `${this.$page.title} · article`
      }
  }
}
</script>

<style lang="stylus">
@import '../../style/variables';

.site-header
    padding 0 15px
    text-align center
    color $header-text-color
</style>

