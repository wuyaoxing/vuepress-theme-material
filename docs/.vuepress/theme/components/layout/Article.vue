<template>
  <div class="site-article --white">
      <div ref="line"></div>
      <Content :custom="false"/>
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
    box-shadow 0 6px 30px rgba(0,0,0,0.4)
</style>

