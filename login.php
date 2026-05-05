<?php
session_start();

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

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $action = $_POST['action'] ?? '';
    $email = $_POST['email'] ?? '';
    $pwd = $_POST['password'] ?? '';

    if ($action === "register") {
        $first = $_POST['first_name'];
        $last = $_POST['last_name'];
        $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);

        $ins = $pdo->prepare("INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)");
        if ($ins->execute([$first, $last, $email, $hashedPwd])) {
            $_SESSION['user_id'] = $pdo->lastInsertId();
            header("Location: account.php");
            exit();
        }
    } 
    
    if ($action === "login") {
        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch();

        if ($user && password_verify($pwd, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            header("Location: account.php");
            exit();
        } else {
            echo "<script>alert('Identifiants incorrects !'); window.location.href='login.html';</script>";
            exit();
        }
    }
}
?>