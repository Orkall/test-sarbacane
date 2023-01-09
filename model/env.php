
<?php
$env = "LOCAL";
switch ($env) {
    case 'LOCAL':
        define("SITE_URL", "http://localhost:8888/test-sarbacane");
        define("HOST", 'localhost');
        define("DBNAME", 'sarbacane');
        define("USER", 'sarbacane');
        define("PWD", 'sarbacane');
        break;
    case 'PREPROD':
        define("SITE_URL", "https://test-sarbacane.000webhostapp.com/");
        define("HOST", 'localhost');
        define("PORT", '3306');
        define("DBNAME", 'id20102956_sarbacane');
        define("USER", 'id20102956_sarbacanetest');
        define("PWD", '8N<+{jvMv7IYUMvf');
        break;
    default:
        define("SITE_URL", "");
        define("HOST", '');
        define("PORT", '');
        define("DBNAME", '');
        define("USER", '');
        define("PWD", '');
}

?>