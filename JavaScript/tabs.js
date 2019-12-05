let tabai = document.getElementsByClassName("sheet");

function steptiSheetus(){
    for (let i = 0; i < sheetai.length; i++) {
        let sheet = sheetai[i];
        sheet.style.display = 'none';
    }
}

function rodytiSheeta(elem){
    let id = elem.data.sheet;
    document.getElementById(id).style.display = 'block';
    }
for (let i = 0; i < tabai.length; i++) {
    let tab = tabai[i];
    tab.addEventListener('click', rodytiSheeta(this))
}

