let alimentArray = [
  {
    image: "./assets/image/aliments/laitue.webp",
    badge: "legume",
    title: "Laitue",
    description: "Feuille tendre très appréciée des escargots.",
    nutrition: "Riche en eau et fibres, faible en protéines.",
    carence: "Peut entraîner carence protéique si donnée seule.",
    filtre: {
      categorie: "legume",
      nutriment: "fibres",
      fonction: "sante",
      origine: "local",
      carence: "proteine",
      moment: "midi",
      saison: "pluie"
    }
  },
  {
    image: "./assets/image/aliments/chou.webp",
    badge: "legume",
    title: "Chou",
    description: "Feuillage vert nourrissant.",
    nutrition: "Fibres, vitamines C et K.",
    carence: "Manque de protéines et calcium.",
    filtre: {
      categorie: "legume",
      nutriment: "vitamine",
      fonction: "sante",
      origine: "local",
      carence: "proteine",
      moment: "soir",
      saison: "seche"
    }
  },
  {
    image: "./assets/image/aliments/papaye.webp",
    badge: "fruit",
    title: "Papaye",
    description: "Fruit sucré et tendre.",
    nutrition: "Vitamine A, sucres rapides.",
    carence: "Excès de sucres, manque de protéines.",
    filtre: {
      categorie: "fruit",
      nutriment: "vitamine",
      fonction: "energie",
      origine: "local",
      carence: "proteine",
      moment: "matin",
      saison: "seche"
    }
  },
  {
    image: "./assets/image/aliments/banane.webp",
    badge: "fruit",
    title: "Banane",
    description: "Fruit énergétique.",
    nutrition: "Glucides, potassium.",
    carence: "Faible en calcium et protéines.",
    filtre: {
      categorie: "fruit",
      nutriment: "glucide",
      fonction: "energie",
      origine: "local",
      carence: "calcium",
      moment: "matin",
      saison: "pluie"
    }
  },
  {
    image: "./assets/image/aliments/mais.webp",
    badge: "cereale",
    title: "Maïs",
    description: "Grain broyé ou farine.",
    nutrition: "Énergie, glucides.",
    carence: "Carence en protéines et calcium.",
    filtre: {
      categorie: "cereale",
      nutriment: "glucide",
      fonction: "energie",
      origine: "local",
      carence: "proteine",
      moment: "midi",
      saison: "toute"
    }
  },
  {
    image: "./assets/image/aliments/son-de-ble.webp",
    badge: "cereale",
    title: "Son de blé",
    description: "Sous-produit du blé.",
    nutrition: "Fibres, vitamines B.",
    carence: "Faible en calcium.",
    filtre: {
      categorie: "cereale",
      nutriment: "fibres",
      fonction: "sante",
      origine: "residu",
      carence: "calcium",
      moment: "soir",
      saison: "seche"
    }
  },
  {
    image: "./assets/image/aliments/manioc.webp",
    badge: "racine",
    title: "Manioc",
    description: "Tubercule riche en amidon.",
    nutrition: "Énergie, glucides.",
    carence: "Carence en protéines et minéraux.",
    filtre: {
      categorie: "racine",
      nutriment: "glucide",
      fonction: "energie",
      origine: "local",
      carence: "proteine",
      moment: "midi",
      saison: "pluie"
    }
  },
  {
    image: "./assets/image/aliments/patate-douce.webp",
    badge: "racine",
    title: "Patate douce",
    description: "Tubercule sucré.",
    nutrition: "Vitamine A, glucides.",
    carence: "Faible en calcium.",
    filtre: {
      categorie: "racine",
      nutriment: "vitamine",
      fonction: "energie",
      origine: "local",
      carence: "calcium",
      moment: "soir",
      saison: "toute"
    }
  },
  {
    image: "./assets/image/aliments/feuille-manioc.webp",
    badge: "feuillage",
    title: "Feuilles de manioc",
    description: "Feuillage vert nutritif.",
    nutrition: "Protéines végétales, fer.",
    carence: "Faible en calcium.",
    filtre: {
      categorie: "feuillage",
      nutriment: "proteine",
      fonction: "croissance",
      origine: "local",
      carence: "calcium",
      moment: "matin",
      saison: "pluie"
    }
  },
  {
    image: "./assets/image/aliments/coquille-broyee.webp",
    badge: "mineraux",
    title: "Coquilles broyées",
    description: "Source de calcium.",
    nutrition: "Calcium essentiel pour coquille.",
    carence: "Aucune si bien dosé.",
    filtre: {
      categorie: "mineraux",
      nutriment: "mineral",
      fonction: "coquille",
      origine: "residu",
      carence: "aucune",
      moment: "nuit",
      saison: "toute"
    }
  },
  {
    image: "./assets/image/aliments/poudre-os.webp",
    badge: "mineraux",
    title: "Poudre d’os",
    description: "Complément minéral.",
    nutrition: "Calcium, phosphore.",
    carence: "Excès peut déséquilibrer.",
    filtre: {
      categorie: "mineraux",
      nutriment: "mineral",
      fonction: "coquille",
      origine: "residu",
      carence: "aucune",
      moment: "nuit",
      saison: "seche"
    }
  },
  {
    image: "./assets/image/aliments/provende-volaille.webp",
    badge: "provende",
    title: "Provende de volaille",
    description: "Aliment industriel.",
    nutrition: "Protéines, énergie.",
    carence: "Peut manquer de fibres.",
    filtre: {
      categorie: "provende",
      nutriment: "proteine",
      fonction: "croissance",
      origine: "industriel",
      carence: "fibres",
      moment: "midi",
      saison: "toute"
    },
    ingredients: [
      { image: "./assets/image/aliments/mais.webp", name: "Maïs" },
      { image: "./assets/image/aliments/son-de-ble.webp", name: "Son de blé" },
      { image: "./assets/image/aliments/poudre-os.webp", name: "Poudre d’os" }
    ],
    preparation: "Mélanger les ingrédients broyés dans les proportions recommandées. Ajouter de l’eau pour former une pâte homogène si nécessaire. Distribuer en petites quantités pour éviter le gaspillage.",
    vertus: [
      "Apporte protéines pour la croissance.",
      "Énergie pour l’activité et la reproduction.",
      "Calcium pour la formation de la coquille."
    ]
  },
  {
  image: "./assets/image/aliments/provende-classique.webp",
  badge: "provende",
  title: "Provende classique équilibrée",
  description: "Recette sèche et broyée pour escargots.",
  nutrition: "Énergie, protéines, calcium.",
  carence: "Réduit les risques si bien formulé.",
  filtre: { categorie: "provende", nutriment: "proteine", fonction: "reproduction", origine: "local", carence: "aucune", moment: "midi", saison: "toute" },
  ingredients: [
    { image: "./assets/image/aliments/mais.webp", name: "Maïs" },
    { image: "./assets/image/aliments/riz.webp", name: "Riz" },
    { image: "./assets/image/aliments/millet.webp", name: "Millet" },
    { image: "./assets/image/aliments/sorgho.webp", name: "Sorgho" },
    { image: "./assets/image/aliments/son-de-ble.webp", name: "Son de blé" },
    { image: "./assets/image/aliments/poudre-os.webp", name: "Poudre d’os" },
    { image: "./assets/image/aliments/coquille-broyee.webp", name: "Coquilles broyées" }
  ],
  preparation: "Broyer chaque ingrédient séparément jusqu’à obtenir une poudre fine. Mélanger les poudres dans un grand récipient en proportions égales. Bien homogénéiser pour éviter les grumeaux. Conserver au sec et distribuer en petites quantités.",
  vertus: ["Apporte protéines pour reproduction.", "Énergie pour croissance.", "Calcium pour coquille."]
},
{
  image: "./assets/image/aliments/provende-riche-calcium.webp",
  badge: "provende",
  title: "Provende riche en calcium",
  description: "Formule renforcée pour coquille solide.",
  nutrition: "Calcium, énergie.",
  carence: "Évite carence en calcium.",
  filtre: { categorie: "provende", nutriment: "mineral", fonction: "reproduction", origine: "local", carence: "aucune", moment: "soir", saison: "seche" },
  ingredients: [
    { image: "./assets/image/aliments/mais.webp", name: "Maïs" },
    { image: "./assets/image/aliments/orge.webp", name: "Orge" },
    { image: "./assets/image/aliments/seigle.webp", name: "Seigle" },
    { image: "./assets/image/aliments/avoine.webp", name: "Avoine" },
    { image: "./assets/image/aliments/poudre-coquille.webp", name: "Poudre de coquille" },
    { image: "./assets/image/aliments/pierre-blanche.webp", name: "Pierre blanche" },
    { image: "./assets/image/aliments/craie.webp", name: "Craie" }
  ],
  preparation: "Broyer les céréales en farine fine. Réduire les minéraux en poudre. Mélanger soigneusement dans un grand récipient. Conserver dans un endroit sec et distribuer en petites portions.",
  vertus: ["Renforce la reproduction.", "Assure une coquille solide.", "Apporte énergie."]
},

{
  image: "./assets/image/aliments/provende-fortifiante.webp",
  badge: "provende",
  title: "Provende fortifiante",
  description: "Recette sèche et broyée pour escargots.",
  nutrition: "Énergie, protéines, calcium.",
  carence: "Réduit les risques si bien formulé.",
  filtre: { categorie: "provende", nutriment: "proteine", fonction: "reproduction", origine: "local", carence: "aucune", moment: "matin", saison: "pluie" },
  ingredients: [
    { image: "./assets/image/aliments/mais.webp", name: "Maïs" },
    { image: "./assets/image/aliments/riz.webp", name: "Riz" },
    { image: "./assets/image/aliments/millet.webp", name: "Millet" },
    { image: "./assets/image/aliments/sorgho.webp", name: "Sorgho" },
    { image: "./assets/image/aliments/son-de-ble.webp", name: "Son de blé" },
    { image: "./assets/image/aliments/poudre-os.webp", name: "Poudre d’os" },
    { image: "./assets/image/aliments/coquille-broyee.webp", name: "Coquilles broyées" }
  ],
  preparation: "Broyer chaque ingrédient séparément en poudre fine. Mélanger dans un grand récipient en proportions équilibrées. Bien homogénéiser pour éviter les grumeaux. Conserver au sec et distribuer en petites quantités chaque matin.",
  vertus: ["Apporte protéines pour reproduction.", "Énergie pour croissance.", "Calcium pour coquille."]
},
{
  image: "./assets/image/aliments/provende-calcium.webp",
  badge: "provende",
  title: "Provende calcium renforcé",
  description: "Formule sèche pour coquille solide.",
  nutrition: "Calcium, énergie.",
  carence: "Évite carence en calcium.",
  filtre: { categorie: "provende", nutriment: "mineral", fonction: "reproduction", origine: "local", carence: "aucune", moment: "soir", saison: "seche" },
  ingredients: [
    { image: "./assets/image/aliments/orge.webp", name: "Orge" },
    { image: "./assets/image/aliments/seigle.webp", name: "Seigle" },
    { image: "./assets/image/aliments/avoine.webp", name: "Avoine" },
    { image: "./assets/image/aliments/poudre-coquille.webp", name: "Poudre de coquille" },
    { image: "./assets/image/aliments/pierre-blanche.webp", name: "Pierre blanche" },
    { image: "./assets/image/aliments/craie.webp", name: "Craie" }
  ],
  preparation: "Broyer les céréales en farine fine. Réduire les minéraux en poudre. Mélanger soigneusement dans un grand récipient. Conserver dans un endroit sec et distribuer en petites portions le soir.",
  vertus: ["Renforce la reproduction.", "Assure une coquille solide.", "Apporte énergie."]
},
{
  image: "./assets/image/aliments/provende-energie.webp",
  badge: "provende",
  title: "Provende énergie rapide",
  description: "Recette sèche pour vitalité.",
  nutrition: "Glucides complexes, calcium.",
  carence: "Évite carence énergétique.",
  filtre: { categorie: "provende", nutriment: "glucide", fonction: "reproduction", origine: "local", carence: "aucune", moment: "midi", saison: "pluie" },
  ingredients: [
    { image: "./assets/image/aliments/riz.webp", name: "Riz" },
    { image: "./assets/image/aliments/millet.webp", name: "Millet" },
    { image: "./assets/image/aliments/sorgho.webp", name: "Sorgho" },
    { image: "./assets/image/aliments/son-de-ble.webp", name: "Son de blé" },
    { image: "./assets/image/aliments/poudre-os.webp", name: "Poudre d’os" },
    { image: "./assets/image/aliments/pierre-blanche.webp", name: "Pierre blanche" }
  ],
  preparation: "Broyer les céréales en farine. Mélanger avec les minéraux réduits en poudre. Bien homogénéiser et conserver au sec. Servir en petites quantités à midi.",
  vertus: ["Apporte énergie pour reproduction.", "Renforce la vitalité.", "Améliore la croissance."]
},
{
  image: "./assets/image/aliments/provende-fibres.webp",
  badge: "provende",
  title: "Provende riche en fibres",
  description: "Formule sèche pour digestion.",
  nutrition: "Fibres, calcium.",
  carence: "Évite carence en fibres.",
  filtre: { categorie: "provende", nutriment: "fibres", fonction: "reproduction", origine: "local", carence: "aucune", moment: "soir", saison: "toute" },
  ingredients: [
    { image: "./assets/image/aliments/son-de-ble.webp", name: "Son de blé" },
    { image: "./assets/image/aliments/seigle.webp", name: "Seigle" },
    { image: "./assets/image/aliments/avoine.webp", name: "Avoine" },
    { image: "./assets/image/aliments/orge.webp", name: "Orge" },
    { image: "./assets/image/aliments/poudre-coquille.webp", name: "Poudre de coquille" },
    { image: "./assets/image/aliments/craie.webp", name: "Craie" }
  ],
  preparation: "Broyer les céréales en farine. Mélanger avec les minéraux en poudre. Bien homogénéiser et conserver au sec. Servir en petites quantités le soir.",
  vertus: ["Améliore la digestion.", "Favorise la reproduction.", "Renforce la coquille."]
},
{
  image: "./assets/image/aliments/provende-complete.webp",
  badge: "provende",
  title: "Provende complète",
  description: "Recette équilibrée pour escargots.",
  nutrition: "Énergie, protéines, calcium.",
  carence: "Réduit les risques si bien formulé.",
  filtre: { categorie: "provende", nutriment: "proteine", fonction: "reproduction", origine: "local", carence: "aucune", moment: "matin", saison: "toute" },
  ingredients: [
    { image: "./assets/image/aliments/mais.webp", name: "Maïs" },
    { image: "./assets/image/aliments/riz.webp", name: "Riz" },
    { image: "./assets/image/aliments/millet.webp", name: "Millet" },
    { image: "./assets/image/aliments/sorgho.webp", name: "Sorgho" },
    { image: "./assets/image/aliments/son-de-ble.webp", name: "Son de blé" },
    { image: "./assets/image/aliments/poudre-os.webp", name: "Poudre d’os" },
    { image: "./assets/image/aliments/pierre-blanche.webp", name: "Pierre blanche" },
    { image: "./assets/image/aliments/craie.webp", name: "Craie" }
  ],
  preparation: "Broyer chaque ingrédient séparément. Mélanger dans un grand récipient en proportions équilibrées. Bien homogénéiser et conserver au sec. Servir en petites quantités chaque matin.",
  vertus: ["Équilibre nutritionnel complet.", "Favorise la reproduction.", "Renforce la croissance et la coquille."]
},
 
  {
  image: "./assets/image/aliments/melange-energie-vert.webp",
  badge: "melange",
  title: "Mélange énergie vert",
  description: "Association de légumes et feuilles verts.",
  nutrition: "Fibres, fer, vitamines.",
  carence: "Évite carence en fer.",
  filtre: { categorie: "melange", nutriment: "vitamine", fonction: "reproduction", origine: "local", carence: "aucune", moment: "matin", saison: "pluie" },
  ingredients: [
    { image: "./assets/image/aliments/laitue.webp", name: "Laitue" },
    { image: "./assets/image/aliments/chou.webp", name: "Chou" },
    { image: "./assets/image/aliments/epinard.webp", name: "Épinard" },
    { image: "./assets/image/aliments/feuille-manioc.webp", name: "Feuille de manioc" },
    { image: "./assets/image/aliments/amarante.webp", name: "Amarante" },
    { image: "./assets/image/aliments/basilic.webp", name: "Basilic" }
  ],
  preparation: "Laver toutes les feuilles et légumes. Déchirer les feuilles en morceaux faciles à manger. Couper les légumes en petits dés. Mélanger dans un grand bol avec un peu d’eau pour humidifier. Servir en petites portions.",
  vertus: ["Apporte fer et fibres.", "Favorise la reproduction.", "Renforce la croissance."]
},
{
  image: "./assets/image/aliments/melange-fruits-soleil.webp",
  badge: "melange",
  title: "Mélange fruits du soleil",
  description: "Association de fruits tropicaux sucrés.",
  nutrition: "Vitamine A, sucres naturels.",
  carence: "Évite carence énergétique.",
  filtre: { categorie: "melange", nutriment: "vitamine", fonction: "reproduction", origine: "local", carence: "aucune", moment: "midi", saison: "seche" },
  ingredients: [
    { image: "./assets/image/aliments/papaye.webp", name: "Papaye" },
    { image: "./assets/image/aliments/mangue.webp", name: "Mangue" },
    { image: "./assets/image/aliments/banane.webp", name: "Banane" },
    { image: "./assets/image/aliments/ananas.webp", name: "Ananas" },
    { image: "./assets/image/aliments/orange.webp", name: "Orange" },
    { image: "./assets/image/aliments/pomme.webp", name: "Pomme" }
  ],
  preparation: "Laver tous les fruits. Éplucher ceux qui ont une peau dure (banane, orange, papaye). Couper chaque fruit en petits morceaux. Mélanger dans un grand récipient et servir frais.",
  vertus: ["Apporte énergie rapide.", "Stimule la reproduction.", "Renforce la vitalité."]
},
{
  image: "./assets/image/aliments/melange-croquant.webp",
  badge: "melange",
  title: "Mélange croquant",
  description: "Association de légumes croquants.",
  nutrition: "Fibres, vitamine C.",
  carence: "Évite carence en fibres.",
  filtre: { categorie: "melange", nutriment: "fibres", fonction: "reproduction", origine: "local", carence: "aucune", moment: "soir", saison: "toute" },
  ingredients: [
    { image: "./assets/image/aliments/carotte.webp", name: "Carotte" },
    { image: "./assets/image/aliments/concombre.webp", name: "Concombre" },
    { image: "./assets/image/aliments/tomate.webp", name: "Tomate" },
    { image: "./assets/image/aliments/poivron.webp", name: "Poivron" },
    { image: "./assets/image/aliments/courgette.webp", name: "Courgette" },
    { image: "./assets/image/aliments/betterave.webp", name: "Betterave" }
  ],
  preparation: "Laver tous les légumes. Éplucher la carotte et la betterave. Couper chaque légume en petits morceaux. Mélanger dans un bol et servir immédiatement.",
  vertus: ["Apporte fibres pour digestion.", "Favorise la reproduction.", "Renforce la santé générale."]
},
{
  image: "./assets/image/aliments/melange-fraicheur.webp",
  badge: "melange",
  title: "Mélange fraîcheur",
  description: "Association de fruits riches en eau.",
  nutrition: "Hydratation, vitamine C.",
  carence: "Évite déshydratation.",
  filtre: { categorie: "melange", nutriment: "vitamine", fonction: "reproduction", origine: "local", carence: "aucune", moment: "matin", saison: "pluie" },
  ingredients: [
    { image: "./assets/image/aliments/pastèque.webp", name: "Pastèque" },
    { image: "./assets/image/aliments/concombre.webp", name: "Concombre" },
    { image: "./assets/image/aliments/tomate.webp", name: "Tomate" },
    { image: "./assets/image/aliments/orange.webp", name: "Orange" },
    { image: "./assets/image/aliments/ananas.webp", name: "Ananas" },
    { image: "./assets/image/aliments/pomme.webp", name: "Pomme" }
  ],
  preparation: "Couper la pastèque en petits cubes. Éplucher l’orange et la couper en quartiers. Laver les autres ingrédients et les couper en morceaux. Mélanger dans un grand récipient et servir frais.",
  vertus: ["Hydrate l’escargot.", "Favorise la reproduction.", "Apporte vitalité."]
},
{
  image: "./assets/image/aliments/melange-vitalite.webp",
  badge: "melange",
  title: "Mélange vitalité",
  description: "Association de feuilles et fruits vitaminés.",
  nutrition: "Vitamine A, fer, fibres.",
  carence: "Évite carence en fer.",
  filtre: { categorie: "melange", nutriment: "vitamine", fonction: "reproduction", origine: "local", carence: "aucune", moment: "soir", saison: "seche" },
  ingredients: [
    { image: "./assets/image/aliments/epinard.webp", name: "Épinard" },
    { image: "./assets/image/aliments/feuille-manioc.webp", name: "Feuille de manioc" },
    { image: "./assets/image/aliments/amarante.webp", name: "Amarante" },
    { image: "./assets/image/aliments/basilic.webp", name: "Basilic" },
    { image: "./assets/image/aliments/fraise.webp", name: "Fraise" },
    { image: "./assets/image/aliments/mangue.webp", name: "Mangue" }
  ],
  preparation: "Laver toutes les feuilles et les fruits. Déchirer les feuilles en morceaux. Couper les fruits en petits dés. Mélanger dans un bol et servir.",
  vertus: ["Apporte vitamines pour reproduction.", "Renforce la croissance.", "Améliore la santé générale."]
},
{
  image: "./assets/image/aliments/melange-douceur.webp",
  badge: "melange",
  title: "Mélange douceur",
  description: "Association de fruits sucrés.",
  nutrition: "Sucres naturels, vitamine A.",
  carence: "Évite carence énergétique.",
  filtre: { categorie: "melange", nutriment: "glucide", fonction: "reproduction", origine: "local", carence: "aucune", moment: "matin", saison: "toute" },
  ingredients: [
    { image: "./assets/image/aliments/banane.webp", name: "Banane" },
    { image: "./assets/image/aliments/papaye.webp", name: "Papaye" },
    { image: "./assets/image/aliments/mangue.webp", name: "Mangue" },
    { image: "./assets/image/aliments/prune.webp", name: "Prune" },
    { image: "./assets/image/aliments/fraise.webp", name: "Fraise" },
    { image: "./assets/image/aliments/poire.webp", name: "Poire" }
  ],
  preparation: "Éplucher les fruits à peau dure. Couper chaque fruit en petits morceaux. Mélanger dans un grand récipient et servir.",
  vertus: ["Apporte énergie douce.", "Favorise la reproduction.", "Renforce la vitalité."]
},
{
  image: "./assets/image/aliments/melange-vitalite-rouge.webp",
  badge: "melange",
  title: "Mélange vitalité rouge",
  description: "Association de fruits rouges et feuilles vertes.",
  nutrition: "Vitamine C, fer, fibres.",
  carence: "Évite carence en fer et vitamine C.",
  filtre: { categorie: "melange", nutriment: "vitamine", fonction: "reproduction", origine: "local", carence: "aucune", moment: "matin", saison: "pluie" },
  ingredients: [
    { image: "./assets/image/aliments/fraise.webp", name: "Fraise" },
    { image: "./assets/image/aliments/tomate.webp", name: "Tomate" },
    { image: "./assets/image/aliments/poivron.webp", name: "Poivron" },
    { image: "./assets/image/aliments/epinard.webp", name: "Épinard" },
    { image: "./assets/image/aliments/amarante.webp", name: "Amarante" },
    { image: "./assets/image/aliments/basilic.webp", name: "Basilic" }
  ],
  preparation: "Laver soigneusement tous les fruits et feuilles. Couper les fraises et tomates en petits morceaux. Déchirer les feuilles en lamelles. Mélanger dans un grand bol et ajouter un peu d’eau pour humidifier. Servir en petites portions.",
  vertus: ["Apporte énergie douce.", "Favorise la reproduction grâce aux vitamines.", "Renforce la croissance."]
},
{
  image: "./assets/image/aliments/melange-fraicheur-tropicale.webp",
  badge: "melange",
  title: "Mélange fraîcheur tropicale",
  description: "Association de fruits tropicaux riches en eau.",
  nutrition: "Hydratation, vitamine A et C.",
  carence: "Évite déshydratation.",
  filtre: { categorie: "melange", nutriment: "vitamine", fonction: "reproduction", origine: "local", carence: "aucune", moment: "midi", saison: "seche" },
  ingredients: [
    { image: "./assets/image/aliments/papaye.webp", name: "Papaye" },
    { image: "./assets/image/aliments/mangue.webp", name: "Mangue" },
    { image: "./assets/image/aliments/banane.webp", name: "Banane" },
    { image: "./assets/image/aliments/ananas.webp", name: "Ananas" },
    { image: "./assets/image/aliments/orange.webp", name: "Orange" },
    { image: "./assets/image/aliments/pastèque.webp", name: "Pastèque" }
  ],
  preparation: "Éplucher les fruits à peau dure (banane, orange, papaye). Couper chaque fruit en petits morceaux faciles à manger. Mélanger dans un grand récipient et servir frais.",
  vertus: ["Hydrate l’escargot.", "Stimule la reproduction.", "Apporte vitalité."]
},
{
  image: "./assets/image/aliments/melange-croissance-verte.webp",
  badge: "melange",
  title: "Mélange croissance verte",
  description: "Association de feuilles riches en protéines.",
  nutrition: "Protéines végétales, fer, fibres.",
  carence: "Évite carence en protéines.",
  filtre: { categorie: "melange", nutriment: "proteine", fonction: "reproduction", origine: "local", carence: "aucune", moment: "soir", saison: "pluie" },
  ingredients: [
    { image: "./assets/image/aliments/feuille-manioc.webp", name: "Feuille de manioc" },
    { image: "./assets/image/aliments/amarante.webp", name: "Amarante" },
    { image: "./assets/image/aliments/epinard.webp", name: "Épinard" },
    { image: "./assets/image/aliments/luzerne.webp", name: "Luzerne" },
    { image: "./assets/image/aliments/moringa.webp", name: "Moringa" },
    { image: "./assets/image/aliments/basilic.webp", name: "Basilic" }
  ],
  preparation: "Laver toutes les feuilles. Déchirer en morceaux de taille moyenne. Mélanger dans un grand bol et humidifier légèrement avec de l’eau. Servir en petites portions.",
  vertus: ["Apporte protéines pour reproduction.", "Renforce la croissance.", "Améliore la santé générale."]
},
{
  image: "./assets/image/aliments/melange-douceur-fruitee.webp",
  badge: "melange",
  title: "Mélange douceur fruitée",
  description: "Association de fruits sucrés et tendres.",
  nutrition: "Sucres naturels, vitamine A.",
  carence: "Évite carence énergétique.",
  filtre: { categorie: "melange", nutriment: "glucide", fonction: "reproduction", origine: "local", carence: "aucune", moment: "matin", saison: "toute" },
  ingredients: [
    { image: "./assets/image/aliments/papaye.webp", name: "Papaye" },
    { image: "./assets/image/aliments/mangue.webp", name: "Mangue" },
    { image: "./assets/image/aliments/prune.webp", name: "Prune" },
    { image: "./assets/image/aliments/fraise.webp", name: "Fraise" },
    { image: "./assets/image/aliments/poire.webp", name: "Poire" },
    { image: "./assets/image/aliments/pomme.webp", name: "Pomme" }
  ],
  preparation: "Éplucher les fruits à peau dure. Couper chaque fruit en petits morceaux. Mélanger dans un grand récipient et servir immédiatement.",
  vertus: ["Apporte énergie douce.", "Favorise la reproduction.", "Renforce la vitalité."]
},
{
  image: "./assets/image/aliments/melange-couleur-vivante.webp",
  badge: "melange",
  title: "Mélange couleur vivante",
  description: "Association de légumes colorés.",
  nutrition: "Vitamine C, fibres.",
  carence: "Évite carence en fibres.",
  filtre: { categorie: "melange", nutriment: "vitamine", fonction: "reproduction", origine: "local", carence: "aucune", moment: "midi", saison: "toute" },
  ingredients: [
    { image: "./assets/image/aliments/carotte.webp", name: "Carotte" },
    { image: "./assets/image/aliments/concombre.webp", name: "Concombre" },
    { image: "./assets/image/aliments/tomate.webp", name: "Tomate" },
    { image: "./assets/image/aliments/poivron.webp", name: "Poivron" },
    { image: "./assets/image/aliments/courgette.webp", name: "Courgette" },
    { image: "./assets/image/aliments/betterave.webp", name: "Betterave" }
  ],
  preparation: "Laver tous les légumes. Éplucher la carotte et la betterave. Couper chaque légume en petits morceaux. Mélanger dans un bol et servir immédiatement.",
  vertus: ["Apporte fibres pour digestion.", "Favorise la reproduction.", "Renforce la santé générale."]
},
{
  image: "./assets/image/aliments/melange-fraicheur-verte.webp",
  badge: "melange",
  title: "Mélange fraîcheur verte",
  description: "Association de feuilles et légumes verts.",
  nutrition: "Fibres, fer, vitamines.",
  carence: "Évite carence en fer.",
  filtre: { categorie: "melange", nutriment: "vitamine", fonction: "reproduction", origine: "local", carence: "aucune", moment: "soir", saison: "seche" },
  ingredients: [
    { image: "./assets/image/aliments/laitue.webp", name: "Laitue" },
    { image: "./assets/image/aliments/chou.webp", name: "Chou" },
    { image: "./assets/image/aliments/epinard.webp", name: "Épinard" },
    { image: "./assets/image/aliments/feuille-manioc.webp", name: "Feuille de manioc" },
    { image: "./assets/image/aliments/amarante.webp", name: "Amarante" },
    { image: "./assets/image/aliments/basilic.webp", name: "Basilic" }
  ],
  preparation: "Laver toutes les feuilles et légumes. Déchirer les feuilles en morceaux. Couper les légumes en petits dés. Mélanger dans un grand bol et servir.",
  vertus: ["Apporte vitamines pour reproduction.", "Renforce la croissance.", "Améliore la santé générale."]
},
{
  image: "./assets/image/aliments/melange-fruits-arc-en-ciel.webp",
  badge: "melange",
  title: "Mélange fruits arc-en-ciel",
  description: "Association de fruits variés et colorés.",
  nutrition: "Vitamine A, C, fibres.",
  carence: "Évite carence en vitamines.",
  filtre: { categorie: "melange", nutriment: "vitamine", fonction: "reproduction", origine: "local", carence: "aucune", moment: "soir", saison: "pluie" },
  ingredients: [
    { image: "./assets/image/aliments/mangue.webp", name: "Mangue" },
    { image: "./assets/image/aliments/ananas.webp", name: "Ananas" },
    { image: "./assets/image/aliments/papaye.webp", name: "Papaye" },
    { image: "./assets/image/aliments/fraise.webp", name: "Fraise" },
    { image: "./assets/image/aliments/poire.webp", name: "Poire" },
    { image: "./assets/image/aliments/pomme.webp", name: "Pomme" },
    { image: "./assets/image/aliments/orange.webp", name: "Orange" }
  ],
  preparation: "Éplucher les fruits à peau dure. Couper chaque fruit en petits morceaux. Mélanger dans un grand récipient et servir frais.",
  vertus: ["Apporte vitamines pour reproduction.", "Énergie douce.", "Renforce la vitalité."]
},
{
  image: "./assets/image/aliments/melange-feuillage-proteine.webp",
  badge: "melange",
  title: "Mélange feuillage protéiné",
  description: "Association de feuilles riches en protéines.",
  nutrition: "Protéines végétales, fer.",
  carence: "Évite carence en protéines.",
  filtre: { categorie: "melange", nutriment: "proteine", fonction: "reproduction", origine: "local", carence: "aucune", moment: "matin", saison: "seche" },
  ingredients: [
    { image: "./assets/image/aliments/feuille-manioc.webp", name: "Feuille de manioc" },
    { image: "./assets/image/aliments/amarante.webp", name: "Amarante" },
    { image: "./assets/image/aliments/moringa.webp", name: "Moringa" },
    { image: "./assets/image/aliments/luzerne.webp", name: "Luzerne" },
    { image: "./assets/image/aliments/epinard.webp", name: "Épinard" },
    { image: "./assets/image/aliments/basilic.webp", name: "Basilic" }
  ],
  preparation: "Laver toutes les feuilles. Déchirer en morceaux de taille moyenne. Mélanger dans un grand bol et humidifier légèrement avec de l’eau. Servir en petites portions.",
  vertus: ["Apporte protéines pour reproduction.", "Renforce la croissance.", "Améliore la santé générale."]
},
{
  image: "./assets/image/aliments/melange-fraicheur-rouge.webp",
  badge: "melange",
  title: "Mélange fraîcheur rouge",
  description: "Association de fruits rouges et légumes croquants.",
  nutrition: "Vitamine C, fibres.",
  carence: "Évite carence en vitamine C.",
  filtre: { categorie: "melange", nutriment: "vitamine", fonction: "reproduction", origine: "local", carence: "aucune", moment: "midi", saison: "pluie" },
  ingredients: [
    { image: "./assets/image/aliments/fraise.webp", name: "Fraise" },
    { image: "./assets/image/aliments/tomate.webp", name: "Tomate" },
    { image: "./assets/image/aliments/poivron.webp", name: "Poivron" },
    { image: "./assets/image/aliments/carotte.webp", name: "Carotte" },
    { image: "./assets/image/aliments/betterave.webp", name: "Betterave" },
    { image: "./assets/image/aliments/concombre.webp", name: "Concombre" }
  ],
  preparation: "Laver tous les ingrédients. Couper les fruits et légumes en petits morceaux. Mélanger dans un bol et servir frais.",
  vertus: ["Apporte vitamine C pour reproduction.", "Renforce la vitalité.", "Améliore la digestion."]
},
{
  image: "./assets/image/aliments/melange-douceur-verte.webp",
  badge: "melange",
  title: "Mélange douceur verte",
  description: "Association de feuilles tendres et fruits doux.",
  nutrition: "Fibres, vitamines.",
  carence: "Évite carence en fibres.",
  filtre: { categorie: "melange", nutriment: "fibres", fonction: "reproduction", origine: "local", carence: "aucune", moment: "soir", saison: "seche" },
  ingredients: [
    { image: "./assets/image/aliments/laitue.webp", name: "Laitue" },
    { image: "./assets/image/aliments/chou.webp", name: "Chou" },
    { image: "./assets/image/aliments/poire.webp", name: "Poire" },
    { image: "./assets/image/aliments/pomme.webp", name: "Pomme" },
    { image: "./assets/image/aliments/prune.webp", name: "Prune" },
    { image: "./assets/image/aliments/fraise.webp", name: "Fraise" }
  ],
  preparation: "Laver les feuilles et les fruits. Déchirer les feuilles en morceaux. Couper les fruits en petits dés. Mélanger dans un bol et servir.",
  vertus: ["Apporte fibres pour reproduction.", "Énergie douce.", "Renforce la santé générale."]
},
  {
  image: "./assets/image/aliments/riz.webp",
  badge: "cereale",
  title: "Riz",
  description: "Céréale énergétique pouvant être broyée ou utilisée sous forme de farine dans les mélanges alimentaires.",
  nutrition: "Glucides complexes.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "cereale",
    nutriment: "glucide",
    fonction: "energie",
    origine: "local",
    carence: "proteine",
    moment: "midi",
    saison: "toute"
  }
},
{
  image: "./assets/image/aliments/millet.webp",
  badge: "cereale",
  title: "Millet",
  description: "Céréale traditionnelle riche en énergie souvent utilisée dans les mélanges alimentaires pour escargots.",
  nutrition: "Glucides, minéraux.",
  carence: "Manque de calcium.",
  filtre: {
    categorie: "cereale",
    nutriment: "glucide",
    fonction: "energie",
    origine: "local",
    carence: "calcium",
    moment: "midi",
    saison: "seche"
  }
},
{
  image: "./assets/image/aliments/sorgho.webp",
  badge: "cereale",
  title: "Sorgho",
  description: "Grain énergétique adapté aux climats tropicaux et utilisé comme complément dans les provendes.",
  nutrition: "Glucides et fibres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "cereale",
    nutriment: "glucide",
    fonction: "energie",
    origine: "local",
    carence: "proteine",
    moment: "midi",
    saison: "seche"
  }
},
{
  image: "./assets/image/aliments/mangue.webp",
  badge: "fruit",
  title: "Mangue",
  description: "Fruit tropical très apprécié pour sa chair sucrée et tendre. Il stimule l’appétit et apporte de l’énergie.",
  nutrition: "Vitamine A, sucres naturels.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "vitamine",
    fonction: "energie",
    origine: "local",
    carence: "proteine",
    moment: "matin",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/ananas.webp",
  badge: "fruit",
  title: "Ananas",
  description: "Fruit juteux riche en enzymes naturelles facilitant la digestion.",
  nutrition: "Vitamine C et sucres rapides.",
  carence: "Peu de calcium.",
  filtre: {
    categorie: "fruit",
    nutriment: "vitamine",
    fonction: "energie",
    origine: "local",
    carence: "calcium",
    moment: "matin",
    saison: "toute"
  }
},
{
  image: "./assets/image/aliments/orange.webp",
  badge: "fruit",
  title: "Orange",
  description: "Fruit acidulé riche en vitamine C. Donné en petite quantité pour éviter l’excès d’acidité.",
  nutrition: "Vitamine C et eau.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "import",
    carence: "proteine",
    moment: "matin",
    saison: "seche"
  }
},
{
  image: "./assets/image/aliments/pomme.webp",
  badge: "fruit",
  title: "Pomme",
  description: "Fruit croquant riche en fibres. Il est conseillé de le couper en petits morceaux.",
  nutrition: "Fibres, glucides naturels.",
  carence: "Peu de protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "fibres",
    fonction: "sante",
    origine: "import",
    carence: "proteine",
    moment: "matin",
    saison: "toute"
  }
},
// --- Légumes ---
{
  image: "./assets/image/aliments/tomate.webp",
  badge: "legume",
  title: "Tomate",
  description: "Fruit-légume riche en eau et apprécié des escargots.",
  nutrition: "Vitamine C, antioxydants.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "legume",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "midi",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/carotte.webp",
  badge: "legume",
  title: "Carotte",
  description: "Racine sucrée et croquante.",
  nutrition: "Vitamine A, fibres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "legume",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "matin",
    saison: "seche"
  }
},
{
  image: "./assets/image/aliments/concombre.webp",
  badge: "legume",
  title: "Concombre",
  description: "Légume frais riche en eau.",
  nutrition: "Hydratation, fibres.",
  carence: "Manque de protéines.",
  filtre: {
    categorie: "legume",
    nutriment: "fibres",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/epinard.webp",
  badge: "legume",
  title: "Épinard",
  description: "Feuille verte riche en fer.",
  nutrition: "Fer, fibres, vitamines.",
  carence: "Faible en calcium.",
  filtre: {
    categorie: "legume",
    nutriment: "vitamine",
    fonction: "croissance",
    origine: "local",
    carence: "calcium",
    moment: "midi",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/aubergine.webp",
  badge: "legume",
  title: "Aubergine",
  description: "Légume tendre et riche en eau.",
  nutrition: "Fibres, antioxydants.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "legume",
    nutriment: "fibres",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "seche"
  }
},

// --- Fruits ---
{
  image: "./assets/image/aliments/fraise.webp",
  badge: "fruit",
  title: "Fraise",
  description: "Petit fruit rouge sucré.",
  nutrition: "Vitamine C, antioxydants.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "matin",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/poire.webp",
  badge: "fruit",
  title: "Poire",
  description: "Fruit tendre et sucré.",
  nutrition: "Fibres, sucres naturels.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "fibres",
    fonction: "energie",
    origine: "import",
    carence: "proteine",
    moment: "midi",
    saison: "toute"
  }
},
{
  image: "./assets/image/aliments/pastèque.webp",
  badge: "fruit",
  title: "Pastèque",
  description: "Fruit riche en eau.",
  nutrition: "Hydratation, sucres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "glucide",
    fonction: "energie",
    origine: "local",
    carence: "proteine",
    moment: "midi",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/kiwi.webp",
  badge: "fruit",
  title: "Kiwi",
  description: "Fruit acidulé riche en vitamine C.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "import",
    carence: "proteine",
    moment: "matin",
    saison: "seche"
  }
},
{
  image: "./assets/image/aliments/prune.webp",
  badge: "fruit",
  title: "Prune",
  description: "Fruit sucré et tendre.",
  nutrition: "Fibres, sucres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "fibres",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "toute"
  }
},

// --- Racines / tubercules ---
{
  image: "./assets/image/aliments/igname.webp",
  badge: "racine",
  title: "Igname",
  description: "Tubercule riche en amidon.",
  nutrition: "Glucides, énergie.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "racine",
    nutriment: "glucide",
    fonction: "energie",
    origine: "local",
    carence: "proteine",
    moment: "midi",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/navet.webp",
  badge: "racine",
  title: "Navet",
  description: "Racine tendre et sucrée.",
  nutrition: "Fibres, vitamine C.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "racine",
    nutriment: "fibres",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "seche"
  }
},

// --- Feuillages ---
{
  image: "./assets/image/aliments/amarante.webp",
  badge: "feuillage",
  title: "Amarante",
  description: "Feuillage vert nutritif.",
  nutrition: "Protéines végétales, fer.",
  carence: "Faible en calcium.",
  filtre: {
    categorie: "feuillage",
    nutriment: "proteine",
    fonction: "croissance",
    origine: "local",
    carence: "calcium",
    moment: "matin",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/basilic.webp",
  badge: "feuillage",
  title: "Basilic",
  description: "Plante aromatique aux vertus digestives.",
  nutrition: "Antioxydants, fibres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "feuillage",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "toute"
  }
},

// --- Minéraux / compléments ---
{
  image: "./assets/image/aliments/sable-calcaire.webp",
  badge: "mineraux",
  title: "Sable calcaire",
  description: "Complément minéral pour renforcer la coquille.",
  nutrition: "Calcium.",
  carence: "Aucune si bien dosé.",
  filtre: {
    categorie: "mineraux",
    nutriment: "mineral",
    fonction: "coquille",
    origine: "local",
    carence: "aucune",
    moment: "nuit",
    saison: "toute"
  }
},
{
  image: "./assets/image/aliments/craie.webp",
  badge: "mineraux",
  title: "Craie",
  description: "Source de calcium naturelle.",
  nutrition: "Calcium.",
  carence: "Aucune si bien dosé.",
  filtre: {
    categorie: "mineraux",
    nutriment: "mineral",
    fonction: "coquille",
    origine: "local",
    carence: "aucune",
    moment: "nuit",
    saison: "seche"
  }
},

// --- Céréales ---
{
  image: "./assets/image/aliments/avoine.webp",
  badge: "cereale",
  title: "Avoine",
  description: "Céréale riche en fibres et énergie.",
  nutrition: "Fibres, glucides complexes.",
  carence: "Faible en calcium.",
  filtre: {
    categorie: "cereale",
    nutriment: "fibres",
    fonction: "energie",
    origine: "local",
    carence: "calcium",
    moment: "matin",
    saison: "seche"
  }
},
{
  image: "./assets/image/aliments/orge.webp",
  badge: "cereale",
  title: "Orge",
  description: "Céréale traditionnelle utilisée en farine.",
  nutrition: "Glucides, minéraux.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "cereale",
    nutriment: "glucide",
    fonction: "energie",
    origine: "local",
    carence: "proteine",
    moment: "midi",
    saison: "toute"
  }
},
{
  image: "./assets/image/aliments/seigle.webp",
  badge: "cereale",
  title: "Seigle",
  description: "Céréale rustique riche en fibres.",
  nutrition: "Fibres, glucides.",
  carence: "Faible en calcium.",
  filtre: {
    categorie: "cereale",
    nutriment: "fibres",
    fonction: "sante",
    origine: "local",
    carence: "calcium",
    moment: "soir",
    saison: "pluie"
  }
},

// --- Légumes ---
{
  image: "./assets/image/aliments/poivron.webp",
  badge: "legume",
  title: "Poivron",
  description: "Légume coloré riche en vitamine C.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "legume",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "midi",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/courgette.webp",
  badge: "legume",
  title: "Courgette",
  description: "Légume tendre et riche en eau.",
  nutrition: "Fibres, vitamines.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "legume",
    nutriment: "fibres",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "seche"
  }
},
{
  image: "./assets/image/aliments/betterave.webp",
  badge: "legume",
  title: "Betterave",
  description: "Racine colorée riche en sucres naturels.",
  nutrition: "Sucres, fibres, fer.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "legume",
    nutriment: "fibres",
    fonction: "energie",
    origine: "local",
    carence: "proteine",
    moment: "midi",
    saison: "toute"
  }
},
{
  image: "./assets/image/aliments/gombo.webp",
  badge: "legume",
  title: "Gombo",
  description: "Légume africain riche en mucilage.",
  nutrition: "Fibres, vitamines.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "legume",
    nutriment: "fibres",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "pluie"
  }
},

// --- Fruits ---
{
  image: "./assets/image/aliments/poivron-doux.webp",
  badge: "fruit",
  title: "Poivron doux",
  description: "Fruit-légume sucré et riche en vitamine C.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "matin",
    saison: "toute"
  }
},
{
  image: "./assets/image/aliments/grenade.webp",
  badge: "fruit",
  title: "Grenade",
  description: "Fruit riche en antioxydants.",
  nutrition: "Vitamine C, polyphénols.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "import",
    carence: "proteine",
    moment: "midi",
    saison: "seche"
  }
},
{
  image: "./assets/image/aliments/figue.webp",
  badge: "fruit",
  title: "Figue",
  description: "Fruit sucré riche en fibres.",
  nutrition: "Fibres, sucres naturels.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "fibres",
    fonction: "energie",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/citron.webp",
  badge: "fruit",
  title: "Citron",
  description: "Agrume acidulé riche en vitamine C.",
  nutrition: "Vitamine C, antioxydants.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "import",
    carence: "proteine",
    moment: "matin",
    saison: "seche"
  }
},

// --- Racines ---
{
  image: "./assets/image/aliments/topinambour.webp",
  badge: "racine",
  title: "Topinambour",
  description: "Tubercule sucré riche en fibres.",
  nutrition: "Fibres, glucides.",
  carence: "Faible en calcium.",
  filtre: {
    categorie: "racine",
    nutriment: "fibres",
    fonction: "energie",
    origine: "local",
    carence: "calcium",
    moment: "midi",
    saison: "toute"
  }
},
{
  image: "./assets/image/aliments/radis.webp",
  badge: "racine",
  title: "Radis",
  description: "Racine croquante et rafraîchissante.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "racine",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "pluie"
  }
},

// --- Feuillages ---
{
  image: "./assets/image/aliments/luzerne.webp",
  badge: "feuillage",
  title: "Luzerne",
  description: "Plante fourragère riche en protéines.",
  nutrition: "Protéines végétales, fibres.",
  carence: "Faible en calcium.",
  filtre: {
    categorie: "feuillage",
    nutriment: "proteine",
    fonction: "croissance",
    origine: "local",
    carence: "calcium",
    moment: "matin",
    saison: "seche"
  }
},
{
  image: "./assets/image/aliments/ortie.webp",
  badge: "feuillage",
  title: "Ortie",
  description: "Feuillage nutritif riche en minéraux.",
  nutrition: "Fer, calcium, protéines.",
  carence: "Faible en glucides.",
  filtre: {
    categorie: "feuillage",
    nutriment: "mineral",
    fonction: "sante",
    origine: "local",
    carence: "aucune",
    moment: "soir",
    saison: "pluie"
  }
},

// --- Minéraux ---
{
  image: "./assets/image/aliments/poudre-coquille.webp",
  badge: "mineraux",
  title: "Poudre de coquille",
  description: "Complément minéral obtenu par broyage de coquilles.",
  nutrition: "Calcium essentiel.",
  carence: "Aucune si bien dosé.",
  filtre: {
    categorie: "mineraux",
    nutriment: "mineral",
    fonction: "coquille",
    origine: "residu",
    carence: "aucune",
    moment: "nuit",
    saison: "toute"
  }
},
{
  image: "./assets/image/aliments/pierre-blanche.webp",
  badge: "mineraux",
  title: "Pierre blanche",
  description: "Source naturelle de calcium.",
  nutrition: "Calcium.",
  carence: "Aucune si bien dosé.",
  filtre: {
    categorie: "mineraux",
    nutriment: "mineral",
    fonction: "coquille",
    origine: "local",
    carence: "aucune",
    moment: "nuit",
    saison: "seche"
  }
},

// --- Fruits ---
{
  image: "./assets/image/aliments/abricot.webp",
  badge: "fruit",
  title: "Abricot",
  description: "Petit fruit sucré riche en vitamine A.",
  nutrition: "Vitamine A, fibres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "vitamine",
    fonction: "energie",
    origine: "import",
    carence: "proteine",
    moment: "matin",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/cerise.webp",
  badge: "fruit",
  title: "Cerise",
  description: "Fruit rouge sucré et acidulé.",
  nutrition: "Vitamine C, antioxydants.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "toute"
  }
},
{
  image: "./assets/image/aliments/raisin.webp",
  badge: "fruit",
  title: "Raisin",
  description: "Fruit sucré riche en eau.",
  nutrition: "Sucres naturels, fibres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "glucide",
    fonction: "energie",
    origine: "local",
    carence: "proteine",
    moment: "midi",
    saison: "pluie"
  }
},

// --- Légumes ---
{
  image: "./assets/image/aliments/persil.webp",
  badge: "legume",
  title: "Persil",
  description: "Plante aromatique riche en vitamine C.",
  nutrition: "Vitamine C, fer.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "legume",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "matin",
    saison: "seche"
  }
},
{
  image: "./assets/image/aliments/chou-fleur.webp",
  badge: "legume",
  title: "Chou-fleur",
  description: "Légume crucifère riche en fibres.",
  nutrition: "Fibres, vitamine C.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "legume",
    nutriment: "fibres",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "midi",
    saison: "toute"
  }
},
{
  image: "./assets/image/aliments/brocoli.webp",
  badge: "legume",
  title: "Brocoli",
  description: "Légume vert riche en antioxydants.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "legume",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "pluie"
  }
},

// --- Racines ---
{
  image: "./assets/image/aliments/panais.webp",
  badge: "racine",
  title: "Panais",
  description: "Racine douce riche en fibres.",
  nutrition: "Fibres, glucides.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "racine",
    nutriment: "fibres",
    fonction: "energie",
    origine: "local",
    carence: "proteine",
    moment: "midi",
    saison: "seche"
  }
},
{
  image: "./assets/image/aliments/celeri-rave.webp",
  badge: "racine",
  title: "Céleri-rave",
  description: "Racine croquante riche en eau.",
  nutrition: "Fibres, vitamines.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "racine",
    nutriment: "fibres",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "toute"
  }
},

// --- Feuillages ---
{
  image: "./assets/image/aliments/moringa.webp",
  badge: "feuillage",
  title: "Moringa",
  description: "Feuillage nutritif riche en protéines.",
  nutrition: "Protéines végétales, fer.",
  carence: "Faible en calcium.",
  filtre: {
    categorie: "feuillage",
    nutriment: "proteine",
    fonction: "croissance",
    origine: "local",
    carence: "calcium",
    moment: "matin",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/menthe.webp",
  badge: "feuillage",
  title: "Menthe",
  description: "Plante aromatique rafraîchissante.",
  nutrition: "Antioxydants, fibres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "feuillage",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "seche"
  }
},
// --- Légumes ---
{
  image: "./assets/image/aliments/laitue-romaine.webp",
  badge: "legume",
  title: "Laitue romaine",
  description: "Feuille croquante riche en eau.",
  nutrition: "Fibres, vitamine K.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "legume",
    nutriment: "fibres",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "midi",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/chou-kale.webp",
  badge: "legume",
  title: "Chou kale",
  description: "Feuille verte nutritive.",
  nutrition: "Vitamine C, calcium.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "legume",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "seche"
  }
},
{
  image: "./assets/image/aliments/celeri.webp",
  badge: "legume",
  title: "Céleri",
  description: "Tige croquante riche en eau.",
  nutrition: "Fibres, potassium.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "legume",
    nutriment: "fibres",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "matin",
    saison: "toute"
  }
},
{
  image: "./assets/image/aliments/oignon.webp",
  badge: "legume",
  title: "Oignon",
  description: "Bulbe aromatique riche en antioxydants.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "legume",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/poireau.webp",
  badge: "legume",
  title: "Poireau",
  description: "Tige tendre riche en fibres.",
  nutrition: "Fibres, vitamine K.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "legume",
    nutriment: "fibres",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "midi",
    saison: "seche"
  }
},

// --- Fruits ---
{
  image: "./assets/image/aliments/peche.webp",
  badge: "fruit",
  title: "Pêche",
  description: "Fruit sucré et juteux.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "vitamine",
    fonction: "energie",
    origine: "import",
    carence: "proteine",
    moment: "matin",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/nectarine.webp",
  badge: "fruit",
  title: "Nectarine",
  description: "Fruit proche de la pêche.",
  nutrition: "Vitamine A, sucres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "vitamine",
    fonction: "energie",
    origine: "import",
    carence: "proteine",
    moment: "midi",
    saison: "toute"
  }
},
{
  image: "./assets/image/aliments/papaye-verte.webp",
  badge: "fruit",
  title: "Papaye verte",
  description: "Fruit tendre utilisé en salade.",
  nutrition: "Vitamine A, fibres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "seche"
  }
},
{
  image: "./assets/image/aliments/melon.webp",
  badge: "fruit",
  title: "Melon",
  description: "Fruit sucré riche en eau.",
  nutrition: "Vitamine C, sucres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "vitamine",
    fonction: "energie",
    origine: "local",
    carence: "proteine",
    moment: "midi",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/prunelle.webp",
  badge: "fruit",
  title: "Prunelle",
  description: "Petit fruit sauvage.",
  nutrition: "Fibres, antioxydants.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "fruit",
    nutriment: "fibres",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "toute"
  }
},

// --- Racines ---
{
  image: "./assets/image/aliments/taro.webp",
  badge: "racine",
  title: "Taro",
  description: "Tubercule riche en amidon.",
  nutrition: "Glucides, fibres.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "racine",
    nutriment: "glucide",
    fonction: "energie",
    origine: "local",
    carence: "proteine",
    moment: "midi",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/cassava-leaf.webp",
  badge: "racine",
  title: "Feuille de manioc tendre",
  description: "Feuillage associé au manioc.",
  nutrition: "Protéines végétales.",
  carence: "Faible en calcium.",
  filtre: {
    categorie: "racine",
    nutriment: "proteine",
    fonction: "croissance",
    origine: "local",
    carence: "calcium",
    moment: "matin",
    saison: "seche"
  }
},

// --- Feuillages ---
{
  image: "./assets/image/aliments/chou-vert.webp",
  badge: "feuillage",
  title: "Chou vert",
  description: "Feuillage nutritif.",
  nutrition: "Fibres, vitamine C.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "feuillage",
    nutriment: "vitamine",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "soir",
    saison: "pluie"
  }
},
{
  image: "./assets/image/aliments/feuille-banane.webp",
  badge: "feuillage",
  title: "Feuille de bananier",
  description: "Feuillage utilisé comme complément.",
  nutrition: "Fibres, minéraux.",
  carence: "Faible en protéines.",
  filtre: {
    categorie: "feuillage",
    nutriment: "fibres",
    fonction: "sante",
    origine: "local",
    carence: "proteine",
    moment: "midi",
    saison: "toute"
  }
},

// --- Minéraux ---
{
  image: "./assets/image/aliments/pierre-calcaire.webp",
  badge: "mineraux",
  title: "Pierre calcaire",
  description: "Complément minéral naturel.",
  nutrition: "Calcium.",
  carence: "Aucune si bien dosé.",
  filtre: {
    categorie: "mineraux",
    nutriment: "mineral",
    fonction: "coquille",
    origine: "local",
    carence: "aucune",
    moment: "nuit",
    saison: "toute"
  }
},
{
  image: "./assets/image/aliments/pierre-rouge.webp",
  badge: "mineraux",
  title: "Pierre rouge",
  description: "Minéral riche en fer.",
  nutrition: "Fer, calcium.",
  carence: "Aucune si bien dosé.",
  filtre: {
    categorie: "mineraux",
    nutriment: "mineral",
    fonction: "sante",
    origine: "local",
    carence: "aucune",
    moment: "nuit",
    saison: "seche"
  }
},

// --- Légumes ---
{
  image: "./assets/image/aliments/chou-rouge.webp",
  badge: "legume",
  title: "Chou rouge",
  description: "Feuille colorée riche en antioxydants.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "legume", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "midi", saison: "pluie" }
},
{
  image: "./assets/image/aliments/chou-de-bruxelles.webp",
  badge: "legume",
  title: "Chou de Bruxelles",
  description: "Petit légume vert nutritif.",
  nutrition: "Fibres, vitamine K.",
  carence: "Faible en protéines.",
  filtre: { categorie: "legume", nutriment: "fibres", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "seche" }
},
{
  image: "./assets/image/aliments/artichaut.webp",
  badge: "legume",
  title: "Artichaut",
  description: "Légume riche en fibres et minéraux.",
  nutrition: "Fibres, potassium.",
  carence: "Faible en protéines.",
  filtre: { categorie: "legume", nutriment: "fibres", fonction: "sante", origine: "import", carence: "proteine", moment: "matin", saison: "toute" }
},
{
  image: "./assets/image/aliments/endive.webp",
  badge: "legume",
  title: "Endive",
  description: "Feuille croquante légèrement amère.",
  nutrition: "Fibres, vitamine C.",
  carence: "Faible en protéines.",
  filtre: { categorie: "legume", nutriment: "fibres", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "pluie" }
},
{
  image: "./assets/image/aliments/haricot-vert.webp",
  badge: "legume",
  title: "Haricot vert",
  description: "Légume tendre riche en fibres.",
  nutrition: "Fibres, vitamine C.",
  carence: "Faible en protéines.",
  filtre: { categorie: "legume", nutriment: "fibres", fonction: "croissance", origine: "local", carence: "proteine", moment: "midi", saison: "seche" }
},

// --- Fruits ---
{
  image: "./assets/image/aliments/framboise.webp",
  badge: "fruit",
  title: "Framboise",
  description: "Petit fruit rouge acidulé.",
  nutrition: "Vitamine C, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "matin", saison: "pluie" }
},
{
  image: "./assets/image/aliments/mure.webp",
  badge: "fruit",
  title: "Mûre",
  description: "Fruit noir riche en fibres.",
  nutrition: "Fibres, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "fibres", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "toute" }
},
{
  image: "./assets/image/aliments/cassis.webp",
  badge: "fruit",
  title: "Cassis",
  description: "Petit fruit acidulé.",
  nutrition: "Vitamine C, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "matin", saison: "seche" }
},
{
  image: "./assets/image/aliments/litchi.webp",
  badge: "fruit",
  title: "Litchi",
  description: "Fruit tropical sucré.",
  nutrition: "Vitamine C, sucres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "energie", origine: "import", carence: "proteine", moment: "midi", saison: "pluie" }
},
{
  image: "./assets/image/aliments/goiave.webp",
  badge: "fruit",
  title: "Goyave",
  description: "Fruit tropical riche en vitamine C.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "toute" }
},

// --- Racines / tubercules ---
{
  image: "./assets/image/aliments/batate.webp",
  badge: "racine",
  title: "Batate",
  description: "Tubercule sucré proche de la patate douce.",
  nutrition: "Glucides, vitamine A.",
  carence: "Faible en calcium.",
  filtre: { categorie: "racine", nutriment: "glucide", fonction: "energie", origine: "local", carence: "calcium", moment: "midi", saison: "pluie" }
},
{
  image: "./assets/image/aliments/yam.webp",
  badge: "racine",
  title: "Yam",
  description: "Tubercule africain riche en amidon.",
  nutrition: "Glucides, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "racine", nutriment: "glucide", fonction: "energie", origine: "local", carence: "proteine", moment: "soir", saison: "seche" }
},
{
  image: "./assets/image/aliments/betterave-sucre.webp",
  badge: "racine",
  title: "Betterave sucrière",
  description: "Racine riche en sucres naturels.",
  nutrition: "Sucres, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "racine", nutriment: "glucide", fonction: "energie", origine: "local", carence: "proteine", moment: "matin", saison: "toute" }
},

// --- Feuillages ---
{
  image: "./assets/image/aliments/feuille-papaye.webp",
  badge: "feuillage",
  title: "Feuille de papaye",
  description: "Feuillage tropical nutritif.",
  nutrition: "Fibres, protéines végétales.",
  carence: "Faible en calcium.",
  filtre: { categorie: "feuillage", nutriment: "proteine", fonction: "croissance", origine: "local", carence: "calcium", moment: "midi", saison: "pluie" }
},
{
  image: "./assets/image/aliments/feuille-taro.webp",
  badge: "feuillage",
  title: "Feuille de taro",
  description: "Feuillage vert riche en fibres.",
  nutrition: "Fibres, minéraux.",
  carence: "Faible en protéines.",
  filtre: { categorie: "feuillage", nutriment: "fibres", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "seche" }
},

// --- Minéraux ---
{
  image: "./assets/image/aliments/pierre-grise.webp",
  badge: "mineraux",
  title: "Pierre grise",
  description: "Complément minéral naturel.",
  nutrition: "Calcium, magnésium.",
  carence: "Aucune si bien dosé.",
  filtre: { categorie: "mineraux", nutriment: "mineral", fonction: "coquille", origine: "local", carence: "aucune", moment: "nuit", saison: "toute" }
},
{
  image: "./assets/image/aliments/poudre-calcaire.webp",
  badge: "mineraux",
  title: "Poudre de calcaire",
  description: "Complément minéral pour renforcer la coquille.",
  nutrition: "Calcium.",
  carence: "Aucune si bien dosé.",
  filtre: { categorie: "mineraux", nutriment: "mineral", fonction: "coquille", origine: "local", carence: "aucune", moment: "nuit", saison: "seche" }
},

// --- Fruits ---
{
  image: "./assets/image/aliments/papaye-jaune.webp",
  badge: "fruit",
  title: "Papaye jaune",
  description: "Fruit tropical sucré et tendre.",
  nutrition: "Vitamine A, sucres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "energie", origine: "local", carence: "proteine", moment: "matin", saison: "pluie" }
},
{
  image: "./assets/image/aliments/banane-plantain.webp",
  badge: "fruit",
  title: "Banane plantain",
  description: "Fruit énergétique utilisé cuit.",
  nutrition: "Glucides, potassium.",
  carence: "Faible en calcium.",
  filtre: { categorie: "fruit", nutriment: "glucide", fonction: "energie", origine: "local", carence: "calcium", moment: "midi", saison: "seche" }
},
{
  image: "./assets/image/aliments/pomme-verte.webp",
  badge: "fruit",
  title: "Pomme verte",
  description: "Fruit croquant et acidulé.",
  nutrition: "Fibres, vitamine C.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "fibres", fonction: "sante", origine: "import", carence: "proteine", moment: "soir", saison: "toute" }
},
{
  image: "./assets/image/aliments/poire-asiatique.webp",
  badge: "fruit",
  title: "Poire asiatique",
  description: "Fruit croquant riche en eau.",
  nutrition: "Fibres, sucres naturels.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "fibres", fonction: "energie", origine: "import", carence: "proteine", moment: "matin", saison: "seche" }
},


// --- Racines / tubercules ---
{
  image: "./assets/image/aliments/batate-jaune.webp",
  badge: "racine",
  title: "Batate jaune",
  description: "Tubercule sucré riche en énergie.",
  nutrition: "Glucides, vitamine A.",
  carence: "Faible en calcium.",
  filtre: { categorie: "racine", nutriment: "glucide", fonction: "energie", origine: "local", carence: "calcium", moment: "soir", saison: "toute" }
},
{
  image: "./assets/image/aliments/yautia.webp",
  badge: "racine",
  title: "Yautia",
  description: "Tubercule tropical riche en amidon.",
  nutrition: "Glucides, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "racine", nutriment: "glucide", fonction: "energie", origine: "local", carence: "proteine", moment: "midi", saison: "pluie" }
},
{
  image: "./assets/image/aliments/malanga.webp",
  badge: "racine",
  title: "Malanga",
  description: "Tubercule riche en énergie.",
  nutrition: "Glucides, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "racine", nutriment: "glucide", fonction: "energie", origine: "local", carence: "proteine", moment: "soir", saison: "seche" }
},

// --- Feuillages ---
{
  image: "./assets/image/aliments/feuille-chou.webp",
  badge: "feuillage",
  title: "Feuille de chou",
  description: "Feuillage vert nutritif.",
  nutrition: "Fibres, vitamine C.",
  carence: "Faible en protéines.",
  filtre: { categorie: "feuillage", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "matin", saison: "pluie" }
},
{
  image: "./assets/image/aliments/feuille-laitue.webp",
  badge: "feuillage",
  title: "Feuille de laitue",
  description: "Feuillage tendre riche en eau.",
  nutrition: "Fibres, vitamine K.",
  carence: "Faible en protéines.",
  filtre: { categorie: "feuillage", nutriment: "fibres", fonction: "sante", origine: "local", carence: "proteine", moment: "midi", saison: "seche" }
},
{
  image: "./assets/image/aliments/feuille-cassava.webp",
  badge: "feuillage",
  title: "Feuille de cassava",
  description: "Feuillage tropical riche en protéines.",
  nutrition: "Protéines végétales, fer.",
  carence: "Faible en calcium.",
  filtre: { categorie: "feuillage", nutriment: "proteine", fonction: "croissance", origine: "local", carence: "calcium", moment: "soir", saison: "toute" }
},

// --- Minéraux ---
{
  image: "./assets/image/aliments/pierre-noire.webp",
  badge: "mineraux",
  title: "Pierre noire",
  description: "Complément minéral naturel riche en fer.",
  nutrition: "Fer, calcium.",
  carence: "Aucune si bien dosé.",
  filtre: { categorie: "mineraux", nutriment: "mineral", fonction: "sante", origine: "local", carence: "aucune", moment: "nuit", saison: "pluie" }
},
{
  image: "./assets/image/aliments/poudre-minerale.webp",
  badge: "mineraux",
  title: "Poudre minérale",
  description: "Complément minéral pour renforcer la coquille.",
  nutrition: "Calcium, phosphore.",
  carence: "Aucune si bien dosé.",
  filtre: { categorie: "mineraux", nutriment: "mineral", fonction: "coquille", origine: "local", carence: "aucune", moment: "nuit", saison: "seche" }
},
// --- Céréales ---
{
  image: "./assets/image/aliments/epautre.webp",
  badge: "cereale",
  title: "Épeautre",
  description: "Ancienne céréale riche en fibres.",
  nutrition: "Fibres, glucides complexes.",
  carence: "Faible en calcium.",
  filtre: { categorie: "cereale", nutriment: "fibres", fonction: "energie", origine: "local", carence: "calcium", moment: "matin", saison: "seche" }
},
{
  image: "./assets/image/aliments/boulgour.webp",
  badge: "cereale",
  title: "Boulgour",
  description: "Céréale concassée issue du blé.",
  nutrition: "Glucides, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "cereale", nutriment: "glucide", fonction: "energie", origine: "local", carence: "proteine", moment: "midi", saison: "toute" }
},
{
  image: "./assets/image/aliments/mais-blanc.webp",
  badge: "cereale",
  title: "Maïs blanc",
  description: "Variété de maïs riche en amidon.",
  nutrition: "Glucides, énergie.",
  carence: "Faible en protéines.",
  filtre: { categorie: "cereale", nutriment: "glucide", fonction: "energie", origine: "local", carence: "proteine", moment: "soir", saison: "pluie" }
},

// --- Fruits ---
{
  image: "./assets/image/aliments/papaye-rouge.webp",
  badge: "fruit",
  title: "Papaye rouge",
  description: "Fruit tropical riche en vitamine A.",
  nutrition: "Vitamine A, sucres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "energie", origine: "local", carence: "proteine", moment: "matin", saison: "pluie" }
},
{
  image: "./assets/image/aliments/banane-rouge.webp",
  badge: "fruit",
  title: "Banane rouge",
  description: "Variété de banane sucrée.",
  nutrition: "Glucides, potassium.",
  carence: "Faible en calcium.",
  filtre: { categorie: "fruit", nutriment: "glucide", fonction: "energie", origine: "local", carence: "calcium", moment: "midi", saison: "seche" }
},
{
  image: "./assets/image/aliments/poire-williams.webp",
  badge: "fruit",
  title: "Poire Williams",
  description: "Fruit tendre et parfumé.",
  nutrition: "Fibres, sucres naturels.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "fibres", fonction: "sante", origine: "import", carence: "proteine", moment: "soir", saison: "toute" }
},
{
  image: "./assets/image/aliments/pomme-golden.webp",
  badge: "fruit",
  title: "Pomme Golden",
  description: "Fruit croquant et sucré.",
  nutrition: "Fibres, vitamine C.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "fibres", fonction: "sante", origine: "import", carence: "proteine", moment: "matin", saison: "seche" }
},
{
  image: "./assets/image/aliments/melon-cantaloup.webp",
  badge: "fruit",
  title: "Melon cantaloup",
  description: "Fruit sucré riche en eau.",
  nutrition: "Vitamine C, sucres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "energie", origine: "local", carence: "proteine", moment: "midi", saison: "pluie" }
},

// --- Racines ---
{
  image: "./assets/image/aliments/rutabaga.webp",
  badge: "racine",
  title: "Rutabaga",
  description: "Racine rustique riche en fibres.",
  nutrition: "Fibres, glucides.",
  carence: "Faible en protéines.",
  filtre: { categorie: "racine", nutriment: "fibres", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "toute" }
},
{
  image: "./assets/image/aliments/manioc-amer.webp",
  badge: "racine",
  title: "Manioc amer",
  description: "Tubercule riche en amidon.",
  nutrition: "Glucides, énergie.",
  carence: "Faible en protéines.",
  filtre: { categorie: "racine", nutriment: "glucide", fonction: "energie", origine: "local", carence: "proteine", moment: "midi", saison: "seche" }
},
{
  image: "./assets/image/aliments/gingembre.webp",
  badge: "racine",
  title: "Gingembre",
  description: "Racine aromatique aux vertus digestives.",
  nutrition: "Antioxydants, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "racine", nutriment: "vitamine", fonction: "sante", origine: "import", carence: "proteine", moment: "matin", saison: "pluie" }
},

// --- Feuillages ---
{
  image: "./assets/image/aliments/feuille-chou-kale.webp",
  badge: "feuillage",
  title: "Feuille de chou kale",
  description: "Feuillage vert nutritif.",
  nutrition: "Fibres, vitamine C.",
  carence: "Faible en protéines.",
  filtre: { categorie: "feuillage", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "seche" }
},
{
  image: "./assets/image/aliments/feuille-epinard.webp",
  badge: "feuillage",
  title: "Feuille d’épinard",
  description: "Feuillage riche en fer.",
  nutrition: "Fer, fibres, vitamines.",
  carence: "Faible en calcium.",
  filtre: { categorie: "feuillage", nutriment: "vitamine", fonction: "croissance", origine: "local", carence: "calcium", moment: "midi", saison: "pluie" }
},
{
  image: "./assets/image/aliments/feuille-luzerne.webp",
  badge: "feuillage",
  title: "Feuille de luzerne",
  description: "Plante fourragère riche en protéines.",
  nutrition: "Protéines végétales, fibres.",
  carence: "Faible en calcium.",
  filtre: { categorie: "feuillage", nutriment: "proteine", fonction: "croissance", origine: "local", carence: "calcium", moment: "matin", saison: "seche" }
},

// --- Minéraux ---
{
  image: "./assets/image/aliments/pierre-sable.webp",
  badge: "mineraux",
  title: "Pierre sableuse",
  description: "Complément minéral naturel.",
  nutrition: "Calcium, magnésium.",
  carence: "Aucune si bien dosé.",
  filtre: { categorie: "mineraux", nutriment: "mineral", fonction: "coquille", origine: "local", carence: "aucune", moment: "nuit", saison: "toute" }
},
{
  image: "./assets/image/aliments/poudre-granit.webp",
  badge: "mineraux",
  title: "Poudre de granit",
  description: "Complément minéral riche en calcium.",
  nutrition: "Calcium, phosphore.",
  carence: "Aucune si bien dosé.",
  filtre: { categorie: "mineraux", nutriment: "mineral", fonction: "coquille", origine: "local", carence: "aucune", moment: "nuit", saison: "seche" }
},
// --- Légumes ---
{
  image: "./assets/image/aliments/fenouil.webp",
  badge: "legume",
  title: "Fenouil",
  description: "Bulbe aromatique au goût anisé.",
  nutrition: "Fibres, vitamine C.",
  carence: "Faible en protéines.",
  filtre: { categorie: "legume", nutriment: "fibres", fonction: "sante", origine: "local", carence: "proteine", moment: "midi", saison: "pluie" }
},
{
  image: "./assets/image/aliments/chicoree.webp",
  badge: "legume",
  title: "Chicorée",
  description: "Feuille amère utilisée en salade.",
  nutrition: "Fibres, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "legume", nutriment: "fibres", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "seche" }
},
{
  image: "./assets/image/aliments/piment-doux.webp",
  badge: "legume",
  title: "Piment doux",
  description: "Légume coloré au goût sucré.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "legume", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "matin", saison: "toute" }
},

// --- Fruits ---
{
  image: "./assets/image/aliments/fruit-de-la-passion.webp",
  badge: "fruit",
  title: "Fruit de la passion",
  description: "Fruit tropical acidulé.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "import", carence: "proteine", moment: "midi", saison: "pluie" }
},

{
  image: "./assets/image/aliments/noix-de-coco.webp",
  badge: "fruit",
  title: "Noix de coco",
  description: "Fruit tropical riche en eau et fibres.",
  nutrition: "Fibres, minéraux.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "fibres", fonction: "energie", origine: "import", carence: "proteine", moment: "matin", saison: "toute" }
},

// --- Racines / tubercules ---
{
  image: "./assets/image/aliments/curcuma.webp",
  badge: "racine",
  title: "Curcuma",
  description: "Racine colorée aux vertus digestives.",
  nutrition: "Antioxydants, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "racine", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "midi", saison: "pluie" }
},
{
  image: "./assets/image/aliments/galanga.webp",
  badge: "racine",
  title: "Galanga",
  description: "Racine aromatique proche du gingembre.",
  nutrition: "Fibres, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "racine", nutriment: "fibres", fonction: "sante", origine: "import", carence: "proteine", moment: "soir", saison: "seche" }
},

// --- Feuillages ---
{
  image: "./assets/image/aliments/feuille-de-betterave.webp",
  badge: "feuillage",
  title: "Feuille de betterave",
  description: "Feuillage vert riche en fer.",
  nutrition: "Fer, fibres.",
  carence: "Faible en calcium.",
  filtre: { categorie: "feuillage", nutriment: "mineral", fonction: "croissance", origine: "local", carence: "calcium", moment: "matin", saison: "toute" }
},
{
  image: "./assets/image/aliments/feuille-de-coriandre.webp",
  badge: "feuillage",
  title: "Feuille de coriandre",
  description: "Plante aromatique aux vertus digestives.",
  nutrition: "Antioxydants, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "feuillage", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "pluie" }
},

// --- Minéraux ---
{
  image: "./assets/image/aliments/pierre-volcanique.webp",
  badge: "mineraux",
  title: "Pierre volcanique",
  description: "Complément minéral riche en oligo-éléments.",
  nutrition: "Calcium, magnésium.",
  carence: "Aucune si bien dosé.",
  filtre: { categorie: "mineraux", nutriment: "mineral", fonction: "sante", origine: "local", carence: "aucune", moment: "nuit", saison: "seche" }
},
{
  image: "./assets/image/aliments/poudre-de-marbre.webp",
  badge: "mineraux",
  title: "Poudre de marbre",
  description: "Complément minéral naturel.",
  nutrition: "Calcium.",
  carence: "Aucune si bien dosé.",
  filtre: { categorie: "mineraux", nutriment: "mineral", fonction: "coquille", origine: "local", carence: "aucune", moment: "nuit", saison: "toute" }
},

// --- Céréales ---
{
  image: "./assets/image/aliments/ble-noir.webp",
  badge: "cereale",
  title: "Blé noir",
  description: "Céréale rustique riche en fibres.",
  nutrition: "Fibres, glucides.",
  carence: "Faible en calcium.",
  filtre: { categorie: "cereale", nutriment: "fibres", fonction: "sante", origine: "local", carence: "calcium", moment: "matin", saison: "pluie" }
},
{
  image: "./assets/image/aliments/mais-rouge.webp",
  badge: "cereale",
  title: "Maïs rouge",
  description: "Variété de maïs riche en antioxydants.",
  nutrition: "Glucides, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "cereale", nutriment: "glucide", fonction: "energie", origine: "local", carence: "proteine", moment: "midi", saison: "seche" }
},
{
  image: "./assets/image/aliments/piment-doux.webp",
  badge: "legume",
  title: "Piment doux",
  description: "Légume coloré au goût sucré.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "legume", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "matin", saison: "toute" }
},
{
  image: "./assets/image/aliments/betterave-blanche.webp",
  badge: "legume",
  title: "Betterave blanche",
  description: "Racine douce et croquante.",
  nutrition: "Fibres, sucres naturels.",
  carence: "Faible en protéines.",
  filtre: { categorie: "legume", nutriment: "fibres", fonction: "energie", origine: "local", carence: "proteine", moment: "soir", saison: "toute" }
},
{
  image: "./assets/image/aliments/panais-blanc.webp",
  badge: "legume",
  title: "Panais blanc",
  description: "Racine tendre au goût sucré.",
  nutrition: "Fibres, glucides.",
  carence: "Faible en protéines.",
  filtre: { categorie: "legume", nutriment: "fibres", fonction: "sante", origine: "local", carence: "proteine", moment: "matin", saison: "seche" }
},
{
  image: "./assets/image/aliments/poivron-jaune.webp",
  badge: "legume",
  title: "Poivron jaune",
  description: "Légume coloré riche en vitamine C.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "legume", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "midi", saison: "pluie" }
},
{
  image: "./assets/image/aliments/courge.webp",
  badge: "legume",
  title: "Courge",
  description: "Légume tendre riche en eau.",
  nutrition: "Fibres, vitamines.",
  carence: "Faible en protéines.",
  filtre: { categorie: "legume", nutriment: "fibres", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "seche" }
},

// --- Fruits ---

{
  image: "./assets/image/aliments/kaki.webp",
  badge: "fruit",
  title: "Kaki",
  description: "Fruit orange sucré et tendre.",
  nutrition: "Vitamine A, sucres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "energie", origine: "local", carence: "proteine", moment: "soir", saison: "seche" }
},

{
  image: "./assets/image/aliments/figue-de-barbarie.webp",
  badge: "fruit",
  title: "Figue de Barbarie",
  description: "Fruit du cactus riche en eau.",
  nutrition: "Fibres, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "fibres", fonction: "sante", origine: "local", carence: "proteine", moment: "matin", saison: "toute" }
},

// --- Fruits ---
{
  image: "./assets/image/aliments/sapote.webp",
  badge: "fruit",
  title: "Sapote",
  description: "Fruit tropical doux à chair crémeuse.",
  nutrition: "Sucres naturels, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "glucide", fonction: "energie", origine: "local", carence: "proteine", moment: "soir", saison: "seche" }
},
{
  image: "./assets/image/aliments/jackfruit.webp",
  badge: "fruit",
  title: "Jacquier",
  description: "Fruit tropical volumineux à chair fibreuse.",
  nutrition: "Glucides, vitamine C.",
  carence: "Faible en calcium.",
  filtre: { categorie: "fruit", nutriment: "glucide", fonction: "energie", origine: "local", carence: "calcium", moment: "midi", saison: "pluie" }
},
{
  image: "./assets/image/aliments/acerola.webp",
  badge: "fruit",
  title: "Acerola",
  description: "Petit fruit rouge riche en vitamine C.",
  nutrition: "Vitamine C, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "import", carence: "proteine", moment: "matin", saison: "toute" }
},
{
  image: "./assets/image/aliments/olive.webp",
  badge: "fruit",
  title: "Olive",
  description: "Petit fruit méditerranéen riche en lipides.",
  nutrition: "Lipides, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "lipide", fonction: "energie", origine: "local", carence: "proteine", moment: "soir", saison: "seche" }
},
{
  image: "./assets/image/aliments/papaye-mountain.webp",
  badge: "fruit",
  title: "Papaye des montagnes",
  description: "Fruit tropical à chair orangée.",
  nutrition: "Vitamine A, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "energie", origine: "local", carence: "proteine", moment: "midi", saison: "pluie" }
},

// --- Racines / tubercules ---
{
  image: "./assets/image/aliments/manioc-doux.webp",
  badge: "racine",
  title: "Manioc doux",
  description: "Tubercule riche en amidon, consommé cuit.",
  nutrition: "Glucides, énergie.",
  carence: "Faible en protéines.",
  filtre: { categorie: "racine", nutriment: "glucide", fonction: "energie", origine: "local", carence: "proteine", moment: "soir", saison: "seche" }
},
{
  image: "./assets/image/aliments/arrow-root.webp",
  badge: "racine",
  title: "Arrow-root",
  description: "Tubercule utilisé en farine.",
  nutrition: "Glucides, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "racine", nutriment: "glucide", fonction: "energie", origine: "import", carence: "proteine", moment: "matin", saison: "toute" }
},
{
  image: "./assets/image/aliments/lotus-root.webp",
  badge: "racine",
  title: "Racine de lotus",
  description: "Tubercule aquatique croquant.",
  nutrition: "Fibres, vitamine C.",
  carence: "Faible en protéines.",
  filtre: { categorie: "racine", nutriment: "fibres", fonction: "sante", origine: "import", carence: "proteine", moment: "midi", saison: "pluie" }
},

// --- Feuillages ---
{
  image: "./assets/image/aliments/feuille-de-moringa.webp",
  badge: "feuillage",
  title: "Feuille de moringa",
  description: "Feuillage tropical riche en protéines.",
  nutrition: "Protéines végétales, fer.",
  carence: "Faible en calcium.",
  filtre: { categorie: "feuillage", nutriment: "proteine", fonction: "croissance", origine: "local", carence: "calcium", moment: "matin", saison: "seche" }
},
{
  image: "./assets/image/aliments/feuille-de-patate.webp",
  badge: "feuillage",
  title: "Feuille de patate douce",
  description: "Feuillage vert nutritif.",
  nutrition: "Fibres, vitamines.",
  carence: "Faible en protéines.",
  filtre: { categorie: "feuillage", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "pluie" }
},
{
  image: "./assets/image/aliments/feuille-de-citronnelle.webp",
  badge: "feuillage",
  title: "Feuille de citronnelle",
  description: "Plante aromatique tropicale.",
  nutrition: "Antioxydants, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "feuillage", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "midi", saison: "toute" }
},

// --- Minéraux ---
{
  image: "./assets/image/aliments/pierre-volcanique.webp",
  badge: "mineraux",
  title: "Pierre volcanique",
  description: "Complément minéral riche en oligo-éléments.",
  nutrition: "Calcium, magnésium.",
  carence: "Aucune si bien dosé.",
  filtre: { categorie: "mineraux", nutriment: "mineral", fonction: "sante", origine: "local", carence: "aucune", moment: "nuit", saison: "seche" }
},
{
  image: "./assets/image/aliments/poudre-de-marbre.webp",
  badge: "mineraux",
  title: "Poudre de marbre",
  description: "Complément minéral naturel.",
  nutrition: "Calcium.",
  carence: "Aucune si bien dosé.",
  filtre: { categorie: "mineraux", nutriment: "mineral", fonction: "coquille", origine: "local", carence: "aucune", moment: "nuit", saison: "toute" }
},

// --- Céréales ---
{
  image: "./assets/image/aliments/quinoa.webp",
  badge: "cereale",
  title: "Quinoa",
  description: "Pseudo-céréale riche en protéines.",
  nutrition: "Protéines, fibres, minéraux.",
  carence: "Faible en calcium.",
  filtre: { categorie: "cereale", nutriment: "proteine", fonction: "croissance", origine: "import", carence: "calcium", moment: "matin", saison: "seche" }
},
{
  image: "./assets/image/aliments/amarante-grain.webp",
  badge: "cereale",
  title: "Amarante grain",
  description: "Grain nutritif riche en protéines.",
  nutrition: "Protéines, fer, fibres.",
  carence: "Faible en calcium.",
  filtre: { categorie: "cereale", nutriment: "proteine", fonction: "croissance", origine: "local", carence: "calcium", moment: "midi", saison: "pluie" }
},
{
  image: "./assets/image/aliments/teff.webp",
  badge: "cereale",
  title: "Teff",
  description: "Céréale éthiopienne riche en fer.",
  nutrition: "Fer, fibres, glucides.",
  carence: "Faible en calcium.",
  filtre: { categorie: "cereale", nutriment: "mineral", fonction: "energie", origine: "import", carence: "calcium", moment: "soir", saison: "toute" }
},
// --- Fruits supplémentaires ---
{
  image: "./assets/image/aliments/litchi.webp",
  badge: "fruit",
  title: "Litchi",
  description: "Petit fruit tropical sucré à chair translucide.",
  nutrition: "Vitamine C, sucres naturels.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "energie", origine: "import", carence: "proteine", moment: "matin", saison: "pluie" }
},

{
  image: "./assets/image/aliments/fruit-du-dragon.webp",
  badge: "fruit",
  title: "Fruit du dragon",
  description: "Fruit exotique à chair colorée et riche en antioxydants.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "import", carence: "proteine", moment: "soir", saison: "pluie" }
},
{
  image: "./assets/image/aliments/kumquat.webp",
  badge: "fruit",
  title: "Kumquat",
  description: "Petit agrume sucré-acidulé consommé avec la peau.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "import", carence: "proteine", moment: "matin", saison: "toute" }
},
{
  image: "./assets/image/aliments/longane.webp",
  badge: "fruit",
  title: "Longane",
  description: "Fruit asiatique sucré proche du litchi.",
  nutrition: "Vitamine C, sucres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "energie", origine: "import", carence: "proteine", moment: "soir", saison: "pluie" }
},

{
  image: "./assets/image/aliments/baie-de-goji.webp",
  badge: "fruit",
  title: "Baie de goji",
  description: "Petit fruit rouge séché riche en antioxydants.",
  nutrition: "Vitamine A, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "import", carence: "proteine", moment: "midi", saison: "pluie" }
},
{
  image: "./assets/image/aliments/cerise-acide.webp",
  badge: "fruit",
  title: "Cerise acide",
  description: "Fruit rouge acidulé utilisé en jus.",
  nutrition: "Vitamine C, sucres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "seche" }
},

{
  image: "./assets/image/aliments/baie-de-sureau.webp",
  badge: "fruit",
  title: "Baie de sureau",
  description: "Petit fruit noir utilisé en sirop.",
  nutrition: "Vitamine C, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "midi", saison: "pluie" }
},

{
  image: "./assets/image/aliments/baie-de-myrtille.webp",
  badge: "fruit",
  title: "Myrtille",
  description: "Petit fruit bleu riche en antioxydants.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "toute" }
},
{
  image: "./assets/image/aliments/baie-daronia.webp",
  badge: "fruit",
  title: "Baie d’aronia",
  description: "Petit fruit violet riche en polyphénols.",
  nutrition: "Vitamine C, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "import", carence: "proteine", moment: "matin", saison: "pluie" }
},

{
  image: "./assets/image/aliments/baie-de-canneberge.webp",
  badge: "fruit",
  title: "Canneberge sauvage",
  description: "Fruit rouge acidulé des régions froides.",
  nutrition: "Vitamine C, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "toute" }
},
{
  image: "./assets/image/aliments/baie-de-camelia.webp",
  badge: "fruit",
  title: "Baie de camélia",
  description: "Petit fruit exotique peu connu.",
  nutrition: "Fibres, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "fibres", fonction: "sante", origine: "import", carence: "proteine", moment: "matin", saison: "pluie" }
},
{
  image: "./assets/image/aliments/baie-de-schisandra.webp",
  badge: "fruit",
  title: "Baie de schisandra",
  description: "Fruit asiatique aux cinq saveurs.",
  nutrition: "Vitamine C, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "import", carence: "proteine", moment: "midi", saison: "seche" }
},
{
  image: "./assets/image/aliments/baie-de-cornouiller.webp",
  badge: "fruit",
  title: "Baie de cornouiller",
  description: "Petit fruit rouge acidulé.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "toute" }
},
{
  image: "./assets/image/aliments/baie-de-mahonie.webp",
  badge: "fruit",
  title: "Baie de mahonie",
  description: "Fruit bleu foncé riche en antioxydants.",
  nutrition: "Vitamine C, polyphénols.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "matin", saison: "pluie" }
},

{
  image: "./assets/image/aliments/baie-de-photinia.webp",
  badge: "fruit",
  title: "Baie de photinia",
  description: "Petit fruit rouge décoratif comestible.",
  nutrition: "Fibres, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "fibres", fonction: "sante", origine: "local", carence: "proteine", moment: "matin", saison: "pluie" }
},
{
  image: "./assets/image/aliments/baie-de-aronia-noire.webp",
  badge: "fruit",
  title: "Baie d’aronia noire",
  description: "Fruit noir riche en polyphénols.",
  nutrition: "Vitamine C, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "import", carence: "proteine", moment: "midi", saison: "seche" }
},
{
  image: "./assets/image/aliments/baie-de-nandina.webp",
  badge: "fruit",
  title: "Baie de nandina",
  description: "Petit fruit rouge décoratif comestible.",
  nutrition: "Fibres, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "fibres", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "seche" }
},
{
  image: "./assets/image/aliments/baie-de-cudrania.webp",
  badge: "fruit",
  title: "Baie de cudrania",
  description: "Fruit rare proche de la mûre.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "import", carence: "proteine", moment: "matin", saison: "pluie" }
},
{
  image: "./assets/image/aliments/baie-de-camerise.webp",
  badge: "fruit",
  title: "Baie de camerise",
  description: "Fruit bleu allongé riche en antioxydants.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "midi", saison: "toute" }
},
{
  image: "./assets/image/aliments/baie-de-sauge.webp",
  badge: "fruit",
  title: "Baie de sauge",
  description: "Petit fruit violet aromatique.",
  nutrition: "Antioxydants, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "fibres", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "seche" }
},
{
  image: "./assets/image/aliments/baie-de-photinia.webp",
  badge: "fruit",
  title: "Baie de photinia",
  description: "Petit fruit rouge décoratif comestible.",
  nutrition: "Fibres, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "fibres", fonction: "sante", origine: "local", carence: "proteine", moment: "matin", saison: "pluie" }
},

{
  image: "./assets/image/aliments/baie-de-sorbier.webp",
  badge: "fruit",
  title: "Baie de sorbier",
  description: "Petit fruit rouge amer.",
  nutrition: "Vitamine C, fibres.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "vitamine", fonction: "sante", origine: "local", carence: "proteine", moment: "soir", saison: "toute" }
},
{
  image: "./assets/image/aliments/baie-de-vigne.webp",
  badge: "fruit",
  title: "Baie de vigne",
  description: "Fruit sauvage proche du raisin.",
  nutrition: "Sucres naturels, antioxydants.",
  carence: "Faible en protéines.",
  filtre: { categorie: "fruit", nutriment: "glucide", fonction: "energie", origine: "local", carence: "proteine", moment: "matin", saison: "pluie" }
},

];
let current=0;
let currentTitle=document.getElementById("current");
let inputSearch=document.getElementById("search");
let overlayBody=document.querySelector(".overlay-body");
let arraymelange=[];
let popupsection=document.querySelector(".popups");
let formcard=document.querySelector(".form-card");
alimentArray.forEach((aliment,index)=>{
  current++;
    let cardSnail=document.createElement("div");
    cardSnail.className="card-snail";
    let img=document.createElement("img");
    img.src=aliment.image;
    let divImg=document.createElement("div");
    let overlay=document.createElement("div");
    overlay.className="overlay";
    divImg.className="divimg";
    let badge=document.createElement("div");
    badge.className="badge";
    badge.classList.add(aliment.badge);
    badge.textContent=aliment.badge;
    let px=document.createElement("div");
    px.className="px";
    let h1=document.createElement("h1");
    h1.className="card-title";
    h1.textContent=aliment.title;
    let p=document.createElement("p");
    p.className="card-desc";
    p.textContent=aliment.description;
    let nutrition=document.createElement("h4");
    nutrition.className="card-nutrition";
    nutrition.textContent=aliment.nutrition;
    let carence=document.createElement("div");
    carence.className="card-carrence";
    carence.textContent=aliment.carence;
    formcard.appendChild(cardSnail);
    divImg.appendChild(img);
    divImg.appendChild(overlay);
    cardSnail.appendChild(divImg);
    cardSnail.appendChild(badge);
    cardSnail.appendChild(px);
    px.appendChild(h1);
    px.appendChild(p);
    px.appendChild(nutrition);
    px.appendChild(carence);
    //button pour les mélange
    if(aliment.badge == "provende" || aliment.badge == "melange"){
        let btn=document.createElement("button");
        let btndiv=document.createElement("div");
        btndiv.className="btn-div";
        btndiv.id="open";
        btndiv.appendChild(btn);
        btn.className="btn-melange";
        btn.textContent=`voir ${aliment.badge}`
        px.appendChild(btndiv);

        //evenement du bouton
        
        let popup=document.createElement("div");
        popup.className="popup";
        arraymelange.push(popup);
        let popuphidden=document.createElement("div");
        popuphidden.className="popup-hidden";
        let popupimg=document.createElement("div");
        popupimg.className="popup-img";
        let icon=document.createElement("div");
        icon.className="icon";
        icon.innerHTML=`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="Currentcolor"></rect> <path d="M7 17L16.8995 7.10051" stroke="#4CAF50" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 7.00001L16.8995 16.8995" stroke="#4CAF50" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
        let overlay=document.createElement("div");
        overlay.className="overlay";
        let btnsearch=document.createElement("button");
        btnsearch.textContent="Rechercher les ingredients";
        btnsearch.id="btnSearch";
        let imgIngredient=document.createElement("img");
        imgIngredient.src=aliment.image;
        let popupIngredients=document.createElement("div");
        popupIngredients.className="popup-ingredients";
        let titleIngredient=document.createElement("h2");
        titleIngredient.textContent="Ingrédients("+aliment.ingredients.length+")";
        popupIngredients.appendChild(titleIngredient);
        aliment.ingredients.forEach((ingredient,index)=>{
            let ingredientCard=document.createElement("div");
            ingredientCard.className="ingredient-card";
            let divimgIngredient=document.createElement("div");
            divimgIngredient.className="divimg";
            let imageCardIngredient=document.createElement("img");
            imageCardIngredient.src=ingredient.image;
            let titleCardIngredient=document.createElement("p");
            titleCardIngredient.textContent=ingredient.name;
            popupIngredients.appendChild(ingredientCard);
            ingredientCard.appendChild(divimgIngredient);
            divimgIngredient.appendChild(titleCardIngredient);
            divimgIngredient.appendChild(imageCardIngredient);
        })
        let popupPreparation=document.createElement("diiv");
        popupPreparation.className="popup-preparation";
        let popupPreparationTitle=document.createElement("h2");
        popupPreparationTitle.textContent="Preparation";
        let preparation=document.createElement("div");
        preparation.className="preparation";
        let preparationDesc=document.createElement("p");
        preparationDesc.textContent=aliment.preparation;
        let popupVertus=document.createElement("div");
        popupVertus.className="popup-vertus";
       let popupVertuTitle=document.createElement("h2");
        popupVertuTitle.textContent="Vertus";
        let listVertus=document.createElement("ul");
        aliment.vertus.forEach((vertu,index)=>{
            let liVertus=document.createElement("li");
            liVertus.textContent=vertu;
            listVertus.appendChild(liVertus);
        })

        popupsection.appendChild(popup);
        popup.appendChild(popuphidden);
        popuphidden.appendChild(popupimg);
        popupimg.appendChild(icon);
        popupimg.appendChild(overlay);
        overlay.appendChild(btnsearch);
        popupimg.appendChild(imgIngredient);
        popuphidden.appendChild(popupIngredients);
        popuphidden.appendChild(popupPreparation);
        popupPreparation.appendChild(popupPreparationTitle);
        popupPreparation.appendChild(preparation);
        preparation.appendChild(preparationDesc);
        popuphidden.appendChild(popupVertus);
        popupVertus.appendChild(popupVertuTitle);
        popupVertus.appendChild(listVertus);   
    }
})


document.querySelectorAll("#open").forEach((but,ind)=>{
            but.addEventListener("click",function(){
                console.log(arraymelange)
                popupsection.style.display="block";
                overlayBody.style.display="block"
                arraymelange[ind].style.display="block";
            })
        })

        function ferme(){
            console.log(arraymelange)
            popupsection.style.display="none";
            overlayBody.style.display="none"
            arraymelange[ind].style.display="none";
        }
      
        overlayBody.addEventListener(("click"),function(){
            ferme();
        })
        document.querySelectorAll(".icon").forEach((ico,index)=>{
            
            ico.addEventListener(("click"),function(){
                ferme();
            })
        })
        //champs de saisie
        let reste=false;
        let cardSnail=document.querySelectorAll(".card-snail");
        inputSearch.addEventListener("input",function(){
          let filtre_badge=document.querySelectorAll(".filtre-badge");
          filtre_badge.forEach((flt,ind)=>{
            if(flt.textContent.trim() =="tous"){
              flt.classList.remove("desactive");
            }
            else{
                  flt.classList.add("desactive");
                }
              })
          current=0;
          document.documentElement.scrollTop=0;
          document.body.scrollTop=0;
          let valueSearch=inputSearch.value.trim().toLocaleLowerCase();
          alimentArray.forEach((aliment,index)=>{
            let alimentTitle=aliment.title.trim().toLocaleLowerCase();
            let alimentBadge=aliment.badge.trim().toLocaleLowerCase();
            let alimentcarrence=aliment.carence.trim().toLocaleLowerCase();
            let alimentNutrition=aliment.nutrition.trim().toLocaleLowerCase();
            if(alimentTitle.includes(valueSearch) || alimentcarrence.includes(valueSearch) || alimentBadge.includes(valueSearch) || alimentNutrition.includes(valueSearch)){
              current++;
              console.log(aliment.title.includes(valueSearch));
              cardSnail[index].style.display="block";
            }
            else{
              cardSnail[index].style.display="none";
            }
            if(current >0){
              currentTitle.textContent=`${current} aliment(s)`;
            }
            else{
              currentTitle.textContent="Aucun aliment trouvé"
            }
          })
        })

        // les filtres
        let option=document.querySelectorAll("select");
        option.forEach((opt,ind)=>{
          opt.addEventListener("change",function(){
            inputSearch.value="";
            current=0;
            alimentArray.forEach((aliment,index)=>{
              if(opt.name =="categorie"){
                 let filtre_badge=document.querySelectorAll(".filtre-badge");
          filtre_badge.forEach((filtre,inde)=>{
              // filtre_badge.forEach((flt,ind)=>{
                let dataBa=filtre.getAttribute("data-badge");
                if(dataBa ==opt.value){
                  filtre.classList.remove("desactive");
                }
                else{
                  filtre.classList.add("desactive");
                }
              })
              }
              if(opt.value == aliment.filtre[opt.name]){
              cardSnail[index].style.display="block";
              current++;
            }
            else if(opt.value =="tous"){
                cardSnail[index].style.display="block";
                current++;
              }
              else{
              cardSnail[index].style.display="none";
            }
            })
            if(current >0){
              currentTitle.textContent=`${current} aliment(s)`;
            }
            else{
              currentTitle.textContent="Aucun aliment trouvé"
            }
          })
        })
        
          window.addEventListener("scroll",function(){
            if(this.window.innerWidth <=768){
              if(window.scrollY >= 268){
                inputSearch.classList.add("searchfixed");
              }
              else{
                inputSearch.classList.remove("searchfixed");
                
              }
            }
            else{
              inputSearch.classList.remove("searchfixed");

            }
          })
          //message d'introduction
          currentTitle.textContent=`${current} aliment(s)`;

          //filtre liés aux badges
          let filtre_badge=document.querySelectorAll(".filtre-badge");
          filtre_badge.forEach((filtre,inde)=>{
            filtre.addEventListener("click",function(){
              filtre_badge.forEach((flt,ind)=>{
                  flt.classList.add("desactive");
              })
              filtre.classList.remove("desactive");
              current=0;
              let data_badge=filtre.getAttribute("data-badge");
              alimentArray.forEach((aliment,index)=>{
                if(aliment.badge == data_badge){
                 current++;
                  cardSnail[index].style.display="block";
                  recherche(aliment.badge);
                  
                }
               else if(data_badge =="tous"){
                  current=alimentArray.length;
                  cardSnail[index].style.display="block";
                }
                else{
                  cardSnail[index].style.display="none";
                }
              })
               if(data_badge =="tous"){
              recherche(data_badge);
               }
              currentUpdate();
            })
          })

    function currentUpdate(){
       if(current >0){
              currentTitle.textContent=`${current} aliment(s)`;
            }
            else{
              currentTitle.textContent="Aucun aliment trouvé"
            }
    }

    function recherche(badgeAliment){
      current=0;
       let valueSearch=inputSearch.value.trim().toLocaleLowerCase();
          alimentArray.forEach((aliment,index)=>{
            let alimentTitle=aliment.title.trim().toLocaleLowerCase();
            let alimentBadge=aliment.badge.trim().toLocaleLowerCase();
            let alimentcarrence=aliment.carence.trim().toLocaleLowerCase();
            let alimentNutrition=aliment.nutrition.trim().toLocaleLowerCase();
            if(aliment.badge == badgeAliment || badgeAliment==="tous"){
              if(alimentTitle.includes(valueSearch) || alimentcarrence.includes(valueSearch) || alimentBadge.includes(valueSearch) || alimentNutrition.includes(valueSearch)){
                current++;
                console.log(aliment.title.includes(valueSearch));
                cardSnail[index].style.display="block";
              }
              else{
                cardSnail[index].style.display="none";
              }
              if(current >0){
                currentTitle.textContent=`${current} aliment(s)`;
              }
              else{
                currentTitle.textContent="Aucun aliment trouvé"
              }
            }
           
          })
    }

