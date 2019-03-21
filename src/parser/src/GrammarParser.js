// Generated from src/Grammar.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var GrammarListener = require('./GrammarListener').GrammarListener;
var grammarFileName = "Grammar.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\b\u0019\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0003\u0002\u0007\u0002\n\n\u0002\f\u0002\u000e\u0002\r\u000b",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0002",
    "\u0002\u0005\u0002\u0004\u0006\u0002\u0002\u0002\u0016\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0004\u0010\u0003\u0002\u0002\u0002\u0006\u0012\u0003",
    "\u0002\u0002\u0002\b\n\u0005\u0004\u0003\u0002\t\b\u0003\u0002\u0002",
    "\u0002\n\r\u0003\u0002\u0002\u0002\u000b\t\u0003\u0002\u0002\u0002\u000b",
    "\f\u0003\u0002\u0002\u0002\f\u000e\u0003\u0002\u0002\u0002\r\u000b\u0003",
    "\u0002\u0002\u0002\u000e\u000f\u0007\u0002\u0002\u0003\u000f\u0003\u0003",
    "\u0002\u0002\u0002\u0010\u0011\u0005\u0006\u0004\u0002\u0011\u0005\u0003",
    "\u0002\u0002\u0002\u0012\u0013\u0007\u0005\u0002\u0002\u0013\u0014\u0007",
    "\u0006\u0002\u0002\u0014\u0015\u0007\u0003\u0002\u0002\u0015\u0016\u0007",
    "\u0007\u0002\u0002\u0016\u0017\u0007\u0004\u0002\u0002\u0017\u0007\u0003",
    "\u0002\u0002\u0002\u0003\u000b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "';'" ];

var symbolicNames = [ null, null, null, "VARTYPE", "ID", "NUMBER", "WS" ];

var ruleNames =  [ "statementList", "statement", "assignStatement" ];

function GrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

GrammarParser.prototype = Object.create(antlr4.Parser.prototype);
GrammarParser.prototype.constructor = GrammarParser;

Object.defineProperty(GrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

GrammarParser.EOF = antlr4.Token.EOF;
GrammarParser.T__0 = 1;
GrammarParser.T__1 = 2;
GrammarParser.VARTYPE = 3;
GrammarParser.ID = 4;
GrammarParser.NUMBER = 5;
GrammarParser.WS = 6;

GrammarParser.RULE_statementList = 0;
GrammarParser.RULE_statement = 1;
GrammarParser.RULE_assignStatement = 2;

function StatementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_statementList;
    return this;
}

StatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementListContext.prototype.constructor = StatementListContext;

StatementListContext.prototype.EOF = function() {
    return this.getToken(GrammarParser.EOF, 0);
};

StatementListContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterStatementList(this);
	}
};

StatementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitStatementList(this);
	}
};




GrammarParser.StatementListContext = StatementListContext;

GrammarParser.prototype.statementList = function() {

    var localctx = new StatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, GrammarParser.RULE_statementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 9;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GrammarParser.VARTYPE) {
            this.state = 6;
            this.statement();
            this.state = 11;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 12;
        this.match(GrammarParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.assignStatement = function() {
    return this.getTypedRuleContext(AssignStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitStatement(this);
	}
};




GrammarParser.StatementContext = StatementContext;

GrammarParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, GrammarParser.RULE_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.assignStatement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_assignStatement;
    return this;
}

AssignStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignStatementContext.prototype.constructor = AssignStatementContext;

AssignStatementContext.prototype.VARTYPE = function() {
    return this.getToken(GrammarParser.VARTYPE, 0);
};

AssignStatementContext.prototype.ID = function() {
    return this.getToken(GrammarParser.ID, 0);
};

AssignStatementContext.prototype.NUMBER = function() {
    return this.getToken(GrammarParser.NUMBER, 0);
};

AssignStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterAssignStatement(this);
	}
};

AssignStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitAssignStatement(this);
	}
};




GrammarParser.AssignStatementContext = AssignStatementContext;

GrammarParser.prototype.assignStatement = function() {

    var localctx = new AssignStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, GrammarParser.RULE_assignStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        this.match(GrammarParser.VARTYPE);
        this.state = 17;
        this.match(GrammarParser.ID);
        this.state = 18;
        this.match(GrammarParser.T__0);
        this.state = 19;
        this.match(GrammarParser.NUMBER);
        this.state = 20;
        this.match(GrammarParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.GrammarParser = GrammarParser;
