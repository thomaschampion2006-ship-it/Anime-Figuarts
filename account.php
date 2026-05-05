<?php
session_start();

// 🔒 Protection accès
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit();
}

// 🔌 Connexion BDD
$pdo = new PDO("mysql:host=localhost;dbname=boutique_figurines;charset=utf8", "root", "", [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

// 👤 Récup utilisateur
$stmt = $pdo->prepare("SELECT firstname, lastname, email FROM users WHERE id = ?");
$stmt->execute([$_SESSION['user_id']]);
$user = $stmt->fetch();

// 🚪 Déconnexion
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Mon compte</title>
<style>
body { font-family: Arial; background:#f5f5f5; }
.box { max-width:600px; margin:50px auto; background:#fff; padding:20px; border-radius:10px; }
h1 { margin-bottom:10px; }
.btn { display:inline-block; padding:10px 15px; background:#e63946; color:#fff; text-decoration:none; border-radius:5px; }
</style>
</head>

<body>

<div class="box">
    <h1>Bienvenue <?= htmlspecialchars($user['firstname']); ?> 👋</h1>

    <p><strong>Nom :</strong> <?= htmlspecialchars($user['lastname']); ?></p>
    <p><strong>Email :</strong> <?= htmlspecialchars($user['email']); ?></p>

    <br>

    <a href="?logout=true" class="btn">Se déconnecter</a>
</div>

</body>
</html>