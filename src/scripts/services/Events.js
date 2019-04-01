import Utils from '../services/Utils'

const pageCount = document.querySelectorAll('.page-count-line')
// const pageHeader = document.querySelectorAll('.main__content__title span')

const routesRight = {
  '/': 'projects',
  'projects': 'timeline',
  'timeline': 'contact',
  'contact': ''
}
const routesLeft = {
  '/': 'contact',
  'projects': '',
  'timeline': 'projects',
  'contact': 'timeline'
}
const subRoutes = {
  '/' : 4,
  'projects': 2
}

let Events = {
  changeNavAttribute (e) {
    let element = e.target
    let request = Utils.parseRequestURL()

    if(element.classList.contains('right')) {
      element.setAttribute('href', `#/${routesRight[request.resource]}`)
    } else {
      element.setAttribute('href', `#/${routesLeft[request.resource]}`)
    }
  },
  changeSubNavAttribute (e) {
      let element = e.target
      let request = Utils.parseRequestURL()
      let subRoute

      if(element.classList.contains('up')) {
        subRoute = (request.id >= subRoutes[request.resource]) ? 0 : request.id + 1
        element.setAttribute('href', `#/${request.resource}/${subRoute}`)
        Events.addAnimation.subTitleUp()
      } else {
        subRoute = ((request.id <= subRoutes[request.resource]) && request.id !== 0) ? request.id - 1 : 2
        element.setAttribute('href', `#/${request.resource}/${subRoute}`)
      }
    },
    setActiveClass: async () => {
    let request = Utils.parseRequestURL()
    let sidenavClasses
    let sidenavAttribute

    pageCount.forEach(sideNav =>{
      sidenavClasses = sideNav.classList
      sidenavAttribute = sideNav.getAttribute('href')
      request.resource = (request.resource === '/') ? '' : request.resource

      Events.removeActiveClass(sidenavClasses)
      if (sidenavAttribute === `#/${request.resource}`) {
        sidenavClasses.add('active')
      }
    })
  },
  removeActiveClass: async (classes) => {
    if (classes.contains('active')) classes.remove('active')
  },
  addAnimation: {
    title () {
      const pageHeader = document.querySelectorAll('.main__content__title')
      // console.log('addAnimation title', pageHeader)
      pageHeader[0].classList.add('slideLeft')
    },
    subTitleUp () {
      const pageHeader = document.querySelectorAll('.main__content__title')
      // const pageCount = document.querySelectorAll('.page-item-count')
      // console.log('subtitleUp', pageHeader)
      // console.log('pageHeader[0].classList.contains', pageHeader[0].classList.contains('slideLeft'))
      // if (pageHeader[0].classList.contains('slideLeft')) pageHeader[0].classList.remove('slideLeft')
      // pageCount[0].classList.remove('fadeIn')
      // pageCount[0].classList.add('fadeIn')
      pageHeader[0].classList.add('slideRight')
      // console.log('AFTER subtitleUp', pageHeader)
      // pageHeader[0].classList.add('slideExpandUp')
    }
  }
}
export default Events