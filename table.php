<?php
include 'vues/header.php';
require "model/config.php";
$requete = $conn->prepare("SELECT `id`, `nom`, `prenom`, `email`, `telephone`, `societe`, `adresse`, `cPostal`, `ville`, `siren`, `cNaf` FROM `user`");
$requete->execute();
$resultat = $requete->fetchAll();


$requete = $conn->prepare("SELECT `cNaf`,COUNT(*) FROM user GROUP BY cNaf");
$requete->execute();
$resultats = $requete->fetchAll();

?>
<main role="main">
    <a href="index.php">Accueil</a>
    <div class="centrage-vertical">
        <div class="tableau">
            <table>
                <thead>
                    <th scope="col">Numéro</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prénom</th>
                    <th scope="col">Email</th>
                    <th scope="col">Téléphone</th>
                    <th scope="col">societe</th>
                    <th scope="col">adresse</th>
                    <th scope="col">Code Postal</th>
                    <th scope="col">Ville</th>
                    <th scope="col">Siren</th>
                    <th scope="col">Code Naf</th>
                <tbody>
                    <?php
                    for ($i = 0; $i < count($resultat); $i++) {
                    ?>
                        <tr>
                            <?php
                            echo '<td>' . $resultat[$i]['id'] . '</td>';
                            echo '<td>' . $resultat[$i]['nom'] . '</td>';
                            echo '<td>' . $resultat[$i]['prenom'] . '</td>';
                            echo '<td>' . $resultat[$i]['email'] . '</td>';
                            echo '<td>' . $resultat[$i]['telephone'] . '</td>';
                            echo '<td>' . $resultat[$i]['societe'] . '</td>';
                            echo '<td>' . $resultat[$i]['adresse'] . '</td>';
                            echo '<td>' . $resultat[$i]['cPostal'] . '</td>';
                            echo '<td>' . $resultat[$i]['ville'] . '</td>';
                            echo '<td>' . $resultat[$i]['siren'] . '</td>';
                            echo '<td>' . $resultat[$i]['cNaf'] . '</td>';
                            ?>
                        </tr>
                    <?php }; ?>
                </tbody>
            </table>
        </div>
    </div>
    <div class="centrage-vertical">
        <div class="tableau">
            <table>
                <thead>
                    <th scope="col">Code naf</th>
                    <th scope="col">Total par code</th>
                <tbody>
                    <?php
                    for ($i = 0; $i < count($resultats); $i++) {
                    ?>
                        <tr>
                            <?php
                            echo '<td>' . $resultats[$i]['cNaf'] . '</td>';
                            echo '<td>' . $resultats[$i]['COUNT(*)'] . '</td>';
                            ?>
                        </tr>
                    <?php }; ?>
                </tbody>
            </table>
        </div>
    </div>
</main>