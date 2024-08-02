const fs = require('fs');
const xml2js = require('xml-js');

const xml = fs.readFileSync('events.xml', 'utf8');
const json = xml2js.xml2json(xml, {compact: true, spaces: 2});
fs.writeFileSync('headlines.json', json);
