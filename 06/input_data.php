<?php

$name = "";
$mail = "";
$reason = "";
$s1 = "";
$s2 = "";
$next = "";
$opinion = "";

//エラー処理（空欄あり）
if(isset($_POST["submit"])){
    
    if(empty($_POST["opinion"])){
        echo "<p><font color=#ff0000>意見・感想を入力してください</font></p>";
    }
    
    else{
        $opinion = $_POST["opinion"];
    }
    
    
    if(empty($_POST["name"])){
        echo "<p><font color=#ff0000>名前を入力してください</font></p>";
    }
    else{
        $name = $_POST["name"];
    }

    if(empty($_POST["mail"])){
        echo "<p><font color=#ff0000>メールアドレスを入力してください</font></p>";
    }
    
    else{
        $mail = $_POST["mail"];
    }

    $reason = $_POST["reason"];
    $s1 = $_POST["s1"];
    $s2 = $_POST["s2"];
    $next = $_POST["next"];

//空欄なしの場合結果を送信
    if((!empty($_POST['opinion'])) && (!empty($_POST['name'])) && (!empty($_POST['mail']))) { 
        header('Location: ./write.php', true, 307);
        exit;
    } 
} 
?>

    <html>

    <head>
        <meta charset="utf-8">
        <title>06課題（input_data.php）</title>
    </head>

    <body>

        <h2>セミナーアンケート</h2>

        <form action="input_data.php" method="post">
            お名前:
            <input type="text" name="name" value="<?php echo $name ?>">
            <br> EMAIL:
            <input type="text" name="mail" value="<?php echo $mail ?>">
            <br>
            <br>

            <p>Q1 本セミナーを知ったきっかけを教えてください</p>

            <select name="reason">
                <option value="弊社担当からの案内" <?php if($reason=="弊社担当からの案内" ){echo "selected";} ?>>弊社担当からの案内</option>
                <option value="雑誌広告" <?php if($reason=="雑誌広告" ){echo "selected";} ?>>雑誌広告</option>
                <option value="ネット検索" <?php if($reason=="ネット検索" ){echo "selected";} ?>>ネット検索</option>
                <option value="その他" <?php if($reason=="その他" ){echo "selected";} ?>>その他</option>
            </select>
            <br>
            <br>

            <p>Q2 各講演の満足度を教えてください</p>

            <p>講演１</p>
            <input type="radio" name="s1" value="大変不満" <?php if($s1=="大変不満" ){echo "checked";} ?>>大変不満
            <input type="radio" name="s1" value="不満" <?php if($s1=="不満" ){echo "checked";} ?>>不満
            <input type="radio" name="s1" value="普通" <?php if((!isset($_POST[ "submit"])) or ($s1=="普通" )){echo "checked";} ?>>普通
            <input type="radio" name="s1" value="満足" <?php if($s1=="満足" ){echo "checked";} ?>>満足
            <input type="radio" name="s1" value="大変満足" <?php if($s1=="大変満足" ){echo "checked";} ?>>大変満足


            <p>講演２</p>
            <input type="radio" name="s2" value="大変不満" <?php if($s2=="大変不満" ){echo "checked";} ?>>大変不満
            <input type="radio" name="s2" value="不満" <?php if($s2=="不満" ){echo "checked";} ?>>不満
            <input type="radio" name="s2" value="普通" <?php if((!isset($_POST[ "submit"])) or ($s2=="普通" )){echo "checked";} ?>>普通
            <input type="radio" name="s2" value="満足" <?php if($s2=="満足" ){echo "checked";} ?>>満足
            <input type="radio" name="s2" value="大変満足" <?php if($s2=="大変満足" ){echo "checked";} ?>>大変満足
            <br>
            <br>

            <p>Q3.次回も参加したいですか？</p>
            <input type="radio" name="next" value="参加したい" <?php if((!isset($_POST[ "submit"])) or ($next=="参加したい" )){echo "checked";} ?>>参加したい
            <input type="radio" name="next" value="参加したくない" <?php if($next=="参加したくない" ){echo "checked";} ?>>参加したくない

            <br>
            <br>
            <p>Q4.ご意見、ご感想などご記入ください</p>
            <input type="text" name="opinion" size="60" value="<?php echo $opinion ?>">

            <br>
            <br>
            <input type="submit" name="submit" value="回答する">
        </form>
        <input type="button" value="回答せずに集計結果を見る" onClick="location.href='output_data.php'">
    </body>


    </html>