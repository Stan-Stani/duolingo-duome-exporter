const fs = require('fs');

const str = fs.readFileSync('./duome.htm', {encoding: 'utf8'});

const regex = /<b>.*?<a[^>]*>(?<vocabItem>[\p{L}\p{M}*]+)<\/a>.*?<\/b>/gu;



let m;

let vocabObj = {};

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        vocabObj[m.groups.vocabItem] = m.groups.vocabItem;
    });
}

let output = ""
for (value in vocabObj) {
    output += value + ', ';
}

output = output.trim();

console.log(output);
fs.writeFileSync('./seenVocab.txt', output);