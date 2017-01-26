<?php

//XSS対策
include("funcs.php");

//グラフ集計用
$s1_1 = 0;
$s1_2 = 0;
$s1_3 = 0;
$s1_4 = 0;
$s1_5 = 0;
$s2_1 = 0;
$s2_2 = 0;
$s2_3 = 0;
$s2_4 = 0;
$s2_5 = 0;
$next_1 = 0;
$next_2 = 0;

//csv読み込み
$lines = file('csv/data2.csv');

?>

    <h2>アンケート結果</h2>
    <input type="button" value="入力フォームに戻る" onClick="location.href='input_data.php'">

    <p>回答数＝
        <?php echo count($lines);?>
    </p>
    <table border=1>
        <tr>
            <th>名前</th>
            <th>email</th>
            <th>きっかけ</th>
            <th>講演１</th>
            <th>講演２</th>
            <th>次回参加</th>
            <th>意見・感想</th>
        </tr>


        <?php
        foreach($lines as $line){
            $data = explode(',',$line);

            echo '<tr><td>'.h($data[0]);
            echo '</td><td>'.h($data[1]);
            echo '</td><td>'.h($data[2]);
            echo '</td><td>'.h($data[3]);
            echo '</td><td>'.h($data[4]);
            echo '</td><td>'.h($data[5]);
            echo '</td><td>'.h($data[6]);
            echo '</td></tr>';

//グラフ集計カウント（講演１）
    switch ($data[3]) {
        case '大変不満':
            $s1_1++;
            break;
        case '不満':
            $s1_2++;
            break;
        case '普通':
            $s1_3++;
            break;
        case '満足':
            $s1_4++;
            break;
        case '大変満足':
            $s1_5++;
            break;
    }


//グラフ集計カウント（講演２）
    switch ($data[4]) {
        case '大変不満':
            $s2_1++;
            break;
        case '不満':
            $s2_2++;
            break;
        case '普通':
            $s2_3++;
            break;
        case '満足':
            $s2_4++;
            break;
        case '大変満足':
            $s2_5++;
            break;
    }

//グラフ集計カウント（次回参加）
    switch ($data[5]) {
        case '参加したい':
            $next_1++;
            break;
        case '参加したくない':
            $next_2++;
            break;
    }
            
        }
    
    ?>

    </table>

    <?php

//集計確認表示
//    echo $s1_1;
//    echo $s1_2;
//    echo $s1_3;
//    echo $s1_4;
//    echo $s1_5;
//    echo $s2_1;
//    echo $s2_2;
//    echo $s2_3;
//    echo $s2_4;
//    echo $s2_5;
//    echo $next_1;
//    echo $next_2;

?>





        <!--グラフ表示-->

        <?php
/** Include class */
include( 'GoogChart.class.php' );

/** Create chart */
$chart = new GoogChart();


// Set graph colors
$color = array(
    '#99C754',
    '#54C7C5',
    '#999999',
);

?>




            <!--Q2.講演満足度（Bar graph）-->



            <p>Q2の集計結果</p>

            <div style="width: 200px; display: inline-block; background:#ffcccc;
            border:#000000 solid 1px;">

                <!--講演１-->
                <?php
                
                // Set multiple graph data
                $dataMultiple1 = array(
                    '大変不満' => $s1_1,
                    '不満' => $s1_2,
                    '普通' => $s1_3,
                    '満足' => $s1_4,
                    '大変満足' => $s1_5

                );

    $chart->setChartAttrs( array(
        'type' => 'bar-vertical',
        'title' => '講演１の満足度',
        'data' => $dataMultiple1,
        'size' => array( 200, 200 ),
        'color' => $color,
        'labelsXY' => true,
    ));
    // Print chart
    echo $chart;
    ?>
            </div>

            <!--講演２-->

            <div style="width: 200px; display: inline-block; background:#ffcccc;
            border:#000000 solid 1px;">

                <?php
                    
                    // Set multiple graph data
                    $dataMultiple2 = array(
                        '大変不満' => $s2_1,
                        '不満' => $s2_2,
                        '普通' => $s2_3,
                        '満足' => $s2_4,
                        '大変満足' => $s2_5


                    );
                    
    $chart->setChartAttrs( array(
        'type' => 'bar-vertical',
        'title' => '講演２の満足度',
        'data' => $dataMultiple2,
        'size' => array( 200, 200 ),
        'color' => $color,
        'labelsXY' => true,
    ));
    // Print chart
    echo $chart;

    ?>

            </div>



            <!--Q4.次回参加意思（Pie chart）-->

            <p>Q4の集計結果</p>

            <div style="width: 400px; background:#ffcccc;
            border:#000000 solid 1px;">
                <?php


    // Set graph data
    $dataPie = array(
        '参加したい' => $next_1,
        '参加したくない' => $next_2
    );


    /* # Chart 1 # */

    $chart->setChartAttrs( array(
        'type' => 'pie',
        'title' => '次回も参加したいですか？',
        'data' => $dataPie,
        'size' => array( 400, 200 ),
        'color' => $color
    ));
    // Print chart
    echo $chart;

    ?>

            </div>