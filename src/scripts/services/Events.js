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
    console.log('changeNav',)
    let element = e.target
    let request = Utils.parseRequestURL()

    if(element.classList.contains('right')) {
      element.setAttribute('href', `#/${routesRight[request.resource]}`)
    } else {
      element.setAttribute('href', `#/${routesLeft[request.resource]}`)
    }
  },
  changeSubNavAttribute (e) {
    console.log('changeSub',)
    let element = e.target
    let request = Utils.parseRequestURL()
    // console.log('request.id', request.id)
    let subRoute
    // console.log('element & classList', element, element.classList)
    if (request.id < 1 && request.resource === '/') {
      // console.log('request.id < 1',request.id < 1 )
      element.removeAttribute('href')
    } else if(element.classList.contains('up')) {
      subRoute = (request.id >= subRoutes[request.resource]) ? 0 : request.id + 1
      // console.log('changeSubNavAttribute contains up', subRoute)
      element.setAttribute('href', `#/${request.resource}/${subRoute}`)
      Events.addAnimation.subTitleUp()
    } else {
      subRoute = ((request.id <= subRoutes[request.resource]) && request.id !== 0) ? request.id - 1 : 2
      // console.log('changeSubNavAttribute does not contains up', subRoute)
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
  removeAnimation: {
    removeClass () {
      const pageHeader = document.querySelectorAll('.main__content__title')
      pageHeader[0].classList.remove('slideLeft')
    }
  },
  addAnimation: {
    title () {
      const pageHeader = document.querySelectorAll('.main__content__title')
      pageHeader[0].classList.add('slideLeft')
    },
    subTitleUp () {
      const pageHeader = document.querySelectorAll('.main__content__title')
      pageHeader[0].classList.add('slideRight')
    }
  }
}
export default Events