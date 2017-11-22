<?php
$sent = false;
$msg = null;
if(($_POST['email'])) {

    $email = $_POST['email'];
    $name = ($_POST['yourname'])?$_POST['yourname']:'brak';
    $phone = ($_POST['phone'])?$_POST['phone']:'brak';
    $message = ($_POST['message'])?$_POST['message']:'brak';

    $mail = <<<EOT
Adres email:    {$email}
Imię:           {$name}
Telefon:        {$phone}
Wiadomość:      {$message}
EOT;

    mail('paboowicz@gmail.com', 'info ze strony internetowej', $mail);
    $sent = true;
}else{
    $msg = 'Proszę podać przynajmniej adres email.';
}

if($sent) {
    $resp = array(
        'msg' => "Twoja wiadomość została wysłana. Dziękujemy!",
        'code' => 1
    );
}else{
    $resp = array(
        'msg' => $msg?$msg:"Wystąpił błąd, proszę spróbować ponownie.",
        'code' => 0
    );
}

echo json_encode($resp);