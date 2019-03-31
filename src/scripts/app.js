import Router from './routes';
import Events from './services/Events'

const pageNav = document.querySelectorAll('.horizontal-arrow')
const subNav = document.querySelectorAll('.vertical-arrow')

pageNav.forEach(nav => {
  nav.addEventListener('click', (e) => Events.changeNavAttribute(e))
})
subNav.forEach(nav => {
  nav.addEventListener('click', (e) => Events.changeSubNavAttribute(e))
})

// Listen on hash change:
window.addEventListener('hashchange', Router)
window.addEventListener('hashchange', async () => Events.setActiveClass())

// Listen on page load:
window.addEventListener('load', Router)
