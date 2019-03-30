import { template } from './home'


var routes = {
  '/': template('home'),
  '/projects': template('projects'),
  '/timeline': template('timeline'),
  '/contact': template('contact')
}

let el = null;
function router () {
    // Lazy load view element:
    el = el || document.getElementById('view');
    // Current route url (getting rid of '#' in hash as well):
    let url = location.hash.slice(1) || '/';
    // Get route by url:
    let route = routes[url];
    // Do we have both a view and a route?
    if (el && route) {
      // Render route template with John Resig's template engine:
      el.innerHTML = routes[url];
    }
}
// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);