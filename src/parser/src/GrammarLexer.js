// Generated from src/Grammar.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\b>\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u001f\n\u0004\u0003",
    "\u0005\u0003\u0005\u0007\u0005#\n\u0005\f\u0005\u000e\u0005&\u000b\u0005",
    "\u0003\u0006\u0005\u0006)\n\u0006\u0003\u0006\u0006\u0006,\n\u0006\r",
    "\u0006\u000e\u0006-\u0003\u0006\u0003\u0006\u0006\u00062\n\u0006\r\u0006",
    "\u000e\u00063\u0005\u00066\n\u0006\u0003\u0007\u0006\u00079\n\u0007",
    "\r\u0007\u000e\u0007:\u0003\u0007\u0003\u0007\u0002\u0002\b\u0003\u0003",
    "\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u0003\u0002\u0006\u0004",
    "\u0002C\\c|\u0005\u00022;C\\c|\u0003\u00022;\u0005\u0002\u000b\f\u000f",
    "\u000f\"\"\u0002E\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0003\u000f\u0003\u0002\u0002\u0002\u0005\u0011\u0003",
    "\u0002\u0002\u0002\u0007\u001e\u0003\u0002\u0002\u0002\t \u0003\u0002",
    "\u0002\u0002\u000b(\u0003\u0002\u0002\u0002\r8\u0003\u0002\u0002\u0002",
    "\u000f\u0010\u0007?\u0002\u0002\u0010\u0004\u0003\u0002\u0002\u0002",
    "\u0011\u0012\u0007=\u0002\u0002\u0012\u0006\u0003\u0002\u0002\u0002",
    "\u0013\u0014\u0007n\u0002\u0002\u0014\u0015\u0007g\u0002\u0002\u0015",
    "\u001f\u0007v\u0002\u0002\u0016\u0017\u0007e\u0002\u0002\u0017\u0018",
    "\u0007q\u0002\u0002\u0018\u0019\u0007p\u0002\u0002\u0019\u001a\u0007",
    "u\u0002\u0002\u001a\u001f\u0007v\u0002\u0002\u001b\u001c\u0007x\u0002",
    "\u0002\u001c\u001d\u0007c\u0002\u0002\u001d\u001f\u0007t\u0002\u0002",
    "\u001e\u0013\u0003\u0002\u0002\u0002\u001e\u0016\u0003\u0002\u0002\u0002",
    "\u001e\u001b\u0003\u0002\u0002\u0002\u001f\b\u0003\u0002\u0002\u0002",
    " $\t\u0002\u0002\u0002!#\t\u0003\u0002\u0002\"!\u0003\u0002\u0002\u0002",
    "#&\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002$%\u0003\u0002",
    "\u0002\u0002%\n\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002\'",
    ")\u0007/\u0002\u0002(\'\u0003\u0002\u0002\u0002()\u0003\u0002\u0002",
    "\u0002)+\u0003\u0002\u0002\u0002*,\t\u0004\u0002\u0002+*\u0003\u0002",
    "\u0002\u0002,-\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003",
    "\u0002\u0002\u0002.5\u0003\u0002\u0002\u0002/1\u00070\u0002\u000202",
    "\t\u0004\u0002\u000210\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u0002",
    "31\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u000246\u0003\u0002\u0002",
    "\u00025/\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u00026\f\u0003",
    "\u0002\u0002\u000279\t\u0005\u0002\u000287\u0003\u0002\u0002\u00029",
    ":\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002",
    "\u0002;<\u0003\u0002\u0002\u0002<=\b\u0007\u0002\u0002=\u000e\u0003",
    "\u0002\u0002\u0002\n\u0002\u001e$(-35:\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function GrammarLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

GrammarLexer.prototype = Object.create(antlr4.Lexer.prototype);
GrammarLexer.prototype.constructor = GrammarLexer;

Object.defineProperty(GrammarLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

GrammarLexer.EOF = antlr4.Token.EOF;
GrammarLexer.T__0 = 1;
GrammarLexer.T__1 = 2;
GrammarLexer.VARTYPE = 3;
GrammarLexer.ID = 4;
GrammarLexer.NUMBER = 5;
GrammarLexer.WS = 6;

GrammarLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

GrammarLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

GrammarLexer.prototype.literalNames = [ null, "'='", "';'" ];

GrammarLexer.prototype.symbolicNames = [ null, null, null, "VARTYPE", "ID", 
                                         "NUMBER", "WS" ];

GrammarLexer.prototype.ruleNames = [ "T__0", "T__1", "VARTYPE", "ID", "NUMBER", 
                                     "WS" ];

GrammarLexer.prototype.grammarFileName = "Grammar.g4";



exports.GrammarLexer = GrammarLexer;

