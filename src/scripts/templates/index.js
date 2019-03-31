import { homeTemplate } from './pages/Home'
import { projectsTemplate } from './pages/Projects'
import { timelineTemplate } from './pages/Timeline'
import { contactTemplate } from './pages/Contact'
import { logoTemplate } from './components/Logo'
// import { pageCountTemplate } from './page-count'

export function template (templateId) {
  console.log('templateId in home', templateId)
  switch (templateId) {
    case 'home' : return homeTemplate()
    case 'projects' : return projectsTemplate()
    case 'timeline' : return timelineTemplate()
    case 'contact' : return contactTemplate()
    case 'logo' : return logoTemplate()
    // case 'page-count' : return pageCountTemplate()
    default: return homeTemplate()
  }
}