let a = 21;
if (a>=0) {
    if (a % 3 == 0) {
        console.log("Number "+a+ " is multiple of 3");
    } 
    if (a % 7 == 0) {
         console.log("Number "+a+ " is multiple of 7");  
        }
    if (!(a % 3 == 0)&& !(a % 7 == 0) ) {
      console.log("No number of which is multiple of 3 or 7");  
        }  
} else {
    console.log("Number is NOT positiv ");
}  


