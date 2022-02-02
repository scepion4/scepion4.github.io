<?php

/* https://api.telegram.org/bot5154998319:AAGufln8GStQd7P8Xsm8lT5bFw1xBvrUaV8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$email = $_POST['place'];
$token = "5154998319:AAGufln8GStQd7P8Xsm8lT5bFw1xBvrUaV8";
$chat_id = "-640912411";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r")

if ($sendToTelegram) {
  echo'succsesful';
} else {
  echo "Error";
}
?>