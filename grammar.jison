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

expressions: e EOF {return $1;}	
;

empty: /* empty */
;

e: exp e
| empty
;

exp: dec
| NUMBER
| varexp
| op
;

op: algop
|   logop
|   compop
;

algop: optarget PLUS optarget
|      optarget MINUS optarget
|      optarget MULTIPLY optarget
|      optarget DIVIDE optarget
|      optarget INCR
|      optarget DECR
|      optarget PLUSEQ optarget
|      optarget MINUSEQ optarget
|      optarget MULTEQ optarget
|      optarget DIVEQ optarget
;

logop: optarget AND optarget
|      optarget OR  optarget
;

compop: optarget GT optarget
|       optarget GTE optarget
|       optarget LT optarget
|       optarget LTE optarget
|       optarget EQ  optarget
|       optarget NEQ optarget
;

optarget: NUMBER
|         varexp
;

dec: synctype vardec 
| vardec 
| synctype fundec
| fundec 
;

synctype: ASYNC | SYNC
;

vardec: VAR varexp ASSIGN exp
|       LET varexp ASSIGN exp
|       CONST varexp ASSIGN exp
;

varexp: varid
;

varid: ID
;

fundec: FUNCTION ID LPAREN arglist RPAREN LBRACE funbody RBRACE
|       FUNCTION LPAREN arglist RPAREN LBRACE funbody RBRACE
;

funbody: e returnexp
;

arglist: empty
|        varid recarglist
;

recarglist: empty
|           COMMA varid recarglist
;

returnexp: RETURN 
|          RETURN exp
|          empty
;
