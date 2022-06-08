const energieJouer = -2;
const faimJouer = 1;
const joieJouer = 1;

const energieNourrir = 2;
const faimNourrir = -1;
const joieNourrir = -1;

let energie = 10;
let faim = 0;
let joie = 5;
let tamagotshiLife;

tamagotshiLife = alert(`Salut, c'est ton copain tamagotshi!
-------------------
Pour commencer tu as:
10 points d'energie, 0 point de faim et 5 points de joie.
-------------------
Amuse-toi avec moi!`);

function boucleDuJeu() {
  while (energie > 0 && faim <= 5 && joie > 0) {
    let choix = prompt(
      "Souhaitez-tu me nourrir, jouer avec moi ou sortir du jeu?"
    );

    if (choix === "jouer" && energie > 0) {
      energie = energie + energieJouer;
      faim = faim + faimJouer;
      joie = joie + joieJouer;
      alert(
        "Il reste à ton animal " +
          energie +
          " points d'energie," +
          faim +
          " points de faim et " +
          joie +
          " points de joie!"
      );
    } else if (choix == "nourrir" && faim > 0) {
      energie = energie + energieNourrir;
      faim = faim + faimNourrir;
      joie = joie + joieNourrir;
      alert(
        "Il reste à ton animal " +
          energie +
          " points d'energie," +
          faim +
          " points de faim et " +
          joie +
          " points de joie!"
      );
    } else if (choix == "sortir") {
      alert("Cia bambino!");
    } else if (faim < 0 && energie < 0 && joie >= 5) {
      choix = prompt(
        "Souhaitez-tu me nourrir, jouer avec moi ou sortir du jeu?"
      );
    } else {
      alert("Ton Tamagosthi est mort! Tu as perdu!");
    }
  }
}

function restartgame() {
  return (choix = prompt("Voulez-vous rejouer, oui ou non?"));
  if ((choix = "oui")) {
    boucleDuJeu();
  } else if (choix == "non") {
    alert("Le jeu est terminé");
  }
}
while (energie > 0 && faim <= 5 && joie > 0) {
  let choix = prompt(
    "Souhaitez-tu me nourrir, jouer avec moi ou sortir du jeu?"
  );

  if (choix === "jouer" && energie > 0) {
    energie = energie + energieJouer;
    faim = faim + faimJouer;
    joie = joie + joieJouer;
    alert(
      "Il reste à ton animal " +
        energie +
        " points d'energie," +
        faim +
        " points de faim et " +
        joie +
        " points de joie!"
    );
  } else if (choix == "nourrir" && faim > 0) {
    energie = energie + energieNourrir;
    faim = faim + faimNourrir;
    joie = joie + joieNourrir;
    alert(
      "Il reste à ton animal " +
        energie +
        " points d'energie," +
        faim +
        " points de faim et " +
        joie +
        " points de joie!"
    );
  } else if (choix == "sortir") {
    alert("Cia bambino!");
  } else if (faim < 0 && energie < 0 && joie >= 5) {
    choix = prompt("Souhaitez-tu me nourrir, jouer avec moi ou sortir du jeu?");
  } else {
    alert("Ton Tamagosthi est mort! Tu as perdu!");
  }
}
restartgame();
