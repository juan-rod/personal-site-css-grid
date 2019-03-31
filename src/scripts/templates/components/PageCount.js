import Events from '../../services/Events'
const pageCount = document.querySelectorAll('.page-count-line')
let PageCount = {
  render: async () => {
    let view = `<a href="#/" class="page-count-line page-count-1 active">
        <span></span>
        <p>01</p>
      </a>
      <a href="#/projects" class="page-count-line page-count-2">
        <span></span>
        <p>02</p>
      </a>
      <a href="#/timeline" class="page-count-line page-count-3">
        <span></span>
        <p>03</p>
      </a>
      <a href="#/contact" class="page-count-line page-count-4">
        <span></span>
        <p>04</p>
      </a>`
    return view
  },
  after_render: async () => {
    let url = location.hash.slice(1) || '/'
    return pageCount.forEach(page => page.addEventListener('hashchange', Events.setActiveClass(url)))
    // console.log('after_render', pageCount)
  }
}

export default PageCount