
const homeTemplate = () => {
  let template = {
    img: './assets/images/juan_rodriguez--2019.png',
    title1: 'Software',
    title2: 'Developer',
    date: 'may 2016'
  }
  return `<div class="main__content__headshot"></div>
  <div class="main__content__title">
  <span>${template.title1}</span> 
  <span>${template.title2}</span>
  <span class="title-description">
    <span></span>
    <span></span>
    <span>${template.date}</span>
  </span>
</div>`
}
const projectsTemplate = () => {
  let template = {
    img: './assets/images/juan_rodriguez--2019.png',
    title1: 'Project',
    title2: '1',
    date: 'april 2016'
  }
  return `<div class="main__content__headshot"></div>
  <div class="main__content__title">
  <span>${template.title1}</span> 
  <span>${template.title2}</span>
  <span class="title-description">
    <span></span>
    <span></span>
    <span>${template.date}</span>
  </span>
</div>`
}
const timelineTemplate = () => {
  let template = {
    img: './assets/images/juan_rodriguez--2019.png',
    title1: 'Timeline',
    title2: 'timeline',
    date: 'january 2016'
  }
  return `<div class="main__content__headshot"></div>
  <div class="main__content__title">
  <span>${template.title1}</span> 
  <span>${template.title2}</span>
  <span class="title-description">
    <span></span>
    <span></span>
    <span>${template.date}</span>
  </span>
</div>`
}
const contactTemplate = () => {
  let template = {
    img: './assets/images/juan_rodriguez--2019.png',
    title1: 'contact',
    title2: 'contact',
    date: 'dec 2019'
  }
  return `<div class="main__content__headshot"></div>
  <div class="main__content__title">
  <span>${template.title1}</span> 
  <span>${template.title2}</span>
  <span class="title-description">
    <span></span>
    <span></span>
    <span>${template.date}</span>
  </span>
</div>`
}








export function template (templateId) {
  console.log('templateId in home', templateId)
  switch (templateId) {
    case 'home' : return homeTemplate()
    case 'projects' : return projectsTemplate()
    case 'timeline' : return timelineTemplate()
    case 'contact' : return contactTemplate()
  }
  // switch (column.varType) {
  //   case 'dropdown': return dropdownColumnDef(column)
  //   case 'string': return stringColumnDef(column)
  //   case 'numeric': return defaultColumnDef(column)
  //   case 'checkbox': return checkboxColumnDef(column)
  //   case 'attachment': return attachmentColumnDef(column)
  //   case 'location': return containerColumnDef(column)
  //   case 'date': return dateColumnDef(column)
  //   case 'link': return linkColumnDef(column)
  //   case 'taskfile': return taskColumnDef(column)
  //   case 'pipeline_instance_uuid': return pipelineColumnDef(column)
  //   case 'itemqtyadj': return itemQtyAdjustmentColumnDef(column)
  //   case 'barcode': return barcodeColumnDef(column)
  //   default: return defaultColumnDef(column)
  // }
}