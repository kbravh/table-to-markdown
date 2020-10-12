document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#convert').addEventListener('click', () => {
    let textarea = document.querySelector('#markdown')
    chrome.devtools.inspectedWindow.eval(`(${convertToMatrix.toString()})($0)`, matrix => {
      if (matrix) {
        let markdown = convertToMarkdown(matrix)
        textarea.value = markdown
      } else {
        // there was some sort of error
        textarea.value = `There was an issue. Please make sure that a table is selected.`
      }
    })
  })

  document.querySelector("#markdown").addEventListener('click', () => {
    let markdown = document.querySelector("#markdown")
    markdown.focus()
    markdown.select()
  })
})

/**
 * Returns a 2D array of the HTML table provided.
 * @param {HTMLElement} node - the table to convert to a matrix.
 */
const convertToMatrix = node => {
  // if there's no node selected, hop out
  if (!node) {
    return false
  }

  // if the provided node isn't a table, climb to see if we can find one
  if (!(node.nodeName.toLowerCase() === "table")) {
    // We'll keep climbing until we either find a table or the top of the document
    while(node.nodeName.toLowerCase() !== "table" && node.nodeName.toLowerCase !== "body"){
      node = node.parentElement
    }
  }

  // we'll check if a table was found
  if (node.nodeName.toLowerCase() !== "table") {
    return false
  }

  let header = node.querySelector('thead')
  let header_row
  // some html tables don't have headers, so we don't want to fail here
  if (header) {
    header_row = header.querySelector('tr')
  }
  let table_body = node.querySelector('tbody')

  // Combine header row (if present) and body rows into an array
  let rows = header_row ?
    [header_row, ...table_body.children] :
    [...table_body.children]


  // This could be pulled as a setting from the UI
  const span = true // if colspan and rowspan should be repeated

  /**
   * Here, we populate our matrix based on the HTML table.
   */
  let tableMatrix

  // This will cause rowspan and colspan elements to repeat
  if (span) {
    // set tableMatrix as empty arrays
    tableMatrix = Array.from({ length: rows.length }, () => [])

    rows.forEach((row, rowIndex) => {
      [...row.children].forEach(tableElement => {
        // grab the span attributes if present, or default to 1
        let colspan = tableElement.getAttribute("colspan") || 1
        let rowspan = tableElement.getAttribute("rowspan") || 1
        // copy the elements into all cells that are spanned
        for (let colCount = 0; colCount < colspan; colCount++) {
          for (let rowCount = 0; rowCount < rowspan; rowCount++) {
            tableMatrix[rowIndex + rowCount].push(tableElement.innerText.replace(/\n/g, ' '))
          }
        }
      })
    })
  } else {
    // map every item into a matrix
    tableMatrix = rows.map(row => [...row.children].map(tableElement => tableElement.innerText))
  }


  // let the first row determine the column count
  let columnCount = tableMatrix[0].length

  // create an array for current max width of each column, default to 0
  let columnWidths = Array(columnCount).fill(0)

  // look at each row
  tableMatrix.forEach(row => {
    // check each column of that row
    row.forEach((column, index) => {
      // if the length of this column item is the largest in its column
      if (column.length > columnWidths[index]) {
        // set it as the new max column width
        columnWidths[index] = column.length
      }
    })
  })

  return {
    tableMatrix,
    columnWidths
  }
}

const convertToMarkdown = ({ tableMatrix, columnWidths }) => {
  // This setting will add a blank header row in. Useful for HTML tables without headers.
  let blankHeader = document.querySelector("#blank-header").checked
  if (blankHeader) {
    tableMatrix.unshift(Array(columnWidths.length).fill(''))
  }

  // This setting will remove all the extra spaces in the markdown table used to make things look nice.
  let noPrettyPrint = document.querySelector("#no-pretty-print").checked

  // Create the divider row that sits beneath the header
  let divider = columnWidths.map(columnWidth => {
    // stick to the minimum 3 if pretty printing turned off
    if(noPrettyPrint){
      return '---'
    }
    // (columnWidth || 1) ensures we'll always have at least 3 dashes, a req. for markdown
    return '-'.repeat((columnWidth || 1) + 2)
  })
  // insert the divider after the header
  tableMatrix.splice(1, 0, divider)

  let markdown = tableMatrix.map(row => {
    // create a row with all columns correctly spaced and joined together
    let spacedRow = row.map((item, column) => {
      // skip adding spaces if pretty print is turned off
      if (noPrettyPrint) {
        return item
      }
      let columnWidth = columnWidths[column] + 2
      let leftSpace = ' '.repeat(Math.floor((columnWidth - item.length) / 2))
      let rightSpace = ' '.repeat(Math.ceil((columnWidth - item.length) / 2))
      return leftSpace + item + rightSpace
    }).join('|')
    return `|${spacedRow}|`
  }).join('\n')

  return markdown
}
