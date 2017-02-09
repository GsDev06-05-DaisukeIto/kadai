<?php
$id = $_GET["id"];

//1.  DB接続します
try {
    $pdo = new PDO('mysql:dbname=gs_db;charset=utf8;host=localhost','root','');
} catch (PDOException $e) {
    exit('データベースに接続できませんでした。'.$e->getMessage());
}

//２．データ登録SQL作成
$stmt = $pdo->prepare("SELECT * FROM gs_user_table WHERE id=:id");
$stmt->bindValue(":id",$id,PDO::PARAM_INT); //STR or INT
$status = $stmt->execute();

//３．データ表示
$view="";
if($status==false){
    //execute（SQL実行時にエラーがある場合）
    $error = $stmt->errorInfo();
    exit("ErrorQuery:".$error[2]);
}else{

    $res = $stmt->fetch();
}
?>


<!DOCTYPE html>
<html lang="ja">

    <head>
        <meta charset="UTF-8">
        <title>本をブックマーク（ユーザ更新）</title>
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
                    <div class="navbar-header"><a class="navbar-brand" href="user_update.php">ユーザデータ一覧</a></div>
                </div>
            </nav>
        </header>
        <!-- Head[End] -->

        <!-- Main[Start] -->
        <form method="post" action="user_update.php">
            <div class="jumbotron">
                <fieldset>
                    <legend>ユーザー更新画面</legend>
                    
                    <label>ID：<?= $res["id"]?></label>
                    <br>
                    <label>名前：
                        <input type="text" name="name" value="<?= $res["name"]?>">
                    </label>
                    <br>
                    <label>ユーザID：
                        <input type="text" name="lid" value="<?= $res["lid"]?>">
                    </label>
                    <br>
                    <label>パスワード：
                        <input type="text" name="lpw" value="<?= $res["lpw"]?>">
                    </label>
                    <br>
                    <label>ユーザー種別：
                        <select name="kanri_flg">
                            <option value="0">一般者</option>
                            <option value="1" <?php if($res["kanri_flg"]=="1" ){echo "selected";} ?>>管理者</option>
                        </select>
                    </label>
                    <br>
                    <label>利用フラグ：
                        <select name="life_flg">
                            <option value="0">使用中</option>
                            <option value="1" <?php if($res["life_flg"]=="1" ){echo "selected";} ?>>未使用</option>
                        </select>
                    </label>
                    <br>
                    <br>
                    <input type="hidden" name="id" value="<?= $res["id"]?>">
                    <input type="submit" value="送信">

                </fieldset>
            </div>
        </form>
        <!-- Main[End] -->


    </body>

</html>