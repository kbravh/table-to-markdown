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
  // if there's no node selected or if it's not a table, hop out
  if(!table || table.nodeName.toLowercase() === "table"){
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

  let rows = [header_row, table_body.children]

  let tableMatrix = rows.map(row => {
    row.children.map(tableElement => tableElement.innerText)
  })

  // we'll let the first row determine our column count
  let columnCount = tableMatrix[0].length

  // create an array of 0s for current max width of each column
  let columnWidths = Array(columnCount).fill(0)

  // look at each row
  for (row of tableMatrix){
    // check each column of that row
    for (let column = 0; column < columnCount; column++){
      // if the length of this column item is the largest in its column
      if (row[column].length > columnWidths[column]){
        // set it as the new max column width
        columnWidths[column] = row[column].length
      }
    }
  }

  return markdown
}
