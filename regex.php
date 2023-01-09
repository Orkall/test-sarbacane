<?php
include 'vues/header.php';
require "model/config.php";
$erreurs = [];

if (isset($_POST['submit']) && $_POST['submit'] === 'Envoyer') {

    if (empty($_POST['nom'])) {
        $erreurs['nom'] = 'Le nom est obligatoire.';
    }
    if (empty($_POST['prenom'])) {
        $erreurs['prenom'] = 'Le prenom est obligatoire.';
    }
    if (empty($_POST['email'])) {
        $erreurs['email'] = 'L\'e-mail est obligatoire.';
    } else {
        $requete = $conn->prepare("SELECT `email` FROM `user` WHERE `email`= ?");
        $requete->execute(array($_POST["email"]));
        $user = $requete->fetch();
        if ($user) {
            $erreurs['email'] = 'L\'e-mail est déjà enregistrée.';
        }
        if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $erreurs['email'] = 'L\'e-mail n\'est pas valide.';
        }
    }
    if (empty($_POST['telephone'])) {
        $erreurs['telephone'] = 'Le téléphone est obligatoire.';
    } else {
        if (!preg_match("/^(0|\+33)[1-9]([0-9]{8})$/", $_POST['telephone'])) {
            $erreurs['telephone'] = 'Le numero n\'est pas valide.';
        }
    }
    if (empty($_POST['societe'])) {
        $erreurs['societe'] = 'Le nom de la société est obligatoire.';
    }
    if (empty($_POST['adresse'])) {
        $erreurs['adresse'] = 'L\'adresse est obligatoire.';
    }
    if (empty($_POST['cPostal'])) {
        $erreurs['cPostal'] = 'Le code postal est obligatoire.';
    } else {
        if (!preg_match("/^\b[0-9]{5}\b$/", $_POST['cPostal'])) {
            $erreurs['cPostal'] = 'Le code n\'est pas valide.';
        }
    }
    if (empty($_POST['ville'])) {
        $erreurs['ville'] = 'La ville est obligatoire.';
    }
    if (empty($_POST['siren'])) {
        $erreurs['siren'] = 'Le siren est obligatoire.';
    }
    if (empty($_POST['cNaf'])) {
        $erreurs['cNaf'] = 'Le code naf est obligatoire.';
    }

    if (count($erreurs) == 0) {

        $requete = $conn->prepare("INSERT INTO user (`nom`,`prenom`, `email`, `telephone`, `societe`, `adresse`, `cPostal`, `ville`, `siren`, `cNaf`) VALUES (?,?,?,?,?,?,?,?,?,?)");
        $requete->execute(array($_POST["nom"], $_POST["prenom"], $_POST["email"], $_POST["telephone"], $_POST["societe"], $_POST["adresse"], $_POST["cPostal"], $_POST["ville"], $_POST["siren"], $_POST["cNaf"]));
        include "table.php";
    }
}
