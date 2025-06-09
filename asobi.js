document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const popupOverlay = document.getElementById('popupOverlay');
    const popupQuestion = document.getElementById('popupQuestion');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    // ★★★ ここを友達向けにカスタマイズ ★★★
    const friendName = "たかし"; // 友達の名前
    const questionText = `${friendName}は今日、宿題をせずにゲームをすることを許可しますか？`;

    // 「はい」を押したときのメッセージ
    const yesMessage = `許可されました！思いっきりゲームを楽しんでね、${friendName}！`;
    // 「いいえ」を押したときのメッセージ
    const noMessage = `拒否されました。残念！でもどうせゲームするんでしょ、${friendName}？`;
    // ★★★ ここまでカスタマイズ ★★★

    // ドッキリ開始ボタンがクリックされたらポップアップを表示
    startButton.addEventListener('click', () => {
        popupQuestion.textContent = questionText; // 質問文を設定
        popupOverlay.classList.remove('hidden'); // ポップアップを表示
        startButton.style.display = 'none'; // 開始ボタンを非表示にする
    });

    // 「はい」ボタンがクリックされたら
    yesButton.addEventListener('click', () => {
        popupQuestion.textContent = yesMessage; // メッセージを更新
        yesButton.style.display = 'none'; // 「はい」ボタンを非表示
        noButton.style.display = 'none';  // 「いいえ」ボタンも非表示
        // 必要に応じて、数秒後に自動でポップアップを閉じる処理を追加
        setTimeout(() => {
            popupOverlay.classList.add('hidden');
            startButton.style.display = 'block'; // 開始ボタンを再表示
        }, 3000); // 3秒後に閉じる (ミリ秒で指定)
    });

    // 「いいえ」ボタンがクリックされたら
    noButton.addEventListener('click', () => {
        popupQuestion.textContent = noMessage; // メッセージを更新
        yesButton.style.display = 'none'; // 「はい」ボタンを非表示
        noButton.style.display = 'none';  // 「いいえ」ボタンも非表示
        // 必要に応じて、数秒後に自動でポップアップを閉じる処理を追加
        setTimeout(() => {
            popupOverlay.classList.add('hidden');
            startButton.style.display = 'block'; // 開始ボタンを再表示
        }, 3000); // 3秒後に閉じる (ミリ秒で指定)
    });
});