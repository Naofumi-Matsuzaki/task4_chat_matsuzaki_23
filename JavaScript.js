
$(".open_trigger").on('click', function(){
    $(this).toggleClass('hiden_area');
    $(this).next().toggleClass('hiden_area');
});

$(".close_trigger").on('click', function(){
    $(this).toggleClass('hiden_area');
    $(this).prev().toggleClass('hiden_area');
});

// アイコンを選択したら、アイコンリストが閉じてサムネイル画像が選択された画像に切り替わるイベント
$(".imgs").on('click', function(){
    const img = ["buke.png", "tuku.jpg", "caram.png"]; // アイコン画像ファイルを配列に格納
    let d = $(this).attr('data-img'); // クリックした画像のdata-img属性の値を取得
    $(".thumbnail").attr('src', './imgs/'+img[d]); // サムネイル画像のsrc属性を書き換える
});


// メッセージをダブルクリックすると削除ボタンが表示されるイベント

$(document).on('dblclick', '.msg_wrapper', function(){
    $(this).find('.delete').toggleClass('hiden_area');
});
// データベースから追加されたメッセージ(動的に追加された要素)に対しては
// 以下の記述ではイベントが発火しなかった。document全体にイベントを登録すべし。
// $(".msg_wrapper").on('dblclick', function(){
//     $(this).find('.delete').toggleClass('hiden_area');
// });

// テキストエリアで改行されたらエリア拡大する
$("#text").on("keydown", function(e){ // #text(textarea)上にキーボード操作イベントを設定
    if(e.keyCode == 13){ // keydown変数eの中のkeycodeを取得して判断
        $('#text').css('height', '6rem');
    };
});


// 常に最新メッセージを表示する
// １．メッセージの数をカウント、変数取得
// ２．変数に応じて、scrollTopの位置を指定
// ↓ どうやらメッセージの個数が拾えてない。

// setTimeout(function(){ // パワープレイｗ
//     let post = $(".msg_wrapper").length;
//     console.log(post);  // => 1
//     let child = $("#output").children().length;
//     console.log(child); // => 1
// }, 1000);


// 今回の学び。「動的要素を取得する」って必ずしもデータベースの情報を受信したあとに発火するとは限らない
// window.onload = function(){ // なぜかこれだけだと動かない
//     let child = $("#output").children().length;
//     console.log(child);
//     $("#output").animate({scrollTop:child*10000000},100000);
// };

// $(document).ready(function(){ // なんでどっちも効かない？
//     let post = $(".msg_wrapper").length;
//     console.log(post);  // => 1
//     let child = $("#output").children().length;
//     console.log(child); // => 1
//     });
// $(window).on('load', function(){ // なんでどっちも効かない？
//     let post2 = $(".msg_wrapper").length;
//     console.log(post2); // => 1
//     let child = $("#output").children().length;
//     console.log(child); // => 1
//     });
