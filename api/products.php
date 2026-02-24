<?php
/**
 * ANIME FIGUARTS - API Produits
 * Endpoint: /api/products.php?category=sh-figuarts&limit=10&id=1&search=naruto
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$products = [
  ['id'=>1,'name'=>'Gohan SSJ2','series'=>'Dragon Ball Z','category'=>'sh-figuarts','price'=>70,'oldPrice'=>null,'isNew'=>false,'stock'=>8,'image'=>'S.H Figuarts/Gohan ssj2 S.H Figuarts.webp','description'=>'Figurine articulée S.H.Figuarts de Gohan en Super Saiyan 2, réplique officielle Bandai Tamashii Nations avec accessoires.'],
  ['id'=>2,'name'=>'Goku SSJ – Arc Freezer','series'=>'Dragon Ball Z','category'=>'sh-figuarts','price'=>70,'oldPrice'=>null,'isNew'=>false,'stock'=>5,'image'=>'S.H Figuarts/Goku ssj frieza arc, S.H Figuarts.webp','description'=>'Figurine S.H.Figuarts de Goku Super Saiyan version Arc Freezer.'],
  ['id'=>3,'name'=>'Goku SSJ Édition Limitée','series'=>'Dragon Ball Z','category'=>'sh-figuarts','price'=>100,'oldPrice'=>120,'isNew'=>true,'stock'=>3,'image'=>'S.H Figuarts/Goku ssj édition limité, S.H Figuarts.webp','description'=>'Édition limitée exclusive de Goku Super Saiyan avec effets d\'aura.'],
  ['id'=>4,'name'=>'Broly','series'=>'Dragon Ball Super','category'=>'sh-figuarts','price'=>80,'oldPrice'=>null,'isNew'=>false,'stock'=>6,'image'=>'S.H Figuarts/Broly S.H Figuarts.webp','description'=>'Figurine S.H.Figuarts de Broly, le Saiyan légendaire.'],
  ['id'=>5,'name'=>'Roronoa Zoro','series'=>'One Piece','category'=>'sh-figuarts','price'=>90,'oldPrice'=>null,'isNew'=>false,'stock'=>4,'image'=>'S.H Figuarts/Roronoa Zoro, S.H Figuarts.webp','description'=>'Figurine S.H.Figuarts de Zoro avec ses trois katanas.'],
  ['id'=>6,'name'=>'Naruto Uzumaki','series'=>'Naruto Shippuden','category'=>'sh-figuarts','price'=>70,'oldPrice'=>null,'isNew'=>false,'stock'=>10,'image'=>'S.H Figuarts/Naruto S.H Figuarts.webp','description'=>'Figurine S.H.Figuarts de Naruto en mode Sage.'],
  ['id'=>7,'name'=>'Itachi Uchiha','series'=>'Naruto Shippuden','category'=>'sh-figuarts','price'=>90,'oldPrice'=>null,'isNew'=>true,'stock'=>5,'image'=>'S.H Figuarts/Itachi Uchiha S.H Figuarts.webp','description'=>'Figurine S.H.Figuarts d\'Itachi Uchiha avec cape Akatsuki.'],
  ['id'=>8,'name'=>'Armored All Might','series'=>'My Hero Academia','category'=>'sh-figuarts','price'=>110,'oldPrice'=>null,'isNew'=>false,'stock'=>3,'image'=>'S.H Figuarts/Armored All Might S.H Figuarts.webp','description'=>'Figurine S.H.Figuarts d\'All Might en tenue blindée.'],
  ['id'=>9,'name'=>'Thalès','series'=>'Anime Original','category'=>'sh-figuarts','price'=>80,'oldPrice'=>95,'isNew'=>false,'stock'=>4,'image'=>'S.H Figuarts/Thalès S.H Figuarts.webp','description'=>'Figurine S.H.Figuarts exclusive, édition collector.'],
  ['id'=>10,'name'=>'Toji Fushiguro','series'=>'Jujutsu Kaisen','category'=>'sh-figuarts','price'=>90,'oldPrice'=>null,'isNew'=>true,'stock'=>6,'image'=>'S.H Figuarts/Toji S.H Figuarts.webp','description'=>'Figurine S.H.Figuarts de Toji Fushiguro.'],
  ['id'=>11,'name'=>'Naruto & Madara – Kyubi','series'=>'Naruto Shippuden','category'=>'figurines-na','price'=>55,'oldPrice'=>70,'isNew'=>false,'stock'=>4,'image'=>'figurines non articulé/Naruto, Madara - Kyubi.webp','description'=>'Diorama Naruto face à Madara avec le Kyubi.'],
  ['id'=>12,'name'=>'Itachi Uchiha','series'=>'Naruto Shippuden','category'=>'figurines-na','price'=>40,'oldPrice'=>null,'isNew'=>false,'stock'=>7,'image'=>'figurines non articulé/Itachi.webp','description'=>'Statue de collection d\'Itachi Uchiha.'],
  ['id'=>13,'name'=>'Donquixote Doflamingo','series'=>'One Piece','category'=>'figurines-na','price'=>55,'oldPrice'=>null,'isNew'=>false,'stock'=>5,'image'=>'figurines non articulé/Doflamingo.avif','description'=>'Figurine de Doflamingo, roi de Dressrosa.'],
  ['id'=>14,'name'=>'Oozaru – Grand Singe','series'=>'Dragon Ball Z','category'=>'figurines-na','price'=>45,'oldPrice'=>null,'isNew'=>false,'stock'=>3,'image'=>'figurines non articulé/Oozaru.avif','description'=>'Figurine de l\'Oozaru, transformation Grand Singe.'],
  ['id'=>15,'name'=>'Pafnarelf','series'=>'Fantasy Original','category'=>'figurines-na','price'=>35,'oldPrice'=>null,'isNew'=>true,'stock'=>8,'image'=>'figurines non articulé/Pafnarelf.avif','description'=>'Figurine originale de fantasy.'],
  ['id'=>16,'name'=>'Kujo Jolyne','series'=>"JoJo's Bizarre Adventure",'category'=>'figurines-na','price'=>50,'oldPrice'=>60,'isNew'=>false,'stock'=>5,'image'=>'figurines non articulé/Kujo Jolyne.avif','description'=>'Statue de Jolyne Kujo avec son Stand Stone Free.'],
  ['id'=>17,'name'=>"Zora l'Exploratrice",'series'=>'Adventure Original','category'=>'figurines-na','price'=>32,'oldPrice'=>null,'isNew'=>false,'stock'=>6,'image'=>"figurines non articulé/Zora l'exploratrice.avif",'description'=>"Figurine de Zora l'Exploratrice."],
  ['id'=>18,'name'=>'Bartholomew Kuma','series'=>'One Piece','category'=>'figurines-na','price'=>55,'oldPrice'=>null,'isNew'=>false,'stock'=>4,'image'=>'figurines non articulé/Bartholomew Kuma.avif','description'=>'Figurine du Corsaire Bartholomew Kuma.'],
  ['id'=>19,'name'=>'Roronoa Zoro – Combat','series'=>'One Piece','category'=>'figurines-na','price'=>45,'oldPrice'=>55,'isNew'=>false,'stock'=>6,'image'=>'figurines non articulé/Zoro le vrai.avif','description'=>'Statue de Zoro en pose de combat.'],
  ['id'=>20,'name'=>'Katana Premium I','series'=>'Katana Collection','category'=>'katanas','price'=>90,'oldPrice'=>null,'isNew'=>false,'stock'=>5,'image'=>'Katanas/katana 1.webp','description'=>'Katana de collection forgé à la main.'],
  ['id'=>21,'name'=>'Katana de Tanjiro','series'=>'Demon Slayer','category'=>'katanas','price'=>125,'oldPrice'=>150,'isNew'=>false,'stock'=>4,'image'=>'Katanas/Katana tanjiro.webp','description'=>'Réplique officielle du katana noir de Tanjiro.'],
  ['id'=>22,'name'=>'Katana Miyamoto Musashi','series'=>'Samouraï Historique','category'=>'katanas','price'=>155,'oldPrice'=>null,'isNew'=>false,'stock'=>3,'image'=>'Katanas/Katana Musashi.webp','description'=>'Réplique du katana de Miyamoto Musashi.'],
  ['id'=>23,'name'=>'Katana de Rengoku','series'=>'Demon Slayer','category'=>'katanas','price'=>135,'oldPrice'=>null,'isNew'=>true,'stock'=>5,'image'=>'Katanas/Katana Rengoku.webp','description'=>'Réplique du katana de Rengoku, Pilier des Flammes.'],
  ['id'=>24,'name'=>'Katana de Zoro (Wado)','series'=>'One Piece','category'=>'katanas','price'=>115,'oldPrice'=>null,'isNew'=>false,'stock'=>6,'image'=>'Katanas/Zoros Katana.webp','description'=>'Réplique du Wado Ichimonji de Zoro.'],
  ['id'=>25,'name'=>'Katana Zoro Sandai Kitetsu','series'=>'One Piece','category'=>'katanas','price'=>108,'oldPrice'=>125,'isNew'=>false,'stock'=>4,'image'=>'Katanas/Katana Zoro.jpg','description'=>'Réplique du Sandai Kitetsu maudit de Zoro.'],
  ['id'=>26,'name'=>'Katana Premium II','series'=>'Katana Collection','category'=>'katanas','price'=>88,'oldPrice'=>null,'isNew'=>false,'stock'=>7,'image'=>'Katanas/Katana 2.jpg','description'=>'Katana de collection avec lame polie miroir.'],
  ['id'=>27,'name'=>'Katana Premium III','series'=>'Katana Collection','category'=>'katanas','price'=>95,'oldPrice'=>null,'isNew'=>false,'stock'=>6,'image'=>'Katanas/Katana 3.jpg','description'=>'Katana forgé avec habaki en laiton.'],
  ['id'=>28,'name'=>'Katana Premium IV','series'=>'Katana Collection','category'=>'katanas','price'=>102,'oldPrice'=>null,'isNew'=>true,'stock'=>5,'image'=>'Katanas/Katana 4.jpg','description'=>'Katana premium avec lame gravée.'],
  ['id'=>29,'name'=>'Katana Premium V','series'=>'Katana Collection','category'=>'katanas','price'=>118,'oldPrice'=>140,'isNew'=>false,'stock'=>3,'image'=>'Katanas/Katana 5.jpg','description'=>'Katana de prestige avec tsuba en fer forgé.'],
];

// Filtres
$id       = isset($_GET['id'])       ? intval($_GET['id'])       : null;
$category = isset($_GET['category']) ? trim($_GET['category'])   : null;
$search   = isset($_GET['search'])   ? strtolower(trim($_GET['search'])) : null;
$limit    = isset($_GET['limit'])    ? intval($_GET['limit'])    : 0;
$isNew    = isset($_GET['new'])      ? true                      : false;

// Produit unique
if ($id) {
  $found = array_filter($products, fn($p) => $p['id'] === $id);
  $found = array_values($found);
  echo json_encode($found ? $found[0] : null);
  exit;
}

// Filtrage
$filtered = $products;

if ($category && $category !== 'all') {
  $filtered = array_filter($filtered, fn($p) => $p['category'] === $category);
}

if ($search) {
  $filtered = array_filter($filtered, fn($p) =>
    str_contains(strtolower($p['name']), $search) ||
    str_contains(strtolower($p['series']), $search) ||
    str_contains(strtolower($p['description']), $search)
  );
}

if ($isNew) {
  $filtered = array_filter($filtered, fn($p) => $p['isNew'] === true);
}

$filtered = array_values($filtered);

if ($limit > 0) {
  $filtered = array_slice($filtered, 0, $limit);
}

echo json_encode([
  'products' => $filtered,
  'total'    => count($filtered),
]);
