class Visitor {
  start(ctx) {
    return this.visitStatementSequence(ctx);
  }

  visitStatementSequence(ctx) {
    console.log('Context:', ctx);
    console.log(ctx.getChildCount());
    return null;
  }

  visitChildren(ctx) {
    if (!ctx) return null;
    if (ctx.children) {
      return ctx.children.map((child) => {
        if (child.children && child.children.length !== 0) {
          return child.accept(this);
        }
        console.log(child.getPayload());
        return child.getText();
      });
    }
  }
}

module.exports = { Visitor }
