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
"wait"                return 'WAIT'
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

empty: /* empty */ {$$ = null;}
;

eList: exp SEMICOLON eList /* {$$ = {type: 'exp', next: $3};} */
| funDec eList /* {$$ = {type: 'funDec', next: $2};} */
| empty /* {$$ = $1;} */
;

exp: varDec /* {$$ = {type: 'varDec', exp: $1};} */
| callExp /* {$$ = {type: 'callExp', exp $1};} */
| op
| number
| ID
;

varDec: varType ID ASSIGN varTarget /* {$$ = {type: 'varAssign', varType: $1, varName: $2, varTarget: $4};} */
| varType ID /* {$$ = {type: 'varState', varName: $2};} */
;

varType: LET {$$ = $1;}
| VAR {$$ = $1;}
| CONST {$$ = $1;}
;

varTarget: NULL /* {$$ = {type: 'varTarget', val: null};} */
| exp 
;

op: algop;

algop: exp numOper exp;

/* algTarget: number | ID; */

numOper: PLUS | MINUS | MULTIPLY | DIVIDE;
       
number: NUMBER;

funDec: FUNCTION ID LPAREN argList RPAREN LBRACE eList returnExp RBRACE
      | FUNCTION LPAREN argList RPAREN LBRACE eList returnExp RBRACE
;

argList: empty
       | ID recArgList
;

recArgList: empty
          | COMMA ID recArgList
;

returnExp: empty
         | RETURN SEMICOLON
         | RETURN returnTarget SEMICOLON
;

returnTarget: number
            | ID
;

callExp: WAIT ID LPAREN callList RPAREN
       | ID LPAREN callList RPAREN;

callList: empty
        | callTarget recCallList
;

recCallList: COMMA callTarget recCallList
           | empty;

callTarget: number
          | ID
;
