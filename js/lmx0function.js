// 音乐绑定事件
function musicBindEvent() {
    document.querySelector("#nav-music .aplayer-music").addEventListener("click", function () {
      lmx0.musicTelescopic();
    });
    document.querySelector("#nav-music .aplayer-button").addEventListener("click", function () {
      lmx0.musicToggle(false);
    });
  }



function switchCommentBarrage() {
  let e = window.localStorage.getItem("commentBarrageDisplay");
  document.getElementById("comment-barrage").style.zIndex = "false" === e ? "1" : "-1001",
  window.localStorage.setItem("commentBarrageDisplay", "false" === e ? "undefined" : "false", 864e5),
  document.getElementById("menu-barrage") && (document.querySelector("#menu-barrage>span").innerHTML = "false" === e ? "隐藏热评" : "显示热评"),
  document.getElementById("barrage-btn") && ("false" === e ? document.getElementById("barrage-btn").classList.add("on") : document.getElementById("barrage-btn").classList.remove("on"))
}