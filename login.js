let answer = "";
// "33355" が入力されるまでループ
while (answer !== "33355") {
    answer = prompt("学校コードを入力してください");

    // キャンセルされた場合はループを抜ける
    if (answer === null) {
        alert("キャンセルされました");
        break;
    }

    // 正解した場合
    if (answer === "33355") {
        alert("ログインに成功しました、ホームページに移動します");
        // index.htmlへ自動ワープ
        window.location.href = "index.html"; 
    } else {
        alert("違います。もう一度入力してください");
    }
}
