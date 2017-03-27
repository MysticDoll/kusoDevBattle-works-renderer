import Marked from "marked";
import Fetch from "./fetcher";
import validator from "./validator";

const container = document.getElementById("works-container");

document.addEventListener("DOMContentLoaded", () => {
  Fetch("/works.json")
    .then(plain => JSON.parse(plain))
    .then(works => {
      return Promise.all(works.map((work) => {
        return new Promise((resolve) => {
          if(validator(work)) {
            resolve(Fetch(`/works/description/${work.description}`));
          }
          resolve("");
        }).then(description => {
          return Marked(description);
        }).then(description => {
          return `<div class="work">
            <h2 class="work-title"><a href=${work.url}>${work.title}</a></h2>
            <div class="work-screenshot">
              <h2>スクリーンショット</h2>
              <img src="/works/images/${work.screenshot}"></img>
            </div>
            <div class="work-descreption">
              <h2>説明</h2>
              ${description}
            </div>
          </div>`;
        });
      })).then(templates => {
        container.innerHTML = templates.join("");
      });
    });
});