function odliczanie()
        {
            var dzisiaj = new Date();

            var dzien = dzisiaj.getDate();
            var miesiac = dzisiaj.getMonth()+1;
            var rok = dzisiaj.getFullYear();

            var godzina = dzisiaj.getHours();
            if(godzina<10) godzina = "0"+godzina;

            var minuta = dzisiaj.getMinutes();
            if(godzina<10) minuta = "0"+godzina;

            var sekunda = dzisiaj.getSeconds();
            if(godzina<10) sekundy = "0"+godzina;

            document.getElementById("zegar").innerHTML = dzien+"/"+miesiac+"/"+rok+" | "+godzina+":"+minuta+":"+sekunda;
        
        setTimeout("odliczanie()",1000);
        }


        
for (let i = 0, i < 10; i++ ) {
    console.log(i)
}