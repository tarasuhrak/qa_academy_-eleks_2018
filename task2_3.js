let fullstr= "Taras Uhrak";


function abbrev(a) {
    let b = a.charAt(0);
    
    for (let i = 0; i <=a.length-1; i++) {
        if (" "==a.charAt(i)) {
            console.log("Abbrev '"+b+"." +a.charAt(i+1)+".'");
        }
    }
}
abbrev(fullstr);