import Events from '../../services/Events'
import Utils from '../../services/Utils'
let template = {
  img: './assets/images/juan_rodriguez--2019.png',
  title1: 'Software',
  title2: 'Developer',
  date: 'may 2016'
}

let Home = {
  render: async () => {
    console.log('hello from HOME render')
      let view =  `<div class=" main__content__image main__content__headshot"></div>
        <div class="main__content__title">
        <span>${template.title1}</span> 
        <span>${template.title2}</span>
        <span class="title-description">
          <span></span>
          <span></span>
          <span>${template.date}</span>
        </span>
      </div>`
      return view
  },
  after_render: async () => {
    // Events.addAnimation.title()
    let request = Utils.parseRequestURL()
    console.log('request', request)
    console.log('(request.id < 0)', (request.id < 0))
    if (request.id < 0) {
      console.log('subtitle')
      Events.addAnimation.subTitleUp()
    } else {
      console.log('title')
      Events.addAnimation.title()
    }
  }
      
}

export default Home