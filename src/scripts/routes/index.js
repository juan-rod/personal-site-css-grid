import Home from '../templates/pages/Home'
import Projects from '../templates/pages/Projects'
import Timeline from '../templates/pages/Timeline'
import Contact from '../templates/pages/Contact'
import Error404 from '../templates/pages/Error404'

import Logo from '../templates/components/Logo'
import SubPageCounter from '../templates/components/SubPageCounter'
// import PageCount from '../templates/components/PageCount'
// import Footer from '../templates/components/Footer'
import Utils from '../services/Utils'

const routes = {
  '/:id': Home,
  '/projects/:id': Projects,
  '/timeline/:id': Timeline,
  '/contact/:id': Contact
}

const router = async () => {

  // Lazy load view element:
  const logo = null || document.getElementById('logo')
  const view = null || document.getElementById('view')
  const subpagecounter = null || document.getElementById('sub-page-counter')
  
  // Render the Header and footer of the page
  logo.innerHTML = await Logo.render()
  await Logo.after_render()

  subpagecounter.innerHTML = await SubPageCounter.render()
  await SubPageCounter.after_render()

  // Get the parsed URl from the addressbar
  let request = Utils.parseRequestURL()
  
  // Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL = (request.resource ? ('/' + request.resource) : '/') 

  parsedURL = parsedURL + ((request.id === 0 ||request.id) ? '/:id' : '')
  parsedURL = parsedURL + (request.verb ? ('/' + request.verb) : '')
  // to fix home url issue
  if (request.resource === "/") parsedURL = "/:id"
  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  let page = routes[parsedURL] ? routes[parsedURL] : Error404
  view.innerHTML = await page.render()
  await page.after_render()

}
export default router