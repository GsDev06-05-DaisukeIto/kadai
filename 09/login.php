<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="css/main.css" />
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <style>
        div {
            padding: 10px;
            font-size: 16px;
        }
    </style>
    <title>ログイン</title>
</head>

<body>

    <header>
        <nav class="navbar navbar-default"><img src="./img/book.png" style="width:70px; height:70px;"><span style="font-size:18pt;">　本のブックマーク　LOGIN</span></nav>
    </header>

    <!-- lLOGINogin_act.php は認証処理用のPHPです。 -->
    <form name="form1" action="login_act.php" method="post">
        ID:
        <input type="text" name="lid" /> PW:
        <input type="password" name="lpw" />
        <input type="submit" value="LOGIN" />
    </form>
    <br>
    <a href="select_nologin.php">ログインせずに一覧を見る</a>


</body>

</html>