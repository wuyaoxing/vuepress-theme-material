<template>
  <div class="site-article">
      <div ref="line"></div>
      <Content class="--white" :custom="false"/>
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
    margin 15px
    padding 5px

</style>

