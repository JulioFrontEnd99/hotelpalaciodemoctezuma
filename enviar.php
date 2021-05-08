<?php require 'PHPMailer/PHPMailerAutoload.php';?>
<?php
  $destinatario = 'waelscuenta@hotmail.com'
  $asunto = 'Correo del Sitio Web'

  $nombre = $_POST['nombre'];
  $apellido = $_POST['apellido'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];

  $header = "Enviado desde el sitio de Hotel Palacio de Moctezuma";
  $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

  mail($destinatario, $asunto, $mensajeCompleto, $header);
  echo "<script>alert('correo enviado exitosamente')</script>";
  echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";
?>
