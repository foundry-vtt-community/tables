/**
 * Use this script to create an importable json file from any table on DnDBeyond.
 * Author: @Krishmero#1792
 *
 * How to use this script.
 * 1. Right click on the table you wish to extract. Inspect element and grab the table id or the data-content-chunk-id
      Should be something like <table id="table016" class="Table TableOverride-1">
      OR <table class="compendium-left-aligned-table" data-content-chunk-id="85e84434-84db-4247-a0da-b00a556756f2">
 * 2. Open Chrome console window (F12) & go to the Sources Tab -> Snippets -> new snippet and paste this file in there.
 * 3. Run snippet (ctrl+Enter for windows). Json file to import will download.
 * 4. In foundry, make a new rollable table, then right click it on the sidebar and do an import.
 * 5. Import the downloaded file & celebrate.
 */

 let tableId = "579e6e59-34d9-42e9-a61e-e4fb5167290c"; // replace with the table id or data-content-chunk-id

//////////////////////////////////////////////////
// You should not need to modify anything below //
//////////////////////////////////////////////////

 //Create console.save function
(function(console){
  console.save = function(data, filename){
    if(!data) {
        console.error('Console.save: No data')
        return;
    }
    if(!filename) filename = 'console.json'
    if(typeof data === "object"){
      data = JSON.stringify(data, undefined, 4)
    }
    var blob = new Blob([data], {type: 'text/json'}),
      e = document.createEvent('MouseEvents'),
      a = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
  }
})(console)

let getName = exportedTable => {
  let parentSibling = exportedTable.parentElement.previousElementSibling;
  if (['H4', 'H5'].includes(parentSibling.tagName)) return parentSibling.innerText;
  return parentSibling.previousElementSibling.innerText;
}

let getDescription = exportedTable => {
  let parentSibling = exportedTable.parentElement.previousElementSibling;
  console.log(parentSibling);
  if (parentSibling.tagName === 'P') return parentSibling.innerText;
  return ""
}

//extract table data
let exportedTable = document.getElementById(tableId)
  || document.querySelector(`table[data-content-chunk-id="${tableId}"]`);
if (!exportedTable) console.log("You grabbed the wrong id, make sure you are getting one for a table!");

let formula = exportedTable.rows[0].cells[0].textContent; // roll table formula. This is the top most right corner of the table.
let jsonData = {
  name: getName(exportedTable) || "extracted-table", // get the table name
  description: getDescription(exportedTable),
  results: [],
  formula,
  replacement: true,
  displayRolle: true
};
let rows = exportedTable.getElementsByTagName("tbody")[0].rows;
let headings = exportedTable.getElementsByTagName("thead")[0].rows[0].cells;
for (let i = 0; i < rows.length; i++) {
   let firstCol = rows[i].cells[0].textContent; //first column
   let range = firstCol.split("–").map(val => val == '00' ? 100 : val).map(val => parseInt(val, 10)); //range of roll results. first column
   let weight;
   if (range.length === 1) {
    range[1] = range[0] // range must have a start and end, even if they are the same.
    weight = 1
   } else {
    weight = range[1] - range[0] + 1
   }
   let text = ''
   for (let j = 1; j < rows[i].cells.length; j++){ // cycle through each cell after the 1st
       let row_text = rows[i].cells[j].textContent
         .replace(/\n/g, '') // remove \n
         .replace(/\dd\d+/ig, match => `[[${match}]]`); // convert dice rolls.
       if (row_text !== '—'){ // cell has a dash when blank - skip
           row_text += ' (' + headings[j].textContent + ') ' // add heading
             if (text){
                 text += ' and ' // add on if additional cell
             }
             text += row_text // update text for row
         }
   }
   jsonData.results.push({
      flags: {},
      type: 0,
      text,
      img: "icons/svg/d20-black.svg",
      weight,
      range,
      drawn: false
   });
}
console.save(jsonData);
