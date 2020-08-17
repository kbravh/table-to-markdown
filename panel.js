document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#convert').addEventListener('click', () => {
    let textarea = document.querySelector('#markdown')
    chrome.devtools.inspectedWindow.eval(`(${convertToMatrix.toString()})($0)`, matrix => {
      if (matrix) {
        let markdown = convertToMarkdown(matrix)
        textarea.value = markdown
      } else {
        // there was some sort of error
        textarea.value = `There was an issue. Please make sure that the <table> element is selected.`
      }
    })
  })
})

/**
 * Returns a 2D array of the HTML table provided.
 * @param {HTMLElement} table - the table to convert to a matrix.
 */
const convertToMatrix = table => {
  // if there's no node selected or if it's not a table, hop out
  if (!table || !table.nodeName.toLowerCase() === "table") {
    return false
  }

  let header = table.querySelector('thead')
  let header_row
  // some html tables don't have headers, so we don't want to fail here
  if (header) {
    header_row = header.querySelector('tr')
  }
  let table_body = table.querySelector('tbody')

  // Combine header row (if present) and body rows into an array
  let rows = header_row ?
    [header_row, ...table_body.children] :
    [...table_body.children]

  // map every item into a matrix
  let tableMatrix = rows.map(row => [...row.children].map(tableElement => tableElement.innerText))

  // let the first row determine the column count
  let columnCount = tableMatrix[0].length

  // create an array for current max width of each column, default to 0
  let columnWidths = Array(columnCount).fill(0)

  // look at each row
  for (row of tableMatrix) {
    // check each column of that row
    for (let column = 0; column < columnCount; column++) {
      // if the length of this column item is the largest in its column
      if (row[column].length > columnWidths[column]) {
        // set it as the new max column width
        columnWidths[column] = row[column].length
      }
    }
  }

  // If there was no header, we'll add a blank one
  if (!header) {
    tableMatrix.unshift(Array(columnCount).fill(''))
  }

  return {
    tableMatrix,
    columnWidths
  }
}

const convertToMarkdown = ({ tableMatrix, columnWidths }) => {
  // TODO - allow for setting justification
  let divider = columnWidths.map(columnWidth => '-'.repeat(columnWidth + 2))
  // insert the divider after the header
  tableMatrix.splice(1, 0, divider)

  let markdown = tableMatrix.map(row => {
    // create a row with all columns correctly spaced and joined together
    let spacedRow = row.map((item, column) => {
      let columnWidth = columnWidths[column] + 2
      let leftSpace = ' '.repeat(Math.floor((columnWidth - item.length) / 2))
      let rightSpace = ' '.repeat(Math.ceil((columnWidth - item.length) / 2))
      return leftSpace + item + rightSpace
    }).join('|')
    return `|${spacedRow}|`
  }).join('\n')

  return markdown
}
