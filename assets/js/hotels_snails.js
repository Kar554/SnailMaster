const etablissements = [
  {
    identifiant: '1',
    nom: 'Le Grand Véfour',
    type: 'restaurant',
    description: 'Restaurant gastronomique légendaire sous les arcades du Palais-Royal, offrant une cuisine française raffinée avec des escargots de Bourgogne préparés selon la tradition.',
    image: './assets/image/hotel/Palais-Royal.jfif',
    adresse: '17 Rue de Beaujolais',
    ville: 'Paris',
    pays: 'France',
    telephone: '+33 1 42 96 56 27',
    note: 4.8,
    prix: '€€€€ (200-350€)',
    specialites: ['Escargots de Bourgogne', 'Foie Gras', 'Pigeon en deux services'],
    horaires: 'Mar-Sam: 12h-14h, 19h30-22h',
    michelin: '3 étoiles',
    recompenses: ['3 étoiles Michelin depuis 1933', 'Monument Historique']
  },
  {
    identifiant: '2',
    nom: 'Hôtel de la Cloche',
    type: 'hôtel',
    description: 'Hôtel de luxe historique au cœur de Dijon, capitale de la Bourgogne. Restaurant réputé servant les meilleurs escargots de la région dans un cadre élégant.',
    image: './assets/image/hotel/Hôtel de la Cloche.jfif',
    adresse: '14 Place Darcy',
    ville: 'Bourgogne',
    pays: 'France',
    telephone: '+33 3 80 30 12 32',
    note: 4.7,
    prix: '€€€ (250-450€/nuit)',
    specialites: ['Menu dégustation escargots', 'Vins de Bourgogne', 'Cuisine bourguignonne'],
    horaires: '24h/24, Restaurant: 12h-14h, 19h-22h',
    recompenses: ['5 étoiles Relais & Châteaux', 'Prix Excellence TripAdvisor']
  },
  {
    identifiant: '3',
    nom: 'Marché des Halles Paul Bocuse',
    type: 'marché',
    description: 'Marché couvert mythique de Lyon abritant des artisans et producteurs de qualité. Stand spécialisé dans les escargots frais et préparés.',
    image: './assets/image/hotel/Marché des Halles.jfif',
    adresse: '102 Cours Lafayette',
    ville: 'Lyon',
    pays: 'France',
    telephone: '+33 4 78 62 39 33',
    note: 4.6,
    prix: '€€ (15-40€)',
    specialites: ['Escargots frais', 'Escargots à la lyonnaise', 'Produits régionaux'],
    horaires: 'Mar-Dim: 7h-19h',
    recompenses: ['Label Marché d\'Excellence', 'Patrimoine Gastronomique UNESCO']
  },
  {
    identifiant: '4',
    nom: 'La Petite Cour',
    type: 'restaurant',
    description: 'Bistrot parisien authentique avec terrasse charmante. Spécialiste des escargots préparés de multiples façons dans une ambiance conviviale.',
    image: './assets/image/hotel/La Petite Cour.jfif',
    adresse: '8 Rue Mabillon',
    ville: 'Paris',
    pays: 'France',
    telephone: '+33 1 43 26 52 26',
    note: 4.5,
    prix: '€€ (35-65€)',
    specialites: ['12 escargots bourguignons', 'Escargots au Roquefort', 'Confit de canard'],
    horaires: 'Lun-Dim: 12h-14h30, 19h-23h',
    recompenses: ['Bib Gourmand Michelin', 'Meilleur Bistrot Paris 6e']
  },
  {
    identifiant: '5',
    nom: 'Château de Pizay',
    type: 'hôtel',
    description: 'Château du 14e siècle transformé en hôtel de charme au cœur du Beaujolais. Restaurant gastronomique proposant une carte riche en escargots et vins locaux.',
    image: './assets/image/hotel/Château de Pizay.jfif',
    adresse: '69220 Saint-Jean-d\'Ardières',
    ville: 'Bourgogne',
    pays: 'France',
    telephone: '+33 4 74 66 51 41',
    note: 4.9,
    prix: '€€€ (180-380€/nuit)',
    specialites: ['Escargots aux cèpes', 'Menu accords mets-vins', 'Cuisine du terroir'],
    horaires: '24h/24, Restaurant: 12h-13h30, 19h30-21h',
    recompenses: ['4 étoiles Châteaux & Hôtels', 'Vignobles & Découvertes']
  },
  {
    identifiant: '6',
    nom: 'L\'Auberge du Vieux Puits',
    type: 'restaurant',
    description: 'Restaurant triplement étoilé dans le village de Fontjoncouse. Le chef Gilles Goujon réinvente les escargots avec créativité et excellence.',
    image: './assets/image/hotel/LAuberge du Vieux Puits.jfif',
    adresse: '5 Avenue Saint-Victor',
    ville: 'Provence',
    pays: 'France',
    telephone: '+33 4 68 44 07 37',
    note: 4.9,
    prix: '€€€€ (180-280€)',
    specialites: ['Escargots en croûte d\'herbes', 'Menu Découverte', 'Truffe noire'],
    horaires: 'Mar-Sam: 12h-13h30, 19h30-21h',
    michelin: '3 étoiles',
    recompenses: ['3 étoiles Michelin', 'Top 50 Meilleurs Restaurants France']
  },
  {
    identifiant: '7',
    nom: 'Marché Forville',
    type: 'marché',
    description: 'Marché provençal authentique à Cannes. Stand d\'escargots frais et spécialités provençales, ambiance colorée et conviviale.',
    image: './assets/image/hotel/Marché Forville.jfif',
    adresse: 'Rue du Marché Forville',
    ville: 'Provence',
    pays: 'France',
    telephone: '+33 4 93 39 26 49',
    note: 4.4,
    prix: '€ (10-30€)',
    specialites: ['Escargots petits-gris', 'Olives', 'Herbes de Provence'],
    horaires: 'Mar-Dim: 7h-13h',
    recompenses: ['Marché traditionnel labellisé']
  },
  {
    identifiant: '8',
    nom: 'Le Buerehiesel',
    type: 'restaurant',
    description: 'Restaurant gastronomique étoilé dans un magnifique pavillon alsacien au parc de l\'Orangerie. Fusion entre tradition française et touches alsaciennes.',
    image: './assets/image/hotel/Le Buerehiesel.jfif',
    adresse: '4 Parc de l\'Orangerie',
    ville: 'Strasbourg',
    pays: 'France',
    telephone: '+33 3 88 45 56 65',
    note: 4.7,
    prix: '€€€ (85-150€)',
    specialites: ['Escargots façon Buerehiesel', 'Foie gras', 'Pigeon'],
    horaires: 'Mer-Dim: 12h-13h30, 19h-21h',
    michelin: '1 étoile',
    recompenses: ['1 étoile Michelin', 'Grand Chef Relais & Châteaux']
  },
  {
    identifiant: '9',
    nom: 'Hôtel & Spa Le Cep',
    type: 'hôtel',
    description: 'Hôtel de luxe 5 étoiles au cœur de Beaune, capitale des vins de Bourgogne. Restaurant réputé pour ses escargots et cave exceptionnelle.',
    image: './assets/image/hotel/Hôtel & Spa Le Cep.jfif',
    adresse: '27 Rue Maufoux',
    ville: 'Bourgogne',
    pays: 'France',
    telephone: '+33 3 80 22 35 48',
    note: 4.8,
    prix: '€€€€ (320-680€/nuit)',
    specialites: ['Cassolette d\'escargots', 'Bœuf bourguignon', 'Dégustation vins'],
    horaires: '24h/24, Restaurant: 12h-14h, 19h-21h30',
    recompenses: ['5 étoiles Relais & Châteaux', 'Meilleure Cave 2023']
  },
  {
    identifiant: '10',
    nom: 'Le Pressoir d\'Argent',
    type: 'restaurant',
    description: 'Restaurant bi-étoilé du chef Gordon Ramsay au Grand Hôtel de Bordeaux. Cuisine française contemporaine avec escargots sublimés.',
    image: './assets/image/hotel/Le Pressoir d\'Argent.jfif',
    adresse: '2-5 Place de la Comédie',
    ville: 'Bordeaux',
    pays: 'France',
    telephone: '+33 5 57 30 43 04',
    note: 4.8,
    prix: '€€€€ (150-300€)',
    specialites: ['Escargots en persillade moderne', 'Homard bleu', 'Pigeon'],
    horaires: 'Mar-Sam: 12h-14h, 19h30-22h',
    michelin: '2 étoiles',
    recompenses: ['2 étoiles Michelin', 'Chef Gordon Ramsay']
  },
  {
    identifiant: '11',
    nom: 'La Maison des Têtes',
    type: 'restaurant',
    description: 'Restaurant historique à Colmar dans une bâtisse Renaissance. Spécialités alsaciennes revisitées incluant d\'excellents escargots.',
    image: './assets/image/hotel/La Maison des Têtes.jfif',
    adresse: '19 Rue des Têtes',
    ville: 'Strasbourg',
    pays: 'France',
    telephone: '+33 3 89 24 43 43',
    note: 4.6,
    prix: '€€ (45-85€)',
    specialites: ['Escargots au Riesling', 'Choucroute', 'Baeckeoffe'],
    horaires: 'Mar-Sam: 12h-14h, 19h-22h',
    recompenses: ['Bib Gourmand Michelin', 'Monument Historique']
  },
  {
    identifiant: '12',
    nom: 'Les Bons Produits du Terroir',
    type: 'marché',
    description: 'Boutique-marché spécialisée dans les produits gastronomiques français. Large sélection d\'escargots préparés artisanalement.',
    image: './assets/image/hotel/Les Bons Produits du Terroir.jfif',
    adresse: '28 Rue Saint-Antoine',
    ville: 'Toulouse',
    pays: 'France',
    telephone: '+33 5 61 23 45 67',
    note: 4.5,
    prix: '€€ (12-35€)',
    specialites: ['Escargots en conserve', 'Foie gras', 'Cassoulet'],
    horaires: 'Lun-Sam: 9h-19h',
    recompenses: ['Label Saveurs du Sud-Ouest']
  }
];
let hotelGrid=document.querySelector(".hotel-grid");
let msg=document.getElementById("msg");
msg.textContent=`${etablissements.length} établissements trouvés.`;
function carteGenerator(etab) {
  const card = document.createElement("div");
  card.className = "hotel-card w-100 bg-white shadow-sm";

  const absolute = document.createElement("div");
  absolute.className = "absolute overflow-hidden";

  const img = document.createElement("img");
  img.className = "w-100";
  img.src = etab.image;
  img.alt = etab.nom;
  absolute.appendChild(img);

  const statut = document.createElement("div");
  statut.className = `statut ${etab.type} d-flex justify-content-center gap-2 align-items-center`;

  const icon = document.createElement("div");
  icon.className = "icon";
icon.innerHTML = 
  etab.type === "hôtel" 
    ? `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet" fill="rgb(0, 89, 255)" stroke="rgb(0, 89, 255)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M63 60h-6V41.758c3.656 1.955 3.766 5.918 3.766 5.918c.697-5.52-1.842-7.643-3.823-8.463a5.888 5.888 0 0 0-.128-.666C60.835 35.27 64 36.633 64 36.633c-3.598-4.347-6.668-2.432-8.414-.492A5.983 5.983 0 0 0 51 34h-5v-8c0-3.308-2.691-6-6-6h-1v-6c0-1.077-.531-2.36-1.293-3.121l-1.586-1.587C35.36 8.532 34.076 8 33 8V6.558c2.666 1.533 3.332-1.534 6 0V1.443c-2.668-1.533-3.334 1.534-6 0V1c0-.55-.451-1-1-1c-.551 0-1 .45-1 1v7c-1.076 0-2.36.532-3.121 1.292l-1.586 1.587C25.531 11.64 25 12.923 25 14v6h-1c-3.309 0-6 2.692-6 6v8h-5a5.99 5.99 0 0 0-4.588 2.141c-1.744-1.94-4.815-3.856-8.412.492c0 0 3.164-1.363 7.186 1.916a5.811 5.811 0 0 0-.128.664c-1.981.82-4.521 2.943-3.823 8.463c0 0 .109-3.965 3.766-5.918V60H1c-.551 0-1 .451-1 1v2c0 .551.449 1 1 1h62c.549 0 1-.449 1-1v-2c0-.549-.451-1-1-1m-8.972-18.961c.167-.047.316-.102.493-.143c.336.063.646.145.947.234c.075.635.159 1.443.234 2.449h-1.727c.027-.821.044-1.673.053-2.54m-.061 2.889c.757.959 1.393.625 1.774.215c.057.836.104 1.781.139 2.834h-2.055c.056-.979.105-1.989.142-3.049M53 41.365a.13.13 0 0 0 .025-.01c-.025 1.818-.09 3.537-.177 5.15A.988.988 0 0 0 52 46h-3.639c.23-.936.75-2.023 1.832-3H52c.549 0 1-.449 1-1v-.635m-42 .002V42c0 .551.449 1 1 1h1.807c1.081.977 1.601 2.064 1.831 3H12a.989.989 0 0 0-.849.504c-.088-1.611-.151-3.33-.177-5.148l.026.011m-2.469-.236c.3-.09.61-.172.945-.234c.178.043.327.096.495.143c.01.867.026 1.719.051 2.541H8.296c.076-1.007.159-1.815.235-2.45m-.273 3.012c.383.41 1.019.744 1.775-.217c.035 1.061.084 2.07.142 3.051H8.117c.035-1.053.084-1.998.141-2.834m-.156 3.326c.434.424 1.187.828 2.098-.047c.063 1.037.135 2.018.213 2.949H8.07c-.002-1.035.008-2.008.032-2.902m-.03 3.367c.462.467 1.322.947 2.356-.266c.1 1.158.206 2.227.313 3.197H8.136a115.904 115.904 0 0 1-.064-2.931m.075 3.217c.43.451 1.414 1.174 2.647.182c.068.596.138 1.139.205 1.652V56c0 .078.027.148.045.223c.046.336.088.648.132.941H8.303a118.62 118.62 0 0 1-.156-3.111M8.512 60c-.078-.914-.143-1.795-.198-2.652c.382.443 1.497 1.441 2.91.139c.24 1.613.419 2.513.419 2.513H8.512M22 48.063L20.764 49l.469-1.525L20 46.529l1.525-.006L22 45l.475 1.523l1.525.006l-1.232.945l.468 1.526L22 48.063M24 63l1.333-1h13.334L40 63H24m4.236-14L27 48.063L25.764 49l.469-1.525L25 46.529l1.525-.006L27 45l.475 1.523l1.525.006l-1.232.945l.468 1.526M28 50v10h-3V50h3m5.236-1L32 48.063L30.764 49l.469-1.525L30 46.529l1.525-.006L32 45l.475 1.523l1.525.006l-1.232.945l.468 1.526M33 50v10h-2V50h2m5.236-1L37 48.063L35.764 49l.469-1.525L35 46.529l1.525-.006L37 45l.475 1.523l1.525.006l-1.232.945l.468 1.526M39 50v10h-3V50h3m1.764-1l.469-1.525L40 46.529l1.525-.006L42 45l.475 1.523l1.525.006l-1.232.945l.468 1.526L42 48.063L40.764 49M52 53h-4c-.551 0-1 .451-1 1v2c0 .551.449 1 1 1h3.833a62.876 62.876 0 0 1-.458 2.805l-.04.195H43V50h2v-6H19v6h2v10h-8.338l-.039-.195A61.86 61.86 0 0 1 12.166 57H16c.549 0 1-.449 1-1v-2c0-.549-.451-1-1-1h-4a.945.945 0 0 0-.324.066a122.284 122.284 0 0 1-.31-3.311A.98.98 0 0 0 12 50h4c.549 0 1-.449 1-1v-2c0-.414-.258-.771-.618-.922c.177-1.191.021-2.213-.352-3.084c.534-.017.97-.455.97-.994v-2c0-.549-.451-1-1-1h-4a.959.959 0 0 0-.409.094c-.11-.047-.222-.096-.327-.139c4.877-4.582 8.736-1.15 8.736-1.15A8.378 8.378 0 0 0 18.179 36H20V26c0-2.2 1.799-4 4-4h3v-8c0-.55.318-1.318.707-1.708l1.586-1.585C29.682 10.318 30.449 10 31 10h2c.549 0 1.318.318 1.707.708l1.586 1.585c.389.389.707 1.157.707 1.707v8h3c2.199 0 4 1.8 4 4v10h1.82A8.353 8.353 0 0 0 44 37.805s3.858-3.432 8.734 1.15c-.105.043-.217.092-.326.139A.95.95 0 0 0 52 39h-4c-.551 0-1 .451-1 1v2a1 1 0 0 0 .969.994c-.373.871-.528 1.893-.353 3.084c-.36.151-.616.508-.616.922v2c0 .551.449 1 1 1h4a.985.985 0 0 0 .633-.244a127.106 127.106 0 0 1-.309 3.311A.933.933 0 0 0 52 53m3.486 7h-3.131s.179-.9.418-2.512c1.414 1.301 2.528.303 2.911-.141c-.055.858-.12 1.739-.198 2.653m.209-2.836h-2.873l.129-.926c.021-.078.049-.154.049-.238v-.123c.067-.51.136-1.051.205-1.645c1.232.994 2.216.271 2.646-.18c-.037.993-.087 2.026-.156 3.112m.167-3.396h-2.606c.109-.971.216-2.039.314-3.199c1.033 1.213 1.894.736 2.355.27c-.006.923-.028 1.899-.063 2.929m-2.276-3.397c.078-.932.151-1.912.215-2.951c.909.875 1.663.473 2.096.051c.023.893.033 1.865.03 2.9h-2.341" fill="#ffffff"></path><path d="M21.119 42.422v-2.027h1.836v2.027h1.111V37.58h-1.111v1.859h-1.836V37.58H20v4.842z" fill="#ffffff"></path><path d="M27.943 37.5c-1.455 0-2.398 1.086-2.398 2.535c0 1.381.855 2.465 2.318 2.465c1.44 0 2.422-.963 2.422-2.549c0-1.338-.828-2.451-2.342-2.451m-.021 4.131c-.746 0-1.199-.668-1.199-1.617c0-.939.438-1.645 1.191-1.645c.771 0 1.193.748 1.193 1.617c0 .942-.431 1.645-1.185 1.645" fill="#ffffff"></path><path d="M31.17 38.498h1.324v3.924h1.117v-3.924h1.348v-.918H31.17z" fill="#ffffff"></path><path d="M37.404 40.373h1.813v-.891h-1.813v-1.003h1.922v-.899h-3.045v4.842h3.147v-.899h-2.024z" fill="#ffffff"></path><path d="M42.039 37.58H40.92v4.842H44v-.92h-1.961z" fill="#ffffff"></path><path d="M34 24h-4c-.551 0-1 .45-1 1v8c0 .551.449 1 1 1h4c.549 0 1-.449 1-1v-8c0-.55-.451-1-1-1" fill="#ffffff"></path><path d="M30 20c.549 0 1-.45 1-1v-4c0-.55-.451-1-1-1c-.551 0-1 .45-1 1v4c0 .55.449 1 1 1" fill="#ffffff"></path><path d="M34 14c-.551 0-1 .45-1 1v4c0 .55.449 1 1 1c.549 0 1-.45 1-1v-4c0-.55-.451-1-1-1" fill="#ffffff"></path><path d="M23 28h3c.549 0 1-.449 1-1v-2c0-.55-.451-1-1-1h-3c-.551 0-1 .45-1 1v2c0 .55.449 1 1 1" fill="#ffffff"></path><path d="M27 33v-2c0-.549-.451-1-1-1h-3c-.551 0-1 .451-1 1v2c0 .551.449 1 1 1h3c.549 0 1-.449 1-1" fill="#ffffff"></path><path d="M38 28h3c.549 0 1-.449 1-1v-2c0-.55-.451-1-1-1h-3c-.551 0-1 .45-1 1v2c0 .55.449 1 1 1" fill="#ffffff"></path><path d="M38 34h3c.549 0 1-.449 1-1v-2c0-.549-.451-1-1-1h-3c-.551 0-1 .451-1 1v2c0 .551.449 1 1 1" fill="#ffffff"></path></g></svg>` 
    : etab.type === "restaurant" 
      ? `<svg viewBox="0 0 15 15" version="1.1" id="restaurant" xmlns="http://www.w3.org/2000/svg" fill="#10810cff">
           <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
           <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
           <g id="SVGRepo_iconCarrier">
             <path id="path11774" d="M3.5,0l-1,5.5c-0.1464,0.805,1.7815,1.181,1.75,2L4,14c-0.0384,0.9993,1,1,1,1s1.0384-0.0007,1-1L5.75,7.5c-0.0314-0.8176,1.7334-1.1808,1.75-2L6.5,0H6l0.25,4L5.5,4.5L5.25,0h-0.5L4.5,4.5L3.75,4L4,0H3.5z M12,0c-0.7364,0-1.9642,0.6549-2.4551,1.6367C9.1358,2.3731,9,4.0182,9,5v2.5c0,0.8182,1.0909,1,1.5,1L10,14c-0.0905,0.9959,1,1,1,1s1,0,1-1V0z"></path>
           </g>
         </svg>` 
      : `<svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g style="fill:none;stroke:#000000;stroke-width:4.78689;stroke-dasharray:none;stroke-opacity:1"> <path d="M-22.463 141.035c-.015-.398-.92-12.214-2.27-18.166-.53-2.334-.248-4.938-2.271-6.812-2.023-1.873-5.962-2.27-9.083-2.27-3.12 0-7.06.397-9.083 2.27-2.023 1.874-2.27 6.812-2.27 6.812m-9.555.102-3.897 43.095c-.221 2.794.949 4.177 1.896 5.129.947.953 2.391 1.544 3.54 1.63h39.366c1.126 0 2.779-.734 3.669-1.463.89-.729 2.29-2.439 2.037-4.987l-3.845-43.404z" style="display:inline;fill:none;fill-opacity:1;stroke:#000000;stroke-width:4.78689;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" transform="translate(185.327 -263.245) scale(2.50685)"></path> </g> </g></svg>`;

statut.appendChild(icon);
  statut.appendChild(document.createTextNode(etab.type));
  absolute.appendChild(statut);
  card.appendChild(absolute);

  const content = document.createElement("div");
  content.className = "px-4 mt-3";

  const title = document.createElement("h1");
  title.className = "card-title";
  title.textContent = etab.nom;
  content.appendChild(title);

  const desc = document.createElement("p");
  desc.className = "card-text";
  desc.textContent = etab.description;
  content.appendChild(desc);

  const btnDiv1 = document.createElement("div");
  btnDiv1.className = "text-center mt-3";
  const btn1 = document.createElement("button");
  btn1.className = "btn w-75 text-white btn-info";
  btn1.textContent = "En savoir plus";
  btnDiv1.appendChild(btn1);
  content.appendChild(btnDiv1);


  const hidediv=document.createElement("div");
  hidediv.className="hidediv";
  content.appendChild(hidediv);

    
  btn1.addEventListener("click",function(){
    hidediv.style.animation="none";
    hidediv.style.animation="show 0.2s ease-in";
    hidediv.style.height="100%";
    btn1.style.display="none"
  })  

  const loc = document.createElement("div");
  loc.className = "px d-flex align-items-center gap-2 text-success";
  loc.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="green"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>  ${etab.adresse}  ,  ${etab.ville}  ,  ${etab.pays}`;
  hidediv.appendChild(loc);

  const tel = document.createElement("div");
  tel.className = "px d-flex align-items-center gap-2 text-success";
  tel.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z" stroke="green" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>  ${etab.telephone}`;
  hidediv.appendChild(tel);

  const hor = document.createElement("div");
  hor.className = "px d-flex align-items-center gap-2 text-success";
  hor.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 9.5V12L14 13.5M7.93191 6.20428C8.54129 6 9.36367 6 10.8 6H13.2C14.6363 6 15.4587 6 16.0681 6.20429M7.93191 6.20428C7.82847 6.23896 7.73116 6.27953 7.63803 6.32698C7.07354 6.6146 6.6146 7.07354 6.32698 7.63803C6 8.27976 6 9.11984 6 10.8V13.2C6 14.8802 6 15.7202 6.32698 16.362C6.6146 16.9265 7.07354 17.3854 7.63803 17.673C7.73112 17.7205 7.82838 17.761 7.93178 17.7957M7.93191 6.20428L9.00003 3H15L16.0681 6.20429M16.0681 6.20429C16.1715 6.23897 16.2688 6.27953 16.362 6.32698C16.9265 6.6146 17.3854 7.07354 17.673 7.63803C18 8.27976 18 9.11984 18 10.8V13.2C18 14.8802 18 15.7202 17.673 16.362C17.3854 16.9265 16.9265 17.3854 16.362 17.673C16.2688 17.7205 16.1715 17.7611 16.068 17.7958M7.93178 17.7957C8.54116 18 9.36356 18 10.8 18H13.2C14.6362 18 15.4586 18 16.068 17.7958M7.93178 17.7957L8.9996 21H14.9996L16.068 17.7958" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>   ${etab.horaires}`;
  hidediv.appendChild(hor);

  const ul = document.createElement("ul");
  ul.className = "specialite mt-2";
  const titleSpecial=document.createElement("h1");
  titleSpecial.textContent="Spécialités";
  ul.appendChild(titleSpecial);
  etab.specialites.forEach(s => {
    const li = document.createElement("li");
    li.textContent = s;
    ul.appendChild(li);
  });
  hidediv.appendChild(ul);

  const btnDiv = document.createElement("div");
  btnDiv.className = "text-center mt-3 d-flex gap-2";
  const btn = document.createElement("button");
  btn.className = "btn w-50 text-white btn-success";
  btn.textContent = "contacter";
  const btnCancel=document.createElement("button");
  btnCancel.className="btn w-50 text-white btn-danger";
  btnCancel.textContent="retracter"
  btnDiv.appendChild(btnCancel);
  btn.addEventListener("click",function(){
    window.location.href=`tel:${etab.telephone}`;
  })
  btnCancel.addEventListener("click",function(){
    hidediv.style.animation="none";
    hidediv.style.animation="hide 0.2s ease-in";
    hidediv.style.height="0";
    btn1.style.display="block"
  })
  btnDiv.appendChild(btn);
  hidediv.appendChild(btnDiv);

  card.appendChild(content);
  hotelGrid.appendChild(card);
}

etablissements.forEach(e => carteGenerator(e));

let villeTable=[];
etablissements.forEach((etab,index)=>{
    if(villeTable.includes(etab.ville)){
        
    }
    else{
        villeTable.push(etab.ville);
    }
    console.log(villeTable);
});
let selectVille=document.getElementById("select-ville");
let selectlieux=document.getElementById("select-lieux");
villeTable.forEach((ville,index)=>{
    let opt=document.createElement("option");
    selectVille.appendChild(opt);
    opt.textContent=ville;
    opt.className="badge ville";
    opt.value=ville;
    opt.dataset.ville=ville;
})

let flipCardall=document.querySelectorAll(".hotel-card");

let current=0;

let searchInput=document.getElementById("searchInput");

  searchInput.addEventListener("input",function(){
    let valueSearch=searchInput.value.trim().toLocaleLowerCase();
    current=0;
    flipCardall.forEach((card,ind)=>{
        card.style.display="none";
    })
    search(valueSearch);
    
  })


let badgeAll=document.querySelectorAll(".ville");
  let badgeStatut=document.querySelectorAll(".lieux")
  let dataBadge="tous";
  let datastatut="tous";
  selectVille.addEventListener("change",function(){
        current=0;
          dataBadge=selectVille.value;
          if(searchInput.value==""){
            filterBadge(dataBadge.trim().toLocaleLowerCase(),datastatut.trim().toLocaleLowerCase());
        }
        else{
            search(searchInput.value.trim().toLocaleLowerCase())
        }
  })
  selectlieux.addEventListener("change",function(){
        current=0;
          datastatut=selectlieux.value;
          if(searchInput.value ==""){
            filterBadge(dataBadge.trim().toLocaleLowerCase(),datastatut.trim().toLocaleLowerCase());
        }
        else{
            search(searchInput.value.trim().toLocaleLowerCase())
        }
  })
 
  function filterBadge(bge,bdgestatut){
    etablissements.forEach((etab,index)=>{
        let habitatCard=etab.ville.trim().toLocaleLowerCase();
        let statutCard=etab.type.trim().toLocaleLowerCase();
        if(habitatCard == bge && statutCard == bdgestatut ){
            flipCardall[index].style.display="block";
             current++;
            msg.textContent=`${current} établissements trouvés.`
        }
        else if(bge =="tous" && statutCard == bdgestatut ||bdgestatut=="tous" && habitatCard == bge|| bge =="tous"&& bdgestatut=="tous" ){
            flipCardall[index].style.display="block";
             current++;
            msg.textContent=`${current} établissements trouvés.`
        }
        else{
            flipCardall[index].style.display="none";
            msg.textContent=`${current} établissement trouvé.`
        }
    })
  }



 function search(value){
    etablissements.forEach((etab,index)=>{
        let titleCard=etab.nom.toLocaleLowerCase().trim();
        let datahabitatCard=etab.ville.toLocaleLowerCase().trim();
        let datastatutCard=etab.type.toLocaleLowerCase().trim();
        if((titleCard.includes(value) || datahabitatCard.includes(value) || datastatutCard.includes(value)) && 
        (dataBadge =="tous" || datahabitatCard == dataBadge.toLocaleLowerCase().trim())
         && (datastatut =="tous" || datastatutCard == datastatut.toLocaleLowerCase().trim())){
            flipCardall[index].style.display="block";
            current++;
            msg.textContent=`${current} établissements trouvés.`
        }
        else{
            msg.textContent=`${current} établissement trouvé.`
            flipCardall[index].style.display="none";
        }
    })
  }