import { defineClientConfig } from 'vuepress/client'
import CustomHero from './components/CustomHero.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('CustomHero', CustomHero)
  },
}) 