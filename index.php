<?php
    session_start();
    $_SESSION = array();
    session_destroy();

    session_start();

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Clinica</title>
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans:600'>
    <link rel="stylesheet" href="front/css/styleLogin.css">
</head>

<body>
    <form action="./test/validar_usuario.php" method="post">
        <div class="login-wrap">
            <div class="login-html">
                <input id="tab-1" type="radio" name="tab" class="sign-in" checked>
                <label for="tab-1" class="tab">Iniciar sesion</label>
                <div class="login-form">
                    <div class="sign-in-htm">
                        <div class="group">
                            <label for="user" class="label">Usuario</label>
                            <input id="user" name="usuario" type="text" class="input">
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Contraseña</label>
                            <input id="pass" name="password" type="password" class="input" data-type="password">
                        </div>
                        <div class="group">
                            <input id="check" type="checkbox" class="check" checked>
                            <label for="check"><span class="icon"></span> Mantener Sesion abierta</label>
                        </div>
                        <div class="group">
                            <input type="submit" class="button" value="Entrar">
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <!-- partiasasdasdasdal -->
    </form>
</body>

</html>
