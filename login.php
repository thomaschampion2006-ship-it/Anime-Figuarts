<?php
session_start();

$pdo = new PDO("mysql:host=localhost;dbname=boutique_figurines;charset=utf8", "root", "", [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $email = $_POST['email'] ?? '';
    $pwd   = $_POST['password'] ?? '';

    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user && password_verify($pwd, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        header("Location: account.php");
        exit();
    } else {
        header("Location: login.html?error=1");
        exit();
    }
}
?>