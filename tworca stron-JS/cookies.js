//cookies pierwszy i nastarszy sposob zapisywania pamieci przegladarki, mniej intuicyjny i mniej wygodny oraz ograniczony
//localStorage jest nowsze
// document.cookie = 'theme=light'

// /expires - sesja, tylko do jednego odczytu

// console.log(document.cookie)

const d = new Date();
d.setHours(d.getHours() + 1)
const utc = d.toUTCString();

document.cookie = 'user=Adam; expires=' + utc

// data w cookies musi byc w UTC
// dzien tyg, dzien mies, rrrr, GG:MM:SS GMT

// jak usunac cookies? 
//1. pusta wartosc 
//2. ustawienie daty ktora juz minela