<?php

session_start();

$drop = "";

if($_SESSION["chk_ssid"]){
    //echo '<pre>';
    //var_dump($_SESSION);
    //echo '</pre>';

    $kanri_flg = $_SESSION["kanri_flg"];
    $name = $_SESSION["name"];
    //echo $kanri_flg;
    //echo $name;

    //ドロップメニュー表示パターン
    $kanri_drop  = '<ul class="nav navbar-nav navbar-right">';
    $kanri_drop .= '<li class="dropdown">';
    $kanri_drop .= '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">'.$name.'（管理者）';
    //    $kanri_drop .= 'admin' + '（管理者）';
    $kanri_drop .= '<span class="caret"></span></a>';
    $kanri_drop .= '<ul class="dropdown-menu" role="menu">';
    $kanri_drop .= '<li><a href="user_index.php">ユーザー登録</a></li>';
    $kanri_drop .= '<li><a href="user_select.php">ユーザー表示</a></li>';
    $kanri_drop .= '<li class="divider"></li>';
    $kanri_drop .= '<li><a href="logout.php">ログアウト</a></li>';
    $kanri_drop .= '</ul></li></ul>';

    $drop = $kanri_drop;

    //管理者以外は一覧ページにリダイレクト

    if($kanri_flg == 0) {
        //    echo "一般ユーザー";
        header("location:select.php");
    }
}
else {
    //    echo "セッションなし";
    header("location:select_nologin.php");
}

?>


    <!DOCTYPE html>
    <html lang="ja">

    <head>
        <meta charset="UTF-8">
        <title>（ユーザ管理）本をブックマーク</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <style>
            div {
                padding: 10px;
                font-size: 16px;
            }
        </style>
    </head>

    <body>

        <!-- Head[Start] -->
        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#"></a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li><a href="select.php">ブックマーク一覧</a></li>
                        <li><a href="index.php">ブックマーク登録</a></li>
                    </ul>

                    <?php
                    echo $drop;
                    ?>

                </div>
            </nav>
        </header>
        <!-- Head[End] -->

        <!-- Main[Start] -->
        <form method="post" action="user_insert.php">
            <div class="jumbotron">
                <fieldset>
                    <legend>ユーザー管理画面</legend>
                    <label>名前：
                        <input type="text" name="name">
                    </label>
                    <br>
                    <label>ユーザID：
                        <input type="text" name="lid">
                    </label>
                    <br>
                    <label>パスワード：
                        <input type="text" name="lpw">
                    </label>
                    <br>
                    <label>ユーザー種別：
                        <select name="kanri_flg">
                            <option value="0">一般者</option>
                            <option value="1">管理者</option>
                        </select>
                    </label>
                    <br>
                    <label>利用フラグ：
                        <select name="life_flg">
                            <option value="0">使用中</option>
                            <option value="1">未使用</option>
                        </select>
                    </label>
                    <br>
                    <br>
                    <input type="submit" value="送信">

                </fieldset>
            </div>
        </form>
        <!-- Main[End] -->

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
    </body>

    </html>