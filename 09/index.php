
<?php

session_start();
//$sid = session_id();

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

    $user_drop  = '<ul class="nav navbar-nav navbar-right">';
    $user_drop .= '<li class="dropdown">';
    $user_drop .= '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">'.$name.'（ユーザー）';
    $user_drop .= '<span class="caret"></span></a>';
    $user_drop .= '<ul class="dropdown-menu" role="menu">';
    $user_drop .= '<li class="divider"></li>';
    $user_drop .= '<li><a href="logout.php">ログアウト</a></li>';
    $user_drop .= '</ul></li></ul>';


    //一般者と管理者でドロップダウンの内容を変える
    if($kanri_flg == '0'){
        $drop = $user_drop;
    }
    else if($kanri_flg == '1'){
        $drop = $kanri_drop;
    }

}

//ログイン無しの場合はリンク無し一覧ページに飛ばす
else {
    header("location:select_nologin.php");
}

?>


<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>本をブックマーク</title>
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
                    <li class="active"><a href="index.php">ブックマーク登録</a></li>
                </ul>

                <?php
                echo $drop;
                ?>
            </div>
        </nav>
    </header>
    <!-- Head[End] -->

    <!-- Main[Start] -->
    <form method="post" action="insert.php">
        <div class="jumbotron">
            <fieldset>
                <legend>本をブックマークするフォーム（amazon限定版）</legend>
                <label>書籍名：
                    <input type="text" name="book_name">
                </label>
                <br>
                <label>amazon_URL：
                    <input type="text" name="url">
                </label>
                <br>
                <label>
                    <textArea name="comment" rows="4" cols="40"></textArea>
                </label>
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