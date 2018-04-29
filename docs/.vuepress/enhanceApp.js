import 'prismjs/themes/prism-tomorrow.css'
import './theme/style/index.styl'

export default ({ Vue, options, router, siteData }) => {
    Vue.prototype.$material = siteData.themeConfig.material ? `material__${siteData.themeConfig.material}` : 'material__deep-purple'
  console.log(Vue, options, router, siteData)
}
