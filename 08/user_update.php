<?php
//1.POSTでParamを取得

//1. POSTデータ取得

$id   = $_POST["id"];
$name   =  $_POST["name"];
$lid  =  $_POST["lid"];
$lpw  =  $_POST["lpw"];
$kanri_flg  =  $_POST["kanri_flg"];
$life_flg  =  $_POST["life_flg"];


//2. DB接続します(エラー処理追加)
try {
    $pdo = new PDO('mysql:dbname=gs_db;charset=utf8;host=localhost','root','');
} catch (PDOException $e) {
    exit('DbConnectError:'.$e->getMessage());
}


//３．データ登録SQL作成
$stmt = $pdo->prepare("UPDATE `gs_user_table` SET name=:a1, lid=:a2, lpw=:a3, kanri_flg=:a4, life_flg=:a5 WHERE id=:id");
$stmt->bindValue(':a1', $name);
$stmt->bindValue(':a2', $lid);
$stmt->bindValue(':a3', $lpw);
$stmt->bindValue(':a4', $kanri_flg);
$stmt->bindValue(':a5', $life_flg);
$stmt->bindValue(':id', $id);
$status = $stmt->execute();

//$stmt = $pdo->prepare("UPDATE `gs_an_table` SET name=:a1, email=:a2, naiyou=:a3 WHERE id=:id");
//$stmt->bindValue(':a1', $name);
//$stmt->bindValue(':a2', $email);
//$stmt->bindValue(':a3', $naiyou);
//$stmt->bindValue(':id', $id);
//$status = $stmt->execute();



//４．データ登録処理後
if($status==false){
    //SQL実行時にエラーがある場合（エラーオブジェクト取得して表示）
    $error = $stmt->errorInfo();
    exit("QueryError:".$error[2]);
}else{
    //５．user_select.phpへリダイレクト
    header("Location: user_select.php");
    exit;
}




?>
