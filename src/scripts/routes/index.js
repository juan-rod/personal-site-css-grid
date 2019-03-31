import Home from '../templates/pages/Home'
import Projects from '../templates/pages/Projects'
import Timeline from '../templates/pages/Timeline'
import Contact from '../templates/pages/Contact'
import Error404 from '../templates/pages/Error404'

import Logo from '../templates/components/Logo'
// import PageCount from '../templates/components/PageCount'
// import SubPageCount from '../templates/components/SubPageCount'
// import Footer from '../templates/components/Footer'
console.log('hello from router')
import Utils from '../services/Utils'

const routes = {
  '/:id': Home,
  '/projects/:id': Projects,
  '/timeline/:id': Timeline,
  '/contact/:id': Contact
}

const router = async () => {

  // Lazy load view element:
  const logo = null || document.getElementById('logo');
  const view = null || document.getElementById('view');
  // const pagecount = null || document.getElementById('page-count');
  // const subpagecount = null || document.getElementById('sub-page-count');
  // const footer = null || document.getElementById('footer');
  
  // Render the Header and footer of the page
  logo.innerHTML = await Logo.render();
  await Logo.after_render();
  // pagecount.innerHTML = await PageCount.render();
  // await PageCount.after_render();
  // subpagecount.innerHTML = await SubPageCount.render();
  // await SubPageCount.after_render();
  // footer.innerHTML = await Footer.render();
  // await Footer.after_render();


  // Get the parsed URl from the addressbar
  let request = Utils.parseRequestURL()
  // Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
  // to fix home url issue
  if (request.resource === "") parsedURL = "/:id"

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  let page = routes[parsedURL] ? routes[parsedURL] : Error404
  view.innerHTML = await page.render();
  await page.after_render();

}
export default router