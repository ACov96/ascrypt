grammar Grammar;

statementList: statement* EOF;
statement:
        assignStatement;

assignStatement: VARTYPE ID '=' NUMBER ';';

VARTYPE: 'let' | 'const' | 'var';
ID: [a-zA-Z][a-zA-Z0-9]*;
NUMBER: ('-')? [0-9]+ ('.' [0-9]+)?;
WS : [ \r\t\n]+ -> skip ;