let cards = document.querySelector(".cards");
createCards();
let allCards = document.querySelectorAll(".card");
let cardOne = "";
matchCards();

allCards.forEach(function (card) {
  card.onclick = function () {
    if (!card.classList.contains("select")) {
      card.classList.add("select");
      let selected = document.querySelectorAll(".select").length;
      if ((selected % 2) / 2 !== 0) {
        cardOne = card;
      } else {
        let dataOne = cardOne.children[1].children[0].dataset.num;
        let dataTwo = card.children[1].children[0].dataset.num;
        if (dataOne === dataTwo) {
          if (
            Array.from(allCards).every((c) => c.classList.contains("select"))
          ) {
            successfully();
          }
        } else {
          selectFalce(card);
        }
      }
    }
  };
});

function createCards() {
  for (let i = 0; i < 16; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML =
      '<div class="face front"><img src="./images/que_icon.svg"></div><div class="face back"><img src="" alt="" data-num=""></div>';
    cards.appendChild(card);
  }
}

function matchCards() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
  allCards.forEach(function (card, i) {
    card.children[1].innerHTML = `<img src="./images/img-${arr[i]}.png" alt="img-${arr[i]}" data-num="${arr[i]}">`;
  });
}

function selectFalce(cd) {
  cards.style.pointerEvents = "none";
  setTimeout(() => {
    cardOne.classList.add("false");
    cd.classList.add("false");
  }, 500);
  setTimeout(() => {
    cardOne.classList.remove("select", "false");
    cd.classList.remove("select", "false");
    cards.style.pointerEvents = "all";
  }, 1000);
}

function successfully() {
  setTimeout(() => {
    allCards.forEach((c) => c.classList.remove("select"));
  }, 1000);
  setTimeout(() => {
    matchCards();
  }, 1500);
}
