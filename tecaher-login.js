let answer = "";
// "!103!" が入力されるまでループ
while (answer !== "!103!") {
    answer = prompt("パスワードを入力してください");

    // キャンセルされた場合はループを抜ける
    if (answer === null) {
        alert("キャンセルされました");
        break;
    }

    // 正解した場合
    if (answer === "!103!") {
        alert("ログインに成功しました、ホームページに移動します");
        // index.htmlへ自動ワープ
        window.location.href = "edu.html"; 
    } else {
        alert("違います。もう一度入力してください");
    }
}
