var lmx0_musicPlaying=!1,lmx0_musicFirst=!1,navMusicEl=document.getElementById("nav-music"),lmx0={musicToggle:function(i=!0){lmx0_musicFirst||(musicBindEvent(),lmx0_musicFirst=!0),lmx0_musicPlaying?(navMusicEl.classList.remove("playing"),document.getElementById("nav-music-hoverTips").innerHTML="音乐已暂停",lmx0_musicPlaying=!1,navMusicEl.classList.remove("stretch")):(navMusicEl.classList.add("playing"),lmx0_musicPlaying=!0,navMusicEl.classList.add("stretch")),i&&document.querySelector("#nav-music meting-js").aplayer.toggle()},musicTelescopic:function(){navMusicEl.classList.contains("stretch")?navMusicEl.classList.remove("stretch"):navMusicEl.classList.add("stretch")},musicSkipBack:function(){document.querySelector("#nav-music meting-js").aplayer.skipBack()},musicSkipForward:function(){document.querySelector("#nav-music meting-js").aplayer.skipForward()},musicGetName:function(){for(var i=$(".aplayer-title"),s=[],c=i.length-1;c>=0;c--)s[c]=i[c].innerText;return s[0]}};addRightMenuClickEvent();