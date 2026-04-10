/* ========================= */
/* Detect Mobile Device */
/* ========================= */

function isMobile() {

  return window.innerWidth <= 768;

}

function playClickSound() {
  const sound = document.getElementById("clickSound");

  if (!sound) return;

  sound.currentTime = 0;

  sound.play();
}

const allData = {
  Overall: [
    { name: "DRFOXCraft", pts: 60, discordId: "1392351363660382261" },
    { name: "Marvelz_", pts: 30, discordId: "933630129748455497" },
    { name: "GwayPyanGy", pts: 10, discordId: "1383852361914515557" },
    { name: "GorgeTheGuild", pts: 9, discordId: "1342477391983909583" },
    { name: "OliSteph", pts: 8, discordId: "993532803520139296" },
    { name: "MikeTheClover", pts: 7, discordId: "1380756143374209036" },
    { name: "vemoshake", pts: 6, discordId: "943480370530234388" },
    { name: "naomigrief", pts: 5, discordId: "1373600661945712691" },
    { name: "Mtskillissue", pts: 5, discordId: "1345005258950184990" },
    { name: "Mikepool", pts: 4, discordId: "1301054267188318218" },
    { name: "MashTheSigma", pts: 9, discordId: "1304646129845276692" },
    { name: "SlideTheBird", pts: 8, discordId: "1402080493700386838" },
    { name: "BaBaGyi", pts: 7, discordId: "14751872120161583" },
    { name: "xyztheplayer", pts: 6, discordId: "1294465154917990401" },
    { name: "coffee", pts: 3, discordId: "1363419712754552947" },
    { name: "Rinleaf", pts: 0, discordId: "1205524857551462450" }
  ],

  Sword: [
    { name: "DRFOXCraft", tier: "HT1", discordId: "1392351363660382261" },
    { name: "Marvelz_", tier: "LT1", discordId: "933630129748455497" },
    { name: "GwayPyanGy", tier: "HT2", discordId: "1383852361914515557" },
    { name: "naomigrief", tier: "LT2", discordId: "1373600661945712691" },
    { name: "GorgeTheGuild", tier: "HT3", discordId: "1342477391983909583" },
    { name: "MikeTheClover", tier: "LT3", discordId: "1380756143374209036" },
    { name: "Olisteph", tier: "HT3", discordId: "993532803520139296" },
    { name: "vemoshake", tier: "HT4", discordId: "943480370530234388" },
    { name: "Mtskillissue", tier: "LT4", discordId: "1345005258950184990" },
    { name: "slow", tier: "HT5", discordId: "1205524857551462450" },
    { name: "Mikepool", tier: "LT5", discordId: "1301054267188318218" },
    { name: "Rinleaf", tier: "-", discordId: "1205524857551462450" }
  ],

  Axe: [
    { name: "Marvelz_", tier: "LT1", discordId: "933630129748455497" },
    { name: "GwayPyanGy", tier: "HT2", discordId: "1383852361914515557" },
    { name: "GorgeTheGuild", tier: "LT2", discordId: "1342477391983909583" },
    { name: "vemoshake", tier: "HT3", discordId: "943480370530234388" },
    { name: "MikeTheClover", tier: "LT3", discordId: "1380756143374209036" },
    { name: "Olisteph", tier: "HT3", discordId: "993532803520139296" },
    { name: "naomigrief", tier: "HT4", discordId: "1373600661945712691" },
    { name: "Mtskillissue", tier: "LT4", discordId: "1345005258950184990" },
    { name: "babagyi", tier: "HT5", discordId: "14751872120161583" },
    { name: "Mikepool", tier: "LT5", discordId: "1301054267188318218" },
    { name: "DRFOXCraft", tier: "-", discordId: "1392351363660382261" },
    { name: "Rinleaf", tier: "-", discordId: "1205524857551462450" }
  ],

  Mace: [
    { name: "Marvelz_", tier: "HT1", discordId: "933630129748455497" },
    { name: "DRFOXCraft", tier: "LT1", discordId: "1392351363660382261" },
    { name: "GwayPyanGy", tier: "HT2", discordId: "1383852361914515557" },
    { name: "GorgeTheGuild", tier: "LT2", discordId: "1342477391983909583" },
    { name: "Mikepool", tier: "HT3", discordId: "1301054267188318218" },
    { name: "slow", tier: "LT3", discordId: "1205524857551462450" },
    { name: "MikeTheClover", tier: "HT4", discordId: "1380756143374209036" },
    { name: "vemoshake", tier: "LT4", discordId: "943480370530234388" },
    { name: "OliSteph", tier: "HT5", discordId: "993532803520139296" },
    { name: "babagyi", tier: "LT5", discordId: "14751872120161583" },
    { name: "Mtskillissue", tier: "HT5", discordId: "1345005258950184990" },
    { name: "Rinleaf", tier: "-", discordId: "1205524857551462450" }
  ],

  "Diamond SMP": [
    { name: "DRFOXCraft", tier: "HT1", discordId: "1392351363660382261" },
    { name: "Marvelz_", tier: "LT1", discordId: "933630129748455497" },
    { name: "GwayPyanGy", tier: "HT2", discordId: "1383852361914515557" },
    { name: "GorgeTheGuild", tier: "LT2", discordId: "1342477391983909583" },
    { name: "MikeTheClover", tier: "HT3", discordId: "1380756143374209036" },
    { name: "vemoshake", tier: "LT3", discordId: "943480370530234388" },
    { name: "Olisteph", tier: "HT4", discordId: "993532803520139296" },
    { name: "naomigrief", tier: "LT4", discordId: "1373600661945712691" },
    { name: "Mikepool", tier: "HT5", discordId: "1301054267188318218" },
    { name: "babayi", tier: "LT5", discordId: "14751872120161583" },
    { name: "Mtskillissue", tier: "HT5", discordId: "1345005258950184990" },
    { name: "Rinleaf", tier: "-", discordId: "1205524857551462450" }
  ],

  "Neth Pot": [
    { name: "Marvelz_", tier: "HT1", discordId: "933630129748455497" },
    { name: "DRFOXCraft", tier: "LT1", discordId: "1392351363660382261" },
    { name: "GwayPyanGy", tier: "HT2", discordId: "1383852361914515557" },
    { name: "GorgeTheGuild", tier: "LT2", discordId: "1342477391983909583" },
    { name: "MikeTheClover", tier: "HT3", discordId: "1380756143374209036" },
    { name: "Olisteph", tier: "HT3", discordId: "993532803520139296" },
    { name: "vemoshake", tier: "LT3", discordId: "943480370530234388" },
    { name: "naomigrief", tier: "HT4", discordId: "1373600661945712691" },
    { name: "Mtskillissue", tier: "LT4", discordId: "1345005258950184990" },
    { name: "babagyi", tier: "HT5", discordId: "14751872120161583" },
    { name: "Mikepool", tier: "LT5", discordId: "1301054267188318218" },
    { name: "Rinleaf", tier: "-", discordId: "1205524857551462450" }
  ],

  Crystal: [
    { name: "DRFOXCraft", tier: "HT1", discordId: "1392351363660382261" },
    { name: "GwayPyanGy", tier: "LT1", discordId: "1383852361914515557" },
    { name: "Marvelz_", tier: "HT2", discordId: "933630129748455497" },
    { name: "naomigrief", tier: "LT2", discordId: "1373600661945712691" },
    { name: "GorgeTheGuild", tier: "HT3", discordId: "1342477391983909583" },
    { name: "MikeTheClover", tier: "LT3", discordId: "1380756143374209036" },
    { name: "OliSteph", tier: "HT4", discordId: "993532803520139296" },
    { name: "Mtskillissue", tier: "LT4", discordId: "1345005258950184990" },
    { name: "Mikepool", tier: "HT5", discordId: "1301054267188318218" },
    { name: "vemoshake", tier: "LT5", discordId: "943480370530234388" },
    { name: "slow", tier: "HT5", discordId: "1205524857551462450" },
    { name: "Rinleaf", tier: "-", discordId: "1205524857551462450" }
  ]
};

const defaultDiscordInvite = "https://discord.gg/4bQaeDNmj6";

const modeTitle = document.getElementById("mode-title");
const playerList = document.getElementById("playerList");
const searchInput = document.getElementById("searchInput");
const playerModal = document.getElementById("playerModal");
const sidebar = document.getElementById("sidebar");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");

let currentMode = "Overall";

function normalizeName(name) {
  return String(name).trim().toLowerCase();
}

function findPlayerDiscordId(name) {
  const target = normalizeName(name);

  for (const mode in allData) {
    const found = allData[mode].find(
      (player) =>
        normalizeName(player.name) === target &&
        player.discordId &&
        player.discordId.trim() !== ""
    );

    if (found) {
      return found.discordId.trim();
    }
  }

  return "";
}

function getCombatTitle(rank) {
  if (rank <= 3) return "Combat Master";
  if (rank <= 7) return "Combat Ace";
  return "Combat Specialist";
}

function enterSite() {
  const welcome = document.getElementById("welcome-screen");
  welcome.style.opacity = "0";

  setTimeout(() => {
    welcome.style.display = "none";
    document.getElementById("main-content").style.display = "flex";
    switchMode("Overall");
  }, 600);
}

function getModeValue(player) {
  return currentMode === "Overall" ? `${player.pts} Pts` : player.tier;
}

function getTierClass(value) {
  if (value.includes("Pts")) return "pts";
  if (value.includes("LT")) return "lt";
  return "ht";
}

function updateActiveNav(mode) {
  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.textContent.toLowerCase().includes(mode.toLowerCase())) {
      btn.classList.add("active");
    }
  });
}

function switchMode(mode) {
  currentMode = mode;
  modeTitle.textContent = `${mode} Rankings`;
  updateActiveNav(mode);
  renderPlayers();

  if (window.innerWidth <= 980) {
    sidebar.classList.remove("active");
  }
}

function renderPlayers() {
  const players = allData[currentMode] || [];
  const query = searchInput.value.trim().toLowerCase();

  playerList.innerHTML = "";

  const filtered = players.filter((player) =>
    player.name.toLowerCase().includes(query)
  );

  if (!filtered.length) {
    playerList.innerHTML = `<div class="empty-state">No players found.</div>`;
    return;
  }

  filtered.forEach((player, index) => {
    const rank = index + 1;
    const value = getModeValue(player);
    const tierClass = getTierClass(value);
    const combatTitle = getCombatTitle(rank);

    let rankClass = "";
    if (index === 0) rankClass = "rank-1";
    else if (index === 1) rankClass = "rank-2";
    else if (index === 2) rankClass = "rank-3";

    const card = document.createElement("div");
    card.className = `player-card ${rankClass}`;
    card.style.animation = `cardIn 0.45s ease forwards ${index * 0.05}s`;

    card.innerHTML = `
      <div class="num">${rank}.</div>

      <div class="rank-info">
       <img 
        src="https://mc-heads.net/avatar/${player.name}/100"
          class="av"
          loading="lazy"
          decoding="async">
          <div class="name-wrap">
          <strong>
            ${player.name}
            <span class="combat-title">${combatTitle}</span>
          </strong>
          <div class="subtext">ASIA / MM Player</div>
        </div>
      </div>

      <div class="region-text">ASIA / MM</div>

      <div class="tier-box ${tierClass}">${value}</div>
    `;

    card.addEventListener("click", () => {
  playClickSound();
  openModal(player, value, rank);
  card.classList.add("click-pop");
  setTimeout(() => card.classList.remove("click-pop"), 340);
});

    playerList.appendChild(card);
  });
}

function openModal(player, value, rank) {
  document.getElementById("modalAvatar").src = `https://mc-heads.net/avatar/${player.name}/200`;
  document.getElementById("modalName").textContent = player.name;
  document.getElementById("modalPosition").textContent = `${rank}.`;
  document.getElementById("modalCurrentMode").textContent = currentMode.toUpperCase();
  document.getElementById("modalTier").textContent = value;

  const discordBtn = document.getElementById("modalDiscord");
  const discordId =
    player.discordId && player.discordId.trim() !== ""
      ? player.discordId.trim()
      : findPlayerDiscordId(player.name);

  if (discordId) {
    discordBtn.href = `https://discord.com/users/${discordId}`;
    discordBtn.innerHTML = `<i class="fa-brands fa-discord"></i> Connect Discord`;
    discordBtn.title = "Open Discord profile";
  } else {
    discordBtn.href = defaultDiscordInvite;
    discordBtn.innerHTML = `<i class="fa-brands fa-discord"></i> Connect Discord`;
    discordBtn.title = "Discord ID not added yet";
  }

  playerModal.style.display = "flex";
}

function closeModal() {
  playerModal.style.display = "none";
}

function filterPlayers() {
  renderPlayers();
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    mobileMenuBtn.classList.add("click-pop");
    setTimeout(() => mobileMenuBtn.classList.remove("click-pop"), 340);
  });
}

if (playerModal) {
  playerModal.addEventListener("click", (e) => {
    if (e.target === playerModal) {
      closeModal();
    }
  });
}

document.querySelectorAll(".click-animate").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.add("click-pop");
    setTimeout(() => this.classList.remove("click-pop"), 340);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

const style = document.createElement("style");
style.innerHTML = `
  @keyframes cardIn {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

console.log("all modes + discord ids + combat titles ready");

document.addEventListener("click", function(e) {

  if (
    e.target.closest("button") ||
    e.target.closest(".nav-item") ||
    e.target.closest(".player-card") ||
    e.target.closest(".modal-close") ||
    e.target.closest(".click-animate")
  ) {

    playClickSound();

  }

});

/* ========================= */
/* Padauk Only On Thingyan Week */
/* ========================= */

function isThingyanWeek() {

  const today =
    new Date();

  const month =
    today.getMonth() + 1;

  const day =
    today.getDate();

  if (
    month === 4 &&
    day >= 13 &&
    day <= 17
  ) {
    return true;
  }

  return false;

}

function createThingyanFlowers() {

  if (!isThingyanWeek())
    return;

  for (let i = 0; i < 40; i++) {

    const flower =
      document.createElement(
        "div"
      );

    flower.className =
      "padauk";

    flower.style.left =
      Math.random() * 100 + "vw";

    flower.style.animationDuration =
      6 + Math.random() * 6 + "s";

    document.body.appendChild(
      flower
    );

  }

}

createThingyanFlowers();

/* ========================= */
/* Water Rain */
/* ========================= */

function createWaterRain() {

  for (let i = 0; i < 40; i++) {
    
    const drop =
      document.createElement("div");

    drop.className =
      "water-rain";

    drop.style.left =
      Math.random() * 100 + "vw";

    drop.style.animationDuration =
      0.6 + Math.random() * 0.6 + "s";

    drop.style.animationDelay =
      Math.random() * 2 + "s";

    document.body.appendChild(
      drop
  
    );

  }

}

/* ========================= */
/* Optimized Rain */
/* ========================= */

function createWaterRain() {

  const total =
    isMobile()
      ? 25   // mobile
      : 80;  // desktop

  for (let i = 0; i < total; i++) {

    const drop =
      document.createElement("div");

    drop.className =
      "water-rain";

    drop.style.left =
      Math.random() * 100 + "vw";

    drop.style.animationDuration =
      0.7 + Math.random() * 0.7 + "s";

    document.body.appendChild(
      drop
    );

  }

}

createWaterRain();
createThingyanFlowers();
window.addEventListener(
  "load",
  function() {

    setTimeout(
      createWaterRain,
      300
    );

    setTimeout(
      createThingyanFlowers,
      500
    );

  }
);

/* ========================= */
/* Fireworks Click */
/* ========================= */

function createFirework(x, y) {

  const firework =
    document.createElement(
      "div"
    );

  firework.className =
    "firework";

  firework.style.left =
    x + "px";

  firework.style.top =
    y + "px";

  document.body.appendChild(
    firework
  );

  setTimeout(() => {

    firework.remove();

  }, 1000);

}

document.addEventListener(
  "click",
  function(e) {

    createFirework(
      e.clientX,
      e.clientY
    );

  }
);

/* ========================= */
/* Fireworks Desktop Only */
/* ========================= */

if (!isMobile()) {

  document.addEventListener(
    "click",
    function(e) {

      createFirework(
        e.clientX,
        e.clientY
      );

    }
  );

}

/* ========================= */
/* Low Power Mode */
/* ========================= */

function isSlowDevice() {

  return navigator.hardwareConcurrency <= 2;

}

if (isSlowDevice()) {

  console.log(
    "Low power device detected"
  );

}




