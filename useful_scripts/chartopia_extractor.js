/**
 * Use this script to create an importable json file from Chartopia.
 * Author: @Krishmero#1792
 *
 * How to use this script.
 * 1. Find a table you want to extract. IMPORTANT: it must NOT make additional rolls on other tables.
 * 2. Open Chrome console window (F12) & go to the Sources Tab -> Snippets -> new snippet and paste this file in there.
 * 3. Run snippet (ctrl+Enter for windows). Json file to import will download.
 * 4. In foundry, make a new rollable table, then right click it on the sidebar and do an import.
 * 5. Import the downloaded file & celebrate.
 */
 
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
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)

let dialog = document.getElementsByClassName('chart-container')[0];
let title = dialog.getElementsByTagName('H2')[0].innerText;
let formula = dialog.getElementsByTagName('TH')[0].innerText;
let rows = dialog.getElementsByTagName('TBODY')[0].getElementsByTagName('TR');

let jsonData = {
  name: title,
  description: "",
  results: [],
  formula,
  replacement: true,
  displayRolle: true
};

for (let row of rows) {
  let range;
  let weight;
  let cells = row.getElementsByTagName('TD');
  
  let getNum = cells[0].innerText;
  
  if (getNum.includes('-')) {
    range = getNum.split('-');
    weight = parseInt(range[1]), 10) - parseInt(range[0]), 10) + 1;
  } else {
    if (Number.isNaN(getNum)) continue;
    range = [getNum, getNum];
    weight = 1;
  }

  let text = cells[1].innerHTML;

  if (cells[1].getElementsByClassName('corpse').length) {
    let resolve = text.match(/\<span.*\>Resolve:\s{(.*?)}<\/span>/gi).map(val => {
      let array = val.split("|");
      return array[Math.floor(Math.random()*array.length)];
    });
  }
  
  if (cells[1].getElementsByClassName('equation').length) {
    text = text.replace(/<span.*>Roll\s/gi, '[[');
    text = text.replace(/<\/span>/gi, ']]');
  }

  text = text.replace('\n', '');

  jsonData.results.push({
    flags: {},
    type: 0,
    text,
    img:  "icons/svg/d20-black.svg",
    weight,
    range,
    drawn: false
  });
}; 
console.save(jsonData);
