$(function () {
  // 「文字色変化」ボタンがクリックされたときの処理
  $('#change-color').on('click', function () {
    // #target 要素の文字色を青に変更
    $('#target').css('color', 'blue');
  });

  // 「文字内容変化」ボタンがクリックされたときの処理
  $('#change-text').on('click', function () {
    // #target 要素の文字内容を変更
    $('#target').text('Hello！');
  });

  // 「フェードアウト」ボタンがクリックされたときの処理
  $('#fade-out').on('click', function () {
    // #target 要素をフェードアウト
    $('#target').fadeOut();
  });

  // 「フェードイン」ボタンがクリックされたときの処理
  $('#fade-in').on('click', function () {
    // #target 要素をフェードイン
    $('#target').fadeIn();
  });
});
