import { App } from 'vue'
import { formatUtcString } from '@/utils/date-fomat'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
