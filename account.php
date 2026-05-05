<?php
session_start();

// Si l'utilisateur n'est pas connecté, on le renvoie vers la page de connexion
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit();
}

// Optionnel : Connexion DB pour récupérer les infos de l'utilisateur
$host = "localhost";
$user = "root";
$password = "";
$dbname = "boutique_figurines";
$pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$_SESSION['user_id']]);
$userInfo = $stmt->fetch();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon Compte</title>
</head>
<body>
    <h1>Bienvenue, <?= htmlspecialchars($userInfo['firstname']); ?> !</h1>
    <p>Ceci est votre espace personnel.</p>
    <a href="index.php">Retour à la boutique</a>
    <br>
    <a href="logout.php">Se déconnecter</a>
</body>
</html>