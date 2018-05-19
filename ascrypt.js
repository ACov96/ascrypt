var fs = require('fs');
var parser = require('./grammar').parser;
var translate = require('./ab_syn').translate;
if(process.argv.length < 3){
    console.error("Incorrect usage. node ascrypt <file>");
    process.exit(1);
}

var input = fs.readFileSync(process.argv[2], 'utf8');
var parsed_input = parser.parse(input);

console.log(parsed_input);
//console.log(parsed_input.head.dec.body);
//translate(parsed_input);
