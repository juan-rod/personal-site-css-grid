let template = {
  img: './assets/images/juan_rodriguez--2019.png',
  title1: 'Software',
  title2: 'Developer',
  date: 'may 2016'
}

let Home = {
  render: async () => {
    console.log('hello from HOME render')
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

export default Home