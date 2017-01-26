<?php


$name = $_POST["name"];
$mail = $_POST["mail"];
$reason = $_POST["reason"];
$s1 = $_POST["s1"];
$s2 = $_POST["s2"];
$next = $_POST["next"];
$opinion = $_POST["opinion"];
 
    $str = $name.",".$mail.",".$reason.",".$s1.",".$s2.",".$next.",".$opinion;
    $file = fopen("csv/data2.csv","a");	// ファイル読み込み
    flock($file, LOCK_EX);			// ファイルロック
    fwrite($file, $str."\n");
    flock($file, LOCK_UN);			// ファイルロック解除
    fclose($file);
    chmod("csv/data2.csv",0666);
    

?>

    <html>

    <head>
        <meta charset="utf-8">
        <title>File書き込み</title>
    </head>

    <body>
        回答ありがとうございました。
    </body>


    <br>
    <br>
    <input type="button" value="集計結果を見る" onClick="location.href='output_data.php'">

    </html>