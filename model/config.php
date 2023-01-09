<?php
require('env.php');

try {
    $conn = new PDO('mysql:host=' . HOST . ';dbname=' . DBNAME . ';charset=utf8', USER, PWD);
    $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {

    die("Impossible de se connecter à la base de données $dbname :" . $e->getMessage());
}
