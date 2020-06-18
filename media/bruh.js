function delet() {
    window.alert("bruh");
    console.warn("bruh");
    var bruh = new Audio("media/bruh.mp3");
    bruh.play();
    document.write("<h1>bruh</h1><button>ok</button><br><h2>Refresh ur page</h2>");
    var fgfg = window.open("", "", "width=400, height=200");
    fgfg.focus();
    fgfg.document.write("<h1>bruh</h1><button>ok</button><br><h2>clos this popup andRefresh ur page</h2>");
    var i;
    for (i = 0; i < 420; i++) {
        fgfg.moveBy(bruandom(250),bruandom(250));
        fgfg.resizeBy(bruandom(250),bruandom(250));
    }
}
function bruandom(max) {
    return ~~(Math.random() * ~~(max));
}
console.log(delet.length); //Are you fcuking happy now CodeFactor?
