let snails = [
  {
    nom: "Escargot de Bourgogne",
    scientifique: "Helix pomatia",
    statut: "danger",
    dataStatut: "En danger",
    habitat: "Europe centrale, jardins humides, forêts calcaires",
    dataHabitat: "Terrestre",
    taille: "4-5 cm de diamètre",
    vitesse: "0.03 km/h (très lent)",
    alimentation: "Herbivore - feuilles mortes, plantes, champignons",
    dureeVie: "5-10 ans en nature, jusqu'à 20 ans en captivité",
    particularite: "Hiberne en hiver avec un opercule calcaire. Utilisé en gastronomie depuis l'époque romaine.",
    description: "Espèce emblématique de la gastronomie française, très prisée pour sa chair délicate.",
    image: "./assets/image/escargot/helix_pomatia.webp"
  },
  {
    nom: "Escargot géant africain",
    scientifique: "Achatina achatina",
    statut: "quasi-menace",
    dataStatut: "Quasi menacé",
    habitat: "Afrique de l’Ouest, milieux tropicaux humides",
    dataHabitat: "Tropical",
    taille: "Jusqu’à 20 cm de longueur",
    vitesse: "0.02 km/h",
    alimentation: "Herbivore - feuilles, fruits, légumes",
    dureeVie: "5-7 ans",
    particularite: "Considéré comme nuisible agricole, mais utilisé en élevage et recherche.",
    description: "Le plus grand escargot terrestre connu, célèbre pour sa taille impressionnante.",
    image: "./assets/image/Achatina achatina.webp"
  },
  {
    nom: "Petit-gris",
    scientifique: "Cornu aspersum",
    statut: "vulnerable",
    dataStatut: "Vulnérable",
    habitat: "Europe, zones urbaines et jardins",
    dataHabitat: "Terrestre",
    taille: "2.5-4 cm de diamètre",
    vitesse: "0.03 km/h",
    alimentation: "Herbivore - plantes, légumes, fruits",
    dureeVie: "2-5 ans",
    particularite: "Espèce la plus utilisée en héliciculture (élevage d’escargots).",
    description: "Très répandu en Europe, il est l’espèce la plus consommée dans les élevages d’escargots.",
    image: "./assets/image/escargot/Cornu_aspersum.webp"
  },
  {
    nom: "Escargot des bois",
    scientifique: "Cepaea nemoralis",
    statut: "preoccupation-mineur",
    dataStatut: "Préoccupation mineure",
    habitat: "Europe, forêts et prairies",
    dataHabitat: "Terrestre",
    taille: "2-3 cm de diamètre",
    vitesse: "0.03 km/h",
    alimentation: "Herbivore - végétaux, feuilles",
    dureeVie: "3-6 ans",
    particularite: "Coquille très variable en couleur (brun, jaune, rayée).",
    description: "Reconnaissable à sa coquille colorée et rayée, il est souvent étudié pour la diversité de ses motifs.",
    image: "./assets/image/escargot/Cepaea_nemoralis.webp"
  },
  {
    nom: "Escargot marin commun",
    scientifique: "Littorina littorea",
    statut: "preoccupation-mineur",
    dataStatut: "Préoccupation mineure",
    habitat: "Côtes atlantiques, zones rocheuses marines",
    dataHabitat: "Marin",
    taille: "1-2 cm de diamètre",
    vitesse: "0.05 km/h",
    alimentation: "Herbivore - algues et micro-végétaux marins",
    dureeVie: "2-3 ans",
    particularite: "Très répandu sur les côtes, utilisé en gastronomie sous le nom de 'bigorneau'.",
    description: "Petit escargot marin apprécié dans certaines cuisines régionales.",
    image: "./assets/image/escargot/Littorina_littorea.webp"
  },
  {
    nom: "Escargot des rizières",
    scientifique: "Pomacea canaliculata",
    statut: "invasif",
    dataStatut: "invasif",
    habitat: "Asie du Sud-Est, zones aquatiques et rizières",
    dataHabitat: "aquatique",
    taille: "5-7 cm de diamètre",
    vitesse: "0.04 km/h",
    alimentation: "Herbivore - plantes aquatiques, jeunes pousses de riz",
    dureeVie: "3-5 ans",
    particularite: "Espèce invasive nuisible aux cultures de riz.",
    description: "Escargot aquatique originaire d’Amérique du Sud, introduit en Asie où il cause de graves dégâts agricoles.",
    image: "./assets/image/escargot/Pomacea_canaliculata.webp"
  },
  {
    nom: "Escargot des montagnes",
    scientifique: "Helix lucorum",
    statut: "vulnerable",
    dataStatut: "Vulnérable",
    habitat: "Régions montagneuses d’Europe et du Caucase",
    dataHabitat: "Terrestre",
    taille: "4-6 cm de diamètre",
    vitesse: "0.03 km/h",
    alimentation: "Herbivore - plantes, champignons",
    dureeVie: "6-10 ans",
    particularite: "Espèce proche de l’escargot de Bourgogne, également consommée.",
    description: "Escargot terrestre des régions montagneuses, apprécié pour sa chair.",
    image: "./assets/image/escargot/Helix_lucorum.webp"
  },
  {
    nom: "Escargot des dunes",
    scientifique: "Sphincterochila boissieri",
    statut: "preoccupation-mineur",
    dataStatut: "Préoccupation mineure",
    habitat: "Déserts du Moyen-Orient",
    dataHabitat: "Désert",
    taille: "3-4 cm de diamètre",
    vitesse: "0.02 km/h",
    alimentation: "Herbivore - plantes résistantes à la sécheresse",
    dureeVie: "5-8 ans",
    particularite: "Capable de survivre à des températures extrêmes grâce à une coquille épaisse.",
    description: "Escargot désertique adapté aux environnements arides.",
    image: "./assets/image/escargot/Sphincterochila_boissieri.webp"
  },
  {
    nom: "Escargot d’eau douce",
    scientifique: "Planorbarius corneus",
    statut: "preoccupation-mineur",
    dataStatut: "Préoccupation mineure",
    habitat: "Lacs et rivières d’Europe",
    dataHabitat: "Eau douce",
    taille: "2-3 cm de diamètre",
    vitesse: "0.04 km/h",
    alimentation: "Herbivore - algues et plantes aquatiques",
    dureeVie: "1-3 ans",
    particularite: "Coquille enroulée en spirale plate, très commune dans les aquariums.",
    description: "Escargot aquatique d’eau douce, utile pour nettoyer les algues.",
    image: "./assets/image/escargot/Planorbarius_corneus.webp"
  },
  {
    nom: "Escargot marin turbo",
    scientifique: "Turbo fluctuosus",
    statut: "vulnerable",
    dataStatut: "Vulnérable",
    habitat: "Océans tropicaux, récifs coralliens",
    dataHabitat: "Marin",
    taille: "5-7 cm de diamètre",
    vitesse: "0.05 km/h",
    alimentation: "Herbivore - algues marines",
    dureeVie: "5-6 ans",
    particularite: "Coquille épaisse et nacrée, très recherchée pour l’artisanat.",
    description: "Escargot marin des récifs coralliens, menacé par la collecte excessive.",
    image: "./assets/image/escargot/Turbo_fluctuosus.webp"
  },
  {
    nom: "Escargot tropical décoratif",
    scientifique: "Neritina natalensis",
    statut: "preoccupation-mineur",
    dataStatut: "Préoccupation mineure",
    habitat: "Rivières tropicales d’Afrique",
    dataHabitat: "Tropical",
    taille: "2-3 cm de diamètre",
    vitesse: "0.04 km/h",
    alimentation: "Herbivore - algues",
    dureeVie: "1-2 ans",
    particularite: "Très populaire en aquariophilie pour sa coquille colorée.",
    description: "Petit escargot tropical d’eau douce, apprécié dans les aquariums.",
    image: "./assets/image/escargot/Neritina_natalensis.webp"
  },
  {
    nom: "Escargot géant africain marginata",
    scientifique: "Achatina marginata",
    statut: "quasi-menace",
    dataStatut: "Quasi menacé",
    habitat: "Afrique centrale et de l’Ouest",
    dataHabitat: "Tropical",
    taille: "12-15 cm de longueur",
    vitesse: "0.02 km/h",
    alimentation: "Herbivore - fruits, légumes, plantes",
    dureeVie: "5-10 ans",
    particularite: "Très répandu en élevage, proche de Achatina achatina.",
    description: "Espèce tropicale robuste, souvent élevée pour l’alimentation.",
    image: "./assets/image/escargot/Achatina_marginata.webp"
  },
  {
    nom: "Escargot géant africain fulica",
    scientifique: "Achatina fulica",
    statut: "invasif",
    dataStatut: "invasif",
    habitat: "Afrique, Asie, zones tropicales",
    dataHabitat: "Tropical",
    taille: "10-12 cm de longueur",
    vitesse: "0.02 km/h",
    alimentation: "Herbivore - végétaux, fruits",
    dureeVie: "5-7 ans",
    particularite: "Espèce invasive, prolifère rapidement.",
    description: "Escargot tropical invasif, considéré nuisible pour l’agriculture.",
    image: "./assets/image/escargot/Achatina_fulica.webp"
  },
  {
    nom: "Escargot albinos géant africain",
    scientifique: "Achatina albino",
    statut: "preoccupation-mineur",
    dataStatut: "Préoccupation mineure",
    habitat: "Afrique tropicale",
    dataHabitat: "Tropical",
    taille: "10-15 cm de longueur",
    vitesse: "0.02 km/h",
    alimentation: "Herbivore - fruits, légumes",
    dureeVie: "5-8 ans",
    particularite: "Variété albinos rare, très prisée en élevage.",
    description: "Escargot tropical albinos, remarquable par sa coquille claire.",
    image: "./assets/image/escargot/Achatina_albino.webp"
  },
  {
    nom: "Escargot des marais",
    scientifique: "Lymnaea stagnalis",
    statut: "preoccupation-mineur",
    dataStatut: "Préoccupation mineure",
    habitat: "Eaux douces d’Europe et d’Asie",
    dataHabitat: "Eau douce",
    taille: "3-6 cm de longueur",
    vitesse: "0.04 km/h",
    alimentation: "Herbivore - algues, plantes aquatiques",
    dureeVie: "1-3 ans",
    particularite: "Espèce modèle en recherche scientifique.",
    description: "Escargot d’eau douce utilisé en neurobiologie.",
    image: "./assets/image/escargot/Lymnaea_stagnalis.webp"
  },
  {
    nom: "Escargot des sables",
    scientifique: "Theba pisana",
    statut: "invasif",
    dataStatut: "invasif",
    habitat: "Zones côtières méditerranéennes",
    dataHabitat: "Terrestre",
    taille: "1-2 cm de diamètre",
    vitesse: "0.03 km/h",
    alimentation: "Herbivore - plantes",
    dureeVie: "2-3 ans",
    particularite: "Espèce invasive nuisible aux cultures.",
    description: "Petit escargot terrestre proliférant dans les zones chaudes.",
    image: "./assets/image/escargot/Theba_pisana.webp"
  },
  {
    nom: "Escargot marin nacré",
    scientifique: "Haliotis tuberculata",
    statut: "vulnerable",
    dataStatut: "Vulnérable",
    habitat: "Côtes atlantiques et méditerranéennes",
    dataHabitat: "Marin",
    taille: "5-10 cm de longueur",
    vitesse: "0.05 km/h",
    alimentation: "Herbivore - algues marines",
    dureeVie: "5-10 ans",
    particularite: "Coquille nacrée utilisée en artisanat.",
    description: "Escargot marin connu sous le nom d’ormeau.",
    image: "./assets/image/escargot/Haliotis_tuberculata.webp"
  },
  {
    nom: "Escargot des sources chaudes",
    scientifique: "Melanoides tuberculata",
    statut: "invasif",
    dataStatut: "invasif",
    habitat: "Eaux douces tropicales",
    dataHabitat: "Aquatique",
    taille: "2-3 cm de longueur",
    vitesse: "0.04 km/h",
    alimentation: "Herbivore - algues",
    dureeVie: "1-2 ans",
    particularite: "Espèce invasive en aquariophilie.",
    description: "Escargot aquatique proliférant dans les aquariums.",
    image: "./assets/image/escargot/Melanoides_tuberculata.webp"
  },
  {
    nom: "Escargot des montagnes Rocheuses",
    scientifique: "Oreohelix strigosa",
    statut: "danger",
    dataStatut: "En danger",
    habitat: "Montagnes Rocheuses, Amérique du Nord",
    dataHabitat: "Terrestre",
    taille: "2-3 cm de diamètre",
    vitesse: "0.03 km/h",
    alimentation: "Herbivore - végétaux",
    dureeVie: "3-5 ans",
    particularite: "Espèce endémique menacée par la destruction de son habitat.",
    description: "Escargot terrestre rare des montagnes nord-américaines.",
    image: "./assets/image/escargot/Oreohelix_strigosa.webp"
  },
  {
    nom: "Escargot des mangroves",
    scientifique: "Cerithidea obtusa",
    statut: "preoccupation-mineur",
    dataStatut: "Préoccupation mineure",
    habitat: "Mangroves d’Asie du Sud-Est",
    dataHabitat: "Aquatique",
    taille: "3-5 cm de longueur",
    vitesse: "0.04 km/h",
    alimentation: "Herbivore - algues et débris végétaux",
    dureeVie: "2-4 ans",
    particularite: "Adapté aux zones intertidales.",
    description: "Escargot aquatique vivant dans les mangroves.",
    image: "./assets/image/escargot/Cerithidea_obtusa.webp"
  },
  {
    nom: "Escargot des forêts tropicales",
    scientifique: "Amphidromus perversus",
    statut: "vulnerable",
    dataStatut: "Vulnérable",
    habitat: "Forêts tropicales d’Asie du Sud-Est",
    dataHabitat: "Tropical",
    taille: "4-6 cm de diamètre",
    vitesse: "0.03 km/h",
    alimentation: "Herbivore - feuilles et fruits",
    dureeVie: "3-6 ans",
    particularite: "Coquille spiralée unique, parfois inversée.",
    description: "Escargot tropical coloré, rare et recherché par les collectionneurs.",
    image: "./assets/image/escargot/Amphidromus_perversus.webp"
  }
];

let number=document.getElementById("number");
let i=0;
setInterval(()=>{
    if(i<=snails.length){
        number.textContent=i;
        i++;
    }
},110)
let snailGrid=document.querySelector(".snail-grid");
let msg=document.getElementById("msg");
msg.textContent=`${snails.length} escargots trouvés.`;
function carteGenerator(){
    snails.forEach((snail,index)=>{
        let snailFlip=document.createElement("div");
        snailFlip.className="snail-flip";
        let flipCard=document.createElement("div");
        flipCard.className="flip-card";
        let snailCardFront=document.createElement("div");
        snailCardFront.className="snail-card front";
        let absolute=document.createElement("div");
        absolute.className="absolute";
        let statut=document.createElement("div");
        statut.className=`statut ${snail.statut}`;
        statut.textContent=snail.statut;
        let parentImg=document.createElement("div");
        parentImg.className="parentImg";
        let imgBanner=document.createElement("img");
        imgBanner.src=snail.image;
        let absoluteEnfant=document.createElement("div");
        absoluteEnfant.className="absolute-enfant";
        let cardTitle=document.createElement("h3");
        cardTitle.textContent=snail.nom;
        let cardScientifiqueName=document.createElement("p");
        cardScientifiqueName.textContent=snail.scientifique;
        let px=document.createElement("div");
        px.className="px";
        let cardDesc=document.createElement("div");
        cardDesc.textContent=snail.description;
        cardDesc.className="card-desc"
        let habitat=document.createElement("div");
        habitat.className="habitat";
        habitat.textContent=snail.habitat;
        let info=document.createElement("p");
        info.className="info";
        info.textContent="Cliquer pour plus d'info ";
        let snailCardBack=document.createElement("div");
        snailCardBack.className="snail-card back";
        let description=document.createElement("div");
        description.className="description";
        let backTitle=document.createElement("h1");
        backTitle.textContent=snail.nom;
        let backLabelScient=document.createElement("h4");
        backLabelScient.textContent="Nom scientifique:";
        let backTitleScient=document.createElement("p");
        backTitleScient.textContent=snail.scientifique;
        let cardDetail=document.createElement("div");
        cardDetail.className="detail-card";

        let flexIcon1=document.createElement("div");
        flexIcon1.className="d-flex gap-2";

        let iconDiv=document.createElement("div");
        iconDiv.className="icon";
        iconDiv.innerHTML=`<svg fill="#faf5f5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#faf5f5"><path d="M12,2a8,8,0,0,0-8,8c0,5.4,7,11.5,7.35,11.76l.65.56.65-.56C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,12a4,4,0,1,1,4-4A4,4,0,0,1,12,14Z"></path><circle cx="12" cy="10" r="2"></circle></svg>`;
        flexIcon1.appendChild(iconDiv);

        let habitatBack1=document.createElement("h4");
        habitatBack1.textContent="Habitat:";
        flexIcon1.appendChild(habitatBack1);

        cardDetail.appendChild(flexIcon1);

        let habitatBack1Title=document.createElement("p");
        habitatBack1Title.textContent=snail.habitat;
        cardDetail.appendChild(habitatBack1Title);

        description.appendChild(cardDetail);

        let cardDetail2=document.createElement("div");
        cardDetail2.className="detail-card";

        let flexIcon2=document.createElement("div");
        flexIcon2.className="d-flex gap-2";

        let iconDiv2=document.createElement("div");
        iconDiv2.className="icon";
        iconDiv2.innerHTML=`<svg width="81px" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path d="M5.636 14.124L7.05 15.538M8.464 11.295L9.879 12.71M11.293 8.467L12.707 9.881M14.121 5.639L15.536 7.053M2.808 16.952L7.05 21.195L21.192 7.053L16.95 2.81L2.808 16.952Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        flexIcon2.appendChild(iconDiv2);

        let tailleBack=document.createElement("h4");
        tailleBack.textContent="Taille:";
        flexIcon2.appendChild(tailleBack);

        cardDetail2.appendChild(flexIcon2);

        let tailleBackTitle=document.createElement("p");
        tailleBackTitle.textContent=snail.taille;
        cardDetail2.appendChild(tailleBackTitle);

        description.appendChild(cardDetail2);
        let cardDetail3=document.createElement("div");
        cardDetail3.className="detail-card";

        let flexIcon3=document.createElement("div");
        flexIcon3.className="d-flex gap-2";

        let iconDiv3=document.createElement("div");
        iconDiv3.className="icon";
        iconDiv3.innerHTML=`<svg viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.665 2.742C5.995 1.705 6.959 1 8.047 1H13.176C14.97 1 16.181 2.835 15.474 4.485L13.967 8H18.24C20.488 8 21.594 10.735 19.978 12.298L9.431 22.493C8.253 23.631 6.364 22.329 7.009 20.824L9.934 14H5.502C3.81 14 2.606 12.354 3.119 10.742L5.665 2.742Z" fill="#fff5f5"/></svg>`;
        flexIcon3.appendChild(iconDiv3);

        let vitesseBack=document.createElement("h4");
        vitesseBack.textContent="Vitesse:";
        flexIcon3.appendChild(vitesseBack);

        cardDetail3.appendChild(flexIcon3);

        let vitesseBackTitle=document.createElement("p");
        vitesseBackTitle.textContent=snail.vitesse;
        cardDetail3.appendChild(vitesseBackTitle);

        description.appendChild(cardDetail3);

        let cardDetail4=document.createElement("div");
        cardDetail4.className="detail-card";

        let flexIcon4=document.createElement("div");
        flexIcon4.className="d-flex gap-2";

        let iconDiv4=document.createElement("div");
        iconDiv4.className="icon";
        iconDiv4.innerHTML=`<svg fill="#fdf7f7" viewBox="0 -24.48 122.88 122.88"><path d="M97.31,36.95c0,9.92-3.49,18.39-10.48,25.38c-7,7-15.46,10.5-25.38,10.5c-9.88,0-18.34-3.49-25.35-10.5c-7-6.99-10.52-15.46-10.52-25.38c0-9.89,3.51-18.32,10.52-25.34c7.03-7,15.48-10.52,25.35-10.52c9.92,0,18.38,3.51,25.38,10.52C93.81,18.63,97.31,27.06,97.31,36.95z"/></svg>`;
        flexIcon4.appendChild(iconDiv4);

        let alimBack=document.createElement("h4");
        alimBack.textContent="Alimentation:";
        flexIcon4.appendChild(alimBack);

        cardDetail4.appendChild(flexIcon4);

        let alimBackTitle=document.createElement("p");
        alimBackTitle.textContent=snail.alimentation;
        cardDetail4.appendChild(alimBackTitle);

        description.appendChild(cardDetail4);
        let cardDetail5=document.createElement("div");
        cardDetail5.className="detail-card";

        let flexIcon5=document.createElement("div");
        flexIcon5.className="d-flex gap-2";

        let iconDiv5=document.createElement("div");
        iconDiv5.className="icon";
        iconDiv5.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff"><circle cx="12" cy="12" r="9" stroke-width="2"/><path d="M12 8V12L15 15" stroke-width="2" stroke-linecap="round"/></svg>`;
        flexIcon5.appendChild(iconDiv5);

        let dureeBack=document.createElement("h4");
        dureeBack.textContent="Durée de vie:";
        flexIcon5.appendChild(dureeBack);

        cardDetail5.appendChild(flexIcon5);

        let dureeBackTitle=document.createElement("p");
        dureeBackTitle.textContent=snail.dureeVie;
        cardDetail5.appendChild(dureeBackTitle);

        description.appendChild(cardDetail5);

        // ------------------- Particularité -------------------
        let cardDetail6=document.createElement("div");
        cardDetail6.className="detail-card";

        let flexIcon6=document.createElement("div");
        flexIcon6.className="d-flex gap-2";

        let iconDiv6=document.createElement("div");
        iconDiv6.className="icon";
        iconDiv6.innerHTML=`<svg viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.991 2.869C12.926 2.372 12.502 2 12 2c-.502 0-.926.372-.991.869..."/></svg>`;
        flexIcon6.appendChild(iconDiv6);

        let partBack=document.createElement("h4");
        partBack.textContent="Particularité:";
        flexIcon6.appendChild(partBack);
        cardDetail6.appendChild(flexIcon6);
        let partBackTitle=document.createElement("p");
        partBackTitle.textContent=snail.particularite;
        let infoBack=document.createElement("p");
        infoBack.className="info";
        infoBack.textContent="Cliquer pour revenir";
        description.appendChild(infoBack);
        cardDetail6.appendChild(partBackTitle);
        description.appendChild(cardDetail6);
        snailCardBack.appendChild(description);
        snailGrid.appendChild(snailFlip);
        snailFlip.appendChild(flipCard);
        flipCard.appendChild(snailCardFront);
        snailCardFront.appendChild(absolute);
        absolute.appendChild(statut);
        absolute.appendChild(parentImg);
        parentImg.appendChild(imgBanner);
        absolute.appendChild(absoluteEnfant);
        absoluteEnfant.appendChild(cardTitle);
        absoluteEnfant.appendChild(cardScientifiqueName);
        snailCardFront.appendChild(px);
        px.appendChild(cardDesc);
        px.appendChild(habitat);
        px.appendChild(info);
        flipCard.appendChild(snailCardBack);
    })
}
carteGenerator();
 document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  });

  let flipCardall=document.querySelectorAll(".flip-card");
  let searchInput=document.getElementById("searchInput");
  let current=0;
  let tablea=snails;
  searchInput.addEventListener("input",function(){
    let valueSearch=searchInput.value.trim().toLocaleLowerCase();
    current=0;
    flipCardall.forEach((card,ind)=>{
        card.style.display="none";
    })
    search(valueSearch);
    
  })

  let badgeAll=document.querySelectorAll(".habi");
  let badgeStatut=document.querySelectorAll(".stat")
  let dataBadge="tous";
  let datastatut="tous";
  badgeAll.forEach((badge,ind)=>{
      badge.addEventListener("click",function(){
        current=0;
          badgeAll.forEach((bad,inde)=>{
              bad.classList.remove("active");
          })
          dataBadge=badge.getAttribute("data-habitat");
          badge.classList.add("active");
          if(searchInput.value==""){
            filterBadge(dataBadge.trim().toLocaleLowerCase(),datastatut.trim().toLocaleLowerCase());
        }
        else{
            search(searchInput.value.trim().toLocaleLowerCase())
        }
    })
  })
  badgeStatut.forEach((stat,ind)=>{
      stat.addEventListener("click",function(){
        current=0;
          badgeStatut.forEach((sta,ine)=>{
              sta.classList.remove("active");
          })
          datastatut=stat.getAttribute("data-statut");
        stat.classList.add("active");
        if(searchInput.value==""){
            filterBadge(dataBadge.trim().toLocaleLowerCase(),datastatut.trim().toLocaleLowerCase());
        }
        else{
            search(searchInput.value.trim().toLocaleLowerCase())
        }
    })
  })
  function filterBadge(bge,bdgestatut){
    snails.forEach((snail,index)=>{
        let habitatCard=snail.dataHabitat.trim().toLocaleLowerCase();
        let statutCard=snail.dataStatut.trim().toLocaleLowerCase();
        if(habitatCard == bge && statutCard == bdgestatut ){
            flipCardall[index].style.display="block";
             current++;
            msg.textContent=`${current} escargots trouvés.`
        }
        else if(bge =="tous" && statutCard == bdgestatut ||bdgestatut=="tous" && habitatCard == bge|| bge =="tous"&& bdgestatut=="tous" ){
            flipCardall[index].style.display="block";
             current++;
            msg.textContent=`${current} escargots trouvés.`
        }
        else{
            flipCardall[index].style.display="none";
            msg.textContent=`${current} escargot trouvé.`
        }
    })
  }

    function search(value){
    snails.forEach((snail,index)=>{
        let titleCard=snail.nom.toLocaleLowerCase().trim();
        let habitatCard=snail.habitat.toLocaleLowerCase().trim();
        let datahabitatCard=snail.dataHabitat.toLocaleLowerCase().trim();
        let datastatutCard=snail.dataStatut.toLocaleLowerCase().trim();
        let scientiCard=snail.scientifique.toLocaleLowerCase().trim();
        if((titleCard.includes(value) || scientiCard.includes(value) || habitatCard.includes(value)) && 
        (dataBadge =="tous" || datahabitatCard == dataBadge.toLocaleLowerCase().trim())
         && (datastatut =="tous" || datastatutCard == datastatut.toLocaleLowerCase().trim())){
         
            flipCardall[index].style.display="block";
            current++;
            msg.textContent=`${current} escargots trouvés.`
        }
        else{
            msg.textContent=`${current} escargots trouvés.`
            flipCardall[index].style.display="none";
        }
    })
  }