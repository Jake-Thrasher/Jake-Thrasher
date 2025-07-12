$(document).ready(function () {
  const emojis = ["🐶", "🐶", "🐱", "🐱", "🐸", "🐸", "🦄", "🦄", "🐵", "🐵", "🐙", "🐙", "🦊", "🦊", "🐰", "🐰"];
  let shuffledEmojis = [];
  let flippedCards = [];
  let matched = 0;
  let score = 0;

  function shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
  }

  function renderBoard() {
    $("#gameBoard").empty();
    shuffledEmojis = shuffle([...emojis]);
    shuffledEmojis.forEach((emoji, index) => {
      $("#gameBoard").append(`<div class="card hidden" data-emoji="${emoji}" data-index="${index}"></div>`);
    });
  }

  function resetGame() {
    matched = 0;
    score = 0;
    flippedCards = [];
    $("#score").text(score);
    renderBoard();
    $(".card").removeClass("matched");
  }

  function flipCard(card) {
    const emoji = $(card).data("emoji");
    $(card).text(emoji).removeClass("hidden");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards;
      if ($(card1).data("emoji") === $(card2).data("emoji")) {
        matched += 2;
        score += 10;
        $(card1).addClass("matched").off();
        $(card2).addClass("matched").off();
      } else {
        score -= 2;
        setTimeout(() => {
          $(card1).addClass("hidden").text("");
          $(card2).addClass("hidden").text("");
        }, 1000);
      }
      $("#score").text(score);
      flippedCards = [];
    }

    if (matched === emojis.length) {
      alert("You win!");
    }
  }

  $("#startGameBtn").click(function () {
    const name = $("#playerName").val().trim().toLowerCase();
    if (!name) {
      alert("Please enter your name!");
      return;
    }

    $("#welcome").addClass("d-none");
    $("#gameInfo").removeClass("d-none");
    resetGame();

    if (name === "bender") {
      loadCheatMode();
      $("#greeting").text("Bite my shiny metal....");
    } else {
      $("#greeting").text(`Hello, ${name}!`);
    }
  });

  $("#resetGameBtn").click(function () {
    resetGame();
  });

  $(document).on("click", ".card.hidden", function () {
    if (flippedCards.length < 2) {
      flipCard(this);
    }
  });

  window.loadCheatMode = function () {
    resetGame();
    score = 999;
    $("#score").text(score);
    $("body").css("background-color", "#ffeb3b");
    alert("Cheat mode activated.");
  };
});