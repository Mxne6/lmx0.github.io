window.addEventListener('DOMContentLoaded', () => {
    let ls = document.querySelectorAll('.flink-list')
    ls.forEach(i => {
        let li = i.children;
        let title = i.title

        for (let j = 0; j < li.length; j++) {
            if (li[j].title) {
                addIcon(li[j], li[j].title)
            } else {
                addIcon(li[j], title)
            }
        }
    });
})

// 改图标在这里改
function addIcon(a, n) {
    let icon = ''
    if (n == 'blue') {
        icon = '<svg style="margin-left:5px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="is-badge icon"><path d="m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z" fill="#1da1f2"></path></svg>'

    } else if (n == 'orange') {
        icon = '<svg style="margin-left:5px" t="1658027717181" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25920" width="200" height="200"><path d="M0 0h1024v1024H0V0z" fill="#202425" opacity=".01" p-id="25921"></path><path d="M989.866667 512c0 263.918933-213.947733 477.866667-477.866667 477.866667S34.133333 775.918933 34.133333 512 248.081067 34.133333 512 34.133333s477.866667 213.947733 477.866667 477.866667z" fill="#FF7744" p-id="25922"></path><path d="M787.114667 339.285333a51.2 51.2 0 0 1 0 72.362667l-307.2 307.2a51.2 51.2 0 0 1-72.362667 0l-170.666667-170.666667a51.2 51.2 0 0 1 72.362667-72.362666L443.733333 610.235733l271.018667-271.018666a51.2 51.2 0 0 1 72.362667 0z" fill="#FFFFFF" p-id="25923"></path></svg>'
    } else {
        icon = '<svg style="margin-left:5px" t="1658026978650" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="33220" width="200" height="200"><path d="M161.408 120.576L512 42.666667l350.592 77.909333a42.666667 42.666667 0 0 1 33.408 41.642667v426.112a256 256 0 0 1-114.005333 212.992L512 981.333333l-269.994667-180.010666A256 256 0 0 1 128 588.373333V162.218667a42.666667 42.666667 0 0 1 33.408-41.642667zM554.666667 405.333333V279.893333a21.333333 21.333333 0 0 0-38.698667-12.373333l-150.528 210.773333a21.333333 21.333333 0 0 0 17.365333 33.706667H448a21.333333 21.333333 0 0 1 21.333333 21.333333v125.44a21.333333 21.333333 0 0 0 38.698667 12.373334l150.528-210.773334a21.333333 21.333333 0 0 0-17.365333-33.706666H576a21.333333 21.333333 0 0 1-21.333333-21.333334z" fill="#14D081" p-id="33221"></path></svg>'
    }
    let div = a.getElementsByClassName('flink-item-name')[0]
    div.innerHTML += icon
}




// 封面纯色
function coverColor() {
    var path = document.getElementById("post-cover")?.src;
    if (path !== undefined) {
        RGBaster.colors(path, {
            paletteSize: 30,
            exclude: ["rgb(255,255,255)", "rgb(0,0,0)", "rgb(254,254,254)"],
            success: function (t) {
                if (t.dominant != 'rgb(66,90,239)') {
                    const c = t.dominant.match(/\d+/g);
                    var value = `rgb(${c[0]},${c[1]},${c[2]})`;
                    if (getContrastYIQ(colorHex(value)) == "light") {
                        value = LightenDarkenColor(colorHex(value), -40)
                    }
                    document.styleSheets[0].addRule(':root', '--Jay-main:' + value + '!important');
                    document.styleSheets[0].addRule(':root', '--Jay-main-op:' + value + '23!important');
                    document.styleSheets[0].addRule(':root', '--Jay-main-op-deep:' + value + 'dd!important');
                    document.styleSheets[0].addRule(':root', '--Jay-main-none:' + value + '00!important');
                    Jay.initThemeColor()
                    document.getElementById("coverdiv").classList.add("loaded");
                }
            }
        });

    } else {
        document.styleSheets[0].addRule(':root', '--Jay-main: var(--Jay-theme)!important');
        document.styleSheets[0].addRule(':root', '--Jay-main-op: var(--Jay-theme-op)!important');
        document.styleSheets[0].addRule(':root', '--Jay-main-op-deep:var(--Jay-theme-op-deep)!important');
        document.styleSheets[0].addRule(':root', '--Jay-main-none: var(--Jay-theme-none)!important');
        Jay.initThemeColor()
    }
}

