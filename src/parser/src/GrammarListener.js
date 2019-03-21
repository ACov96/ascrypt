// Generated from src/Grammar.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by GrammarParser.
function GrammarListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

GrammarListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
GrammarListener.prototype.constructor = GrammarListener;

// Enter a parse tree produced by GrammarParser#statementList.
GrammarListener.prototype.enterStatementList = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#statementList.
GrammarListener.prototype.exitStatementList = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#statement.
GrammarListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#statement.
GrammarListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#assignStatement.
GrammarListener.prototype.enterAssignStatement = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#assignStatement.
GrammarListener.prototype.exitAssignStatement = function(ctx) {
};



exports.GrammarListener = GrammarListener;