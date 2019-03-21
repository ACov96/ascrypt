// Generated from src/Grammar.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by GrammarParser.

function GrammarVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

GrammarVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
GrammarVisitor.prototype.constructor = GrammarVisitor;

// Visit a parse tree produced by GrammarParser#statementList.
GrammarVisitor.prototype.visitStatementList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#statement.
GrammarVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#assignStatement.
GrammarVisitor.prototype.visitAssignStatement = function(ctx) {
  return this.visitChildren(ctx);
};



exports.GrammarVisitor = GrammarVisitor;