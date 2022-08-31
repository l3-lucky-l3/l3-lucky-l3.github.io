<?php

$to = "bespalov_art06@mail.ru";
$from = htmlspecialchars($_POST['email']);
$name = htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['phone']);
$subject = "Заказ проекта";

$message = '<table border="0" cellpadding="0" cellspacing="0" style="background: rgb(189, 247, 255);margin:0; padding:0; width: 100%;">
<tr>
  <td><span style="font-size: 18px">ИМЯ: <br><h1 style="color: #000"> ' . $name . ' </h1></span> <br> </td>
</tr>
<tr>
  <td><span style="font-size: 18px">E-mail: <br><h1><a href="mailto:' . $from . '" target="_blank" style="text-decoration: none; color: #000000">' . $from . '</a></h1></span> <br> </td>
</tr>
<tr>
  <td><span style="font-size: 18px">ТЕЛЕФОН: <br><h1><a href="tel:' . $phone . '" target="_blank" style="text-decoration: none; color: #000000">' . $phone . '</a></h1></span></td>
</tr>
</table>';
$headers = 'Content-type: text/html; charset=utf-8 \r\n';
$headers .= "From: $form";
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
