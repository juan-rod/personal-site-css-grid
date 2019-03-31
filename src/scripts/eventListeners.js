  export const pageNav = document.querySelectorAll('.horizontal-arrow')
  export const subNav = document.querySelectorAll('.vertical-arrow')
  export const pageCount = document.querySelectorAll('.page-count-line')
  let routesRight = {
    '/': 'projects',
    '/projects': 'timeline',
    '/timeline': 'contact',
    '/contact': ''
  }
  let routesLeft = {
    '/': 'contact',
    '/projects': '',
    '/timeline': 'projects',
    '/contact': 'timeline'
  }
  pageNav.forEach(nav => {
    console.log('nav', nav)
    nav.addEventListener('click', (e) => changeNavAttribute(e))
  })
  subNav.forEach(nav => {
    console.log('nav', nav)
    nav.addEventListener('click', (e) => changeSubNavAttribute(e))
  })
  function changeNavAttribute (e) {
    let element = e.target
    let url = location.hash.slice(1) || '/'
    if(element.classList.contains('right')) {
      element.setAttribute('href', `#/${routesRight[url]}`)
    } else {
      element.setAttribute('href', `#/${routesLeft[url]}`)
    }
  }
  function hashChanged () {
    let url = location.hash.slice(1) || '/'
    pageCount.forEach(sideNav =>{
      let sidenavClasses = sideNav.classList
      let sidenavAttribute = sideNav.getAttribute('href')
      removePrevActiveClass(sidenavClasses)
      if (sidenavAttribute === `#${url}`) {
        sidenavClasses.add('active')
      }
    })
  }
  function removePrevActiveClass (sidenavClasses) {
    if (sidenavClasses.contains('active')) sidenavClasses.remove('active')
  }
  
  function setWindowHistory (pathName) {
    window.history.pushState({}, pathName, window.location.origin +'/public/index.html#' + pathName);
  }
  
  window.addEventListener('hashchange', hashChanged)