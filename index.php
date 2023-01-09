<?php
require "regex.php";

?>
<main role="main" class="main">

    <div class="container">

        <div class="sarbacane-suite">
            <div class="sarbacane-suite-picture">
                <img src="assets/picture/LOGO.svg" alt="">
            </div>
            <div class="sarbacane-suite-contenu">
                <h1>Vous êtes invité&nbsp!</h1>
                <P>
                    Afin de comptabiliser votre inscription à cet événement, veuillez remplir ce formulaire ci-dessous. Il ne vous prendra que quelques secondes !
                </P>
                <P>
                    Nous vous fournirons l'ensemble des informations supplémentaires sur l'événement directement par e-mail après confirmation de votre participation.
                </P>
                <a href="table.php">Voir le programme</a>
            </div>

        </div>
        <div class="sarbacane-form">
            <form autocomplete="off" action="" method="post">
                <h2>Inscription Conférence Annuelle</h2>
                <p>Le 23 septembre à partir de 18h00 </p>
                <p class="spanned">Grand Palais Paris</p>
                <div class="error">
                    <ul>
                        <?php
                        if (isset($erreurs['nom'])) : ?>
                            <li tabindex="0" class="erreur-form"><?= $erreurs['nom'] ?></li><?php
                                                                                        endif; ?>
                        <?php
                        if (isset($erreurs['prenom'])) : ?>
                            <li tabindex="0" class="erreur-form"><?= $erreurs['prenom'] ?></li><?php
                                                                                            endif; ?>
                        <?php
                        if (isset($erreurs['email'])) : ?>
                            <li tabindex="0" class="erreur-form"><?= $erreurs['email'] ?></li><?php
                                                                                            endif; ?>
                        <?php
                        if (isset($erreurs['telephone'])) : ?>
                            <li tabindex="0" class="erreur-form"><?= $erreurs['telephone'] ?></li><?php
                                                                                                endif; ?>
                        <?php
                        if (isset($erreurs['societe'])) : ?>
                            <li tabindex="0" class="erreur-form"><?= $erreurs['societe'] ?></li><?php
                                                                                            endif; ?>
                        <?php
                        if (isset($erreurs['adresse'])) : ?>
                            <li tabindex="0" class="erreur-form"><?= $erreurs['adresse'] ?></li><?php
                                                                                            endif; ?>
                        <?php
                        if (isset($erreurs['cPostal'])) : ?>
                            <li tabindex="0" class="erreur-form"><?= $erreurs['cPostal'] ?></li><?php
                                                                                            endif; ?>
                        <?php
                        if (isset($erreurs['ville'])) : ?>
                            <li tabindex="0" class="erreur-form"><?= $erreurs['ville'] ?></li><?php
                                                                                            endif; ?>
                        <?php
                        if (isset($erreurs['siren'])) : ?>
                            <li tabindex="0" class="erreur-form"><?= $erreurs['siren'] ?></li><?php
                                                                                            endif; ?>
                        <?php
                        if (isset($erreurs['cNaf'])) : ?>
                            <li tabindex="0" class="erreur-form"><?= $erreurs['cNaf'] ?></li><?php
                                                                                            endif; ?>
                    </ul>
                </div>
                <div class="container-input">
                    <div class="case">
                        <label for="nom">Nom
                            <input type="text" name="nom" autocomplete="off" id="nom" aria-required="true" aria-invalid="false" required value="<?php if (isset($_POST['nom'])) echo $_POST['nom']; ?>">
                        </label>
                    </div>
                    <div class="case">
                        <label for="nom">Prenom
                            <input type="text" name="prenom" autocomplete="off" id="prenom" aria-required="true" aria-invalid="false" required value="<?php if (isset($_POST['prenom'])) echo $_POST['prenom']; ?>">
                        </label>
                    </div>
                </div>
                <div class="container-input">
                    <div class="case">
                        <label for="nom">Email
                            <input type="email" name="email" autocomplete="off" id="email" aria-required="true" aria-invalid="false" required value="<?php if (isset($_POST['email'])) echo $_POST['email']; ?>">
                        </label>
                    </div>
                    <div class="case">
                        <label for="telephone">Téléphone
                            <input type="text" name="telephone" autocomplete="off" id="telephone" aria-required="true" aria-invalid="false" required value="<?php if (isset($_POST['telephone'])) echo $_POST['telephone']; ?>">
                        </label>
                    </div>
                </div>
                <div class="container-input">
                    <div class="case">

                        <label for="societe">Société

                            <input type="text" name="societe" autocomplete="off" id="societe" aria-required="true" aria-invalid="false" required value="<?php if (isset($_POST['societe'])) echo $_POST['societe']; ?>">
                        </label>
                    </div>
                    <div class="case">
                        <label for="adresse">Adresse
                            <input type="text" name="adresse" autocomplete="off" id="adresse" aria-required="true" aria-invalid="false" required value="<?php if (isset($_POST['adresse'])) echo $_POST['adresse']; ?>">
                        </label>
                    </div>
                </div>
                <div class="container-input">
                    <div class="case">
                        <label for="cPostal">Code Postal
                            <input type="text" name="cPostal" autocomplete="off" type="email" name="cPostal" id="cPostal" aria-required="true" aria-invalid="false" required value="<?php if (isset($_POST['cPostal'])) echo $_POST['cPostal']; ?>">
                        </label>
                    </div>
                    <div class="case autocomplete">
                        <label for="ville">Ville

                            <input type="text" name="ville" autocomplete="off" type="text" name="ville" id="ville" aria-required="true" aria-invalid="false" required value="<?php if (isset($_POST['ville'])) echo $_POST['ville']; ?>">
                        </label>
                    </div>
                </div>
                <div class="container-input">
                    <div class="case autocomplete">

                        <label for="siren">Siren

                            <input type="text" name="siren" autocomplete="off" id="siren" aria-required="true" aria-invalid="false" required value="<?php if (isset($_POST['siren'])) echo $_POST['siren']; ?>">
                        </label>
                    </div>
                    <div class="case autocomplete">
                        <label for="naf">Code Naf

                            <input type="text" name="cNaf" autocomplete="off" id="naf" aria-required="true" aria-invalid="false" required value="<?php if (isset($_POST['cNaf'])) echo $_POST['cNaf']; ?>">
                        </label>
                    </div>
                </div>
                <div class="submit">
                    <button type="submit">Valider l'inscription</button>
                    <input type="hidden" name="submit" value="Envoyer">
                </div>
            </form>
        </div>
    </div>
</main>
</body>

</html>