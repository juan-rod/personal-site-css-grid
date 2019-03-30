  export const pageNavLinks = document.querySelectorAll('.horizontal-arrow')
  export const sideNavCount = document.querySelectorAll('.page-count-line')
  window.addEventListener('hashchange', hashChanged )
  pageNavLinks.forEach(nav => {
    console.log('nav', nav)
    nav.addEventListener('click', (e) => changeAttribute(e))
  })
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
  function changeAttribute (e) {
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
   console.log('hashChanged', url)
   // need to change page-count
   sideNavCount.forEach(sideNav =>{
     let sidenavClasses = sideNav.classList
     let sidenavAttribute = sideNav.getAttribute('href')
     console.log('sidenavClasses' , sidenavClasses)
     console.log('sidenavAttribute', sidenavAttribute)
    //  console.log('sideNav', sideNav.classList)
    removePrevActiveClass(sidenavClasses)
     if (sidenavAttribute === `#${url}`) {
       sidenavClasses.add('active')
     }
   })
 }
  // function pageNavClick (e) {
  //   removePrevActiveClass()
  //   let element = e.target
  //   element.classList.add('active')
  // }
  function removePrevActiveClass (sidenavClasses) {
    // sidenavClasses.contains('active')
      if (sidenavClasses.contains('active')) sidenavClasses.remove('active')
  }