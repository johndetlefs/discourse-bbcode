import { registerOption } from "pretty-text/pretty-text";

function embedVideo(md) {
  
  // useloom
  md.inline.bbcode.ruler.push('loom',{
    tag: 'loom',
    replace: function(state, tagInfo, content) {
      let token = state.push('html_raw', '', 0);
      const escaped = state.md.utils.escapeHtml(content);
      token.content = `<div><iframe src='${escaped}'></iframe></div>`;
      return true;
    }
  });
  
  //youtube
  md.inline.bbcode.ruler.push('youtube',{
    tag: 'youtube',
    replace: function(state, tagInfo, content) {
      let token = state.push('html_raw', '', 0);
      const escaped = state.md.utils.escapeHtml(content);
      token.content = `<div><iframe width="100%" height="420" src='${escaped}' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
      return true;
    }
  });

}

export function setup(helper) {
  
  if(!helper.markdownIt) { return; }

  helper.whiteList([
    "div.highlight"
  ]);

  helper.registerPlugin(embedVideo);
         
}
