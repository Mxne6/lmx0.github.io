if(null==window.localStorage.getItem("fpson")||"1"==window.localStorage.getItem("fpson")){var rAF=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},frame=0,allFrameCount=0,lastTime=Date.now(),lastFameTime=Date.now(),loop=function(){var e=Date.now(),a=e-lastFameTime,o=Math.round(1e3/a);if(lastFameTime=e,allFrameCount++,frame++,e>1e3+lastTime){if((o=Math.round(1e3*frame/(e-lastTime)))<=6)var n='<span style="color:#bd0000">卡成ppt</span>';else if(o<=10)n='<span style="color:red">电竞级帧率</span>';else if(o<=14)n='<span style="color:yellow">难受</span>';else if(o<24)n='<span style="color:orange">卡</span>';else if(o<=40)n='<span style="color:green">...</span>';else n='<span style="color:#425aef">正常</span>';document.getElementById("fps").innerHTML=`FPS:${o} ${n}`,frame=0,lastTime=e}rAF(loop)};loop()}else document.getElementById("fps").style="display:none!important";