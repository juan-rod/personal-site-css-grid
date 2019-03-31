import Utils from '../../services/Utils'

function getTemplate() {
  let request = Utils.parseRequestURL()
  return '/0' + (request.id + 1)
}

let SubPageCounter = {
  render : async () => {
      let view = `${getTemplate()}`
      return view
  },
  after_render: async () => {}
      
}

export default SubPageCounter