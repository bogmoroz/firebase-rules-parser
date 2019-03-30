// Generated from FirebaseRules.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by FirebaseRulesParser.
function FirebaseRulesListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

FirebaseRulesListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
FirebaseRulesListener.prototype.constructor = FirebaseRulesListener;

// Enter a parse tree produced by FirebaseRulesParser#service.
FirebaseRulesListener.prototype.enterService = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#service.
FirebaseRulesListener.prototype.exitService = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#namespace.
FirebaseRulesListener.prototype.enterNamespace = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#namespace.
FirebaseRulesListener.prototype.exitNamespace = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#namespaceBlock.
FirebaseRulesListener.prototype.enterNamespaceBlock = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#namespaceBlock.
FirebaseRulesListener.prototype.exitNamespaceBlock = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#matchBlock.
FirebaseRulesListener.prototype.enterMatchBlock = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#matchBlock.
FirebaseRulesListener.prototype.exitMatchBlock = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#allowKey.
FirebaseRulesListener.prototype.enterAllowKey = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#allowKey.
FirebaseRulesListener.prototype.exitAllowKey = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#comment.
FirebaseRulesListener.prototype.enterComment = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#comment.
FirebaseRulesListener.prototype.exitComment = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#matcher.
FirebaseRulesListener.prototype.enterMatcher = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#matcher.
FirebaseRulesListener.prototype.exitMatcher = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#allow.
FirebaseRulesListener.prototype.enterAllow = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#allow.
FirebaseRulesListener.prototype.exitAllow = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#pathVariableReplace.
FirebaseRulesListener.prototype.enterPathVariableReplace = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#pathVariableReplace.
FirebaseRulesListener.prototype.exitPathVariableReplace = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#pathVariable.
FirebaseRulesListener.prototype.enterPathVariable = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#pathVariable.
FirebaseRulesListener.prototype.exitPathVariable = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#arguments.
FirebaseRulesListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#arguments.
FirebaseRulesListener.prototype.exitArguments = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#functionDeclaration.
FirebaseRulesListener.prototype.enterFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#functionDeclaration.
FirebaseRulesListener.prototype.exitFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#numberExpression.
FirebaseRulesListener.prototype.enterNumberExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#numberExpression.
FirebaseRulesListener.prototype.exitNumberExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#objectReferenceExpression.
FirebaseRulesListener.prototype.enterObjectReferenceExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#objectReferenceExpression.
FirebaseRulesListener.prototype.exitObjectReferenceExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#parenthesisExpression.
FirebaseRulesListener.prototype.enterParenthesisExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#parenthesisExpression.
FirebaseRulesListener.prototype.exitParenthesisExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#identifierReferenceExpression.
FirebaseRulesListener.prototype.enterIdentifierReferenceExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#identifierReferenceExpression.
FirebaseRulesListener.prototype.exitIdentifierReferenceExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#arithmeticExpression.
FirebaseRulesListener.prototype.enterArithmeticExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#arithmeticExpression.
FirebaseRulesListener.prototype.exitArithmeticExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#booleanExpression.
FirebaseRulesListener.prototype.enterBooleanExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#booleanExpression.
FirebaseRulesListener.prototype.exitBooleanExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#functionExpression.
FirebaseRulesListener.prototype.enterFunctionExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#functionExpression.
FirebaseRulesListener.prototype.exitFunctionExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#compareExpression.
FirebaseRulesListener.prototype.enterCompareExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#compareExpression.
FirebaseRulesListener.prototype.exitCompareExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#binaryExpression.
FirebaseRulesListener.prototype.enterBinaryExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#binaryExpression.
FirebaseRulesListener.prototype.exitBinaryExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#LogicalExpression.
FirebaseRulesListener.prototype.enterLogicalExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#LogicalExpression.
FirebaseRulesListener.prototype.exitLogicalExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#getExpression.
FirebaseRulesListener.prototype.enterGetExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#getExpression.
FirebaseRulesListener.prototype.exitGetExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#stringExpression.
FirebaseRulesListener.prototype.enterStringExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#stringExpression.
FirebaseRulesListener.prototype.exitStringExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#nullExpression.
FirebaseRulesListener.prototype.enterNullExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#nullExpression.
FirebaseRulesListener.prototype.exitNullExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#unaryExpression.
FirebaseRulesListener.prototype.enterUnaryExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#unaryExpression.
FirebaseRulesListener.prototype.exitUnaryExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#get.
FirebaseRulesListener.prototype.enterGet = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#get.
FirebaseRulesListener.prototype.exitGet = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#functionCall.
FirebaseRulesListener.prototype.enterFunctionCall = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#functionCall.
FirebaseRulesListener.prototype.exitFunctionCall = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#getPath.
FirebaseRulesListener.prototype.enterGetPath = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#getPath.
FirebaseRulesListener.prototype.exitGetPath = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#matchPath.
FirebaseRulesListener.prototype.enterMatchPath = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#matchPath.
FirebaseRulesListener.prototype.exitMatchPath = function(ctx) {
};



exports.FirebaseRulesListener = FirebaseRulesListener;