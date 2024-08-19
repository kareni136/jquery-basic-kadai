// HTMLドキュメントの読み込みが完了したときの処理
$(window).on('load', function() {
  console.log('loadイベントが発生しました');
});

// スクロールしたときの処理
$(window).on('scroll', function() {
  console.log('scrollイベントが発生しました');
});
