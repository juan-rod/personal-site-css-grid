
let Error404 = {
  render : async () => {
      let view =  `
          <div class="main__content__title">
          error page
        </div>`
      return view
  },
  after_render: async () => {}
      
}

export default Error404