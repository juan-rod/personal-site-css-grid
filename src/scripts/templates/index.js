import { homeTemplate } from './home'
import { projectsTemplate } from './projects'
import { timelineTemplate } from './timeline'
import { contactTemplate } from './contact'
import { logoTemplate } from './logo'
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