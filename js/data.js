const PRODUCTS = [
  { id: 1, name: "Gohan SSJ2", series: "Dragon Ball Z", category: "sh-figuarts", price: 70, oldPrice: null, isNew: false, stock: 8,
    image: "S.H Figuarts/Gohan ssj2 S.H Figuarts.webp",
    description: "Figurine articulée S.H.Figuarts de Gohan en Super Saiyan 2, réplique officielle Bandai Tamashii Nations avec accessoires.",
    specs: ["Hauteur: 14cm", "Articulée: Oui", "Marque: Bandai", "Licence: Dragon Ball Z"] },

  { id: 2, name: "Goku SSJ – Arc Freezer", series: "Dragon Ball Z", category: "sh-figuarts", price: 70, oldPrice: null, isNew: false, stock: 5,
    image: "S.H Figuarts/Goku ssj frieza arc, S.H Figuarts.webp",
    description: "Figurine S.H.Figuarts de Goku Super Saiyan version Arc Freezer. Détails soignés et multiples points d'articulation.",
    specs: ["Hauteur: 14cm", "Articulée: Oui", "Marque: Bandai", "Licence: Dragon Ball Z"] },

  { id: 3, name: "Goku SSJ Édition Limitée", series: "Dragon Ball Z", category: "sh-figuarts", price: 100, oldPrice: 120, isNew: true, stock: 3,
    image: "S.H Figuarts/Goku ssj \u00e9dition limit\u00e9, S.H Figuarts.webp",
    description: "Édition limitée exclusive de Goku Super Saiyan avec effets d'aura et socle diorama. Quantité très limitée !",
    specs: ["Hauteur: 15cm", "Articulée: Oui", "Édition: Limitée", "Inclus: Effets aura"] },

  { id: 4, name: "Broly", series: "Dragon Ball Super", category: "sh-figuarts", price: 80, oldPrice: null, isNew: false, stock: 6,
    image: "S.H Figuarts/Broly S.H Figuarts.webp",
    description: "Figurine S.H.Figuarts de Broly, le Saiyan légendaire. Articulations multiples et grande prestance.",
    specs: ["Hauteur: 18cm", "Articulée: Oui", "Marque: Bandai", "Licence: DBS Broly"] },

  { id: 5, name: "Roronoa Zoro", series: "One Piece", category: "sh-figuarts", price: 90, oldPrice: null, isNew: false, stock: 4,
    image: "S.H Figuarts/Roronoa Zoro, S.H Figuarts.webp",
    description: "Figurine S.H.Figuarts de Zoro le chasseur de pirates, avec ses trois katanas emblématiques.",
    specs: ["Hauteur: 15cm", "Articulée: Oui", "Accessoires: 3 katanas", "Licence: One Piece"] },

  { id: 6, name: "Naruto Uzumaki", series: "Naruto Shippuden", category: "sh-figuarts", price: 70, oldPrice: null, isNew: false, stock: 10,
    image: "S.H Figuarts/Naruto S.H Figuarts.webp",
    description: "Figurine S.H.Figuarts de Naruto Uzumaki en mode Sage. Mains interchangeables incluses.",
    specs: ["Hauteur: 14cm", "Articulée: Oui", "Accessoires: Mains", "Licence: Naruto"] },

  { id: 7, name: "Itachi Uchiha", series: "Naruto Shippuden", category: "sh-figuarts", price: 90, oldPrice: null, isNew: true, stock: 5,
    image: "S.H Figuarts/Itachi Uchiha S.H Figuarts.webp",
    description: "Figurine S.H.Figuarts d'Itachi Uchiha avec cape Akatsuki et effets de flammes noires Amaterasu.",
    specs: ["Hauteur: 15cm", "Articulée: Oui", "Accessoires: Effets flammes", "Licence: Naruto"] },

  { id: 8, name: "Armored All Might", series: "My Hero Academia", category: "sh-figuarts", price: 110, oldPrice: null, isNew: false, stock: 3,
    image: "S.H Figuarts/Armored All Might S.H Figuarts.webp",
    description: "Figurine S.H.Figuarts d'All Might en tenue de combat blindée. Le héros numéro 1 en résine premium.",
    specs: ["Hauteur: 17cm", "Articulée: Oui", "Marque: Bandai", "Licence: My Hero Academia"] },

  { id: 9, name: "Thalès", series: "Anime Original", category: "sh-figuarts", price: 80, oldPrice: 95, isNew: false, stock: 4,
    image: "S.H Figuarts/Thal\u00e8s S.H Figuarts.webp",
    description: "Figurine S.H.Figuarts exclusive, édition collector avec socle premium.",
    specs: ["Hauteur: 15cm", "Articulée: Oui", "Marque: Bandai", "Édition: Collector"] },

  { id: 10, name: "Toji Fushiguro", series: "Jujutsu Kaisen", category: "sh-figuarts", price: 90, oldPrice: null, isNew: true, stock: 6,
    image: "S.H Figuarts/Toji S.H Figuarts.webp",
    description: "Figurine S.H.Figuarts de Toji Fushiguro, le père de Megumi. Articulations premium et accessoires inclus.",
    specs: ["Hauteur: 16cm", "Articulée: Oui", "Accessoires: Arme", "Licence: Jujutsu Kaisen"] },

  // ===== FIGURINES NON ARTICULÉES =====
  { id: 11, name: "Naruto & Madara – Kyubi", series: "Naruto Shippuden", category: "figurines-na", price: 55, oldPrice: 70, isNew: false, stock: 4,
    image: "figurines non articul\u00e9/Naruto, Madara - Kyubi.webp",
    description: "Diorama de collection représentant Naruto face à Madara avec la manifestation du Kyubi.",
    specs: ["Hauteur: 22cm", "Matière: PVC", "Diorama: Oui", "Peint: Oui"] },

  { id: 12, name: "Itachi Uchiha", series: "Naruto Shippuden", category: "figurines-na", price: 40, oldPrice: null, isNew: false, stock: 7,
    image: "figurines non articul\u00e9/Itachi.webp",
    description: "Statue de collection d'Itachi Uchiha en pose iconique avec ses sharingan activés.",
    specs: ["Hauteur: 20cm", "Matière: PVC/Résine", "Peint: Oui", "Base incluse: Oui"] },

  { id: 13, name: "Donquixote Doflamingo", series: "One Piece", category: "figurines-na", price: 55, oldPrice: null, isNew: false, stock: 5,
    image: "figurines non articul\u00e9/Doflamingo.avif",
    description: "Figurine de Doflamingo, le Corsaire et roi de Dressrosa, manteau rose et lunettes emblématiques.",
    specs: ["Hauteur: 24cm", "Matière: PVC", "Peint: Oui", "Série: Warlords"] },

  { id: 14, name: "Oozaru – Grand Singe", series: "Dragon Ball Z", category: "figurines-na", price: 45, oldPrice: null, isNew: false, stock: 3,
    image: "figurines non articul\u00e9/Oozaru.avif",
    description: "Figurine imposante de l'Oozaru, la transformation en Grand Singe des Saiyans.",
    specs: ["Hauteur: 20cm", "Matière: PVC", "Peint: Oui", "Licence: Dragon Ball"] },

  { id: 15, name: "Pafnarelf", series: "Fantasy Original", category: "figurines-na", price: 35, oldPrice: null, isNew: true, stock: 8,
    image: "figurines non articul\u00e9/Pafnarelf.avif",
    description: "Figurine originale de fantasy, design unique et finitions artisanales.",
    specs: ["Hauteur: 18cm", "Matière: PVC", "Peint: Oui", "Édition: Limitée"] },

  { id: 16, name: "Kujo Jolyne", series: "JoJo's Bizarre Adventure", category: "figurines-na", price: 50, oldPrice: 60, isNew: false, stock: 5,
    image: "figurines non articul\u00e9/Kujo Jolyne.avif",
    description: "Statue de collection de Jolyne Kujo, protagoniste de Stone Ocean, avec son Stand Stone Free.",
    specs: ["Hauteur: 22cm", "Matière: PVC/Résine", "Peint: Oui", "Stand: Inclus"] },

  { id: 17, name: "Zora l'Exploratrice", series: "Adventure Original", category: "figurines-na", price: 32, oldPrice: null, isNew: false, stock: 6,
    image: "figurines non articul\u00e9/Zora l'exploratrice.avif",
    description: "Figurine de Zora l'Exploratrice, aventurière avec son équipement de voyage.",
    specs: ["Hauteur: 17cm", "Matière: PVC", "Peint: Oui", "Accessoires: Oui"] },

  { id: 18, name: "Bartholomew Kuma", series: "One Piece", category: "figurines-na", price: 55, oldPrice: null, isNew: false, stock: 4,
    image: "figurines non articul\u00e9/Bartholomew Kuma.avif",
    description: "Figurine du Corsaire Bartholomew Kuma, Tyran de l'Archipel Boin.",
    specs: ["Hauteur: 26cm", "Matière: PVC", "Peint: Oui", "Série: Warlords"] },

  { id: 19, name: "Roronoa Zoro – Combat", series: "One Piece", category: "figurines-na", price: 45, oldPrice: 55, isNew: false, stock: 6,
    image: "figurines non articul\u00e9/Zoro le vrai.avif",
    description: "Statue de Zoro en pose de combat avec ses trois katanas, rendu détaillé et base diorama.",
    specs: ["Hauteur: 23cm", "Matière: Résine", "Peint: Oui", "Diorama: Oui"] },


  { id: 20, name: "Katana Premium I", series: "Katana Collection", category: "katanas", price: 90, oldPrice: null, isNew: false, stock: 5,
    image: "Katanas/katana 1.webp",
    description: "Katana de collection forgé à la main, lame en acier inoxydable et tsuka en bois laqué.",
    specs: ["Longueur totale: 101cm", "Lame: 69cm", "Matière: Acier inox", "Fourreau: Bois laqué"] },

  { id: 21, name: "Katana de Tanjiro", series: "Demon Slayer", category: "katanas", price: 125, oldPrice: 150, isNew: false, stock: 4,
    image: "Katanas/Katana tanjiro.webp",
    description: "Réplique officielle du katana noir de Tanjiro Kamado du Pourfendeur de Démons, avec fourreau.",
    specs: ["Longueur: 98cm", "Lame: Acier inox", "Fourreau: Inclus", "Licence: Demon Slayer"] },

  { id: 22, name: "Katana Miyamoto Musashi", series: "Samouraï Historique", category: "katanas", price: 155, oldPrice: null, isNew: false, stock: 3,
    image: "Katanas/Katana Musashi.webp",
    description: "Réplique de haute qualité du katana de Miyamoto Musashi, le plus grand samouraï du Japon.",
    specs: ["Longueur: 104cm", "Lame: Acier carbone", "Garde: Laiton", "Poignée: Cuir"] },

  { id: 23, name: "Katana de Rengoku", series: "Demon Slayer", category: "katanas", price: 135, oldPrice: null, isNew: true, stock: 5,
    image: "Katanas/Katana Rengoku.webp",
    description: "Réplique du katana de Kyojuro Rengoku, le Pilier des Flammes. Motifs de flammes sur la lame.",
    specs: ["Longueur: 100cm", "Design: Flammes", "Fourreau: Inclus", "Licence: Demon Slayer"] },

  { id: 24, name: "Katana de Zoro (Wado)", series: "One Piece", category: "katanas", price: 115, oldPrice: null, isNew: false, stock: 6,
    image: "Katanas/Zoros Katana.webp",
    description: "Réplique du Wado Ichimonji, le katana légué par Kuina à Zoro. Fourreau blanc inclus.",
    specs: ["Longueur: 97cm", "Fourreau: Blanc", "Garde: Tradition.", "Licence: One Piece"] },

  { id: 25, name: "Katana Zoro Sandai Kitetsu", series: "One Piece", category: "katanas", price: 108, oldPrice: 125, isNew: false, stock: 4,
    image: "Katanas/Katana Zoro.jpg",
    description: "Réplique du Sandai Kitetsu maudit de Zoro, l'une des trois lames du chasseur de pirates.",
    specs: ["Longueur: 99cm", "Design: Maudit", "Fourreau: Inclus", "Licence: One Piece"] },

  { id: 26, name: "Katana Premium II", series: "Katana Collection", category: "katanas", price: 88, oldPrice: null, isNew: false, stock: 7,
    image: "Katanas/Katana 2.jpg",
    description: "Katana de collection avec lame polie miroir et tsuka en ray skin traditionnel.",
    specs: ["Longueur totale: 103cm", "Lame: Poli miroir", "Poignée: Ray skin", "Fourreau: Bois"] },

  { id: 27, name: "Katana Premium III", series: "Katana Collection", category: "katanas", price: 95, oldPrice: null, isNew: false, stock: 6,
    image: "Katanas/Katana 3.jpg",
    description: "Katana forgé avec habaki en laiton et menuki sculptés à la main.",
    specs: ["Longueur totale: 102cm", "Habaki: Laiton", "Menuki: Sculptés", "Fourreau: Laqué"] },

  { id: 28, name: "Katana Premium IV", series: "Katana Collection", category: "katanas", price: 102, oldPrice: null, isNew: true, stock: 5,
    image: "Katanas/Katana 4.jpg",
    description: "Katana premium avec lame gravée et fourreau en bois de rose naturel.",
    specs: ["Longueur totale: 105cm", "Gravure: Oui", "Fourreau: Bois de rose", "Poids: 900g"] },

  { id: 29, name: "Katana Premium V", series: "Katana Collection", category: "katanas", price: 118, oldPrice: 140, isNew: false, stock: 3,
    image: "Katanas/Katana 5.jpg",
    description: "Katana de prestige avec tsuba sculptée en fer forgé et lame trempée à l'eau.",
    specs: ["Longueur totale: 106cm", "Tsuba: Fer forgé", "Trempe: Eau", "Qualité: Prestige"] },
];


function getAllProducts() { return PRODUCTS; }


function getProductsByCategory(cat) {
  if (!cat || cat === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === cat);
}


function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}


function searchProducts(query) {
  const q = query.toLowerCase();
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.series.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );
}

function getNewProducts() {
  return PRODUCTS.filter(p => p.isNew);
}
