  Discourse.Dialect.replaceBlock({
    
    start: '[loom]',
    stop: '[/loom]',
    
    emitter: function(contents) {
      return "div", { "data-bbcode": true }, contents;
    }
  });
