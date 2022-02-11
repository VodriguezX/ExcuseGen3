/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "driver", "comedian", "server"];
  let action = ["took my", "threw my", "ate my", "stole my", "bit my"];
  let possession = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let possIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    "" +
    subject[subjIndex] +
    "" +
    action[actIndex] +
    "" +
    possession[possIndex] +
    "" +
    where[whereIndex]
  );
};
