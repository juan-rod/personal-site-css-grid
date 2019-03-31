import Utils from '../services/Utils'
const pageNav = document.querySelectorAll('.horizontal-arrow')
const subNav = document.querySelectorAll('.vertical-arrow')
const pageCount = document.querySelectorAll('.page-count-line')

const routesRight = {
  '/': 'projects',
  '/projects': 'timeline',
  '/timeline': 'contact',
  '/contact': ''
}
const routesLeft = {
  '/': 'contact',
  '/projects': '',
  '/timeline': 'projects',
  '/contact': 'timeline'
}
const subRoutes = {
  '/' : 1
}
pageNav.forEach(nav => {
  nav.addEventListener('click', (e) => Events.changeNavAttribute(e))
})
subNav.forEach(nav => {
  nav.addEventListener('click', (e) => Events.changeSubNavAttribute(e))
})
let Events = {
  changeNavAttribute (e) {
    let element = e.target
    let request = Utils.parseRequestURL()
    console.log('hello request', request)
    let url = location.hash.slice(1) || '/'
    console.log('url', url)
    if(element.classList.contains('right')) {
      element.setAttribute('href', `#/${routesRight[url]}`)
    } else {
      element.setAttribute('href', `#/${routesLeft[url]}`)
    }
  },
  changeSubNavAttribute (e) {
      let element = e.target
      let url = location.hash.slice(1) || '/'
      console.log('url', url)
      let request = Utils.parseRequestURL()
      console.log('request', request)
      if(element.classList.contains('up')) {
        console.log('subRoutes[url]', subRoutes[url])
       let newUrl = url + subRoutes[url]
        console.log('newUrl', newUrl)
        // element.setAttribute('href', `#/${subRoutes[url]}`)
        element.setAttribute('href', `#/${request.resource}/1`)
        subRoutes[url]++ 
        console.log('subRoutes[url]', subRoutes[url])
      } else {
        element.setAttribute('href', `#/${routesLeft[url]}`)
      }
    },
    setActiveClass: async () => {
    let url = location.hash.slice(1) || '/'
    pageCount.forEach(sideNav =>{
      let sidenavClasses = sideNav.classList
      let sidenavAttribute = sideNav.getAttribute('href')
      Events.removeActiveClass(sidenavClasses)
      if (sidenavAttribute === `#${url}`) {
        sidenavClasses.add('active')
      }
    })
  },
  removeActiveClass: async (classes) => {
    if (classes.contains('active')) classes.remove('active')
  }
}
export default Events