!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var a=function(){"use strict";function r(){e(t)(this,r),this.robotScore=0,this.userScore=0,this.game=document.querySelector(".rock-paper-scissors"),this.gameContainer=document.querySelector(".rock-paper-scissors__container"),this.buttons=[{name:"rock",class:"rock"},{name:"scissors",class:"scissors"},{name:"paper",class:"paper"}],this.init()}return e(n)(r,[{key:"init",value:function(){this.renderButtons(),this.addEventListeners(),this.renderScore(),this.renderResult()}},{key:"renderButtons",value:function(){var e=document.createElement("h2");e.classList.add("rock-paper-scissors__title"),e.classList.add("title"),e.textContent="Камінь - ножиці - папір",this.gameContainer.prepend(e);var t=document.createElement("div");t.classList.add("rock-paper-scissors__buttons"),this.game.append(t),t.innerHTML=this.buttons.map((function(e){return"<button type='button' class='button rock-paper-scissors__button--".concat(e.class," rock-paper-scissors__button' data-name = '").concat(e.name,"'></button>")})).join("")}},{key:"addEventListeners",value:function(){var e=this;this.game.querySelectorAll(".button").forEach((function(t){var n=e;t.addEventListener("click",(function(e){n.buttonsScoreHandler(e)}))}))}},{key:"buttonsScoreHandler",value:function(e){var t=e.target.dataset.name,n=this.robotPick(),r=this.getResult(t,n),a=document.querySelector(".result__text");"user"===r&&(a.innerHTML="Ви виграли раунд!",a.style.color="#039900",this.userScore+=1),"robot"===r&&(a.innerHTML="Комп’ютер виграв раунд!",a.style.color="#990000",this.robotScore+=1),"draw"===r&&(a.innerHTML="Нічия!",a.style.color="#039900",this.robotScore+=1,this.userScore+=1),document.querySelector(".result__button").innerHTML="Варіант комп'ютера: ".concat(n),this.renderScore()}},{key:"robotPick",value:function(){var e=this.buttons.map((function(e){return e.name}));return e[Math.floor(Math.random()*e.length)]}},{key:"getResult",value:function(e,t){return"scissors"===e&&"paper"===t||"paper"===e&&"rock"===t||"rock"===e&&"scissors"===t?"user":e===t?"draw":"robot"}},{key:"renderScore",value:function(e){var t=this.game.querySelector(".score__container");t||((t=document.createElement("div")).classList.add("score__container"),this.game.append(t)),t.innerHTML='\n    <h2 class="result__title">Рахунок:</h2>\n    <p class="robot__output">Комп’ютер - '.concat(this.robotScore,'</p>\n    <p class="user__output">Ви - ').concat(this.userScore,"</p>\n  ")}},{key:"renderResult",value:function(){var e=document.createElement("div");e.classList.add("result__container"),this.gameContainer.appendChild(e);var t=document.createElement("p");t.classList.add("result__text"),t.innerHTML="Щоб почати гру натисніть на будь який варіант!";var n=document.createElement("p");n.type="button",n.classList.add("result__button"),n.innerHTML="Варіант комп'ютера",e.append(t,n)}}]),r}(),o=function(){"use strict";function r(){e(t)(this,r),document.querySelector(".google-dinosaur").innerHTML='<div class="game__container--dino">\n        <div class="dino"></div>\n        </div>\n        ',this.dino=document.querySelector(".dino"),this.gameArea=document.querySelector(".game__container--dino"),this.gameOver=!1,this.isJumping=!1,this.gameModalStart()}return e(n)(r,[{key:"gameModalStart",value:function(){var e=this;this.gameArea.insertAdjacentHTML("beforeend",'\n    <div class="dinosaur__modal show">\n      <p class="dinosaur__lose">Гугл динозаврик!</p>\n      <button class="dinosaur__restart button">Почати гру!</button>\n    </div>\n    ');var t=this.gameArea.querySelector(".dinosaur__modal");this.gameArea.querySelector(".dinosaur__restart").addEventListener("click",(function(){t.classList.remove("show"),setTimeout((function(){t.remove()}),250),e.init()}))}},{key:"init",value:function(){var e=this;document.addEventListener("keydown",(function(t){"Space"!==t.code||e.isJumping||e.gameOver||e.jump()})),document.addEventListener("mousedown",(function(t){e.isJumping||e.gameOver||e.jump()})),this.renderObstacles(),this.checkCollision()}},{key:"jump",value:function(){var e=this;this.isJumping=!0,this.dino.classList.add("jump"),setTimeout((function(){e.isJumping=!1,e.dino.classList.remove("jump")}),500)}},{key:"checkCollision",value:function(){var e=this,t=function(){if(!0!==e.gameOver){var n=e.gameArea.querySelector(".cactus"),r=n.getBoundingClientRect(),a=e.dino.getBoundingClientRect();a.right>r.left&&a.left<r.right&&a.bottom>r.top?e.endGame(n):requestAnimationFrame(t)}};requestAnimationFrame(t)}},{key:"renderObstacles",value:function(){var e=this,t=document.createElement("div");t.classList.add("cactus"),t.style.height=this.randomHeight(),this.gameArea.appendChild(t);var n=function(){t.removeEventListener("animationiteration",n),e.gameArea.removeChild(t),e.gameOver||e.renderObstacles()};t.addEventListener("animationiteration",n)}},{key:"randomHeight",value:function(){return"".concat(30*Math.random()+40,"px")}},{key:"endGame",value:function(e){e.style.animationPlayState="paused",this.gameOver=!0,this.gameOverModal()}},{key:"gameOverModal",value:function(){var e=this;this.gameArea.insertAdjacentHTML("beforeend",'\n    <div class="dinosaur__modal">\n      <p class="dinosaur__lose">Ви програли!</p>\n      <button class="dinosaur__restart button">Спробувати знову</button>\n    </div>\n    ');var t=this.gameArea.querySelector(".dinosaur__modal");setTimeout((function(){t.classList.add("show")}),10),this.gameArea.querySelector(".dinosaur__restart").addEventListener("click",(function(){return e.restartGame()}))}},{key:"restartGame",value:function(){this.gameArea.querySelector(".dinosaur__modal").remove(),this.gameArea.querySelector(".cactus").remove(),this.gameOver=!1,this.renderObstacles(),this.checkCollision()}}]),r}(),c=[{id:1,name:"Високосний калькулятор",category:["numerical","all"],class:"calculator-year",init:function(){var e=document.querySelector(".calculator-year__container"),t=document.createElement("h2");t.classList.add("title__leap-year"),t.textContent="Перевір в який рік ти народився",e.prepend(t),document.querySelector(".calculator-year").innerHTML='  <form action="#" class="form__check-year">      <input\nclass="input__check-year"\ntype="number"\nid="year"\nplaceholder="Введіть рік народження"\n/>\n<button class="button__check-year" id="checkYearButton"></button>\n</form>\n\n<p class="result__check-year" id="result"></p>\n';var n=document.querySelector("#year"),r=document.querySelector("#result");document.querySelector("#checkYearButton").addEventListener("click",(function(e){e.preventDefault(),0===n.value.trim().length&&(r.innerHTML="Введіть ваш рік!",r.style.color="red");var t=parseInt(n.value);t%4==0&&t%100!=0||t%400==0?(r.innerHTML="Ви народилися у високосний рік!",r.style.color="green"):(r.innerHTML="Ви народилися не в високосний рік.",r.style.color="red")}))}},{id:2,name:"Вгадай число",category:["numerical","all"],class:"guess-number",init:function(){var e=document.querySelector(".guess-number__container"),t=document.createElement("h2");t.classList.add("title__numerical"),t.textContent="Вгадай число, яке загадав комп’ютер",e.prepend(t),document.querySelector(".guess-number").innerHTML='<form action="#" class="form__numerical">\n<input\n  class="input__numerical"\n  type="number"\n  id="number"\n  placeholder="Введіть число"\n/>\n<button type=\'button\' class="button__numerical" id="checkNumber"></button>\n</form>\n\n<p class="result__numerical" id="result">Щоб почати гру, напишіть будь яке число від 1 до 10!</p>\n';var n=document.querySelector("#number"),r=document.querySelector("#checkNumber"),a=document.querySelector("#result"),o=Math.floor(10*Math.random())+1;r.addEventListener("click",(function(){var e=parseInt(n.value);e===o?(a.innerHTML="Вітаю, ви вгадали число! ".concat(o),a.style.color="green"):e<o&&(a.innerHTML="Ви не вгадали, чило ".concat(o),a.style.color="red"),o=Math.floor(10*Math.random())+1}))}},{id:3,name:"Камінь-Ножиці-Папір",category:["game","all"],class:"rock-paper-scissors",init:function(){new a}},{id:4,name:"Калькулятор",category:["numerical","all"],class:"calculator"},{id:5,name:"Калькулятор часу",category:["numerical","all"],class:"time-calculator"},{id:6,name:"Google динозаврик",category:["game","all"],class:"google-dinosaur",init:function(){new o}},{id:7,name:"Футбол",category:["game","all"],class:"soccer"},{id:8,name:"Найбільше число",category:["numerical","all"],class:"biggest-number"},{id:9,name:"Наша команда",category:["acquaintance","all"],class:"our-team"},{id:10,name:"Вчений",category:["acquaintance","all"],class:"scientist"}],s=function(e,t){var n=document.querySelector("#main"),r=e.filter((function(e){return"all"===t||e.category.includes(t)}));n.innerHTML=r.map((function(e){return"<section class='section'>\n    <div class=\"container ".concat(e.class,'__container game__container">\n      <div class="game ').concat(e.class,'"></div>\n    </div>\n  </section>')})).join(""),r.forEach((function(e){e.init&&e.init()}))};document.addEventListener("DOMContentLoaded",(function(){s(c,"all")}));document.querySelector(".submenu").addEventListener("click",(function(e){switch(e.target.dataset.category){case"numerical":s(c,"numerical");break;case"games":s(c,"game");break;case"acquaintance":s(c,"acquaintance")}}))}();
//# sourceMappingURL=index.8c987d7b.js.map
