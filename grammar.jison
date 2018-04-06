/* lexical grammar */
%lex
%%

\s+ /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'

"true"|"false"        return 'BOOL'
"if"                  return 'IF'
"else if"             return 'ELIF'
"else"                return 'ELSE'
"while"               return 'WHILE'
"do"                  return 'DO'
"for"                 return 'FOR'
"foreach"             return 'FOREACH'
"break"               return 'BREAK'
"null"                return 'NULL'
"return"              return 'RETURN'
"import"              return 'IMPORT'
"*"                   return 'MULTIPLY'
"/"                   return 'DIVIDE'
"-"                   return 'MINUS'
"+"                   return 'PLUS'
"+="                  return 'PLUSEQ'
"-="                  return 'MINUSEQ'
"*="                  return 'MULTEQ'
"/="                  return 'DIVEQ'
"++"                  return 'INCR'
"--"                  return 'DECR'
"("                   return 'LPAREN'
")"                   return 'RPAREN'
"{"                   return 'LBRACE'
"}"                   return 'RBRACE'
"["                   return 'LBRACKET'
"]"                   return 'RBRACKET'
"."                   return 'DOT'
","                   return 'COMMA'
";"                   return 'SEMICOLON'
":"                   return 'COLON'
"="                   return 'ASSIGN'
"=="                  return 'EQ'
"==="                 return 'LEQ'
"!="                  return 'NEQ'
">"                   return 'GT'
">="                  return 'GTE'
"<"                   return 'LT'
"<="                  return 'LTE'
"let"                 return 'LET'
"var"                 return 'VAR'
"const"               return 'CONST'
"function"            return 'FUNCTION'
"sync"                return 'SYNC'
"async"               return 'ASYNC'
<<EOF>>               return 'EOF'
[a-zA-Z][a-zA-Z0-9]*  return 'ID'
.                     return 'INVALID'


/lex

%right ASSIGN
%nonassoc EQ NEQ LT LTE GT GTE
%left PLUS MINUS
%left MULTIPLY DIVIDE
%left UMINUS


%start expressions
%%


expressions: eList EOF {return $1;}	
;

empty: /* empty */
;

eList: exp eList
| empty
;

exp: dec
| op
| call
;

call: ID LPAREN callarglist RPAREN
;

callarglist: empty
| calltarget callListRec
;

callListRec: COMMA calltarget callListRec
| empty
;

calltarget: optarget
;

number: NUMBER {$$ = {type: 'number', val: $1};}
;

op: algop
|   logop
|   compop
;

algopSymbol: PLUS {$$ = 'plus';}
| MINUS {$$ = 'minus';}
| MULTIPLY {$$ = 'multiply';}
| DIVIDE {$$ = 'divide';}
| PLUSEQ {$$ = 'pluseq';}
| MINUSEQ {$$ = 'minuseq';}
| MULTEQ {$$ = 'multeq';}
| DIVEQ {$$ = 'diveq';}
;

algopAugment: INCR {$$ = 'incr';}
| DECR {$$ = 'decr';}
;

algop: optarget algopSymbol optarget {$$ = {type: 'algop', operation: $2, left: $1, right: $3};}
|      optarget algopAugment {$$ = {type: 'algop', operation: $2, left: $1};}
;

logopSymbol: AND {$$ = 'and';}
| OR {$$ = 'or';}
;

logop: optarget logopSymbol optarget {$$ = {type: 'logop', operation: $2, left: $1, right: $3};}
;

compopSymbol: GT {$$ = 'gt';}
| GTE {$$ = 'gte';}
| LT {$$ = 'lt';}
| LTE {$$ = 'lte';}
| EQ {$$ = 'eq';}
| NEQ {$$ = 'neq';}
;

compop: optarget compopSymbol optarget {$$ = {type: 'compop', operation: $2, left: $1, right:$3};}
;

optarget: number {$$ = $1;}
|         varid {$$ = $1;}
;

dec: vardec {$$ = {type: 'dec', dec_type: 'var', dec: $1};}
| synctype fundec {$$ = {type: 'dec', dec_type: 'fun', sync: $1, dec: $2};}
| fundec {$$ = {type: 'dec', dec_type: 'fun', sync: 'async', dec: $1};}
;

synctype: ASYNC {$$ = 'async';}
| SYNC {$$ = 'sync';}
;

varScope: VAR {$$ = $1;}
| LET {$$ = $1;}
| CONST {$$ = $1;}
;

varDecPrefix: synctype varScope {$$ = {sync: $1, scope: $2};}
| varScope {$$ = {sync: 'async', scope: $1};}
;

vardec: varDecPrefix varexp ASSIGN vartarget {$$ = {type: 'vardec', options: $1, left: $2, right: $4};}
;

vartarget: optarget {$$ = $1;}
| exp {$$ = $1;}
;

varexp: varid {$$ = $1;}
;

varid: ID {$$ = {type: 'id', val: $1};}
;

fundec: FUNCTION ID LPAREN arglist RPAREN LBRACE funbody RBRACE {$$ = {id: $2, args: $4, body: $7};}
;

funbody: eList returnexp {$$ = {type: 'funbody', body: $1, returnStm: $2};}
;

arglist: empty {$$ = null;}
|        varid recarglist {$$ = {type: 'argList', head: $1, tail: $2};}
;

recarglist: empty {$$ = null;}
|           COMMA varid recarglist {$$ = {type: 'argList', head: $2, tail: $3};}
;

returnexp: RETURN {$$ = {type: 'returnexp', return_val: null};}
|          RETURN optarget {$$ = {type: 'returnexp', return_val: $2};}
|          empty {$$ = null;}
;

