// 分享本页
function share() {
  let url = window.location.origin + window.location.pathname
  btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
  new ClipboardJS(".share", { text: function() { return '标题：' + document.title + '\n链接：' + url } });
}
// f12
window.onkeydown = e=>{
  123 === e.keyCode && btf.snackbarShow("开发者模式已打开，请遵循GPL协议")
}

document.body.addEventListener("copy", (e=>{
  "TEXTAREA" == e.target.tagName && "" == e.target.className || btf.snackbarShow("复制成功~")
}
))

document.body.addEventListener("paste", (e=>{
  btf.snackbarShow("粘贴成功~")
}
))


// 音乐绑定事件
function musicBindEvent() {
  document.querySelector("#nav-music .aplayer-music").addEventListener("click", function () {
    lmx0.musicTelescopic();
  });
  document.querySelector("#nav-music .aplayer-button").addEventListener("click", function () {
    lmx0.musicToggle(false);
  });
}