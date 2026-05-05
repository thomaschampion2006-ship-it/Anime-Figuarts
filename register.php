<?php
session_start();

$pdo = new PDO("mysql:host=localhost;dbname=boutique_figurines;charset=utf8", "root", "", [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $first = $_POST['first_name'] ?? '';
    $last  = $_POST['last_name'] ?? '';
    $email = $_POST['email'] ?? '';
    $pwd   = $_POST['password'] ?? '';

    // check email
    $check = $pdo->prepare("SELECT id FROM users WHERE email = ?");
    $check->execute([$email]);

    if ($check->fetch()) {
        die("Email déjà utilisé");
    }

    $hash = password_hash($pwd, PASSWORD_DEFAULT);

    $stmt = $pdo->prepare("INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)");
    $stmt->execute([$first, $last, $email, $hash]);

    // auto login
    $_SESSION['user_id'] = $pdo->lastInsertId();

    header("Location: account.php");
    exit();
}
?>