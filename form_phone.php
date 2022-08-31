<?php

$to = "bespalov_art06@mail.ru";
$phone_project = htmlspecialchars($_POST['phone_project']);
$subject = "Заказ проекта_телефон";

$message = '<table border="0" cellpadding="0" cellspacing="0" style="background: rgb(189, 247, 255);margin:0; padding:0; width: 100%;">
<tr>
  <td><span style="font-size: 18px">ТЕЛЕФОН: <br><h1><a href="tel:' . $phone_project . '" target="_blank" style="text-decoration: none; color: #000000">' . $phone_project . '</a></h1></span></td>
</tr>
</table>';
$headers = 'Content-type: text/html; charset=utf-8 \r\n';
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
