import Utils from '../../services/Utils'
import Events from '../../services/Events'

let template = [
  {
    img: './assets/images/juan_rodriguez--2019.png',
    title1: 'Project',
    title2: '1',
    date: 'april 2016'
  },
  {
    img: './assets/images/juan_rodriguez--2019.png',
    title1: 'New Project',
    title2: '2',
    date: 'april 2016'
  },
  {
    img: './assets/images/juan_rodriguez--2019.png',
    title1: 'Super Neww',
    title2: '3',
    date: 'april 2016'
  }
]
function getTemplate() {
  let request = Utils.parseRequestURL()
  return template[request.id]
}
let Projects = {
  render : async () => {
    console.log('hello from render')
      let view =  `<div class="main__content__image main__content__project"></div>
        <div class="main__content__title">
        <span>${getTemplate().title1}</span> 
        <span>${getTemplate().title2}</span>
        <span class="title-description">
          <span></span>
          <span></span>
          <span>${getTemplate().date}</span>
        </span>
      </div>`
      return view
  },
  after_render: async () => {
    // let request = Utils.parseRequestURL()
    // console.log('request', request)
    // console.log('(request.id < 0)', (request.id < 0))
    // if (request.id < 0) {
    //   Events.addAnimation.subTitleUp()
    // } else {
      Events.addAnimation.title()
    // }
  }
      
}

export default Projects