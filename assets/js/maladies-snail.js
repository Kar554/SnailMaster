const maladies = [
  {
    nom: "Acariose Cutanée",
    scientifique: "Riccardoella limacum",
    image: "./assets/image/acariose.webp",
    statut: "modérée",
    agent: "Riccardoella limacum (acarien hématophage)",
    categorieAgent: "parasite",
    description: "Infestation par des acariens microscopiques qui se nourrissent de l'hémolymphe.",
    maladie: "Maladie de la coquille blanche",
    agentBack: "Pseudomonas aeruginosa infection",
    symptomes: ["Décoloration blanche", "Fragilisation de la coquille", "Léthargie"],
    transmission: "Contact direct, substrat contaminé",
    especes: ["Helix pomatia", "Cornu aspersum"],
    traitements: "Bains antibiotiques, isolement",
    prevention: "Hygiène stricte, contrôle humidité"
  },
  {
    nom: "Mycose Digestive",
    scientifique: "Candida albicans",
    image: "./assets/image/mycose.webp",
    statut: "élevée",
    agent: "Champignon opportuniste",
    categorieAgent: "champignon",
    description: "Prolifération de champignons dans le tube digestif.",
    maladie: "Candidose",
    agentBack: "Candida infection",
    symptomes: ["Diarrhée", "Perte de poids", "Faiblesse"],
    transmission: "Alimentation contaminée",
    especes: ["Achatina fulica"],
    traitements: "Antifongiques",
    prevention: "Hygiène alimentaire"
  },
  {
    nom: "Bactériose Pulmonaire",
    scientifique: "Klebsiella pneumoniae",
    image: "./assets/image/bacteriose.webp",
    statut: "critique",
    agent: "Bactérie pathogène",
    categorieAgent: "bacterie",
    description: "Infection bactérienne affectant les poumons.",
    maladie: "Pneumonie bactérienne",
    agentBack: "Klebsiella infection",
    symptomes: ["Respiration difficile", "Mucus épais"],
    transmission: "Air contaminé",
    especes: ["Cornu aspersum"],
    traitements: "Antibiotiques",
    prevention: "Ventilation correcte"
  },
  {
    nom: "Virolise Tissulaire",
    scientifique: "Herpesvirus escargot",
    image: "./assets/image/virolise.webp",
    statut: "modérée",
    agent: "Virus à ADN",
    categorieAgent: "virus",
    description: "Destruction des tissus par un virus.",
    maladie: "Herpes escargot",
    agentBack: "Herpesvirus infection",
    symptomes: ["Lésions cutanées", "Faiblesse"],
    transmission: "Contact direct",
    especes: ["Helix pomatia"],
    traitements: "Isolement, soins de soutien",
    prevention: "Éviter la surpopulation"
  },
  {
    nom: "Protozoose Hépatique",
    scientifique: "Entamoeba histolytica",
    image: "./assets/image/protozoose.webp",
    statut: "élevée",
    agent: "Protozoaire invasif",
    categorieAgent: "protozaire",
    description: "Infection du foie par protozoaire.",
    maladie: "Amoebose",
    agentBack: "Entamoeba infection",
    symptomes: ["Foie enflé", "Perte d’appétit"],
    transmission: "Eau contaminée",
    especes: ["Achatina fulica"],
    traitements: "Antiprotozoaires",
    prevention: "Eau propre"
  },
  {
    nom: "Septicémie Bactérienne",
    scientifique: "Escherichia coli pathogène",
    image: "./assets/image/septicemie.webp",
    statut: "critique",
    agent: "Bactérie entérique",
    categorieAgent: "bacterie",
    description: "Propagation bactérienne dans le sang.",
    maladie: "Septicémie",
    agentBack: "E. coli infection",
    symptomes: ["Mort rapide", "Faiblesse"],
    transmission: "Blessures ouvertes",
    especes: ["Cornu aspersum"],
    traitements: "Antibiotiques puissants",
    prevention: "Surveillance des blessures"
  },
  {
    nom: "Parasitoses Cutanées",
    scientifique: "Strongyloides stercoralis",
    image: "./assets/image/parasitoses.webp",
    statut: "modérée",
    agent: "Vers parasites",
    categorieAgent: "parasite",
    description: "Parasites sous la peau.",
    maladie: "Strongyloidose",
    agentBack: "Strongyloides infection",
    symptomes: ["Irritations", "Rougeurs"],
    transmission: "Sol contaminé",
    especes: ["Helix pomatia"],
    traitements: "Antiparasitaires",
    prevention: "Sol propre"
  },
  {
    nom: "Mycose Buccale",
    scientifique: "Aspergillus fumigatus",
    image: "./assets/image/mycose-buccale.webp",
    statut: "faible",
    agent: "Champignon opportuniste",
    categorieAgent: "champignon",
    description: "Infection buccale par champignon.",
    maladie: "Aspergillose",
    agentBack: "Aspergillus infection",
    symptomes: ["Taches blanches", "Perte d’appétit"],
    transmission: "Aliments contaminés",
    especes: ["Cornu aspersum"],
    traitements: "Antifongiques",
    prevention: "Hygiène alimentaire"
  },
  {
    nom: "Virolise Digestive",
    scientifique: "Rotavirus escargot",
    image: "./assets/image/rotavirus.webp",
    statut: "modérée",
    agent: "Virus entérique",
    categorieAgent: "virus",
    description: "Infection virale du tube digestif.",
    maladie: "Rotavirose",
    agentBack: "Rotavirus infection",
    symptomes: ["Diarrhée", "Déshydratation"],
    transmission: "Eau contaminée",
    especes: ["Achatina fulica"],
    traitements: "Réhydratation",
    prevention: "Eau propre"
  },
  {
    nom: "Protozoose Intestinale",
    scientifique: "Giardia lamblia",
    image: "./assets/image/giardia.webp",
    statut: "élevée",
    agent: "Protozoaire intestinal",
    categorieAgent: "protozaire",
    description: "Infection intestinale par Giardia.",
    maladie: "Giardiase",
    agentBack: "Giardia infection",
    symptomes: ["Diarrhée", "Ballonnements"],
    transmission: "Eau contaminée",
    especes: ["Cornu aspersum"],
    traitements: "Antiprotozoaires",
    prevention: "Eau propre"
  },
  {
    nom: "Bactériose Cutanée",
    scientifique: "Staphylococcus aureus",
    image: "./assets/image/staphylocoque.webp",
    statut: "modérée",
    agent: "Bactérie cutanée",
    categorieAgent: "bacterie",
    description: "Infection cutanée par staphylocoque.",
    maladie: "Staphylococcose",
    agentBack: "Staphylococcus infection",
    symptomes: ["Rougeurs", "Pus"],
    transmission: "Contact direct",
    especes: ["Helix pomatia"],
    traitements: "Antibiotiques",
    prevention: "Hygiène stricte"
  },
  
  {
    nom: "Virolise Neurologique",
    scientifique: "Paramyxovirus escargot",
    image: "./assets/image/paramyxo.webp",
    statut: "critique",
    agent: "Virus neurotrope",
    categorieAgent: "virus",
    description: "Infection virale affectant le système nerveux.",
    maladie: "Encéphalite virale",
    agentBack: "Paramyxovirus infection",
    symptomes: ["Convulsions", "Perte de motricité", "Mort rapide"],
    transmission: "Contact direct, fluides corporels",
    especes: ["Cornu aspersum", "Achatina fulica"],
    traitements: "Isolement, soins palliatifs",
    prevention: "Contrôle de la densité d’élevage"
  },
  {
    nom: "Protozoose Sanguine",
    scientifique: "Plasmodium escargot",
    image: "./assets/image/plasmodium.webp",
    statut: "élevée",
    agent: "Protozoaire sanguin",
    categorieAgent: "protozaire",
    description: "Parasite protozoaire envahissant le sang.",
    maladie: "Plasmodiose",
    agentBack: "Plasmodium infection",
    symptomes: ["Anémie", "Faiblesse", "Léthargie"],
    transmission: "Vecteurs aquatiques",
    especes: ["Helix pomatia"],
    traitements: "Antiprotozoaires",
    prevention: "Contrôle des vecteurs"
  },
  {
    nom: "Bactériose Digestive",
    scientifique: "Salmonella enterica",
    image: "./assets/image/salmonella.webp",
    statut: "modérée",
    agent: "Bactérie entérique",
    categorieAgent: "bacterie",
    description: "Infection intestinale par Salmonella.",
    maladie: "Salmonellose",
    agentBack: "Salmonella infection",
    symptomes: ["Diarrhée", "Déshydratation"],
    transmission: "Aliments contaminés",
    especes: ["Cornu aspersum"],
    traitements: "Antibiotiques",
    prevention: "Hygiène alimentaire"
  },
  {
    nom: "Mycose Respiratoire",
    scientifique: "Histoplasma capsulatum",
    image: "./assets/image/histoplasma.webp",
    statut: "faible",
    agent: "Champignon respiratoire",
    categorieAgent: "champignon",
    description: "Infection pulmonaire par champignon.",
    maladie: "Histoplasmose",
    agentBack: "Histoplasma infection",
    symptomes: ["Toux", "Fatigue"],
    transmission: "Air contaminé",
    especes: ["Helix pomatia"],
    traitements: "Antifongiques",
    prevention: "Ventilation correcte"
  },
  {
    nom: "Virolise Cutanée",
    scientifique: "Papillomavirus escargot",
    image: "./assets/image/papilloma.webp",
    statut: "modérée",
    agent: "Virus cutané",
    categorieAgent: "virus",
    description: "Infection virale de la peau.",
    maladie: "Papillomatose",
    agentBack: "Papillomavirus infection",
    symptomes: ["Excroissances cutanées", "Faiblesse"],
    transmission: "Contact direct",
    especes: ["Cornu aspersum"],
    traitements: "Isolement, soins locaux",
    prevention: "Hygiène stricte"
  }
];
document.getElementById("number").textContent=`${maladies.length}  maladies documentées `
function carteGenerator() {
  const snailGrid = document.querySelector(".disease-grid");

  maladies.forEach(maladie => {
    let flipCard = document.createElement("div");
    flipCard.className = "flip-card";

    let snailFlip = document.createElement("div");
    snailFlip.className = "snail-flip";


    let cardFront = document.createElement("div");
    cardFront.className = "card-disease front";

    let absolute = document.createElement("div");
    absolute.className = "absolute";

    let img = document.createElement("img");
    img.src = maladie.image;

    let statut = document.createElement("div");
    if(maladie.statut.toLocaleLowerCase().trim() === "modérée"){
        statut.className = `statut bg-warning`;
        
        statut.innerHTML=`<div class="d-flex gap-2">
                        <div class="icon">
                            <svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>health</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="add" fill="#ffffff" transform="translate(42.666667, 64.000000)"> <path d="M365.491733,234.665926 C339.947827,276.368766 302.121072,321.347032 252.011468,369.600724 L237.061717,383.7547 C234.512147,386.129148 231.933605,388.511322 229.32609,390.901222 L213.333333,405.333333 C205.163121,398.070922 197.253659,390.878044 189.604949,383.7547 L174.655198,369.600724 C124.545595,321.347032 86.7188401,276.368766 61.174934,234.665926 L112.222458,234.666026 C134.857516,266.728129 165.548935,301.609704 204.481843,339.08546 L213.333333,347.498667 L214.816772,346.115558 C257.264819,305.964102 290.400085,268.724113 314.444476,234.665648 L365.491733,234.665926 Z M149.333333,58.9638831 L213.333333,186.944 L245.333333,122.963883 L269.184,170.666667 L426.666667,170.666667 L426.666667,213.333333 L247.850667,213.333333 L213.333333,282.36945 L149.333333,154.368 L119.851392,213.333333 L3.55271368e-14,213.333333 L3.55271368e-14,170.666667 L93.4613333,170.666667 L149.333333,58.9638831 Z M290.133333,0 C353.756537,0 405.333333,51.5775732 405.333333,115.2 C405.333333,126.248908 404.101625,137.626272 401.63821,149.33209 L357.793994,149.332408 C360.62486,138.880112 362.217829,128.905378 362.584434,119.422244 L362.666667,115.2 C362.666667,75.1414099 330.192075,42.6666667 290.133333,42.6666667 C273.651922,42.6666667 258.124715,48.1376509 245.521279,58.0219169 L241.829932,61.1185374 L213.366947,86.6338354 L184.888885,61.1353673 C171.661383,49.2918281 154.669113,42.6666667 136.533333,42.6666667 C96.4742795,42.6666667 64,75.1409461 64,115.2 C64,125.932203 65.6184007,137.316846 68.8727259,149.332605 L25.028457,149.33209 C22.5650412,137.626272 21.3333333,126.248908 21.3333333,115.2 C21.3333333,51.5767968 72.9101302,0 136.533333,0 C166.046194,0 192.966972,11.098031 213.350016,29.348444 C233.716605,11.091061 260.629741,0 290.133333,0 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>
                        </div>
                        Modérée
                    </div>`;
    }
    else if(maladie.statut.toLocaleLowerCase().trim() ==="critique"){
        statut.className = `statut bg-danger`;
        statut.innerHTML=` <div class="d-flex gap-2">
                        <div class="icon">
                            <svg viewBox="0 0 15 15" version="1.1" id="danger" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.94,14.68c-0.0749,0.194-0.262,0.3215-0.47,0.32c-0.0595,0.0107-0.1205,0.0107-0.18,0L7.5,12.56L1.7,15
	c-0.2572,0.1005-0.5472-0.0266-0.6476-0.2838C1.0516,14.7141,1.0508,14.7121,1.05,14.71c-0.1291-0.2441-0.0358-0.5467,0.2084-0.6757
	C1.2845,14.0205,1.3118,14.009,1.34,14l4.85-2l-4.85-2C1.0758,9.9197,0.9267,9.6404,1.007,9.3762s0.3596-0.4133,0.6238-0.333
	C1.6545,9.0504,1.6776,9.0594,1.7,9.07l5.8,2.41l5.8-2.41c0.2494-0.1185,0.5477-0.0124,0.6662,0.237
	c0.1185,0.2494,0.0124,0.5477-0.237,0.6662C13.7068,9.9839,13.6837,9.9928,13.66,10L8.8,12l4.85,2
	c0.2607,0.091,0.3983,0.3761,0.3074,0.6368C13.9523,14.6515,13.9465,14.6659,13.94,14.68z M12,4.23v0.45
	c-0.0021,0.2129-0.0722,0.4196-0.2,0.59C11.2414,5.8883,10.6399,6.4664,10,7v1.16c0.0015,0.208-0.126,0.3951-0.32,0.47L7.52,9.5
	H7.45L5.28,8.63C5.1016,8.5428,4.9917,8.3584,5,8.16V7C4.3528,6.4675,3.7446,5.8893,3.18,5.27C3.0593,5.0972,2.9963,4.8907,3,4.68
	V4.23C3.1669,2.0117,4.8974,0.2307,7.11,0h0.36l0,0h0.39C10.0862,0.2131,11.8348,1.9997,12,4.23z M6,4c0-0.5523-0.4477-1-1-1
	S4,3.4477,4,4s0.4477,1,1,1S6,4.5523,6,4z M7,7c0-0.2761-0.2239-0.5-0.5-0.5S6,6.7239,6,7v0.5C6,7.7761,6.2239,8,6.5,8
	S7,7.7761,7,7.5V7z M9,7c0-0.2761-0.2239-0.5-0.5-0.5S8,6.7239,8,7v0.5C8,7.7761,8.2239,8,8.5,8S9,7.7761,9,7.5V7z M11,4
	c0-0.5523-0.4477-1-1-1S9,3.4477,9,4s0.4477,1,1,1S11,4.5523,11,4z"></path> </g></svg>
                        </div>
                        Critique
                    </div>`;
    }
    else if(maladie.statut.toLocaleLowerCase().trim() ==="elevée"){
        statut.className = `statut eleve`;
        
        statut.innerHTML=`<div class="d-flex gap-2">
                        <div class="icon">
                            <svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>health</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="add" fill="#ffffff" transform="translate(42.666667, 64.000000)"> <path d="M365.491733,234.665926 C339.947827,276.368766 302.121072,321.347032 252.011468,369.600724 L237.061717,383.7547 C234.512147,386.129148 231.933605,388.511322 229.32609,390.901222 L213.333333,405.333333 C205.163121,398.070922 197.253659,390.878044 189.604949,383.7547 L174.655198,369.600724 C124.545595,321.347032 86.7188401,276.368766 61.174934,234.665926 L112.222458,234.666026 C134.857516,266.728129 165.548935,301.609704 204.481843,339.08546 L213.333333,347.498667 L214.816772,346.115558 C257.264819,305.964102 290.400085,268.724113 314.444476,234.665648 L365.491733,234.665926 Z M149.333333,58.9638831 L213.333333,186.944 L245.333333,122.963883 L269.184,170.666667 L426.666667,170.666667 L426.666667,213.333333 L247.850667,213.333333 L213.333333,282.36945 L149.333333,154.368 L119.851392,213.333333 L3.55271368e-14,213.333333 L3.55271368e-14,170.666667 L93.4613333,170.666667 L149.333333,58.9638831 Z M290.133333,0 C353.756537,0 405.333333,51.5775732 405.333333,115.2 C405.333333,126.248908 404.101625,137.626272 401.63821,149.33209 L357.793994,149.332408 C360.62486,138.880112 362.217829,128.905378 362.584434,119.422244 L362.666667,115.2 C362.666667,75.1414099 330.192075,42.6666667 290.133333,42.6666667 C273.651922,42.6666667 258.124715,48.1376509 245.521279,58.0219169 L241.829932,61.1185374 L213.366947,86.6338354 L184.888885,61.1353673 C171.661383,49.2918281 154.669113,42.6666667 136.533333,42.6666667 C96.4742795,42.6666667 64,75.1409461 64,115.2 C64,125.932203 65.6184007,137.316846 68.8727259,149.332605 L25.028457,149.33209 C22.5650412,137.626272 21.3333333,126.248908 21.3333333,115.2 C21.3333333,51.5767968 72.9101302,0 136.533333,0 C166.046194,0 192.966972,11.098031 213.350016,29.348444 C233.716605,11.091061 260.629741,0 290.133333,0 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>
                        </div>
                        Elevée
                    </div>`;
    }
    else{
        statut.className = `statut bg-success`;
        statut.innerHTML=`<div class="d-flex gap-2">
                        <div class="icon">
                           <svg fill="#000000" viewBox="0 0 24 24" id="statistic-low" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line id="primary" x1="3" y1="19" x2="21" y2="19" style="fill: none; stroke: transparent; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><polyline id="primary-2" data-name="primary" points="3 5 8 11 14 8 21 15" style="fill: none; stroke: #ffffff; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polyline><polyline id="primary-3" data-name="primary" points="21 10 21 15 16 15" style="fill: none; stroke: #ffffff; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polyline></g></svg>
                        </div>
                        Faible
                    </div>`;
    }

    let absoluteElement = document.createElement("div");
    absoluteElement.className = "absolute-element";

    let h3 = document.createElement("h3");
    h3.className = "card-title";
    h3.textContent = maladie.nom;

    let pSci = document.createElement("p");
    pSci.className = "card-text";
    pSci.textContent = maladie.scientifique;

    absoluteElement.appendChild(h3);
    absoluteElement.appendChild(pSci);

    absolute.appendChild(img);
    absolute.appendChild(statut);
    absolute.appendChild(absoluteElement);

    let px = document.createElement("div");
    px.className = "px";

    let agent = document.createElement("div");
    agent.className = "agent";
    agent.innerHTML = `<div class="">
                <div class="d-flex gap-3 my-2">
                    <div class="icon">
                        <svg fill="#ffffff" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 381.669 381.669" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M310.237,337.919h-21.16l-5.988-173.524c-0.04-33.845-15.758-44.933-21.68-49.111c-0.27-0.19-23.414-15.993-23.414-15.993 l4.646-7.9c2.1-3.569,0.908-8.167-2.662-10.268l-4.429-2.605l11.48-19.519l6.673,3.925c1.163,0.684,2.477,1.035,3.803,1.035 c0.63,0,1.263-0.079,1.883-0.24c1.925-0.499,3.573-1.743,4.582-3.458l11.065-18.814c2.1-3.57,0.908-8.166-2.662-10.267 L221.128,1.036c-1.716-1.01-3.761-1.296-5.686-0.795c-1.925,0.499-3.573,1.743-4.582,3.458l-11.066,18.814 c-2.1,3.57-0.908,8.166,2.662,10.267l6.672,3.924l-11.481,19.52l-4.429-2.606c-1.716-1.009-3.76-1.298-5.686-0.795 c-1.925,0.499-3.573,1.743-4.582,3.457l-72.42,123.127c-2.1,3.57-0.908,8.167,2.662,10.268l8.074,4.749l-13.872,23.585 c-1.009,1.715-1.294,3.76-0.795,5.687c0.499,1.925,1.743,3.572,3.458,4.581l17.685,10.4c1.194,0.702,2.503,1.036,3.795,1.036 c2.57,0,5.074-1.322,6.472-3.698l13.871-23.584l8.073,4.748c1.163,0.684,2.477,1.035,3.803,1.035c0.63,0,1.263-0.079,1.883-0.24 c1.925-0.499,3.573-1.743,4.582-3.457l11.214-19.064l18.146,10.674c4.689,2.758,8.024,7.178,9.391,12.446 c1.365,5.267,0.599,10.751-2.16,15.44l-32.244,54.823l-12.668-7.451l1.851-3.146c2.1-3.57,0.908-8.167-2.662-10.268l-92.84-54.605 c-1.716-1.009-3.761-1.296-5.686-0.794c-1.926,0.498-3.574,1.742-4.582,3.457L46.679,235.25c-2.1,3.57-0.907,8.167,2.663,10.267 l14.065,8.273l-6.793,11.549c-2.1,3.571-0.908,8.168,2.662,10.268l51.776,30.453c1.163,0.684,2.477,1.035,3.803,1.035 c0.63,0,1.263-0.079,1.883-0.24c1.925-0.499,3.573-1.743,4.582-3.458l6.793-11.55l7.619,4.48l-24.479,41.592H74.292 c-14.22,0-25.789,11.569-25.789,25.789v10.461c0,4.143,3.357,7.5,7.5,7.5h272.523c4.143,0,7.5-3.357,7.5-7.5v-10.461 C336.026,349.488,324.457,337.919,310.237,337.919z M219.987,17.769l38.318,22.537l-3.461,5.885l-38.318-22.536L219.987,17.769z M222.058,44.31l12.044,7.084l-11.48,19.519l-0.392-0.23l-11.652-6.854L222.058,44.31z M128.883,221.945l-4.755-2.797 l10.068-17.119l4.755,2.797L128.883,221.945z M180.387,167.647l-19.292,32.8l-33.832-19.899L192.078,70.35l33.832,19.899 l-14.175,24.099c-2.906-0.856-5.925-1.312-8.97-1.312c-11.261,0-21.799,6.023-27.504,15.722 C167.705,141.606,170.212,157.636,180.387,167.647z M188.191,136.363c3.021-5.137,8.605-8.327,14.574-8.327 c2.987,0,5.938,0.807,8.534,2.333c8.023,4.721,10.712,15.087,5.993,23.109c-3.021,5.137-8.605,8.327-14.574,8.327 c-2.987,0-5.938-0.807-8.533-2.334C186.162,154.752,183.473,144.385,188.191,136.363z M112.193,289.328l-38.848-22.849l2.99-5.085 l38.848,22.849L112.193,289.328z M63.41,236.389l3.699-6.29l79.91,47l-3.699,6.29L63.41,236.389z M154.296,294.314l19.132,11.253 c1.163,0.684,2.477,1.035,3.803,1.035c0.63,0,1.263-0.079,1.883-0.239c1.925-0.5,3.573-1.744,4.582-3.457l36.047-61.288 c4.79-8.143,6.121-17.666,3.75-26.811c-2.371-9.146-8.163-16.82-16.306-21.609l-18.146-10.675l4.223-7.179 c3.055,0.953,6.24,1.462,9.456,1.462c11.262,0,21.801-6.024,27.504-15.723c7.646-13,4.985-29.254-5.493-39.238l5.645-9.597 c0,0,22.087,15.079,22.388,15.292c4.586,3.235,15.327,10.814,15.327,36.986c0,0.087,0.002,0.173,0.005,0.259l5.976,173.134H128.653 L154.296,294.314z M321.026,366.669H63.503v-2.961c0-5.949,4.84-10.789,10.789-10.789h235.945c5.949,0,10.789,4.84,10.789,10.789 V366.669z"></path> </g> </g></svg>
                    </div>
                    <h3>Agent pathogène</h3>
                </div>
                
            </div><p class="px-3">${maladie.agent}</p>`;

    let desc = document.createElement("p");
    desc.textContent = maladie.description;

    px.appendChild(agent);
    px.appendChild(desc);

    cardFront.appendChild(absolute);
    cardFront.appendChild(px);
    let cardBack = document.createElement("div");
    cardBack.className = "card-disease back";

    let backTitle = document.createElement("h1");
    backTitle.className = "card-title text-white";
    backTitle.innerHTML =`<h1 class="card-title text-white">
                        <div class="d-flex gap-2">
                            <div class="icon h-auto">
                                <svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#fd4112;} </style> <g> <path class="st0" d="M498.454,338.25c-10.172-6.251-24.735-1.662-38.545,14.208l-57.203-35.156 c10.711-21.57,16.888-45.78,16.888-71.495c0-13.964-1.963-27.437-5.298-40.35l38.834-11.56 c7.812,13.439,19.598,18.668,30.772,15.336c14.138-4.205,21.823-20.319,15.087-42.956c-6.733-22.645-21.981-31.931-36.128-27.734 c-11.419,3.401-18.479,14.655-17.282,30.751l-39.612,11.786c-10.426-23.73-26.37-44.46-46.261-60.557l14.855-23.826 c14.344,5.203,25.854,2.37,31.196-6.199c6.759-10.841,1.141-26.571-18.676-38.925c-19.817-12.346-36.42-10.475-43.179,0.367 c-5.461,8.752-2.684,20.686,8.962,31.467l-14.2,22.768c-23.642-13.622-50.987-21.526-80.229-21.526 c-10.623,0-20.984,1.093-31.035,3.051l-14.44-39.695c15.724-9.609,21.78-22.252,17.797-33.199 C225.718,0.94,206.727-4.892,180.161,4.788c-26.567,9.661-37.387,26.326-32.333,40.192c4.07,11.2,17.338,16.98,36.245,13.771 l13.75,37.789c-36.902,15.004-66.865,43.288-84.208,78.918l-53.614-24.805c3.93-16.534-0.406-28.714-10.147-33.198 c-12.341-5.718-28.49,2.929-39.424,26.57c-10.938,23.634-7.065,41.54,5.28,47.259c9.963,4.607,22.362-0.315,32.543-14.76 l55.201,25.522c-3.93,13.929-6.177,28.573-6.177,43.761c0,12.599,1.591,24.796,4.323,36.565L66.934,297.76 c-10.496-14.575-23.467-19.488-34.182-14.733c-13.57,6.025-18.326,25.015-7.161,50.161c11.152,25.119,28.42,34.353,41.994,28.328 c10.96-4.861,15.996-18.273,11.72-36.459l31.795-14.112c13.294,30.024,35.498,55.118,63.241,72.15l-19.222,34.378 c-14.968-4.179-27.06,0.297-32.744,10.466c-7.205,12.87-1.473,29.788,19.144,41.312c20.616,11.542,38.016,7.555,45.23-5.315 c5.81-10.405,3.026-23.389-9.054-34.09l19.559-34.983c18.873,7.755,39.512,12.101,61.182,12.101c7.515,0,14.85-0.699,22.094-1.688 l15.309,67.91c-14.631,6.26-21.386,15.72-19.366,24.673c2.567,11.367,18.038,17.557,41.925,12.171 c23.882-5.394,35.21-17.618,32.644-28.975c-2.068-9.172-12.665-14.864-29.207-13.92l-15.219-67.516 c31.136-9.74,58.126-28.731,77.961-53.684l57.78,35.516c-7.279,18.851-4.674,33.382,5.272,39.485 c12.6,7.747,31.944-0.839,48.229-27.323C512.137,367.121,511.053,345.971,498.454,338.25z"></path> </g> </g></svg>
                            </div>
                            ${ maladie.maladie}
                        </div>
                    </h1>`;

    let backAgent = document.createElement("p");
    backAgent.className = "text-light px-3";
    backAgent.textContent = maladie.agentBack;

    let symptDiv = document.createElement("div");
    let sympttitle=document.createElement("div");
    sympttitle.innerHTML=`<h3 class="text-center text-white">
                            <div class="d-flex gap-2">
                                <div class="icon">
                                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff7b00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9517 12.1026C13.0377 9.60753 15.826 7.71984 19.0127 6.74341C19.3803 5.76034 20.0137 4.90717 20.8223 4.26465C15.6985 5.12736 11.271 8.04097 8.41314 12.1321C8.57095 12.1126 8.73138 12.1026 8.89375 12.1026H10.9517ZM7.35899 19.5082C6.6598 19.2093 6.06122 18.7124 5.64197 18.0846C5.22323 19.6525 5 21.3002 5 23.0001C5 28.8499 7.64365 34.0822 11.8014 37.5676L12.4223 35.4483C9.08653 32.3445 7 27.9159 7 23.0001C7 21.8032 7.12369 20.6352 7.35899 19.5082ZM19.4132 39.3741L18.8904 40.6132C18.8628 40.8377 18.8158 41.0557 18.7513 41.2658C20.4183 41.744 22.1793 42.0001 24 42.0001C25.8207 42.0001 27.5817 41.744 29.2487 41.2658C29.1842 41.0557 29.1372 40.8377 29.1096 40.6132L28.5868 39.3741C27.1277 39.782 25.5893 40.0001 24 40.0001C22.4107 40.0001 20.8723 39.782 19.4132 39.3741ZM35.5777 35.4483L36.1986 37.5676C40.3563 34.0822 43 28.8499 43 23.0001C43 21.3002 42.7768 19.6525 42.358 18.0846C41.9388 18.7124 41.3402 19.2093 40.641 19.5082C40.8763 20.6352 41 21.8032 41 23.0001C41 27.9159 38.9135 32.3445 35.5777 35.4483ZM37.0483 12.1026H39.1062C39.2686 12.1026 39.429 12.1126 39.5869 12.1321C36.948 8.35445 32.9708 5.58079 28.3429 4.4987C29.1073 5.18768 29.6869 6.07685 29.9917 7.08608C32.76 8.12888 35.1845 9.8733 37.0483 12.1026Z" fill="#f59b00"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4443 4C21.826 4 19.6568 6.1046 19.6568 8.71967C19.6568 10.7117 20.9155 12.4075 22.6726 13.1025H16.7576C17.3158 13.6339 17.7207 14.325 17.8989 15.1025H39.1062C39.6126 15.1025 40 15.5087 40 15.9623C40 16.416 39.6126 16.8221 39.1062 16.8221H28.3298H26.9948L27.3701 18.1033L28.0708 20.4951C28.6429 20.1796 29.3005 20 30 20L30.0099 20L29.6648 18.8221H39.1062C40.683 18.8221 42 17.5545 42 15.9623C42 14.3702 40.683 13.1025 39.1062 13.1025H26.2161C27.9732 12.4075 29.2318 10.7117 29.2318 8.71967C29.2318 6.10461 27.0626 4 24.4443 4ZM33.8599 40.2552L30.267 27.9912C30.9642 27.9453 31.6126 27.7207 32.1669 27.3628L35.8279 39.859L35.8683 39.9967V40.1402C35.8683 41.7323 34.5512 43 32.9745 43C31.7127 43 30.7778 42.0524 30.1357 41.1311C29.4545 40.1536 28.87 38.8715 28.3743 37.5887C27.8743 36.295 27.4421 34.9397 27.0831 33.7919L26.9654 33.4151L26.9654 33.4151C26.77 32.789 26.6038 32.2566 26.4625 31.841H24.8295C24.5871 31.0389 24.0995 30.3432 23.454 29.841H24.1996H27.1577H27.8211L28.079 30.4523C28.3006 30.9776 28.5706 31.8438 28.8694 32.8024L28.8694 32.8024L28.9919 33.1948C29.3505 34.3412 29.7658 35.6411 30.2398 36.8678C30.7181 38.1055 31.2341 39.2093 31.7765 39.9876C32.358 40.8219 32.7699 41 32.9745 41C33.4376 41 33.8012 40.6603 33.8599 40.2552ZM17.7602 36.8678C17.8952 36.5186 18.0253 36.1634 18.1508 35.8075C18.6288 36.2925 19.2296 36.6561 19.9029 36.8477C19.813 37.0957 19.7206 37.3433 19.6257 37.5887C19.13 38.8715 18.5455 40.1536 17.8643 41.1311C17.2222 42.0524 16.2873 43 15.0255 43C13.4488 43 12.1318 41.7323 12.1318 40.1402V39.9967L12.1721 39.859L18.3352 18.8221H16.8347C17.3706 18.2839 17.7542 17.5938 17.9154 16.8221H19.6702H21.0052L20.6299 18.1033L14.1401 40.2552C14.1988 40.6603 14.5624 41 15.0255 41C15.2301 41 15.642 40.8219 16.2235 39.9876C16.7659 39.2093 17.2819 38.1055 17.7602 36.8678ZM11.1653 18.8221C10.6294 18.2839 10.2458 17.5938 10.0846 16.8221H8.89375C8.38736 16.8221 8 16.416 8 15.9623C8 15.5087 8.38736 15.1025 8.89375 15.1025H10.1011C10.2793 14.325 10.6842 13.6339 11.2424 13.1025H8.89375C7.31702 13.1025 6 14.3702 6 15.9623C6 17.5545 7.31702 18.8221 8.89375 18.8221H11.1653ZM21.6568 8.71967C21.6568 7.2431 22.8964 6 24.4443 6C25.9923 6 27.2318 7.2431 27.2318 8.71967C27.2318 10.1962 25.9923 11.4393 24.4443 11.4393C22.8964 11.4393 21.6568 10.1962 21.6568 8.71967Z" fill="#f59b00"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 18C15.1046 18 16 17.1046 16 16C16 14.8954 15.1046 14 14 14C12.8954 14 12 14.8954 12 16C12 17.1046 12.8954 18 14 18ZM14 20C16.2091 20 18 18.2091 18 16C18 13.7909 16.2091 12 14 12C11.7909 12 10 13.7909 10 16C10 18.2091 11.7909 20 14 20Z" fill="#f59b00"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M30 26C31.1046 26 32 25.1046 32 24C32 22.8954 31.1046 22 30 22C28.8954 22 28 22.8954 28 24C28 25.1046 28.8954 26 30 26ZM30 28C32.2091 28 34 26.2091 34 24C34 21.7909 32.2091 20 30 20C27.7909 20 26 21.7909 26 24C26 26.2091 27.7909 28 30 28Z" fill="#f59b00"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M21 35C22.1046 35 23 34.1046 23 33C23 31.8954 22.1046 31 21 31C19.8954 31 19 31.8954 19 33C19 34.1046 19.8954 35 21 35ZM21 37C23.2091 37 25 35.2091 25 33C25 30.7909 23.2091 29 21 29C18.7909 29 17 30.7909 17 33C17 35.2091 18.7909 37 21 37Z" fill="#f59b00"></path> </g></svg>
                                </div>
                                Symptômes:
                            </div>
                        </h3>`;
    sympttitle.className = "text-white";
    symptDiv.appendChild(sympttitle);
    symptDiv.className = "back-card text-white";
    let ul = document.createElement("ul");
    maladie.symptomes.forEach(s => {
      let li = document.createElement("li");
      li.textContent = s;
      ul.appendChild(li);
    });
    symptDiv.appendChild(ul);

    let transmissionDiv = document.createElement("div");
    transmissionDiv.className = "back-card p-3 text-white mt-4";
    transmissionDiv.innerHTML = `<h3 class="text-white text-center">
                            <div class="d-flex gap-2">
                                <div class="icon">
                                    <svg fill="#000000" viewBox="0 0 24 24" id="statistic-grow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="secondary" d="M21,20H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z" style="fill: #ffffff;"></path><path id="primary" d="M21,4H16a1,1,0,0,0,0,2h2.59L13.8,10.78,8.45,8.11a1,1,0,0,0-1.22.25l-5,6a1,1,0,0,0,.13,1.41A1,1,0,0,0,3,16a1,1,0,0,0,.77-.36l4.49-5.39,5.29,2.64a1,1,0,0,0,1.16-.18L20,7.41V10a1,1,0,0,0,2,0V5A1,1,0,0,0,21,4Z" style="fill: #ffae00;"></path></g></svg>
                                </div>
                                Transmission:
                            </div>
                        </h3><div class="px-3">${maladie.transmission}</div>`;

    let especeDiv = document.createElement("div");
    especeDiv.className = "back-card espece p-3 text-white mt-4";
    let especeTitle=document.createElement("div");
    especeTitle.className = "text-white";
    especeTitle.innerHTML=`<h3 class="text-center text-white">
                            <div class="d-flex gap-2">
                                <div class="icon">
                                    <svg fill="#f08c00" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#f08c00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>snail</title> <path d="M1.221 28.025l0-0h-0zM29.977 6.142c-0.645 0-1.167 0.523-1.167 1.167 0 0.131 0.022 0.256 0.061 0.373-1.668 0.652-1.334 3.814-1.096 6.786-0.935 0.84-2.005 0.732-2.951-0.51-0.118-3.108-0.909-7.165 0.579-8.373-0.013 0.071-0.021 0.143-0.021 0.218 0 0.645 0.523 1.167 1.167 1.167s1.167-0.523 1.167-1.167c0-0.645-0.523-1.167-1.167-1.167-0.447 0-0.836 0.252-1.032 0.621-2.31 0.365-1.593 4.532-1.376 7.961-0.11 1.808-0.538 3.444-1.185 4.836-0.501-3.708-2.678-7.067-4.693-8.758-3.902-3.274-9.376-2.96-13.18 0.429s-3.976 9.618-0.608 13.39c0.531 0.529 1.141 0.941 1.8 1.24-2.423 0.999-4.281 2.333-5.055 3.669h20.072c6.113 0 8.38-6.077 7.17-12.98-0.206-2.8-0.624-5.931 0.567-7.054 0.212 0.294 0.557 0.486 0.948 0.486 0.645 0 1.167-0.523 1.167-1.167s-0.523-1.167-1.167-1.167z"></path> </g></svg>
                                </div>
                                Espèce affecter:
                            </div>
                        </h3>`
    especeDiv.appendChild(especeTitle);
    let ulEspece = document.createElement("ul");
    maladie.especes.forEach(e => {
      let li = document.createElement("li");
      li.textContent = e;
      ulEspece.appendChild(li);
    });
    especeDiv.appendChild(ulEspece);

    let traitementDiv = document.createElement("div");
    traitementDiv.className = "back-card traitement p-3 text-white mt-4";
    traitementDiv.innerHTML = `<h3 class="text-center text-white">
                            <div class="d-flex gap-2">
                                <div class="icon">
                                    <svg viewBox="0 0 2050 2050" data-name="Layer 3" id="Layer_3" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:#fb9d18;}.cls-2{fill:#fb9d18;}.cls-3{fill:#fb9d18;}.cls-4{fill:#fb9d18;}</style></defs><title></title><path class="cls-1" d="M1455.3,692.2c0-121.7-69.4-220.3-155-220.3s-155,98.6-155,220.3c0,87.9,36.3,163.9,88.8,199.1,27.7,18.6,43.8,50.1,41.9,83.3l-30.3,533a54.7,54.7,0,0,0,54.6,57.8h0a54.7,54.7,0,0,0,54.6-57.8l-30.3-533c-1.9-33.2,14.2-64.7,41.9-83.3C1419,856.1,1455.3,780.1,1455.3,692.2Z"></path><rect class="cls-2" height="40.86" width="350.8" x="627.1" y="574.8"></rect><path class="cls-2" d="M575.5,1475.5V973.1A161.4,161.4,0,0,1,686.7,819.7h-55A161.5,161.5,0,0,0,520.4,973.1v502.4a89.8,89.8,0,0,0,89.9,89.9h55A89.8,89.8,0,0,1,575.5,1475.5Z"></path><rect class="cls-3" height="114.17" width="29" x="693.8" y="501.5"></rect><rect class="cls-3" height="114.17" width="29" x="788" y="501.5"></rect><rect class="cls-3" height="114.17" width="29" x="882.3" y="501.5"></rect><rect class="cls-3" height="29.03" width="564.2" x="520.4" y="966.8"></rect><rect class="cls-3" height="29.03" width="564.2" x="520.4" y="1406.4"></rect><polygon class="cls-3" points="826.2 1186.9 826.2 1139.5 778.8 1139.5 778.8 1186.9 731.5 1186.9 731.5 1234.3 778.8 1234.3 778.8 1281.6 826.2 1281.6 826.2 1234.3 873.6 1234.3 873.6 1186.9 826.2 1186.9"></polygon><path class="cls-2" d="M1300.3,852.4c-28.8,0-50.3-24.5-60.5-39-21.9-31.2-34.5-75.3-34.5-121.2s12.6-90.1,34.5-121.2c10.2-14.6,31.7-39.1,60.5-39.1s50.2,24.5,60.5,39.1c21.9,31.1,34.5,75.3,34.5,121.2s-12.6,90-34.5,121.2C1350.5,827.9,1329,852.4,1300.3,852.4Z"></path><path class="cls-3" d="M1300.3,857.4c-25.4,0-45.3-17.4-57.5-31.9a4.9,4.9,0,0,1,.6-7,5.1,5.1,0,0,1,7.1.6c10.8,12.9,28.2,28.3,49.8,28.3,13.5,0,26.9-6,39.9-17.9a5,5,0,0,1,7,.3,5,5,0,0,1-.3,7.1C1332.1,850.5,1316.4,857.4,1300.3,857.4Zm78.2-71.7a5.8,5.8,0,0,1-1.9-.3,5,5,0,0,1-2.7-6.6,217.3,217.3,0,0,0,14.9-60,5,5,0,0,1,10,1,228.7,228.7,0,0,1-15.7,62.8A4.9,4.9,0,0,1,1378.5,785.7Zm-161.6-14.1a5,5,0,0,1-4.8-3.5,245.1,245.1,0,0,1-11.5-63.6,5,5,0,0,1,10-.5,228.7,228.7,0,0,0,11,61,4.9,4.9,0,0,1-3.2,6.3A4,4,0,0,1,1216.9,771.6Zm175.7-110.7a4.9,4.9,0,0,1-4.9-4.2,212.8,212.8,0,0,0-17.4-59.4,5,5,0,0,1,9-4.2,221.1,221.1,0,0,1,18.3,62.1,5,5,0,0,1-4.2,5.7Zm-182-14.8h-1a5,5,0,0,1-3.9-5.9c4.8-22.6,12.5-43.1,22.8-60.8a5.1,5.1,0,0,1,6.8-1.8,5.1,5.1,0,0,1,1.8,6.9c-9.6,16.5-17.1,36.5-21.6,57.7A5,5,0,0,1,1210.6,646.1Zm125.9-95.9a4.9,4.9,0,0,1-3-1c-10.8-8.1-22-12.3-33.2-12.3a50.2,50.2,0,0,0-21.3,5,5,5,0,1,1-4.2-9,58.5,58.5,0,0,1,25.5-6c13.4,0,26.6,4.8,39.2,14.3a5,5,0,0,1,1,7A4.8,4.8,0,0,1,1336.5,550.2Z"></path><path class="cls-4" d="M1300.3,1579.9a69.3,69.3,0,0,1-69.1-73.1l30.3-533c1.6-27.7-12-54.6-35.5-70.4-28.4-19.1-52.3-48.8-69.2-85.9s-26-80.8-26-125.3c0-61.8,17.1-120.1,48-164.1,32.1-45.6,75.2-70.7,121.5-70.7s89.4,25.1,121.4,70.7c31,44,48.1,102.3,48.1,164.1,0,44.5-9,87.9-26,125.3s-40.8,66.8-69.2,85.9c-23.5,15.8-37.1,42.7-35.6,70.4l30.3,533a69.1,69.1,0,0,1-69,73.1Zm0-1093.5c-36.5,0-71.2,20.8-97.7,58.4-27.6,39.2-42.8,91.5-42.8,147.4,0,80,32.4,153.5,82.4,187.1,32,21.5,50.5,58.3,48.3,96.1l-30.3,533a40.2,40.2,0,1,0,80.2,0l-30.3-533c-2.2-37.8,16.3-74.6,48.3-96.1,50-33.6,82.4-107.1,82.4-187.1,0-55.9-15.2-108.2-42.8-147.4C1371.5,507.2,1336.8,486.4,1300.3,486.4Z"></path><path class="cls-3" d="M802.5,1380.9a169.7,169.7,0,0,1-58.3-10.3,4.9,4.9,0,0,1-3-6.4,5,5,0,0,1,6.4-3,158,158,0,0,0,54.9,9.7h5.6a5,5,0,0,1,.3,10Zm67.2-14.2a4.9,4.9,0,0,1-4.5-3,5,5,0,0,1,2.5-6.6,159.3,159.3,0,0,0,50.1-35.1,5,5,0,0,1,7.1-.1,4.8,4.8,0,0,1,.1,7,168.5,168.5,0,0,1-53.2,37.3A5.4,5.4,0,0,1,869.7,1366.7Zm-177.9-28.3a5.1,5.1,0,0,1-3.3-1.3,171.9,171.9,0,0,1-39.2-52,5,5,0,1,1,9-4.4,159.4,159.4,0,0,0,36.9,48.9,5,5,0,0,1,.3,7.1A5,5,0,0,1,691.8,1338.4Zm264.1-60.9a5.8,5.8,0,0,1-1.9-.3,5,5,0,0,1-2.8-6.5,158.1,158.1,0,0,0,11.7-60.1,163,163,0,0,0-1.5-22.1,5,5,0,1,1,9.9-1.3,181.5,181.5,0,0,1,1.6,23.4,169.7,169.7,0,0,1-12.4,63.8A4.9,4.9,0,0,1,955.9,1277.5ZM637.6,1227a5.1,5.1,0,0,1-5-4.7c-.3-3.9-.4-7.8-.4-11.7a169.2,169.2,0,0,1,8.4-52.9,5,5,0,0,1,6.3-3.2,5.1,5.1,0,0,1,3.2,6.3,158.2,158.2,0,0,0-7.9,49.8c0,3.6.1,7.4.4,11a4.9,4.9,0,0,1-4.7,5.3Zm308.3-93.9a5,5,0,0,1-4.3-2.5,161.8,161.8,0,0,0-40.2-46.2,5.2,5.2,0,0,1-.8-7.1,5,5,0,0,1,7-.8,169.8,169.8,0,0,1,42.6,49.1,5.1,5.1,0,0,1-1.8,6.9A5.7,5.7,0,0,1,945.9,1133.1Zm-269.9-24a4.8,4.8,0,0,1-3.2-1.1,5.1,5.1,0,0,1-.6-7.1,171.1,171.1,0,0,1,50.6-40.9,5,5,0,0,1,4.6,8.9,160.8,160.8,0,0,0-47.6,38.5A5.2,5.2,0,0,1,676,1109.1Zm172.4-52.4-1.4-.2a159,159,0,0,0-44.5-6.3h0a150.7,150.7,0,0,0-16.5.9,5,5,0,0,1-5.5-4.5,5,5,0,0,1,4.5-5.5,170.9,170.9,0,0,1,17.5-.9h0a169.8,169.8,0,0,1,47.2,6.7,5,5,0,0,1,3.5,6.1A5.2,5.2,0,0,1,848.4,1056.7Z"></path><path class="cls-4" d="M994.8,1579.9H610.3a104.5,104.5,0,0,1-104.4-104.4V973.1c0-92.1,71.2-167.9,161.4-175.3V615.7a14.5,14.5,0,0,1,14.5-14.5H923.3a14.5,14.5,0,0,1,14.5,14.5V797.8c90.2,7.4,161.4,83.2,161.4,175.3v502.4A104.5,104.5,0,0,1,994.8,1579.9ZM696.3,630.2V811.7a14.5,14.5,0,0,1-14.5,14.5c-81,0-146.9,65.9-146.9,146.9v502.4a75.5,75.5,0,0,0,75.4,75.4H994.8a75.4,75.4,0,0,0,75.3-75.4V973.1c0-81-65.8-146.9-146.8-146.9a14.5,14.5,0,0,1-14.5-14.5V630.2Z"></path><path class="cls-3" d="M978,630.2H627.1a14.5,14.5,0,0,1-14.5-14.5V501.5A14.5,14.5,0,0,1,627.1,487H978a14.5,14.5,0,0,1,14.5,14.5V615.7A14.5,14.5,0,0,1,978,630.2Zm-336.4-29H963.4V516H641.6Z"></path></g></svg>
                                </div>
                                Traitements:
                            </div>
                        </h3><div class="px-3">${maladie.traitements}</div>`;

    let preventionDiv = document.createElement("div");
    preventionDiv.className = "back-card prevention p-3 text-white mt-4";
    preventionDiv.innerHTML = `<h3 class="text-center text-white">
                            <div class="d-flex gap-2">
                                <div class="icon">
                                    <svg fill="#ffffff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Antivirus"> <path d="M249.1646,34.1932,69.1917,91.6015A22.5422,22.5422,0,0,0,53.5,113.0776v135.154A207.53,207.53,0,0,0,161.46,430.3155l83.7517,45.7981a22.4855,22.4855,0,0,0,21.576,0l83.7558-45.7983A207.5144,207.5144,0,0,0,458.5,248.2431V113.0155A22.4573,22.4573,0,0,0,442.8675,91.62L262.8354,34.1932A22.4922,22.4922,0,0,0,249.1646,34.1932Zm81.2919,234.0905c.2286.0758.4659.0417.69.1351l22.57,9.3494,1.1338-2.74a9.9026,9.9026,0,1,1,18.2988,7.5761l-4.9175,11.8719c-.0044.0066,0,.0132-.0044.02l-.0131.0231-4.9175,11.8685a9.9026,9.9026,0,0,1-18.2989-7.5761l1.1382-2.7466L323.57,286.7176c-.2285-.0945-.3691-.2856-.5845-.3933A76.7719,76.7719,0,0,1,294.32,315.003c.1055.2132.2944.3538.3867.5779l9.3472,22.5659,2.7466-1.1382a9.9026,9.9026,0,0,1,7.5762,18.2989l-11.8741,4.92c-.0088.0022-.0088.0088-.0175.011a.1557.1557,0,0,0-.022.0044l-11.87,4.9175a9.9026,9.9026,0,0,1-7.5762-18.2988l2.7378-1.1349-9.3472-22.5692c-.0923-.2219-.0571-.4549-.1318-.679a76.7627,76.7627,0,0,1-40.5484-.011c-.0747.2286-.0439.4637-.1362.69l-9.3472,22.5659,2.7466,1.1382A9.9026,9.9026,0,1,1,221.415,365.16l-11.87-4.9153c-.0132-.0044-.022-.0022-.0308-.0066s-.0131-.0121-.0263-.0153l-11.8653-4.9153a9.9026,9.9026,0,0,1,7.5762-18.2989l2.7466,1.1371,9.3472-22.5648c.0966-.2274.2856-.37.3955-.5867A76.7432,76.7432,0,0,1,189.01,286.3276c-.2154.1066-.356.2966-.58.39l-22.5659,9.3494,1.1382,2.7444a9.9026,9.9026,0,1,1-18.2989,7.5761l-9.8525-23.7832a9.9026,9.9026,0,1,1,18.2988-7.5761l1.1338,2.7422,22.57-9.3516c.2241-.0923.457-.0571.6856-.1318a76.7436,76.7436,0,0,1,.0088-40.5462c-.2286-.0758-.4659-.045-.6944-.1384l-22.5659-9.345-1.1382,2.7444a9.9026,9.9026,0,1,1-18.2988-7.5762l9.8525-23.792A9.9026,9.9026,0,0,1,167.002,197.21l-1.1382,2.7488,22.5659,9.345c.2285.0944.3735.2878.5889.3966a76.76,76.76,0,0,1,28.6347-28.66c-.1054-.2131-.268-.3768-.36-.6l-9.3516-22.5637-2.7422,1.1359a9.9026,9.9026,0,1,1-7.5762-18.2988l23.792-9.8525a9.9026,9.9026,0,0,1,7.5762,18.2988l-2.751,1.1382,9.3516,22.5659c.0923.2241.0571.4592.1318.6856a76.7639,76.7639,0,0,1,40.5484.01c.0747-.23.04-.4669.1362-.6954L285.76,150.296l-2.7422-1.136a9.9026,9.9026,0,1,1,7.5762-18.2988l23.7832,9.8525a9.9026,9.9026,0,1,1-7.5762,18.2988l-2.7422-1.1359L294.707,180.44c-.0923.2263-.2592.3922-.3691.6075A76.7537,76.7537,0,0,1,322.99,209.6936c.2154-.1066.356-.2978.58-.39l22.5659-9.3428-1.1382-2.751a9.9026,9.9026,0,0,1,18.2989-7.5762l4.9219,11.8905c.0043.0033.0087.0055.0087.01v.011l4.9219,11.8806a9.9026,9.9026,0,1,1-18.2988,7.5762l-1.1338-2.7422-22.57,9.3428c-.2241.0923-.457.0615-.6812.1362A76.7844,76.7844,0,0,1,330.4565,268.2837Z"></path> </g> </g></svg>
                                </div>
                                Prévention:
                            </div>
                        </h3><div class="px-3">${maladie.prevention}</div>`;

    cardBack.appendChild(backTitle);
    cardBack.appendChild(backAgent);
    cardBack.appendChild(symptDiv);
    cardBack.appendChild(transmissionDiv);
    cardBack.appendChild(especeDiv);
    cardBack.appendChild(traitementDiv);
    cardBack.appendChild(preventionDiv);

    snailFlip.appendChild(cardFront);
    snailFlip.appendChild(cardBack);
    flipCard.appendChild(snailFlip);
    snailGrid.appendChild(flipCard);


    // flipCard.addEventListener("click", () => {
    //   snailFlip.classList.toggle("is-flipped");
    // });
  });
}
carteGenerator();
    document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.snail-flip').classList.toggle('is-flipped');
  });
});
