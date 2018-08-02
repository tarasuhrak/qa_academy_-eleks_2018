let simbol = "f";
let str1= "profi";

function seach_symbol(a,b) {
    for (let i = 0; i <=b.length-1; i++) {
        if (a==b.charAt(i)) {
            console.log("Symbol '"+a+ "' is include in string");
        }
    }
}
seach_symbol(simbol,str1);