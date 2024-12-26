"use strict";

import * as types from "./types";

export const program = (
  body: Array<types.Directive | types.Statement>,
): types.Program => {
  return {
    type: "Program",
    body: body,
    sourceType: "script",
    loc: null,
  };
};

export const identifier = (name: string): types.Identifier => {
  return {
    type: "Identifier",
    name: name,
    loc: null,
  };
};

export const literal = (value: number | string | boolean): types.Literal => {
  // eslint-disable-next-line no-useless-escape
  const raw = typeof value === "string" ? `\"${value}\"` : String(value);
  return {
    type: "Literal",
    value: value,
    raw: raw,
    loc: null,
  };
};

export const expressionStatement = (
  expression: types.Expression,
): types.ExpressionStatement => {
  return {
    type: "ExpressionStatement",
    expression: expression,
    loc: null,
  };
};

export const blockStatement = (
  body: Array<types.Statement>,
): types.BlockStatement => {
  return {
    type: "BlockStatement",
    body: body,
    loc: null,
  };
};

export const ifStatement = (
  test: types.Expression,
  consequent: types.Statement,
  alternate: types.Statement | null,
): types.IfStatement => {
  return {
    type: "IfStatement",
    test: test,
    consequent: consequent,
    alternate: alternate,
    loc: null,
  };
};

export const forStatement = (
  init: types.VariableDeclaration | types.Expression | null,
  test: types.Expression | null,
  update: types.Expression | null,
  body: types.Statement,
): types.ForStatement => {
  return {
    type: "ForStatement",
    init: init,
    test: test,
    update: update,
    body: body,
    loc: null,
  };
};

export const variableDeclaration = (
  declarations: Array<types.VariableDeclarator>,
  kind: "var" | "let" | "const",
): types.VariableDeclaration => {
  return {
    type: "VariableDeclaration",
    declarations: declarations,
    kind: kind,
    loc: null,
  };
};

export const variableDeclarator = (
  id: types.Identifier,
  init: types.Expression | null,
): types.VariableDeclarator => {
  return {
    type: "VariableDeclarator",
    id: id,
    init: init,
    loc: null,
  };
};

export const updateExpression = (
  operator: types.UpdateOperator,
  argument: types.Expression,
  prefix: boolean,
): types.UpdateExpression => {
  return {
    type: "UpdateExpression",
    operator: operator,
    argument: argument,
    prefix: prefix,
    loc: null,
  };
};

export const binaryExpression = (
  operator: types.BinaryOperator,
  left: types.Expression,
  right: types.Expression,
): types.BinaryExpression => {
  return {
    type: "BinaryExpression",
    operator: operator,
    left: left,
    right: right,
    loc: null,
  };
};

export const memberExpression = (
  object: types.Expression,
  property: types.EmptyStatement,
): types.MemberExpression => {
  return {
    type: "MemberExpression",
    object: object,
    property: property,
    computed: false,
    loc: null,
  };
};

export const callExpression = (
  callee: types.Expression,
  argument: types.Expression,
): types.CallExpression => {
  return {
    type: "CallExpression",
    callee: callee,
    arguments: [argument],
    loc: null,
  };
};
