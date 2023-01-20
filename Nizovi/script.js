//[ZADATAK 1] Napišite funkciju koja prima niz brojeva i vraća prosečnu vrednost elemenata u nizu.

let numbers = [2, 3, 45, 52, 3];

function average(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

let avg = average(numbers);
console.log(avg);



// --------------------------------------------------------------------------------------------------------


//[ZADATAK 2] Napišite funkciju koja prima dva stringa i proverava da li su anagrami.

let str1 = "nina";
let str2 = "nino";

function isAnagram (str1, str2){
    //Ukloniti razmake i pretvoriti string u mala slova
    str1 = str1.replace(/\s/g,'').toLowerCase();
    str2 = str2.replace(/\s/g,'').toLowerCase();
    //Sortiranje strinogva
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    //Provera da li su stringovi jedanki nakon sortiranja
    return str1 === str2;
}

console.log(isAnagram(str1, str2));


// --------------------------------------------------------------------------------------------------------


//[ZADATAK 3] Napišite funkciju koja prima niz objekata i sortira ih po datom polju (npr. po imenu ili po godini rođenja).

const objects = [
    {name: "Vukasin", age: 21},
    {name: "Marko", age: 24},
    {name: "Nikola", age: 20}
];

function sortObject(objects, field){
    return objects.sort((a, b) => (a[field] > b[field] ? 1 : -1));
}

console.log(sortObject(objects, "name"));
console.log(sortObject(objects, "age"));


// --------------------------------------------------------------------------------------------------------


//[ZADATAK 4] Napiši funkciju koja prima niz brojeva i vraća najveći broj u nizu.


const findLargestNumber = (numbers) => {
    let largest = numbers[0];
    numbers.forEach(num => {
        if(num > largest) largest = num
    });

    return largest
} 


console.log(findLargestNumber([2, 4, 5, 7, 9, 0 ,3]));
console.log(findLargestNumber([-5, -6, 0, -8, -9, -6]));


// --------------------------------------------------------------------------------------------------------


//[ZADATAK 5] Napraviti funkciju koja prima niz stringova i vraća novi niz sa stringovima koji su veći od 5 karaktera.

function getLongString(strings){
    return strings.filter(string => string.length > 5);
}

console.log(getLongString(["world", "nikolina", "vule", "kofer", "stolica"]));


// --------------------------------------------------------------------------------------------------------


//[ZADATAK 6] Napraviti funkciju koja prima niz brojeva i vraća niz sa svakim drugim elementom.

function getEverySecondNumber(numbers){
    return numbers.filter((number, index) => index % 2 !== 0);
}

console.log(getEverySecondNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// --------------------------------------------------------------------------------------------------------


//[ZADATAK 7] Napraviti funkciju koja prima niz stringova i vraća broj stringova koji počinju sa slovom 'a'.

function countStringsStartingWithA(strings){
    return strings.filter(string => string.startsWith("a")).length;
}

console.log(countStringsStartingWithA(["apple", "banana", "avocado", "grape", "orange"])); // Output: 2

// Ova funkcija koristi Array.prototype.filter() metodu koja prima callback funkciju koja se izvršava za svaki element niza.
// Callback funkcija vraća true ili false ovisno o tome da li taj element zadovoljava uslove koji su navedeni u callback funkciji.
// Svi elementi za koje se callback funkcija vrati true će biti dodati u novi niz, koji se koristi za određivanje dužine.

// U ovom slučaju, callback funkcija proverava da li string počinje sa slovom 'a' korištenjem String.prototype.startsWith() metode koja vraća true ili false ovisno o tome da li se string počinje sa određenim prefiksom.
// Ako se string počinje sa 'a' onda se vraća true i taj string se dodaje u novi niz. Kada je filter gotov sa radom, koristimo .length da odredimo broj elemenata u novom nizu i vratimo kao rezultat funkcije.



// --------------------------------------------------------------------------------------------------------

//[ZADATAK 8] Napraviti funkciju koja prima niz brojeva i vraća niz sa svakim trećim elementom u obrnutom redosledu.

function getEveryThirdNumberInReverse(numbers){
    return numbers.filter((number, index) => index % 3 === 2).reverse();
}

console.log(getEveryThirdNumberInReverse([1, 2, 3, 4, 5, 6, 7, 8, 9]));


// U ovom slučaju, callback funkcija proverava index svakog elementa niza i ako je index djeljiv sa 3 i jednak sa 2, onda se vraća true i taj element se dodaje u novi niz.
// Zatim koristimo Array.prototype.reverse() metodu koja će obrnuti redosled elemenata u novom nizu.

// Operator === se koristi za usporedbu dva izraza, u ovom slučaju se koristi za usporedbu da li je rezultat dijeljenja index-a sa 3 jednak sa 2.

// index % 3 === 2 se može pročitati kao "index modulo 3 je jednak sa 2". Modulos operator % vraća ostatak dijeljenja prvog operanda sa drugim operandom.

// U ovom slučaju, ako je index-a nekog elementa u nizu djeljiv sa 3 i ostatak dijeljenja je 2, tada se vraća true i taj element se dodaje u novi niz.
// U suprotnom se vraća false i taj element neće biti uključen u novi niz.


// ------------------------------------------------------------------------------------------------------------


//[ZADATAK 9] Napraviti funkciju koja prima niz stringova i vraća novi niz sa stringovima koji su jednaki po dužini.

function getEqualLengthString(strings){
    return strings.filter((string, index, self) => self.indexOf(string) === index && self.lastIndexOf(string) !== index);
}

console.log(getEqualLengthString(["cat", "dog", "tree", "four", "desk", "pencil", "desk"]));

// U ovom slučaju, koristimo Array.prototype.indexOf() metodu da provjerimo indeks prvog pojavljivanja stringa u nizu i Array.prototype.lastIndexOf() metodu da provjerimo indeks poslednjeg pojavljivanja stringa u nizu.
// Ako je indeks prvog pojavljivanja jednak sa indeksom poslednjeg pojavljivanja, znači da se string pojavljuje samo jednom u nizu i ne ispunjava uslov, vraćamo false.
// Ako indeks prvog pojavljivanja različit od indeksa poslednjeg pojavljivanja znači da se string pojavljuje više puta u nizu i ispunjava uslov, vraćamo true i taj string se dodaje u novi niz.


// ------------------------------------------------------------------------------------------------------------


//[ZADATAK 10] Napraviti funkciju koja prima niz brojeva i vraća sumu svih neparnih brojeva u nizu.

function sumOfOddNumbers(numbers){
    return numbers.filter(number => number % 2 !== 0).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sumOfOddNumbers([2, 3, 5, 4, 6, 88, 56, 44, 31, 433, 45]));

// U ovom slučaju, callback funkcija proverava da li je broj neparan korištenjem modulos operatora (%) koji vraća ostatak dijeljenja broja sa 2.
// Ako je ostatak dijeljenja ne jednak sa 0, onda se vraća true i taj broj se dodaje u novi niz.

// Kada je filter gotov sa radom, koristimo Array.prototype.reduce() metodu koja se koristi da se svi elementi niza kombinuju u jedan ili više vrijednosti.
// Callback funkcija koja se prosleđuje reduce() metodi prima 2 argumenta: accumulator (akumulator) i currentValue (trenutna vrijednost).
// Accumulator je vrijednost koja se koristi da se kombinuju svi elementi niza, a currentValue je trenutni element niza koji se dodaje u akumulator.
// Inicijalna vrijednost accumulator-a je 0.


// --------------------------------------------------------------------------------------------------------------------

//[ZADATAK 11]  Napraviti funkciju koja prima niz stringova i vraća niz sa stringovima koji se pojavljuju više od jednom u nizu.

function findDuplicates(strings){

    let occurrences = {};

    for(let i = 0; i < strings.length; i++){

        if(occurrences[strings[i]]){
            occurrences[strings[i]]++;
        }
        else{
            occurrences[strings[i]] = 1;
        }
    }

    let duplicates = [];

    for(let string in occurrences){

        if(occurrences[string] > 1){
            duplicates.push(string);
        }
    }

    return duplicates;
}

let myArray = ["a", "b", "c", "a", "d"];
console.log(findDuplicates(myArray));

// Ova funkcija prima jedan argument, niz stringova. Funkcija kreira prazan objekat koji se koristi za spremanje pojavljivanja svakog stringa. Funkcija prolazi kroz svaki string u nizu i provjerava da li se string pojavljuje u objektu. Ako se string već pojavljuje, povećava se broj pojavljivanja za 1, inače se string dodaje u objekt sa početnim brojem pojavljivanja 1. Nakon što se prolazi kroz cijeli niz, funkcija kreira prazan niz za spremanje stringova koji se pojavljuju više od jednom i prolazi kroz svaki string u objektu. Ako se string pojavljuje više od jednom, dodaje se u niz duplikata. Nakon što se prolazi kroz cijeli objekt, funkcija vraća niz duplikata.

//------------------------------------------------------------------------------------------------------------


// [ZADATAK 12] Napraviti funkciju koja prima niz brojeva i vraća niz sa svakim elementom koji je veći od prosječne vrijednosti svih elemenata u nizu.

function findAboveAverage(numbers){
    
    let average = Math.round((numbers.reduce((a, b) => a + b) /numbers.length) * 100) / 100;


    let aboveAverage = [];

    for(let i = 0; i < numbers.length; i++){

        if(numbers[i] > average){
            aboveAverage.push(numbers[i]);
        }
    }

    return aboveAverage;
}

let numArray = [1, 2, 4, 5, 6, 5, 34, 57, 2, 5, 7];

console.log(findAboveAverage(numArray));

// Prvo, koristi se metoda reduce na nizu brojeva. reduce metoda se koristi za "skupljanje" svih elemenata u nizu u jednu vrijednost.

// U ovom slučaju, reduce metoda se koristi za sabiranje svih brojeva u nizu. Funkcija za reduce prima dva argumenta, a i b. a je prethodni rezultat redukcije (tj. prethodni rezultat sabiranja), a b je trenutni broj u nizu.

// reduce metoda počinje od prvog broja u nizu kao prethodni rezultat i svaki put se poziva sa trenutnim brojem u nizu i prethodnim rezultatom kao argumentima. Na kraju, rezultat je ukupna suma svih brojeva u nizu.

// Nakon što smo dobili sumu svih brojeva u nizu, podjelimo sa brojem elemenata u nizu koristeći / operator.

// Na kraju, koristi se Math.round za zaokruživanje prosjeka na dva decimalna mjesta. Math.round prima jedan argument i vraća najbliži cijeli broj. U ovom slučaju, argument je prosjek koji je računat preko podjele sume svih brojeva sa brojem elemenata u nizu.

// Zaokruživanje se vrši koristeći * 100 / 100 koji zaokružuje prosjek na dva decimalna mjesta.

// Ukratko, linija koda računa prosjek svih brojeva u nizu koristeći reduce metodu za sabiranje svih elemenata, podjelu sa brojem elemenata u nizu i zaokruživanje na dva decimalna mjesta.

// ---------------------------------------------------------------------------------------------------------------

// [ZADATAK 13] Napraviti funkciju koja prima niz stringova i vraća string sa svim stringovima iz niza spojenim zajedno (bez razmaka).

function joinString(strings){
    return strings.join("");
}

let stringArray = ["hello", "world", "!"];

console.log(joinString(stringArray));

// Ova funkcija prima jedan argument, niz stringova. Funkcija koristi join metodu koja se koristi za spajanje svih elemenata u nizu u jedan string.
// Funkcija prima jedan argument, koji je separator koji će se koristiti za spajanje elemenata. U ovom slučaju koristimo prazan string "" kao separator, tako da se elementi niza spajaju bez razmaka između njih.
// Nakon što se svi elementi niza spoje u jedan string, funkcija vraća taj string.



// ---------------------------------------------------------------------------------------------------------------

// [ZADATAK 14] Napraviti funkciju koja prima niz brojeva i vraća niz sa svakim elementom na kvadrat.

function squareElement(numbers){

    let squaredNumbers = [];

    for(let i = 0; i < numbers.length; i++){

        squaredNumbers.push(numbers[i] * numbers[i]);
    }

    return squaredNumbers;
}

let numberArray = [1, 2, 3, 4, 5, 6];

console.log(squareElement(numberArray)); 



















