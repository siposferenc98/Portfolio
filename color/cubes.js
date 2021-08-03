var matrix = [[]];
var szamlalo;
var szamlalosv;
var szamolas;
var pontszam;
var elet;


function Feltolt (rand1) {
    var sorv = document.getElementById("sor").value;
    var oszlop = document.getElementById("oszlop").value;
    var cont = document.getElementById("cont");
    cont.innerHTML="";
    matrix = [[]];
    var tabla = document.createElement("table");
    tabla.id = "tablazat";
    tabla.style.pointerEvents = "auto";
        for (var i = 0; i < sorv; i++)
        {
            var row = document.createElement("tr");
            matrix[i] = [];
            for (j = 0; j < oszlop; j++)
            {
                var rand = Math.round(Math.random()*3+1);
                var cell = document.createElement("td");
                matrix[i][j] = rand;
                cell.value = [i,j,matrix[i][j]];
                cell.id = i+" "+ j;
                cell.style.width = "60px";
                cell.style.height = "60px";
                if (cell.value[2] == 1) {
                    cell.style.backgroundColor="red";
                }
                else if (cell.value[2] == 2) {
                    cell.style.backgroundColor="green";
                }
                else if (cell.value[2] == 3) {
                    cell.style.backgroundColor="blue";
                }
                else if (cell.value[2] == 4){
                    cell.style.backgroundColor="yellow";
                    
                }
                else {
                    cell.style.backgroundColor="white";
                }
                
                
                cell.addEventListener("click", function(){Rekurzio(matrix,this.value[0],this.value[1],this.value[2],rand1)});
                cell.addEventListener("click", function(){NextLevel(rand1)});
                cell.addEventListener("click", function(){GameOver()});
                row.appendChild(cell);
                
            }
            tabla.appendChild(row);
        }
        cont.appendChild(tabla);
        console.log(matrix);
    
}   



function Rekurzio(matrix, sor, oszl, a, rand1) {
    var sorv = document.getElementById("sor").value;
    var oszlop = document.getElementById("oszlop").value;

        if(a == rand1){
            matrix[sor][oszl] = " ";
            document.getElementById(sor+" "+oszl).style.backgroundColor = "white";
            console.log(sor+" " +oszl+" "+a);
            if(sor-1>-1 && matrix[sor-1][oszl] == rand1) Rekurzio(matrix,sor-1, oszl, a, rand1);
            if(oszl+1<oszlop && matrix[sor][oszl+1] == rand1) Rekurzio(matrix,sor, oszl+1, a, rand1);
            if(sor+1<sorv && matrix[sor+1][oszl] == rand1) Rekurzio(matrix,sor+1, oszl, a, rand1);
            if(oszl-1>-1 && matrix[sor][oszl-1] == rand1) Rekurzio(matrix,sor, oszl-1, a, rand1);
            pontszam += 10;
            console.log(matrix);
        }
        else {
            window.alert("Rossz szín!");
            elet--;
        }
        
        
}

function GameOver() {
    var eletek = document.getElementById("elet");
    eletek.innerHTML = "Életek: " + elet;

    if (elet == 0)
    {
        window.alert("Vesztettél!");
        clearInterval(szamolas);
        document.getElementById("gen").style.display="inline-block";
        document.getElementById("difficulty").style.display="block";
        document.getElementById("tablazat").style.pointerEvents = "none";
    }
}

function Elet() {
    var eletek = document.getElementById("elet");
    eletek.innerHTML = "Életek: " + elet; 
    console.log(eletek);
}




function Difficulty() {
    var easy = document.getElementById("1").checked;
    var medium = document.getElementById("2").checked;
    var hard = document.getElementById("3").checked;

    if (easy) {
        szamlalo = 10;
        szamlalosv = 10;
        elet = 5;
    }
    else if (medium) {
        szamlalo = 7;
        szamlalosv = 7;
        elet = 4;
    }
    else if (hard) {
        szamlalo = 5;
        szamlalosv = 5;
        elet = 3;
    }
    else {
        window.alert("Nem választottál nehézséget!");
    }
}




function Timer() {
    
    var timercont = document.getElementById("timer");
    var timer = document.createElement("p");
    var pont = document.createElement("p");
    pont.innerHTML = "Pontszám: " + pontszam;
    timercont.innerHTML = "";
    timer.innerHTML = "Idő: " + szamlalo;
    timercont.appendChild(timer);
    timercont.appendChild(pont);  
    szamolas = setInterval(function(){
        szamlalo-=1;
        timer.innerHTML = "Idő: " + szamlalo;
        console.log(szamlalo);
        if (szamlalo == 0)
                {
                    clearInterval(szamolas);
                    window.alert("Vesztettél!");
                    document.getElementById("gen").style.display="inline-block";
                    document.getElementById("difficulty").style.display="block";
                    document.getElementById("tablazat").style.pointerEvents = "none";
                    
                   
                }
    
    },1000);
    
}




function MKatt(rand1) {
    
    var timercont = document.getElementById("timer");
    var szincont = document.createElement("p");
    switch (rand1) 
    {
        case 1:
            szincont.innerHTML="Piros";
            break;
        case 2:
            szincont.innerHTML="Zöld";
            break;
        case 3: 
            szincont.innerHTML="Kék";
            break;
        case 4: 
            szincont.innerHTML="Sárga";
            break;
    }   

    timercont.appendChild(szincont);

}


function NextLevel (rand1) {

    var sorv = document.getElementById("sor").value;
    var oszlop = document.getElementById("oszlop").value;
    var sv = 0;

    for (var i = 0; i<matrix.length; i++)
    {
        for (var j = 0; j<matrix[i].length; j++)
        {
            if (matrix[i][j] != rand1)
            {
                sv++;
                console.log(sv);
            }
            
        }
    }
    if (sv >= (sorv * oszlop))
    {
        szamlalo = szamlalosv;
        clearInterval(szamolas);
        Timer();
        Új();
        //console.log(sorv*oszlop);
        //console.log(sv);
        //console.log("next");
    }
    
}




function Main (){
    pontszam = 0;
    
    var sorv = document.getElementById("sor").value;
    var oszlop = document.getElementById("oszlop").value;
    if ((sorv <= 0) || (oszlop <=0)) 
    {
        window.alert("Az érték nem lehet negatív vagy nulla!");
    }
    else {
    Difficulty();
    Timer();
    Elet();
    Új();
    document.getElementById("gen").style.display="none";
    document.getElementById("difficulty").style.display="none";
    
    }

}

function Új() {
    var rand1 = Math.round(Math.random()*3+1);
    MKatt(rand1);
    Feltolt(rand1);
    NextLevel(rand1);
}