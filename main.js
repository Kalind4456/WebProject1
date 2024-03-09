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
  return players[Math.round(Math.round(players.length))];
}

let player = getPlayer();
const image = document.getElementById("playerImage");
image.src = player.image;
