
var pres = document.getElementsByTagName("pre");

for (let index = 0; index < pres.length; index++) {
    const element = pres[index];
    element.style.userSelect = "auto";
}

var codes = document.getElementsByTagName("code");

for (let index = 0; index < codes.length; index++) {
    const element = codes[index];
    element.style.userSelect = "auto";
}

function cleanCR(dom) {
    var child = dom.firstElementChild;
    while (child) {
        cleanCR(child);
        child.oncopy = undefined;
        child = child.nextElementSibling;
    }
}

cleanCR(document.body);
