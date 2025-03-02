const number = Number(prompt("Zadej číslo v rozmezí 0-36"));
const lichaCervena= [1, 3, 5, 7, 9, 19, 21, 23, 25, 27]
const sudaCerna = [2, 4, 6, 8, 10, 20, 22, 24, 26, 28]
const lichaCerna = [11,13,15,17.29,31,33,35]
const sudaCervena =[12,14,16,18,30,32,34,36]

document.body.innerHTML ="<h1> Jaké je tvoje číslo? </h1>"
if(number === 0) {
    document.body.innerHTML += "Tvoje číslo je 0, tedy není liché ani sudé, ani černé ani červené, zato má zelenou barvu.";
} else if(sudaCerna.includes(number)){
 document.body.innerHTML += "Tvoje číslo na ruletě je sudé a má černou barvu.";
} else if(lichaCervena.includes(number)){
 document.body.innerHTML += "Tvoje číslo na ruletě je liché a má červenou barvu.";
} else if(lichaCerna.includes(number)){
    document.body.innerHTML += "Tvoje číslo na ruletě je liché a má černou barvu.";
} else if (sudaCervena.includes(number)){
        document.body.innerHTML += "Tvoje číslo na ruletě je sudé a má červenou barvu.";
} else {
    document.body.innerHTML +="Tvoje číslo neobsahuje ruleta."
}

 