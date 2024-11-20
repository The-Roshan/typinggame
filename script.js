const wordDisplay = document.getElementById("wordDisplay");
const wordInput = document.getElementById("wordInput");
const timerElement = document.getElementById("time");
const scoreElement = document.getElementById("currentScore");
const accuracyElement = document.getElementById("currentAccuracy");
const highScoresElement = document.getElementById("highScores");
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const gameArea = document.getElementById("gameArea");
const gameOverScreen = document.getElementById("gameOverScreen");
const difficultySelect = document.getElementById("difficulty");

let words = [
  "cat", "dog", "elephant", "giraffe", "hippopotamus",
  "javascript", "python", "algorithm", "function", "variable",
  "movie", "cinema", "character", "screenplay", "director",
  "archipelago", "caterpillar", "dachshund", "equilibrium", "fuchsia",
"galvanize", "hexadecimal", "impeccable", "juxtaposition", "kaleidoscope",
"labyrinth", "metamorphosis", "nefarious", "obfuscate", "pandemonium",
"quintessential", "reciprocity", "sesquipedalian", "tintinnabulation", "ubiquitous",
"vexillology", "wafflestomper", "xenotransplantation", "yottabyte", "zoology",
"baccalaureate", "cacophony", "didgeridoo", "ellipsis", "flabbergasted",
"gobbledegook", "hippopotomonstrosesquipedaliophobia", "infinitesimal", "jabberwocky", "knickerbocker",
"lobotomized", "monopolization", "nyctophobia", "ornithorhynchus", "pseudopseudohypoparathyroidism",
"quizzical", "raconteur", "sesquipedalianism", "triskaidekaphobia", "uncharacteristically",
"ventriloquize", "watermelon", "xenogamy", "yodeling", "zealous",
"bamboozled", "catastrophe", "dodecahedron", "electromagnetic", "fantasmagorical",
"gargantuan", "haemorrhage", "ichthyology", "jackanapes", "kerfuffle",
"lactobacillus", "meretricious", "nauseating", "onomatopoeia", "pterodactyl",
"quizzing", "rambunctious", "scintillating", "trampoline", "underwhelmed",
"verisimilitude", "washboard", "xenophobic", "yawning", "zigzagging",
"ballistic", "concatenate", "discombobulated", "exhilarating", "fallacious",
"gastronomy", "hippopotamus", "idiosyncratic", "juvenescence", "knickknack",
"lexicographical", "microwave", "noctambulant", "onomatopoetic", "pseudonym",
"quantum", "reverberating", "supercalifragilisticexpialidocious", "teratogenesis", "ultraviolet",
"vocabulary", "whimsical", "xylophone", "yurt", "zenith",
"breathtaking", "confabulate", "dilapidated", "elucidate", "ferociously",
"gregarious", "hieroglyphics", "impetuous", "juxtapose", "kaleidoscopic",
"lycanthropy", "mischievous", "nonchalant", "ostentatious", "preposterous",
"quizzicality", "resplendent", "synecdoche", "titillating", "unparalleled",
"verisimilitude", "whippersnapper", "xenogenesis", "yachtsman", "zigzag",
"bamboozle", "contraband", "draconian", "enigma", "fluorescent",
"gregariously", "hodgepodge", "inconsequential", "juvenescent", "kerfluffle",
"lackadaisical", "magnanimous", "notoriety", "opalescent", "prestidigitation",
"quizziferous", "revenant", "sartorial", "transcendental", "unscrupulous",
"vigilant", "whippersnapper", "xenoglossophobia", "yachtsman", "zeppelin",
"belligerent", "cathartic", "debacle", "eccentric", "fluctuate",
"grapefruit", "higgledy-piggledy", "inexplicable", "juvenescence", "kiwifruit",
"languorous", "misconception", "nonplussed", "orgiastic", "precipitation",
"quixotically", "remonstrate", "soliloquy", "transmogrify", "untenable",
"vivacious", "whirligig", "xenophilia", "yammering", "zydeco",
"balderdash", "circumspect", "defenestration", "effervescent", "fortuitous",
"gregariousness", "haberdashery", "inimical", "jurisprudence", "knucklehead",
"lepidopterology", "meticulous", "nullification", "olfactory", "pseudonymity",
"quadrilateral", "resilient", "supernumerary", "tyrannical", "unambiguous",
"voluminous", "whodunit", "xenophobic", "yeast", "zeitgeist",
"bamboozlement", "carnivorous", "dyspeptic", "euphemism", "frivolous",
"gratuitous", "hierarchical", "insatiable", "jejune", "klutzy",
"lamentable", "misanthrope", "nondescript", "obstreperous", "pulchritudinous",
"quaffable", "recalcitrant", "scintillate", "transmute", "unfathomable",
"vulpine", "whippersnapper", "xenogeny", "yammerer", "zephyr",
"benevolent", "cumbersome", "deleterious", "equivocal", "frostbite",
"grandiloquent", "horticulture", "inviolable", "jocund", "knavish",
"lachrymose", "monolithic", "nexus", "obfuscation", "plenipotentiary",
"quintessentially", "reverence", "slough", "tantalizing", "untenanted",
"vociferous", "whimsically", "xenobiotic", "yodel", "zoological",
"bibliophile", "conundrum", "dystopia", "esoteric", "felicitous",
"grimace", "haphazard", "intrepid", "juggernaut", "kowtow",
"lexicon", "metamorphic", "nebula", "ostentatiously", "phosphorescent",
"quizzacious", "recalcitrant", "solace", "trajectorize", "unfathomably",
"vulpes", "whippersnapper", "xenotransplantation", "yonder", "zealot",
"butterscotch", "cacophonous", "diabolical", "eccentricity", "flabbergasting",
"gargoyle", "hegemony", "insolent", "juxtaposed",
];

let currentWord = "";
let score = 0;
let totalTyped = 0;
let correctTyped = 0;
let timeLeft = 30;
let gameRunning = false;
let difficulty = "medium";

// Start Game
startButton.addEventListener("click", () => {
  difficulty = difficultySelect.value;
  timeLeft = difficulty === "easy" ? 60 : difficulty === "medium" ? 45 : 30;
  startGame();
});

restartButton.addEventListener("click", startGame);

function startGame() {
  resetGame();
  gameOverScreen.style.display = "none";
  gameArea.style.display = "block";
  startButton.style.display = "none";
  gameRunning = true;
  wordInput.focus();
  generateWord();

  const countdown = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(countdown);
      endGame();
    } else {
      timeLeft--;
      timerElement.textContent = timeLeft;
    }
  }, 1000);
}

function generateWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  wordDisplay.textContent = currentWord;
}

function resetGame() {
  timeLeft = difficulty === "easy" ? 60 : difficulty === "medium" ? 45 : 30;
  score = 0;
  totalTyped = 0;
  correctTyped = 0;
  wordInput.value = "";
  scoreElement.textContent = score;
  accuracyElement.textContent = "100";
  timerElement.textContent = timeLeft;
}

wordInput.addEventListener("input", () => {
  if (!gameRunning) return;

  totalTyped++;
  if (wordInput.value.trim() === currentWord) {
    correctTyped++;
    score++;
    generateWord();
    wordInput.value = "";
  }

  updateStats();
});

function updateStats() {
  const accuracy = correctTyped === 0 ? 0 : Math.round((correctTyped / totalTyped) * 100);
  scoreElement.textContent = score;
  accuracyElement.textContent = accuracy;
}

function endGame() {
  gameRunning = false;
  gameArea.style.display = "none";
  gameOverScreen.style.display = "block";
  wordInput.value = "";
  wordInput.blur();
  startButton.style.display = "inline-block";

  document.getElementById("finalScore").textContent = score;
  document.getElementById("finalAccuracy").textContent = accuracyElement.textContent;

  saveHighScore(score, difficulty);
  displayHighScores();
}

function saveHighScore(score, difficulty) {
  const highScores = JSON.parse(localStorage.getItem("highScores")) || {};
  if (!highScores[difficulty]) highScores[difficulty] = [];
  highScores[difficulty].push(score);
  highScores[difficulty].sort((a, b) => b - a);
  highScores[difficulty] = highScores[difficulty].slice(0, 5);
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

function displayHighScores() {
  const highScores = JSON.parse(localStorage.getItem("highScores")) || {};
  const scores = highScores[difficulty] || [];
  highScoresElement.innerHTML = scores.map((score) => `<li>${score}</li>`).join("");
}
