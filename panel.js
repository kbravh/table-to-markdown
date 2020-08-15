document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#convert').addEventListener('click', () => {
    let textarea = document.querySelector('#markdown')
    textarea.value = `Automatically set the textarea value!`
  })
})

const convertToMarkdown = table => {
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