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

//1.  DB接続します
try {
  $pdo = new PDO('mysql:dbname=gs_db;charset=utf8;host=localhost','root','');
} catch (PDOException $e) {
  exit('データベースに接続できませんでした。'.$e->getMessage());
}

//２．データ登録SQL作成
$stmt = $pdo->prepare("SELECT * FROM gs_user_table");
$status = $stmt->execute();

//３．データ表示
$view="";
if($status==false){
  //execute（SQL実行時にエラーがある場合）
  $error = $stmt->errorInfo();
  exit("ErrorQuery:".$error[2]);

}else{
  //Selectデータの数だけ自動でループしてくれる
  while( $res = $stmt->fetch(PDO::FETCH_ASSOC)){
      $view  .= '<tr><td>'.$res["id"];
      $view .= '</td><td>'.$res["name"];
      $view .= '</td><td>'.$res["lid"];
      $view .= '</td><td>'.$res["lpw"];
      $view .= '</td><td>'.$res["kanri_flg"];
      $view .= '</td><td>'.$res["life_flg"];
      $view .= '</td><td>';
      $view .= '<a href="user_detail.php?id=';
      $view .=$res["id"].'">';
      $view .= '[更新]';
      $view .= '</a>';
      $view .= '</td><td>';
      $view .= '<a href="user_delete.php?id=';
      $view .=$res["id"].'">';
      $view .= '[削除]';
      $view .= '</a>';
      $view .= '</td></tr>';
  }

}
?>


    <!DOCTYPE html>
    <html lang="ja">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>（ユーザ一覧）本をブックマーク</title>
        <link rel="stylesheet" href="css/range.css">
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <style>
            div {
                padding: 10px;
                font-size: 16px;
            }
        </style>
    </head>

    <body id="main">
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
        <div>
            <div class="container jumbotron">
                <table border=1>
                    <tr>
                        <th>No.</th>
                        <th>名前</th>
                        <th>ユーザID</th>
                        <th>パスワード</th>
                        <th>管理フラグ</th>
                        <th>利用フラグ</th>
                        <th>更新</th>
                        <th>削除</th>
                    </tr>

                    <?=$view?>

                </table>

            </div>
        </div>
        <!-- Main[End] -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
    </body>

    </html>