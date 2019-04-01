import Events from '../../services/Events'
let Error404 = {
  render : async () => {
      let view =  `<div class="main__content__image main__content__error">
          <div class="main__content__title">
          error page
        </div></div>`
      return view
  },
  after_render: async () => {
    Events.addAnimation.title()
  }
      
}

export default Error404