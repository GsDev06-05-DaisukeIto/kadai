<?php
//1. POSTデータ取得

$name   =  $_POST["book_name"];
$url  =  $_POST["url"];
$naiyou =  $_POST["comment"];

//1.1 amazonチェック＆URL短縮

if(strpos($url,'amazon.') && strpos($url,'/dp/')){
    $dpn = strpos($url,'/dp/');
    echo $dpn;
    $amz = 'http://www.amazon.co.jp';
    $surl = $amz.substr($url,$dpn,13);
}
else {
    echo '<p>amazonのURLを入力してください</p>';
    echo '<p><a href="index.php">入力ページに戻る</a></p>';
    exit;
}


//2. DB接続します
try {
  $pdo = new PDO('mysql:dbname=gs_db;charset=utf8;host=localhost','root','');
} catch (PDOException $e) {
  exit('DbConnectError:'.$e->getMessage());
}


//３．データ登録SQL作成
$stmt = $pdo->prepare("INSERT INTO gs_bm_table(id, book_name, url, comment,
indate )VALUES(NULL, :book_name, :surl, :comment, sysdate())");
$stmt->bindValue(':book_name', $name, PDO::PARAM_STR);  //Integer（数値の場合 PDO::PARAM_INT)
$stmt->bindValue(':surl', $surl, PDO::PARAM_STR);  //Integer（数値の場合 PDO::PARAM_INT)
$stmt->bindValue(':comment', $naiyou, PDO::PARAM_STR);  //Integer（数値の場合 PDO::PARAM_INT)
$status = $stmt->execute();

//４．データ登録処理後
if($status==false){
  //SQL実行時にエラーがある場合（エラーオブジェクト取得して表示）
  $error = $stmt->errorInfo();
  exit("QueryError:".$error[2]);
}else{
//５．index.phpへリダイレクト
 header("Location: index.php");
 exit;
    

}
?>