'use strict';
    let mijnButton = document.getElementById('mijnButton');
    let optellen = document.getElementById('optellen');
    let vermenigvuldigen = document.getElementById('vermenigvuldigen');
    mijnButton.addEventListener('click', function(){
        // lees de waarden van de text input velden in 
        // let op DIT ZIJN STRINGS
        let getal1 = document.getElementById('getal1').value;        
        let getal2 = document.getElementById('getal2').value;      
        // zet de ingelezen strings om in getallen
        getal1 = parseFloat(getal1);
        getal2 = parseFloat(getal2);
        // roep de function aan met arguments
        telOp(getal1,getal2);
        vermenigvuldig(getal1,getal2);
        afTrek(getal1,getal2);
        deel(getal1,getal2);
    })
    function telOp(getal1, getal2){
        let antwoord = getal1 + getal2;// doe de bewerking
        console.log("optellen " + antwoord); // laat ook in de console zien
        optellen.innerHTML = antwoord; // schrijf naar HTML
    }
    function vermenigvuldig(getal1, getal2){
        let antwoord = getal1 * getal2;// doe de bewerking
        console.log("vermenigvuldigen " + antwoord); // laat ook in de console zien
        vermenigvuldigen.innerHTML = antwoord; // schrijf naar HTML
    }
    function afTrek(getal1, getal2){
        let antwoord = getal1 - getal2;
        console.log("aftrekken " + antwoord);
        aftrekken.innerHTML = antwoord;
    }
    function deel(getal1, getal2){
        let antwoord = getal1 / getal2;
        console.log("delen " + antwoord);
        delen.innerHTML = antwoord;
        if (delen.innerHTML == 0) {
            delen.innerHTML = "Delen door 0 is niet mogenlijk, Probeer iets anders...";
        }
    }
    