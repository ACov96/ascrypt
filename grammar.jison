/* lexical grammar */
%lex
%%

\s+ /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
[a-zA-Z][a-zA-Z0-9]*  return 'ID'
"true"|"false"        return 'BOOL'
"if"                  return 'IF'
"else if"             return 'ELIF'
"else"                return 'ELSE'
"while"               return 'WHILE'
"do"                  return 'DO'
"for"                 return 'FOR'
"foreach"             return 'FOREACH'
"break"               return 'BREAK'
"*"                   return 'MULTIPLY'
"/"                   return 'DIVIDE'
"-"                   return 'MINUS'
"+"                   return 'PLUS'
"("                   return 'LPAREN'
")"                   return 'RPAREN'
"{"                   return 'LBRACKET'
"}"                   return 'RBRACKET'
"["                   return 'LBRACE'
"]"                   return 'RBRACE'
"."                   return 'DOT'
";"                   return 'SEMICOLON'
":"                   return 'COLON'
"="                   return 'ASSIGN'
"=="                  return 'EQ'
"!="                  return 'NEQ'
">"                   return 'GT'
">="                  return 'GTE'
"<"                   return 'LT'
"<="                  return 'LTE'
"let"                 return 'LET'
"var"                 return 'VAR'
"const"               return 'const'
"function"            return 'FUNCTION'
"sync"                return 'SYNC'
"async"               return 'ASYNC'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

%left 'PLUS' 'MINUS'
%left 'MULTIPLY' 'DIVIDE'
%left UMINUS

%start expressions
%%

expressions: e EOF {return $1;}	
	;

e: numbers
;

numbers: NUMBER numbers {console.log($1);}
| /* empty */
;
