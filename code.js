var confirmation = confirm("Le site utilise des cookies. (C faux)");
console.log(confirmation);

if(confirmation) {
    console.log("c bon il a accepté");
} else {
    console.log("pas bien");
    while(!confirmation) {
        confirmation = confirm("SVP, pour acceder a la page, vous devez accepter, voulez vous accepter?");
        if(confirmation) {
            console.log("c bon il a accepté");
        } else {
            confirmation = confirm("SVP, si vous n'acceptez pas, vous ne pouvez pas acceder au site, voulez vous accepter?");
            if(confirmation) {
                console.log("c bon il a accepté");
            } else {
                confirmation = confirm("SVP, il n y a aucun autre moyen d'acceder a la page, voulez vous accepter?");
                if(confirmation) {
                    console.log("c bon il a accepté");
                } else {
                    confirmation = confirm("Le site utilise des cookies obligatoires, voulez vous accepter?");
                }
           }
        }
    }
}

//var chiffre = prompt("Veuillez entrer la classe.\nForme: 2ndØ \n            1ereØ \n            tØ")
//while(chiffre != "2nd10") {
//    alert("Mauvaise classe !!!")
//    var chiffre = prompt("Veuillez entrer la classe")
//}


//let flou = document.getElementsByTagName("body");

//flou.style.fontSize = '100px';


