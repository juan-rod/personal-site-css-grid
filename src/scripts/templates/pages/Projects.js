let template = {
  img: './assets/images/juan_rodriguez--2019.png',
  title1: 'Project',
  title2: '1',
  date: 'april 2016'
}
let Projects = {
  render : async () => {
      let view =  `<div class="main__content__headshot"></div>
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
  after_render: async () => {}
      
}

export default Projects