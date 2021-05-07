<?php

if($_POST) {
    $name = "";
    $email = "";
    $subject = "";
    $message = "";
    $tel = "";

    if(isset($_POST['name'])) {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['email'])) {
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    if(isset($_POST['subject'])) {
        $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
        $subject = "[Richiesta da Sito Web] " . $subject;
    }

    if(isset($_POST['message'])) {
        $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['tel'])) {
        $tel = filter_var($_POST['tel'], FILTER_SANITIZE_NUMBER_INT);
    }

    $message = $message . "...Recapito telefonico: " . $tel;

    $destination = "pio19022@gmail.com";
    $headers  = 'MIME-Version: 1.0' . "\r\n"
        .'Content-type: text/html; charset=utf-8' . "\r\n"
        .'From: ' . $email . "\r\n";

    $doc =new DOMDocument();
    mail($destination, $subject, $message, $headers);
    header ("Location: home.php?#contact");
}
else {
    header ("Location: home.php?#contact");
}