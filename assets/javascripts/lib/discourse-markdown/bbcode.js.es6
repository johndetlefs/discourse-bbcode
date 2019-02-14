import { registerOption } from "pretty-text/pretty-text";

function loomVideo(md) {
  
  console.log("something happened!");
  
  md.inline.bbcode.ruler.push('loom',{
    tag: 'loom',
    replace: function(state, tagInfo, content) {
      let token = state.push('html_raw', '', 0);
      const escaped = state.md.utils.escapeHtml(content);
      token.content = `<div><iframe src='${escaped}'></iframe></div>`;
      return true;
    }
  });

}

export function setup(helper) {
  
  if(!helper.markdownIt) { return; }

  helper.whiteList([
    "div.highlight"
  ]);

  helper.registerPlugin(loomVideo);
         
}
