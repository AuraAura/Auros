let vardas = 'Vardas';
let pavarde = 'Pavarde';
let grupe = '4/4';
let universitetas = 'KTU';
let pazymiai = [1,2,3,4,5,6,7,8,9,10];

console.log(vardas + ' ' + pavarde + ' ' + 'mokosi' +
    ' ' + universitetas + ' ' + 'grupeje' + grupe + ' '
    + ', pazymiai yra ' + pazymiai);

console.log(
    'vardas tipas yra: ' + typeof vardas,
'pavarde tipas yra: ' + typeof pavarde,
'grupe tipas yra: ' + typeof grupe,
'universitetas tipas yra: ' + typeof universitetas,
'pazymiai tipas yra: ' + typeof pazymiai,
);

let studentas = {
    "vardas": 'Jurgis',
    "pavarde": 'Jurgelis',
    "kursas": 4,
    "kurMokosi": 'VDU',
    "pazymiai": [1, 2, 3, 4, 5, 6, 7, 8, 9]
};

let studentai = [
    studentas,
    {
        "vardas": 'Jurgis',
        "pavarde": 'Kitoks',
        "kursas": 4,
        "kurMokosi": 'VDU',
        "pazymiai": [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    {
        "vardas": 'Ona',
        "pavarde": 'Onyte',
        "kursas": 3,
        "kurMokosi": 'KTU',
        "pazymiai": [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    {
        "vardas": 'Rita',
        "pavarde": 'Ritute',
        "kursas": 2,
        "kurMokosi": 'VDU',
        "pazymiai": [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    {
        "vardas": 'Zigmas',
        "pavarde": 'Zigmutis',
        "kursas": 5,
        "kurMokosi": 'KTU',
        "pazymiai": [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
];

console.log(studentai[4]);

for (let i = 0; i < studentai.length; i++) {
    let student = studentai[i];
    spausdintiStudenta(student);
}

function spausdintiStudenta(stud){
    console.log(stud.vardas + ' ' + stud.pavarde + ' mokosi ' + stud.kurMokosi
        + ', ' + stud.kursas + ' kurse, jo pažymiai: ' + stud.pazymiai);}

