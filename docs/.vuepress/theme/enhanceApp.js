import 'prismjs/themes/prism-tomorrow.css'
import './style/index.styl'

export default ({ Vue, options, router, siteData }) => {

    const { themeConfig } = siteData

    // material theme
    Vue.prototype.$material = themeConfig.material ? `material__${themeConfig.material}` : 'material__deep-purple'

  console.log(Vue, options, router, siteData)
}
