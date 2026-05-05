<?php
session_start();

// 1. Connexion à la base de données
$host = "localhost";
$user = "root";
$password = "";
$dbname = "boutique_figurines";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur : " . $e->getMessage());
}

// 2. RÉCUPÉRATION DES PRODUITS
$requete = $pdo->query("SELECT * FROM products");
$produits = $requete->fetchAll();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Ma Boutique - Anime Figuarts</title>
    <style>
        body { font-family: sans-serif; background-color: #f4f4f4; padding: 20px; }
        .header-nav { margin-bottom: 20px; background: white; padding: 15px; border-radius: 8px; }
        .card {
            border: 1px solid #ccc;
            padding: 10px;
            width: 200px;
            margin: 10px;
            display: inline-block;
            vertical-align: top;
            border-radius: 8px;
            background: white;
            text-align: center;
        }
        img {
            max-width: 100%;
            height: 150px;
            object-fit: contain;
        }
        h1 { color: #333; }
        .btn { padding: 10px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; }
    </style>
</head>
<body>

<div class="header-nav">
    <?php if (isset($_SESSION['user_id'])): ?>
        <a href="account.php" class="btn">Mon Compte</a>
        <a href="logout.php" style="color: red; margin-left: 10px;">Déconnexion</a>
    <?php else: ?>
        <a href="login.html" class="btn">Se connecter / S'inscrire</a>
    <?php endif; ?>
</div>

<h1>Figurines Disponibles</h1>

<?php if (empty($produits)): ?>
    <p>Aucun produit trouvé dans la base de données.</p>
<?php else: ?>
    <?php foreach ($produits as $p): ?>
        <div class="card">
            <img src="<?= htmlspecialchars($p['image']); ?>" alt="Photo">
            <h3><?= htmlspecialchars($p['name']); ?></h3>
            <p>Série : <?= htmlspecialchars($p['series']); ?></p>
            <p><strong>Prix : <?= $p['price']; ?>€</strong></p>
        </div>
    <?php endforeach; ?>
<?php endif; ?>

</body>
</html>