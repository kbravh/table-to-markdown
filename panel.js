document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#convert').addEventListener('click', () => {
    let textarea = document.querySelector('#markdown')
    chrome.devtools.inspectedWindow.eval(`(${convertToMarkdown.toString()})($0)`, markdown => {
      if(markdown){
        textarea.value = markdown
      } else {
        // there was some sort of error
        textarea.value = `There was an issue...`
      }
    })
  })
})

const convertToMarkdown = table => {
  // if there's no node selected, hop out
  if(!table){
    return false
  }
  let header = table.querySelector('thead')
  let header_row = header.querySelector('tr')
  let table_body = table.querySelector('tbody')

  let markdown = '|'

  for (const header_column of header_row.children) {
    markdown += header_column.innerText + '|'
  }

  markdown += '\n|---|---|---|---|\n'

  for (let row of table_body.children) {
    markdown += '|'
    for (let column of row.children) {
      markdown += column.innerText + '|'
    }
    markdown += '\n'
  }
  return markdown
}