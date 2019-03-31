import Router from './routes';
import Events from './services/Events'

// Listen on hash change:
window.addEventListener('hashchange', Router)
window.addEventListener('hashchange', async () => Events.setActiveClass())

// Listen on page load:
window.addEventListener('load', Router)
