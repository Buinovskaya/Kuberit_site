<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    //От кого письмо
    $mail->setFrom('test@gmail.com', 'test');

    // адрес почты куда придет письмо
    $mail->addAddress("oplya92@gmail.com");

    //Тема письма
    $mail->Subject = 'Заявка с сайта Kuberit';

    //Тело письма
    $body = '<h1>Здравствуйте! Пожалуйста, свяжитесь со мной:</h1>';
    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>'
    }
    if(trim(!empty($_POST['phone']))){
        $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>'
    }
    if(trim(!empty($_POST['company']))){
        $body.='<p><strong>Компания:</strong> '.$_POST['company'].'</p>'
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>'
    }

    //Отправляем
    if(!$mail->send()){
        $message = 'Ошибка';
    }else{
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);


?>
