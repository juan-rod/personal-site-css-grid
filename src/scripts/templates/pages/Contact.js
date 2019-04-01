import Events from '../../services/Events'

let template = {
  img: './assets/images/juan_rodriguez--2019.png',
  title1: 'contact',
  title2: 'contact',
  date: 'dec 2019'
}

let Contact = {
  render : async () => {
      let view =  `<div class="main__content__image main__content__headshot"></div>
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
    Events.addAnimation.title()
  }
      
}

export default Contact