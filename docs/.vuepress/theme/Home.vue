<template>
    <div class="site-home">
        <div class="site-home__container">
            <Card class="site-home__description">
                <div :style="{
                backgroundImage: `url(${themeConfig.background})`
            }">
                </div>
                <p>
                    <router-link to="articles">
                        <b>{{$site.title}}</b>
                    </router-link>
                </p>
                <p class="--white">{{$site.description}}</p>
            </Card>
            <Card class="site-home__user --white">
                <div class="site-home__user-info">
                    <img :src="github.avatar_url">
                    <p>
                        <a :href="github.html_url"
                           class="--primary-text-color">
                            <b>{{themeConfig.username}}</b>
                        </a>
                    </p>
                    <p v-if="github.location"><i class="icon-location"></i> {{github.location}}</p>
                    <!-- <p>{{github.bio}}</p> -->
                </div>
                <ul class="site-home__user-github">
                    <li>
                        <b>{{github.public_repos || 0}}</b>
                        <p>repos</p>
                    </li>
                    <li>
                        <b>{{github.public_gists || 0}}</b>
                        <p>gists</p>
                    </li>
                    <li>
                        <b>{{github.followers || 0}}</b>
                        <p>followers</p>
                    </li>
                </ul>
                <ul class="site-home__user-social">
                    <li v-for="item in themeConfig.social">
                        <a :href="item.url">
                            <i :class="`icon-${item.icon}`"></i>
                        </a>
                    </li>
                </ul>
            </Card>
        </div>
        <div class="site-home__link">
            <Card class="site-home__link-articles --white"
                  @click.native="goRouter(articleDir)">
                <b>Go To {{articleDir}} !</b>
            </Card>
        </div>
    </div>
</template>
<script>
import Card from './components/layout/Card'
import axios from 'axios'

export default {
    name: 'site-home',
    components: {
        Card
    },
    data() {
        return {
            github: {}
        }
    },
    computed: {
        themeConfig() {
            return this.$site.themeConfig
        },
        articleDir() {
            return this.themeConfig.articleDir
        }
    },
    methods: {
        goRouter(path) {
            this.$router.push(path)
        },
        fetchGithubUserInfo(username) {
            // return fetch(`https://api.github.com/users/${username}`)
            //     .then(response => response.json())
            //     .then(data => {
            //         this.github = data
            //     })
            axios.get(`https://api.github.com/users/${username}`)
                .then(response => {
                    this.github = response.data
                })
        },
        init() {
            if (!this.themeConfig.username || Object.keys(this.github).length > 0) return
            this.fetchGithubUserInfo(this.themeConfig.username)
        }
    },
    created() {
        this.init()
    }
}
</script>
<style lang="stylus">
@import './style/variables'
.site-home
    &__container
        display flex
        flex-wrap wrap
        padding-top 60px
    &__description
        display flex
        flex-direction column
        flex 1
        margin-right 15px
        position relative
        div
            background-repeat no-repeat
            background-position center center
            background-size cover
            min-height 280px
            flex 1
        p
            line-height 35px
            margin 0
            padding 5px 15px
            font-size $font-size-small
            &:first-of-type
                position absolute
                top 230px
                font-size 24px
                color #fff
    &__user
        width 210px
        max-height 325px
        text-align center
        font-size $font-size-small
        &-info
            padding 50px 0 15px
        &-github
            border-top 1px solid #ddd
            border-bottom 1px solid #ddd
            justify-content space-between
            li
                flex 1
                border-right 1px solid #ddd
                padding 8px
                &:last-of-type
                    border none
                p
                    margin 5px 0 0
                    color #666
        &-social
            justify-content space-between
            justify-content center
            font-size 28px
            li
                margin 5px
                a
                    color #333
                    &:hover
                        text-decoration none
        ul
            display flex
            align-items center
            padding 0
            margin 10px 0
            li
                list-style none
        img
            width 80px
            height 80px
            border-radius 50%
            box-shadow 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)
        p
            margin 10px 0
    &__link
        display flex
        justify-content center
        margin 50px 0 30px
        &-articles
            width 210px
            line-height 50px
            text-align center
            cursor pointer
            &:hover
                text-decoration underline
    @media all and (max-width: 700px)
        .site-home
            &__container
                padding 0
            &__description, &__user
                flex-basis 100%
                margin-right 0
                margin-bottom 15px
</style>
