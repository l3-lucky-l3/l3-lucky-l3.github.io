<?php

$to = "bespalov_art06@mail.ru";
$textarea_chat = htmlspecialchars($_POST['textarea_chat']);
$name_chat = htmlspecialchars($_POST['name_chat']);
$phone_chat = htmlspecialchars($_POST['phone_chat']);
$subject = "Заказ проекта_chat";

$message = '<table border="0" cellpadding="0" cellspacing="0" style="background: rgb(189, 247, 255);margin:0; padding:0; width: 100%;">
<tr>
  <td><span style="font-size: 18px">ИМЯ: <br><h1 style="color: #000"> ' . $name_chat . ' </h1></span> <br> </td>
</tr>
<tr>
  <td><span style="font-size: 18px">Сообщение: <br><h1><a href="mailto:' . $textarea_chat . '" target="_blank" style="text-decoration: none; color: #000000">' . $textarea_chat . '</a></h1></span> <br> </td>
</tr>
<tr>
  <td><span style="font-size: 18px">ТЕЛЕФОН: <br><h1><a href="tel:' . $phone_chat . '" target="_blank" style="text-decoration: none; color: #000000">' . $phone_chat . '</a></h1></span></td>
</tr>
</table>';
$headers = 'Content-type: text/html; charset=utf-8 \r\n';
$headers .= "From: $textarea_chat";
$headers .= "Reply-to: $to";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $message, $headers)) {
  header('location: index.php');
  $send = true;
  exit;
} else {
  header('location: index.php');
  $send = true;
  exit;
}
