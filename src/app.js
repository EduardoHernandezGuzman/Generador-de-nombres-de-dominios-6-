import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#domain").innerHTML = domainGenerator();

  function domainGenerator() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let domainType = [".com", ".es"];

    let domainNames = [];
    for (let x = 0; x < pronoun.length; x++) {
      for (let y = 0; y < adj.length; y++) {
        for (let z = 0; z < noun.length; z++) {
          for (let i = 0; i < domainType.length; i++) {
            let domainName =
              "<br>" + pronoun[x] + adj[y] + noun[z] + domainType[i] + "<br>";
            domainNames.push(domainName);
          }
        }
      }
    }
    console.log(domainNames);
    return domainNames;
  }
};
