(function () {
    "use strict";

    //    var slider = document.getElementById('slider');
    //    var label = document.getElementById('label');




    //    require('./Tone.js-master/build/Tone.min.js');

    //鍵盤の幅設定
    var num;
    var pnum;

    //選択した鍵盤の保存
    var scaleNotes = new Array;
    var setNo = 0;

    var c_but_flag = false;

    //   スケール設定

    var scaleC4 = [
        ['c4', '261.6'],
        ['d4', '293.7'],
        ['e4', '329.6'],
        ['f4', '349.2'],
        ['g4', '392.0'],
        ['a4', '440.0'],
        ['b4', '493.9'],
        ['c5', '523.3']
    ];

    var scaleD4 = [
        ['d4', '293.7'],
        ['e4', '329.6'],
        ['gb4', '370.0'],
        ['g4', '392.0'],
        ['a4', '440.0'],
        ['b4', '493.9'],
        ['db5', '554.4'],
        ['d5', '587.3']
    ];

    var scaleE4 = [
        ['e4', '329.6'],
        ['gb4', '370.0'],
        ['ab4', '415.3'],
        ['a4', '440.0'],
        ['b4', '493.9'],
        ['db5', '554.4'],
        ['eb5', '622.3'],
        ['e5', '659.3']
    ];

    var scaleF4 = [
        ['f4', '349.2'],
        ['g4', '392.0'],
        ['a4', '440.0'],
        ['bb4', '466.2'],
        ['c5', '523.3'],
        ['d5', '587.3'],
        ['e5', '659.3'],
        ['f5', '698.5']
    ];

    var scaleG4 = [
        ['g4', '392.0'],
        ['a4', '440.0'],
        ['b4', '493.9'],
        ['c5', '523.3'],
        ['d5', '587.3'],
        ['e5', '659.3'],
        ['gb5', '740.0'],
        ['g5', '784.0']
        ];

    var scaleA4 = [
        ['a4', '440.0'],
        ['b4', '493.9'],
        ['db5', '554.4'],
        ['d5', '587.3'],
        ['e5', '659.3'],
        ['gb5', '740.0'],
        ['ab5', '830.6'],
        ['a5', '880.0']
    ];

    var scaleB4 = [
        ['b4', '493.9'],
        ['db5', '554.4'],
        ['eb5', '622.3'],
        ['e5', '659.3'],
        ['gb5', '740.0'],
        ['ab5', '830.6'],
        ['bb5', '932.3'],
        ['b5', '987.8']
    ];

    var scaleDb4 = [
        ['db4', '277.2'],
        ['eb4', '311.1'],
        ['f4', '349.2'],
        ['gb4', '370.0'],
        ['ab4', '415.3'],
        ['bb4', '466.2'],
        ['c5', '523.3'],
        ['db5', '554.4']
    ];

    var scaleEb4 = [
        ['eb4', '311.1'],
        ['f4', '349.2'],
        ['g4', '392.0'],
        ['ab4', '415.3'],
        ['bb4', '466.2'],
        ['c5', '523.3'],
        ['d5', '587.3'],
        ['eb5', '622.3']


    ];

    var scaleGb4 = [
        ['gb4', '370.0'],
        ['ab4', '415.3'],
        ['bb4', '466.2'],
        ['b4', '493.9'],
        ['db5', '554.4'],
        ['eb5', '622.3'],
        ['f5', '698.5'],
        ['gb5', '740.0']
    ];

    var scaleAb4 = [
        ['ab4', '415.3'],
        ['bb4', '466.2'],
        ['c5', '523.3'],
        ['db5', '554.4'],
        ['eb5', '622.3'],
        ['f5', '698.5'],
        ['g5', '784.0'],
        ['ab5', '830.6']
    ];

    var scaleBb4 = [
        ['bb4', '466.2'],
        ['c5', '523.3'],
        ['d5', '587.3'],
        ['eb5', '622.3'],
        ['f5', '698.5'],
        ['g5', '784.0'],
        ['a5', '880.0'],
        ['bb5', '932.3']

    ];

    var scaleAll = [
        scaleC4,
        scaleDb4,
        scaleD4,
        scaleEb4,
        scaleE4,
        scaleF4,
        scaleGb4,
        scaleG4,
        scaleAb4,
        scaleA4,
        scaleBb4,
        scaleB4

    ];

    //    slider.addEventListener('change', function () {
    //        label.innerHTML = this.value;
    //    });


    $("#slider").change(function () {
        num = $(this).val();

        $("#label").text(num);
        $(".oct-container").css("width", 84 * num);

        $(".white").css("width", 12 * num);
        $(".wbut").css("width", 12 * num);

        $(".d").css("left", 12 * num);
        $(".e").css("left", 12 * num * 2);
        $(".f").css("left", 12 * num * 3);
        $(".g").css("left", 12 * num * 4);
        $(".a").css("left", 12 * num * 5);
        $(".b").css("left", 12 * num * 6);

        $(".black").css("width", 7 * num + 7);
        $(".bbut").css("width", 7 * num + 7);

        $(".db").css("left", 7 * num);
        $(".eb").css("left", 7 * num * 3);
        $(".gb").css("left", 7 * num * 6);
        $(".ab").css("left", 7 * num * 8);
        $(".bb").css("left", 7 * num * 10);
    })

    //スケールヒント表示
    $("#c_but").click(function () {
        if (!c_but_flag) {
            $("#c4").css("background-color", "lightgreen");
            $("#d4").css("background-color", "lightgreen");
            $("#e4").css("background-color", "lightgreen");
            $("#f4").css("background-color", "lightgreen");
            $("#g4").css("background-color", "lightgreen");
            $("#a4").css("background-color", "lightgreen");
            $("#b4").css("background-color", "lightgreen");
            $("#c_but").text("ON");
            c_but_flag = true;


        }
        if (c_but_flag) {
            $("#c4").css("background-color", "#d6d6d6");
            $("#d4").css("background-color", "#d6d6d6");
            $("#e4").css("background-color", "#d6d6d6");
            $("#f4").css("background-color", "#d6d6d6");
            $("#g4").css("background-color", "#d6d6d6");
            $("#a4").css("background-color", "#d6d6d6");
            $("#b4").css("background-color", "#d6d6d6");
            $("#c_but").text("OFF");
            c_but_flag = false;
        }
    })

    //音を鳴らす
    //    $("#pianokey").click(function () {
    //       var synth = new Tone.SimpleSynth().toMaster();
    //        synth.triggerAttackRelease('C5', '2n');
    //    })


    window.AudioContext = window.AudioContext || window.webkitAudioContext; //クロスブラウザ対応
    var audioCtx = new AudioContext();


    //関数定義（単音鳴らす）
    function noteOn(hz) {
        var osciillator = audioCtx.createOscillator();

        //ヘルツ（周波数）指定
        //console.log(hz);

        osciillator.frequency.value = hz;

        //音の出力先
        var audioDestination = audioCtx.destination;

        //出力先のスピーカーに接続
        osciillator.connect(audioDestination);

        //音を出す
        osciillator.start = osciillator.start || osciillator.noteOn; //クロスブラウザ対応
        osciillator.start();

        //音を秒後にストップ
        setTimeout(function () {
            osciillator.stop();
        }, 300);

    }

    //関数定義（スケール鳴らす）

    var int = 300;
    var flashTime = 200;

    function scaleOn(int, hz1, hz2, hz3, hz4, hz5, hz6, hz7, hz8) {
        setTimeout(function () {
            noteOn(hz1);
        }, int);

        setTimeout(function () {
            noteOn(hz2);
        }, int * 2);


        setTimeout(function () {
            noteOn(hz3);
        }, int * 3);


        setTimeout(function () {
            noteOn(hz4);
        }, int * 4);


        setTimeout(function () {
            noteOn(hz5);
        }, int * 5);


        setTimeout(function () {
            noteOn(hz6);
        }, int * 6);


        setTimeout(function () {
            noteOn(hz7);
        }, int * 7);


        setTimeout(function () {
            noteOn(hz8);
        }, int * 8);

    }

    //関数定義（選択した鍵盤のクリア）
    function keyClear() {
        $(".key.white").css("background-color", "white");
        $(".key.black").css("background-color", "black");
        $('.inputKey').text("").css("background-color", "white");
        $("#anserChk").removeClass('active');
        scaleNotes = [];
        setNo = 0;
    }


    //選択した鍵盤をクリアする処理
    $("#keyClear").click(function () {
        keyClear();
        console.log(scaleNotes);
        console.log(setNo);
    })

    //鍵盤を押したときの処理

    $(".key").mouseup(function () {
        $(this).removeClass('active');
    });
    $(".key").mousedown(function () {

        $(this).addClass('active');
        var note = $(this).attr("data-note");
        var hz = $(this).attr("data-hz");

        //2番目以降（配列データあり）
        if (Object.keys(scaleNotes).length) {
            setNo = Object.keys(scaleNotes).length;

            var lastNote = scaleNotes[setNo - 1][0];
            var chkdKey = false
            for (var i = 0; i < setNo; i++) {
                if (scaleNotes[i][0] === note) {
                    chkdKey = true;
                }
            }

            //選択済みの鍵盤だった場合
            if (note === lastNote) {
                var removeNote = [note, hz];
                scaleNotes.pop(
                    removeNote
                );
                $("#notes").text(setNo - 1);


                var className = $(this).attr("class");

                //選択を戻す
                if (className.indexOf("white") != -1) {
                    $(this).css("background-color", "white");
                } else if (className.indexOf("black") != -1) {
                    $(this).css("background-color", "#000000");
                }


                if (setNo === 1) {
                    $('.inputKey' + '.first').text("");
                }
                if (setNo === 2) {
                    $('.inputKey' + ".second").text("");
                }
                if (setNo === 3) {
                    $('.inputKey' + ".third").text("");
                }
                if (setNo === 4) {
                    $('.inputKey' + ".fourth").text("");
                }
                if (setNo === 5) {
                    $('.inputKey' + ".fifth").text("");
                }
                if (setNo === 6) {
                    $('.inputKey' + ".sixth").text("");
                }
                if (setNo === 7) {
                    $('.inputKey' + ".seventh").text("");
                }
                if (setNo === 8) {
                    $('.inputKey' + ".eighth").text("");
                    //答合せボタンをオフにする
                    $("#anserChk").removeClass('active');
                }

            } else if (setNo === 8) {
                alert("８つ選択済みです");

            } else if (chkdKey) {
                alert("最後のキーからもどしてください");
            } else {

                var setNote = [note, hz];
                scaleNotes.push(
                    setNote
                );

                $("#notes").text(setNo + 1);
                $(this).css("background-color", "yellow");


                console.log(scaleNotes);
                console.log(setNote);
                console.log(scaleNotes[setNo][0]);

                if (setNo === 0) {
                    $('.inputKey' + ".first").text(note);
                }
                if (setNo === 1) {
                    $('.inputKey' + ".second").text(note);
                }
                if (setNo === 2) {
                    $('.inputKey' + ".third").text(note);
                }
                if (setNo === 3) {
                    $('.inputKey' + ".fourth").text(note);
                }
                if (setNo === 4) {
                    $('.inputKey' + ".fifth").text(note);
                }
                if (setNo === 5) {
                    $('.inputKey' + ".sixth").text(note);
                }
                if (setNo === 6) {
                    $('.inputKey' + ".seventh").text(note);
                }
                if (setNo === 7) {
                    $('.inputKey' + ".eighth").text(note);
                    //答合せボタンをアクティブにする
                    $("#anserChk").addClass('active');
                }
                noteOn(hz);

            }


            //配列０の場合（１番目を押したとき）
        } else {
            var setNote = [note, hz];
            scaleNotes.push(
                setNote
            );

            noteOn(hz);


            setNo = 0;
            $('.inputKey' + ".first").text(note);
            $("#notes").text(setNo + 1);
            $(this).css("background-color", "yellow");


            console.log(scaleNotes);
            console.log(setNote);
        }

    });


    //音をならす

    //    $("#scaleChk").click(function () {
    //        for (var i = 0; i < Object.keys(scaleNotes).length; i++) {
    //            var phz = scaleNotes[i][1]
    //            setTimeout(function () {
    //                noteOn(phz);
    //            }, i * 500 + 300);
    //
    //            console.log(phz);
    //        }
    //    })


    //答え合わせ
    $("#anserChk").click(function () {

        //音を鳴らす間隔

        //入力されたスケールの音階作成
        var hz1 = scaleNotes[0][1];
        var hz2 = scaleNotes[1][1];
        var hz3 = scaleNotes[2][1];
        var hz4 = scaleNotes[3][1];
        var hz5 = scaleNotes[4][1];
        var hz6 = scaleNotes[5][1];
        var hz7 = scaleNotes[6][1];
        var hz8 = scaleNotes[7][1];

        //正しいスケールの音階作成
        var ahz1 = scaleAll[slectedScaleNo][0][1];
        var ahz2 = scaleAll[slectedScaleNo][1][1];
        var ahz3 = scaleAll[slectedScaleNo][2][1];
        var ahz4 = scaleAll[slectedScaleNo][3][1];
        var ahz5 = scaleAll[slectedScaleNo][4][1];
        var ahz6 = scaleAll[slectedScaleNo][5][1];
        var ahz7 = scaleAll[slectedScaleNo][6][1];
        var ahz8 = scaleAll[slectedScaleNo][7][1];

        //入力された音階を鳴らす
        setTimeout(function () {
            noteOn(hz1);
            $('.inputKey' + '.first').css('background-color', 'yellow');
            setTimeout(function () {
                $('.inputKey' + '.first').css('background-color', 'white');
            }, flashTime)
        }, int);
        console.log(hz1);

        setTimeout(function () {
            noteOn(hz2);
            $('.inputKey' + '.second').css('background-color', 'yellow');
            setTimeout(function () {
                $('.inputKey' + '.second').css('background-color', 'white');
            }, flashTime)
        }, int * 2);
        console.log(hz2);

        setTimeout(function () {
            noteOn(hz3);
            $('.inputKey' + '.third').css('background-color', 'yellow');
            setTimeout(function () {
                $('.inputKey' + '.third').css('background-color', 'white');
            }, flashTime)
        }, int * 3);
        console.log(hz3);

        setTimeout(function () {
            noteOn(hz4);
            $('.inputKey' + '.fourth').css('background-color', 'yellow');
            setTimeout(function () {
                $('.inputKey' + '.fourth').css('background-color', 'white');
            }, flashTime)
        }, int * 4);
        console.log(hz4);

        setTimeout(function () {
            noteOn(hz5);
            $('.inputKey' + '.fifth').css('background-color', 'yellow');
            setTimeout(function () {
                $('.inputKey' + '.fifth').css('background-color', 'white');
            }, flashTime)
        }, int * 5);
        console.log(hz5);

        setTimeout(function () {
            noteOn(hz6);
            $('.inputKey' + '.sixth').css('background-color', 'yellow');
            setTimeout(function () {
                $('.inputKey' + '.sixth').css('background-color', 'white');
            }, flashTime)
        }, int * 6);
        console.log(hz6);

        setTimeout(function () {
            noteOn(hz7);
            $('.inputKey' + '.seventh').css('background-color', 'yellow');
            setTimeout(function () {
                $('.inputKey' + '.seventh').css('background-color', 'white');
            }, flashTime)
        }, int * 7);
        console.log(hz7);

        setTimeout(function () {
            noteOn(hz8);
            $('.inputKey' + '.eighth').css('background-color', 'yellow');
            setTimeout(function () {
                $('.inputKey' + '.eighth').css('background-color', 'white');
            }, flashTime)
        }, int * 8);
        console.log(hz8);

        //正解を鳴らす
        setTimeout(function () {

            setTimeout(function () {
                noteOn(ahz1);
            }, int);
            console.log(ahz1);

            setTimeout(function () {
                noteOn(ahz2);
            }, int * 2);
            console.log(ahz2);

            setTimeout(function () {
                noteOn(ahz3);
            }, int * 3);
            console.log(ahz3);

            setTimeout(function () {
                noteOn(ahz4);
            }, int * 4);
            console.log(ahz4);

            setTimeout(function () {
                noteOn(ahz5);
            }, int * 5);
            console.log(ahz5);

            setTimeout(function () {
                noteOn(ahz6);
            }, int * 6);
            console.log(hz6);

            setTimeout(function () {
                noteOn(ahz7);
            }, int * 7);
            console.log(ahz7);

            setTimeout(function () {
                noteOn(ahz8);
            }, int * 8);
            console.log(ahz8);

            //答えのキー表示＋判定

            setTimeout(function () {
                $('.anserKey' + '.first').text(scaleAll[slectedScaleNo][0][0]);

                if (hz1 === ahz1) {
                    $('.inputKey' + '.first').css('background-color', 'pink');
                    $('.result' + '.first').text('◎');

                } else {
                    $('.inputKey' + '.first').css('background-color', 'gray');
                    $('.result' + '.first').text('☓');
                }

                console.log(ahz1);
                var test = $('.result' + '.first').text();
                console.log(test);
            }, int);

            setTimeout(function () {
                $('.anserKey' + '.second').text(scaleAll[slectedScaleNo][1][0]);
                if (hz2 === ahz2) {
                    $('.inputKey' + '.second').css('background-color', 'pink');
                    $('.result' + '.second').text('bbb');
                } else {
                    $('.inputKey' + '.second').css('background-color', 'gray');
                    $('.result' + '.second').text('ccc');
                }
            }, int * 2);

            console.log(ahz2);

            setTimeout(function () {
                $('.anserKey' + '.third').text(scaleAll[slectedScaleNo][2][0]);
                if (hz3 === ahz3) {
                    $('.inputKey' + '.third').css('background-color', 'pink');
                    $('.result' + '.third').text('◎');
                } else {
                    $('.inputKey' + '.third').css('background-color', 'gray');
                    $('.result' + '.third').text('☓');
                }
            }, int * 3);

            console.log(ahz3);

            setTimeout(function () {
                $('.anserKey' + '.fourth').text(scaleAll[slectedScaleNo][3][0]);
                if (hz4 === ahz4) {
                    $('.inputKey' + '.fourth').css('background-color', 'pink');
                    $('.result' + '.fourth').text('◎');
                } else {
                    $('.inputKey' + '.fourth').css('background-color', 'gray');
                    $('.result' + '.fourth').text('☓');
                }
            }, int * 4);
            console.log(ahz4);


            setTimeout(function () {
                $('.anserKey' + '.fifth').text(scaleAll[slectedScaleNo][4][0]);
                if (hz5 === ahz5) {
                    $('.inputKey' + '.fifth').css('background-color', 'pink');
                    $('.result' + '.fifth').text('◎');
                } else {
                    $('.inputKey' + '.fifth').css('background-color', 'gray');
                    $('.result' + '.fifth').text('☓');
                }
            }, int * 5);
            console.log(ahz5);

            setTimeout(function () {
                $('.anserKey' + '.sixth').text(scaleAll[slectedScaleNo][5][0]);
                if (hz6 === ahz6) {
                    $('.inputKey' + '.sixth').css('background-color', 'pink');
                    $('.result' + '.sixth').text('◎');
                } else {
                    $('.inputKey' + '.sixth').css('background-color', 'gray');
                    $('.result' + '.sixth').text('☓');
                }
            }, int * 6);
            console.log(hz6);


            setTimeout(function () {
                noteOn(ahz7);
                $('.anserKey' + '.seventh').text(scaleAll[slectedScaleNo][6][0]);
                if (hz7 === ahz7) {
                    $('.inputKey' + '.seventh').css('background-color', 'pink');
                    $('.result' + '.seventh').text('◎');
                } else {
                    $('.inputKey' + '.seventh').css('background-color', 'gray');
                    $('.result' + '.seventh').text('☓');
                }
            }, int * 7);
            console.log(ahz7);

            setTimeout(function () {
                $('.anserKey' + '.eighth').text(scaleAll[slectedScaleNo][7][0]);
                if (hz8 === ahz8) {
                    $('.inputKey' + '.eighth').css('background-color', 'pink');
                    $('.result' + '.eighth').text('◎');
                } else {
                    $('.inputKey' + '.eighth').css('background-color', 'gray');
                    $('.result' + '.eighth').text('☓');
                }
            }, int * 8);
            console.log(ahz8);


        }, int * 11);

    });



    //★★スケール選択

    var slectedScale = "";
    var slectedScaleNo = "";
    var hintOn = false;


    console.log(scaleE4[1][1])


    $(".selectBut").click(function () {

        //ボタンを一旦全て元にもどす
        //$(".selectBut").css('color', 'white');
        $(".selectBut").removeClass('on');
        //鍵盤の色を全て元にもどす
        $(".white").css('background-color', 'white');
        $(".black").css('background-color', 'black');

        //選択済みの鍵盤（配列）をもどす
        scaleNotes = [];
        $('.inputKey').text("");

        //答合せが残っている場合はもどす
        $('.anserKey').text("");

        //ヒント2フラグを戻す
        $("#hint2-on").attr('value', 'ON');
        hint2Flug = false;


        //押下スケール取得
        var scale = $(this).attr("data-scale");
        var scaleNo = $(this).attr("data-scaleNo");

        //該当のボタンをへこませる
        //$(this).css('color', 'pink');
        $(this).addClass('on');
        //問題テキスト表示
        $("#contents-box").html('<p>' + scale + 'メジャースケールを</p><p>選択してください</p>');

        console.log(scale);

        //selectScaleフラグ書換え
        slectedScale = scale;
        slectedScaleNo = scaleNo;

        //最初と最後の鍵盤に色付
        var startKey = scaleAll[slectedScaleNo][0][0];
        var endKey = scaleAll[slectedScaleNo][7][0];
        $('#' + startKey).css('background-color', 'royalblue');
        $('#' + endKey).css('background-color', 'royalblue');
        console.log(slectedScale);
        console.log(slectedScaleNo);

    });

    //ロード時はCを選択済みにする

    function selectScaleInit() {
        //Cボタンをへこませる
        $(".selectBut.sel_c").addClass('on');
        //問題テキスト表示
        $("#contents-box").html('<p>Cメジャースケールを</p><p>選択してください</p>');

        slectedScale = scaleC4;
        slectedScaleNo = 0;

        //最初と最後の鍵盤に色付
        var startKey = scaleAll[0][0][0];
        var endKey = scaleAll[0][7][0];
        $('#' + startKey).css('background-color', 'royalblue');
        $('#' + endKey).css('background-color', 'royalblue');
    }

    selectScaleInit();





    //答え表示
    $("#hintAllBut").click(function () {

        //確認用
        console.log(slectedScale);
        console.log(slectedScaleNo);
        console.log(scaleAll[slectedScaleNo][0][0]);


        //鍵盤の色を全て元もどす
        $(".white").css('background-color', '#d6d6d6');
        $(".black").css('background-color', 'black');

        if (!hintOn) {
            //ボタンをへこませる
            $(this).css('background-color', 'royalblue');

            //フラグ変更
            hintOn = true;

            //鍵盤にヒントallを表示

            for (var i = 0; i < 8; i++) {
                var id = scaleAll[slectedScaleNo][i][0];
                $('#' + id).css('background-color', 'royalblue');
            }

        } else {
            //ボタンをもどす
            $(this).css('background-color', 'white');

            //フラグ変更
            hintOn = false;

        }

    });

    //★★ヒント

    //表示
    $('#hint1').click(function () {
        $('#hint1-modal').fadeIn();
    });

    $('#hint2').click(function () {
        $('#hint2-modal').fadeIn();
    });

    $('#hint3').click(function () {
        $('#hint3-modal').fadeIn();
    });



    //閉じる
    $('.close-modal').click(function () {
        $('#hint1-modal').fadeOut();
    });

    $('.close-modal').click(function () {
        $('#hint2-modal').fadeOut();
    });

    $('.close-modal').click(function () {
        $('#hint3-modal').fadeOut();
    });


    //ヒント1処理
    $("#hint1-on").click(function () {
        var ahz1 = scaleAll[slectedScaleNo][0][1];
        var ahz2 = scaleAll[slectedScaleNo][1][1];
        var ahz3 = scaleAll[slectedScaleNo][2][1];
        var ahz4 = scaleAll[slectedScaleNo][3][1];
        var ahz5 = scaleAll[slectedScaleNo][4][1];
        var ahz6 = scaleAll[slectedScaleNo][5][1];
        var ahz7 = scaleAll[slectedScaleNo][6][1];
        var ahz8 = scaleAll[slectedScaleNo][7][1];

        scaleOn(int, ahz1, ahz2, ahz3, ahz4, ahz5, ahz6, ahz7, ahz8);
    })


    //ヒント2処理

    var hint2Flug = false;
    $("#hint2-on").click(function () {
        //確認用
        console.log(slectedScale);
        console.log(slectedScaleNo);
        console.log(scaleAll[slectedScaleNo][0][0]);


        //鍵盤の色を全て元もどす
        $(".white").css('background-color', 'white');
        $(".black").css('background-color', 'black');

        if (!hint2Flug) {
            //ボタン表示を切り替える
            $(this).attr('value', 'OFF');

            //フラグ変更
            hint2Flug = true;

            //鍵盤にヒントallを表示

            for (var i = 0; i < 8; i++) {
                var id = scaleAll[slectedScaleNo][i][0];
                $('#' + id).css('background-color', 'royalblue');
            }

        } else {
            //ボタン表示を切り替える
            $(this).attr('value', 'ON');

            //フラグ変更
            hint2Flug = false;

        }
    })


    //レッスンモーダル

    //初期状態
    var currentSlideNo = 0;
    var changeSlideNo = "";
    var slideNo = 0

    //表示
    $('.slide-panel').click(function () {

        //クリックされたパネル番号取得
        slideNo = $('.slide-panel').index($(this));

        //全てのスライドを非アクティブ・該当スライドをアクティブ
        $(".slide-panel").removeClass('active');
        $(".slide-panel").eq(slideNo).addClass('active');

        //全てのパネルを非アクティブ・該当パネルをアクティブ
        //        $(".lesson-contents").removeClass('active');
        //        $(".lesson-contents").eq(slideNo).addClass('active');

        $(".lesson-contents").removeClass('active');
        $(".lesson-contents").eq(slideNo).addClass('active');

        console.log(slideNo);
        //スライド番号を書き換え
        currentSlideNo = slideNo;
        console.log(currentSlideNo);

        //モーダルON
        $('.lesson-modal-wrapper').fadeIn();

        //スライドNo両端の場合のボタン非アクティブする
        slideNoChk(currentSlideNo);
    });


    //閉じる
    $('.close-modal').click(function () {
        $('.lesson-modal-wrapper').fadeOut();
    });


    //PREV&NEXT処理（fadeIN）

    $(".change-button").click(function () {

        if ($(this).hasClass('next')) {
            changeSlideNo = currentSlideNo + 1;
        }
        if ($(this).hasClass('prev')) {
            changeSlideNo = currentSlideNo - 1;
        }
        slideChange(currentSlideNo, changeSlideNo);

        currentSlideNo = changeSlideNo;

        slideNoChk(changeSlideNo);

        console.log(changeSlideNo);
        console.log(currentSlideNo);

    });

    //    $("#prev-button").click(function () {
    //        var nextSlideNo = currentSlideNo - 1;
    //        slideChange(currentSlideNo,nextSlideNo);
    //        currentSlideNo -= 1;
    //        
    //        console.log(nextSlideNo);
    //        console.log(currentSlideNo);
    //    });


    //関数定義（スライドNo両端の場合のボタン非アクティブする）
    function slideNoChk(currentSlideNo) {
        $(".change-button").removeClass('disabled');
        if (currentSlideNo === 7) {
            $(".change-button.next").addClass('disabled');
        }
        if (currentSlideNo === 0) {
            $(".change-button.prev").addClass('disabled');
        }
    }

    //関数定義（スライド切替え）
    function slideChange(currentSlideNo, changeSlideNo) {
        $(".lesson-contents").eq(currentSlideNo).fadeOut();
        $(".lesson-contents").eq(changeSlideNo).fadeIn();
    }



    //NEXT処理（カルーセルテスト）    
    //    function callback() {
    //        $('.lesson-contents').eq(0).remove().appendTo(".lesson-modal");
    //
    //    }
    //
    //    $(".next-button").click(function () {
    //
    //        var val = $(".lesson-modal").outerWidth();
    //        $('.lesson-contents').animate({
    //            'marginLeft': val * -1
    //        }, 500, 'swing', callback);
    //
    //    });


    //DAW画面


    var trackNo = 3;
    var result = [];

    //track追加

    $("#addTrackButton").click(function () {

        var trackAddTag = '';
        var trackMainAddTag = '';

        //トラック左側
        trackAddTag += '<div class="ui-state-defaults" id="' + trackNo + 't">';
        trackAddTag += '<div class="track-set-top">';
        trackAddTag += '<div class="track-set-name"><div class="track-set-nameSpase">Track ' + trackNo + '</div>';
        trackAddTag += '</div>';
        trackAddTag += '<div class="track-set-other"><i class="fa fa-cog"></i></div>';
        trackAddTag += '</div>';
        trackAddTag += '<div class="track-set-main">';
        trackAddTag += '<div class="track-set-type"><img src="./img/Piano_icon.jpg"></div>';
        trackAddTag += '<div class="track-set-button">';
        trackAddTag += '<div class="track-set-buttons" id="muteTrack">M</div>';
        trackAddTag += '<div class="track-set-buttons" id="soloTrack">S</div>';
        trackAddTag += '<div class="track-set-buttons" id="recTrack">R</div>';
        trackAddTag += '</div>';
        trackAddTag += '<div class="track-set-volume"><div class="slider"></div></div>';
        trackAddTag += '<div class="track-set-pan">';
        trackAddTag += '<img src="./img/Pan_icon.jpg">';
        trackAddTag += '</div>';
        trackAddTag += '</div>';
        trackAddTag += '</div>';

        //トラックメイン
        trackMainAddTag += '<div class="track ' + trackNo + 't">';
        trackMainAddTag += 'Track ' + trackNo + '</div>';

        console.log(trackAddTag);
        $("#sortable-div").append(trackAddTag);
        $("#track-div").append(trackMainAddTag);
        trackNo++;
        console.log(trackNo);
    });

    //track並べ替え
    $(function () {
        $('#sortable-div').sortable();
        //        result = $("#sortable-li").sortable("toArray");
        //        console.log(result);
    });

    $('#sortable-div').mouseup(function () {
        setTimeout(function () {
            result = $("#sortable-div").sortable("toArray");
            console.log(result);
            for (var i = 0; i < result.length; i++) {
                var value = result[i];
                console.log(value);
                $('.' + value).appendTo("#track-div");
            }
        }, 100);

    });



    //trackオプション表示
//        $(".track-set-other .fa-cog").click(function () {
//            
//            var value = $(this).parent().parent().parent().attr('id');
//            console.log(value);
//            $('.track-set-option-box.' + value).slideToggle(100);
//        })
//        
//        $(".track-set-option").mouseover(function(){
//            $(this).addClass('active');
//        })
//        
//        $(".track-set-option").mouseout(function(){
//            $(this).removeClass('active');
//        })
    
    //track削除
        
        //ドロップダウン版
//            $(".track-set-option.delete").click(function () {
//        var value = $(this).parent().parent().attr('id');
//        console.log(value);
//                $(this).parent().parent().parent().remove();
//        $('.track.' + value).remove();
//    })
            
        //（仮）アイコン直版
        $(".track-set-other .fa-cog").click(function () {
                //        $(this).parent().remove();
                //        $(this).parent().parent().remove();
            var value = $(this).parent().parent().parent().attr('id');
                console.log(value);
                //        $('.' + value).remove();
                $(this).parent().parent().parent().remove();
                $('.track.' + value).remove();
                        alert('click');
            })
        
        $(".daw-main").on('click','.fa-cog', function () {
            //        $(this).parent().remove();
            //        $(this).parent().parent().remove();
            var value = $(this).parent().parent().parent().attr('id');
            console.log(value);
            //        $('.' + value).remove();
            $(this).parent().parent().parent().remove();
            $('.track.' + value).remove();
            alert('click');
        })



    
    
    
    //スライダー
    $(function () {
        $(".slider").slider({
            max: 127, //最大値
            min: 0, //最小値
            value: 80, //初期値
            step: 1, //幅
        });
    });


    //DAW下部のパネル

    //KeyBoard表示切り替え
    var keyboardOn = false;
    $('#onPianoKeybord').on('click', function () {

        if (!keyboardOn) {
            $(".keyboard").slideDown();
            $(this).addClass('active');
            keyboardOn = true;
        } else {
            $(".keyboard").slideUp();
            $(this).removeClass('active');
            keyboardOn = false;
        }
    });

    //ピアノロール表示切り替え
    var pianoRollOn = false;
    $('#onPianoRoll').on('click', function () {

        if (!pianoRollOn) {
            $(".main3").slideDown();
            $(this).addClass('active');
            pianoRollOn = true;
        } else {
            $(".main3").slideUp();
            $(this).removeClass('active');
            pianoRollOn = false;
        }
    });


    //鍵盤押した処理

    //KeyBoard
    $('.boardKey.white').mousedown(function () {
        $(this).addClass('pushd');
    })
    $('.boardKey.white').mouseup(function () {
        $(this).removeClass('pushd');
    })

    $('.boardKey.black').mousedown(function () {
        $(this).addClass('pushd');
    })
    $('.boardKey.black').mouseup(function () {
        $(this).removeClass('pushd');
    })

    //ピアノロール
    $('.rollKey.white').mousedown(function () {
        $(this).addClass('pushd');
    })
    $('.rollKey.white').mouseup(function () {
        $(this).removeClass('pushd');
    })

    $('.rollKey.black').mousedown(function () {
        $(this).addClass('pushd');
    })
    $('.rollKey.black').mouseup(function () {
        $(this).removeClass('pushd');
    })

    //ツールボタン切り替え処理
    $('.pianoRoll-tool').click(function () {
        $('.pianoRoll-tool').removeClass('active');
        $(this).addClass('active');
    })

    //プレイツール関連処理

    //KeyBoard幅変更
    //ボタン色
    $('.keyboard-tool').mousedown(function () {
        $(this).addClass('pushd');
    })
    $('.keyboard-tool').mouseup(function () {
        $(this).removeClass('pushd');
    })

    //KeyBoardサイズ変更処理メイン
    var keyboardSize = 6;
    var keyboardWidth;
    $('.keyboard-tool.shorten').click(function () {
        keyboardSizeChk(keyboardSize);
        keyboardSize--;
        keyboardResize();
    })

    $('.keyboard-tool.extend').click(function () {
        keyboardSizeChk(keyboardSize);
        keyboardSize++;
        keyboardResize();
    })

    //KeyBoardサイズ計算&変更関数
    function keyboardResize() {
        keyboardWidth = keyboardSize * 770;
        $("#keyboard-container").css("width", keyboardWidth);
        $('.keyboard-tool.size').text(keyboardSize);
    }

    //KeyBoardサイズMIN,MAXチェック関数
    function keyboardSizeChk(keyboardSize) {
        $(".keyboard-tool").removeClass('disabled');
        if (trackSize === 2) {
            $(".keyboard-tool.shorten").addClass('disabled');
        }
        if (trackSize === 15) {
            $(".keyboard-tool.extend").addClass('disabled');
        }
    }
    
    
    //トラック幅変更
    //ボタン色
    $('.width-adjust').mousedown(function () {
        $(this).addClass('pushd');
    })
    $('.width-adjust').mouseup(function () {
        $(this).removeClass('pushd');
    })

    //トラック幅変更処理メイン
    var trackSize = 8;
    var trackWidth;
    $('.width-adjust.shorten').click(function () {
        trackSizeChk(trackSize);
        trackSize--;
        trackResize();
    })

    $('.width-adjust.extend').click(function () {
        trackSizeChk(trackSize);
        trackSize++;
        trackResize();
    })

    //トラックサイズ計算&変更関数
    function trackResize() {
        trackWidth = trackSize * 256;
        $("#pianoRoll").css("width", trackWidth);
        $(".track-main-container").css("width", trackWidth);
        $('.width-adjust.size').text(trackSize);
    }

    //トラックサイズMIN,MAXチェック関数
    function trackSizeChk(trackSize) {
        $(".width-adjust").removeClass('disabled');
        if (trackSize === 2) {
            $(".width-adjust.shorten").addClass('disabled');
        }
        if (trackSize === 23) {
            $(".width-adjust.extend").addClass('disabled');
        }
    }
})();