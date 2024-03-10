function run() {
  let playerName;
  let playerImage;
  const players = [
    {
      name: "Jokic",
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png",
    },
    {
      name: "LeBron",
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    },
  ];

  function getPlayer() {
    const randomIndex = Math.floor(Math.random() * players.length);
    const player = players[randomIndex];
    playerImage = player.image;
    playerName = player.name;

    const image = document.querySelector("#playerImage");
    image.src = playerImage;
    image.alt = playerName;
  }
  getPlayer();

  const textbox = document.getElementById("textbox");

  const submit = document.getElementById("submitBtn");
  submit.onclick = function () {
    check();
  };

  function check() {
    if (textbox.value === playerName) {
      alert("You win!");
    }
  }
}
const restart = document.getElementById("restartBtn");
restart.onclick = function () {
  run();
};
run();
