<?php


//1.  DB接続します
try {
  $pdo = new PDO('mysql:dbname=gs_db;charset=utf8;host=localhost','root','');
} catch (PDOException $e) {
  exit('データベースに接続できませんでした。'.$e->getMessage());
}

//２．データ登録SQL作成
$stmt = $pdo->prepare("SELECT * FROM gs_bm_table");
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
      $view .= '</td><td>'.$res["book_name"];
      $view .= '</td><td><a href="'.$res["url"].'">'.$res["url"].'</a>'; //URLはリンク
      $view .= '</td><td>'.$res["comment"];
      $view .= '</td><td>'.$res["indate"];
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
        <title>ブックマーク一覧</title>
        <link rel="stylesheet" href="css/main.css">
        <link href="css/bootstrap.min.css" rel="stylesheet">



        <style>
            body {
                text-align: center;
            }
            
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
<!--
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="select.php">ブックマーク一覧</a></li>
                        <li><a href="index.php">ブックマーク登録</a></li>
                    </ul>
-->

                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="login.php">LOGIN</a></li>
                    </ul>

                </div>
            </nav>
        </header>
        <!-- Head[End] -->

        <!-- Main[Start] -->

        <?php
//        echo $menu;
        ?>

            <div>
                <div class="container jumbotron">
                    <table border=1>
                        <tr>
                            <th>No.</th>
                            <th>書籍名</th>
                            <th>amazon_URL</th>
                            <th>コメント</th>
                            <th>登録日時</th>
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