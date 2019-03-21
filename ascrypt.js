#!/usr/bin/env node
const fs = require('fs');
const { InputStream, CommonTokenStream } = require('antlr4');
const { GrammarLexer } = require('./src/parser/src/GrammarLexer');
const { GrammarParser } = require('./src/parser/src/GrammarParser');

if (process.argv.length < 3) {
  console.error('Not enough arguments');
  process.exit(1);
}

const input = fs.readFileSync(process.argv[2], 'utf8');
const chars = new InputStream(input);
const lexer = new GrammarLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new GrammarParser(tokens);
parser.buildParseTrees = true;
const tree = parser.statementList();
