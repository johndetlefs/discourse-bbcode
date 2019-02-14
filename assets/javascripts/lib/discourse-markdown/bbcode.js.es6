import { registerOption } from "pretty-text/pretty-text";

export function setup(helper) {
  
  if(!helper.markdownIt) { return; }

  helper.whiteList([
    "div.highlight"
  ]);

  helper.replaceBlock({
    start: /\[loom\]/gim,
    stop: /\[\/loom\]/gim,
    emitter(blockContents, matches) {

      const contents = [
        "div",
        ["iframe", { src: "https://www.useloom.com/embed/960b7d02424a4cbf81a503eb34a158bb" }]
      ];
      console.log("We got here!");
      return contents;
    }
  });
         
}
