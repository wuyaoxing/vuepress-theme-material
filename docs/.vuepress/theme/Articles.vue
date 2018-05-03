<template>
    <div class="site-articles">
        <List :article="item" v-for="(item, index) in articles" :key="item.title + index"></List>
    </div>
</template>
<script>
import List from './components/layout/List'

export default {
    name: 'site-articles',
    components: {
        List
    },
    computed: {
        articles() {
            return this.$site.pages.filter(item => item.frontmatter.title !== 'Home' && item.frontmatter.title !== 'Articles')
        }
    }
}
</script>
