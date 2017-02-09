<?php
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
        <title>フリーアンケート表示</title>
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
                        <a class="navbar-brand" href="user_index.php">データ登録</a>
                    </div>
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

    </body>

    </html>